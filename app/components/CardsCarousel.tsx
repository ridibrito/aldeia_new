"use client";

import { useState } from "react";
import Image from "next/image";

interface CardData {
  image: string;
  icon: string;
  title: string;
  description: string;
  iconOpacity?: string;
  imagePosition?: string;
}

interface CardsCarouselProps {
  cards: CardData[];
}

export default function CardsCarousel({ cards }: CardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 rounded-3xl p-6 shadow-lg border-2 border-[#FF7167] overflow-hidden min-h-[350px]"
              style={{ width: '100%' }}
            >
              <Image
                src={card.image}
                alt=""
                fill
                className={`object-cover scale-110 ${card.imagePosition || ""}`}
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 text-center h-full flex flex-col justify-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={card.icon}
                    alt=""
                    width={80}
                    height={80}
                    className={`h-16 w-16 object-contain ${card.iconOpacity || ""}`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#FF7167] mb-3 md:mb-4">
                  {card.title.split("<br />").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < card.title.split("<br />").length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {card.description.split("<br />").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < card.description.split("<br />").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevCard}
          className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white rounded-full p-3 transition-colors shadow-lg border-2 border-white"
          aria-label="Card anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#FF7167] w-8"
                  : "bg-[#FF7167]/30"
              }`}
              aria-label={`Ir para card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="bg-[#FF7167] hover:bg-[#FF5A4D] text-white rounded-full p-3 transition-colors shadow-lg border-2 border-white"
          aria-label="Próximo card"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

