"use client";

import * as React from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Button } from "../button";

interface MenuItemCardProps extends HTMLMotionProps<"div"> {
  imageUrl: string;
  isVegetarian: boolean;
  name: string;

  quantity: string;
  prepTimeInMinutes: number;

}

const MenuItemCard = React.forwardRef<HTMLDivElement, MenuItemCardProps>(
  (
    {
      className,
      imageUrl,
      isVegetarian,
      name,

      quantity,
      prepTimeInMinutes,

      ...props
    },
    ref
  ) => {
    // const savings = originalPrice - price;

    // ✅ Typed animation variants
    const cardVariants: Variants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      hover: { scale: 1.03, transition: { duration: 0.2 } },
    };

    const buttonVariants: Variants = {
      tap: { scale: 0.95 },
    };

    const vegIconVariants: Variants = {
      initial: { scale: 0 },
      animate: {
        scale: 1,
        transition: {
          delay: 0.3,
          type: "spring",
          stiffness: 200,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative flex flex-col w-full max-w-sm overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm group",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        layout
        {...props}
      >
        {/* --- IMAGE & ADD BUTTON CONTAINER --- */}
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          

          {/* --- ADD BUTTON --- */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
            

            <Button
                variant={"cta"}
                size={"sm"}
                className="btn-shine"
            >

              Enroll Now
            </Button>
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="flex flex-col flex-grow p-4 text-left">
          

          {/* --- QUANTITY --- */}
          <p className="mt-1 text-sm text-muted-foreground">{quantity}</p>

          {/* --- ITEM NAME --- */}
          <h3 className="mt-2 text-base font-semibold leading-tight text-foreground">
            {name}
          </h3>

          
        </div>
      </motion.div>
    );
  }
);

MenuItemCard.displayName = "MenuItemCard";

export { MenuItemCard };
