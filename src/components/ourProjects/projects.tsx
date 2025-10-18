'use client';
import React from 'react';
import { MenuItemCard } from "../ui/courseui/menuItemCard";
import Gentalmen from "@/assets/alumni/gentalman.png"

const menuItems = [
  
  {
    imageUrl: Gentalmen.src,
    isVegetarian: true,
    name: "SEO Optimization",
    price: 149,
    originalPrice: 419,
    quantity: "1 Campaign",
    prepTimeInMinutes: 5,
  },
  {
    imageUrl: Gentalmen.src,
    isVegetarian: true,
    name: "Social Media Strategy",
    price: 119,
    originalPrice: 229,
    quantity: "1 Project",
    prepTimeInMinutes: 5,
  },
  {
    imageUrl: Gentalmen.src,
    isVegetarian: true,
    name: "PPC & Google Ads",
    price: 119,
    originalPrice: 229,
    quantity: "1 Project",
    prepTimeInMinutes: 5,
  },
  {
    imageUrl: Gentalmen.src,
    isVegetarian: true,
    name: "Email Marketing",
    price: 119,
    originalPrice: 229,
    quantity: "1 Project",
    prepTimeInMinutes: 5,
  },
];

export default function DigitalMarketingSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
          Our Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our featured digital marketing projects — from SEO campaigns to creative social media strategies that drive results.
        </p>

        <div className="grid w-full max-w-6xl mx-auto grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <MenuItemCard
              key={index}
              imageUrl={item.imageUrl}
              isVegetarian={item.isVegetarian}
              name={item.name}
              quantity={item.quantity}
              prepTimeInMinutes={item.prepTimeInMinutes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
