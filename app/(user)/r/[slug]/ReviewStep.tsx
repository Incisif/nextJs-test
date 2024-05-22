"use client";

import { useState } from "react";
import { Product } from "@prisma/client";
import RatingSelector from "./RatingSelector";
import { motion, AnimatePresence } from "framer-motion";
import { SocialSelector } from "./SocialSelector";

type Data = { review: number | null };

export const ReviewStep = ({ product }: { product: Product }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<{ review: null | number }>({ review: null });

  const updateData = (partial: Partial<Data>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <motion.div
          key="step-0"
          exit={{
            opacity: 0,
            x: -100,
          }}
          className="flex h-full flex-col items-center justify-center"
        >
          <h2 className="text-lg font-bold">
            {product.noteText ?? `How much did you like ${product.name}?`}
          </h2>
          <RatingSelector
            onSelect={(review) => {
              setStep(1);
              updateData({ review });
            }}
          />
        </motion.div>
      )}
      {step === 1 && (
        <motion.div
          key="step-1"
          exit={{
            opacity: 0,
            x: -100,
          }}
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="flex h-full flex-col items-center justify-center"
        >
          <h2 className="pb-2 text-lg font-bold">
            {product.informationText ?? `I need more information about you ! `}
          </h2>
          <SocialSelector />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
