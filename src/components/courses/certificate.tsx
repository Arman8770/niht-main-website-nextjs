import Image from 'next/image';
import React from 'react';

export const CertificationSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 pt-12 md:py-16 overflow-hidden">
      {/* Decorative Background Shapes */}
      {/* <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div> */}

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Get Hired with Globally Recognised Certifications
          </h2>
          {/* <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stand out in the job market with certifications that top employers trust. Every credential you earn adds real credibility to your resume and shows companies that you’re trained, tested and ready for real digital marketing work.
          </p> */}

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Earn credentials employers trust. Each certification proves your skills, strengthens your resume and helps you get hired faster for real digital marketing roles. Establish yourself as a high-value, job-ready candidate in a competitive market.
          </p>
        </div>

        {/* Certificate Images */}
        <div className="flex justify-center">
          {/* Desktop Image */}
          <div className="hidden md:block w-full max-w-6xl rounded-xl  overflow-hidden transform transition-transform duration-500 hover:scale-105 ">
            <Image
              src="https://www.nihtdigitalmarketing.com/master-digital-marketing-course-bangalore/assets/images/certifications1.png"
              alt="Globally Recognised Certifications provided by NIHT digital marketing"
              width={1600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden w-full max-w-md rounded-xl  overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <Image
              src="https://www.nihtdigitalmarketing.com/master-digital-marketing-course-bangalore/assets/images/certifications-mobile.png"
              alt="Globally Recognised Certifications provided by NIHT digital marketing"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
