"use client";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../ui/button";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  mobile: string;
  email: string;
}

const RECAPTCHA_SITE_KEY = "6LeVklgjAAAAAIFgK2LxlCXD2lcnaB9yXGwB6fl2";

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [lastSubmitAt, setLastSubmitAt] = useState<number | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  // validation
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!/^[a-zA-Z\s]{2,50}$/.test(formData.name)) {
      newErrors.name = "Enter a valid name (letters & spaces, min 2 chars).";
    }
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormError(null);

  if (!validate()) return;

  if (!captchaValue) {
    setFormError("Please verify reCAPTCHA first.");
    return;
  }

  if (lastSubmitAt && Date.now() - lastSubmitAt < 10_000) {
    setFormError("Please wait a few seconds before submitting again.");
    return;
  }

  setLoading(true);

  // ✅ Capture current URL
  const currentUrl = window.location.href;

  // ✅ Extract UTM params from URL
  const searchParams = new URLSearchParams(window.location.search);
  const utmSource = searchParams.get("utm_source") || "";
  const utmMedium = searchParams.get("utm_medium") || "";
  const utmCampaign = searchParams.get("utm_campaign") || "";
  const utmTerm = searchParams.get("utm_term") || "";
  const utmContent = searchParams.get("utm_content") || "";

  // ✅ Prepare form data for POST
  const formPayload = {
    name: formData.name,
    phone: formData.mobile, // match PHP script field
    email: formData.email,
    captcha: captchaValue,
    current_url: currentUrl,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
  };

  try {
    const response = await fetch(
      "https://www.nihtdigitalmarketing.com/ai-digital-marketing-course-kolkata/enquiry.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formPayload).toString(),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `Server responded ${response.status}: ${text.slice(0, 300)}`
      );
    }

    const ct = response.headers.get("content-type") || "";
    let result: unknown;

    if (ct.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(
          `Unexpected server response (not JSON). First 300 chars: ${text.slice(
            0,
            300
          )}`
        );
      }
    }

    if (result) {
      setLastSubmitAt(Date.now());
      setFormData({ name: "", mobile: "", email: "" });
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
      onClose();
      window.location.href = "https://www.nihtdigitalmarketing.com/thank-you";
      // setShowThankYou(true);
    } else {
      const msg =
        typeof result === "object" && result !== null && "error" in result
          ? (result as { error: string }).error
          : "Unknown error occurred.";
      throw new Error(msg);
    }
  } catch (err : unknown | Error) {
    console.error("Submit error:", err);
    const message =
      err instanceof Error ? err.message : typeof err === "string" ? err : "Something went wrong. Please try again.";
    setFormError(message);
    try {
      recaptchaRef.current?.reset();
    } catch {}
    setCaptchaValue(null);
  } finally {
    setLoading(false);
  }
};


  // auto close thank you after 4s
  useEffect(() => {
    let t: number | undefined;
    if (showThankYou) {
      t = window.setTimeout(() => setShowThankYou(false), 4000);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [showThankYou]);

  if (!isOpen && !showThankYou) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-white p-6 rounded shadow-md w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Enroll Form</h2>

            {formError && (
              <div className="mb-2 text-sm text-red-600">{formError}</div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(value) => {
                  setCaptchaValue(value);
                  setFormError(null);
                }}
                className="recaptcha-container"
              />

              <Button
                variant="cta"
                type="submit"
                size="lg"
                disabled={!captchaValue || loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      )}

      {showThankYou && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowThankYou(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-md w-80 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">🎉 Thank You!</h2>
            <p className="text-gray-700 mb-4">
              Your form has been submitted successfully.
            </p>
            <Button onClick={() => setShowThankYou(false)} size="lg">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
