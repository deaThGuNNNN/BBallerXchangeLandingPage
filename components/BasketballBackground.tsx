import React, { useEffect, useRef, useState } from "react";
import { Trophy, Shirt, Star, Dribbble, Medal, Award, Circle, ShoppingCart, ShoppingBag, Tag, DollarSign, Box, Package, CreditCard } from "lucide-react";
import { Icon } from "lucide-react";
import { sneaker } from "@lucide/lab";

// BBX Logo SVG as a React component (updated to new SVG)
function BBXLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path
        className="st0"
        fill="#fff"
        d="M565.849,453.792s-58.305-33.172-85.994-48.926l92.265-92.583s6.033-6.053,6.033-6.054c-.089-1.345-.138-10.971-.364-11.961-4.512-46.453-33.179-89.321-81.404-97.414-24.411-4.449-50.604-.007-73.327,7.085-.001,0-10.073,2.387-10.075,2.388v148.096c-3.042,3.042-5.243,5.243-8.245,8.245-2.194.03-4.432.061-4.432.061,0,0,0,.023,0,.033-.101.002-2.609.043-5.214.085-3.024-3.024-5.087-5.087-8.069-8.069.012-21.92-.061-98.767-.009-101.54-3.918-.61-12.927-2.18-16.742-2.789-58.957-8.593-118.808,12.419-144.14,69.942,0,.002-6.182,17.736-6.183,17.739l14.2,8.079s58.305,33.172,85.994,48.926c-18.282,18.345-92.265,92.583-92.265,92.583,0,0-6.033,6.053-6.033,6.054.089,1.345.138,10.971.363,11.961,4.512,46.453,33.179,89.321,81.404,97.414,24.411,4.449,50.604.006,73.327-7.085.001,0,10.073-2.387,10.075-2.388v-148.096l8.244-8.245,4.432-.061s0-.023,0-.033c.101-.002,2.609-.043,5.214-.085l8.069,8.069c-.012,21.92.061,98.767.009,101.54,3.918.61,12.927,2.18,16.742,2.788,58.957,8.594,118.808-12.419,144.14-69.942,0-.002,6.182-17.736,6.183-17.739l-14.2-8.079ZM463.204,522.476c-7.797.891-15.736,1.21-23.622.851v-89.112c-5.28-5.279-18.563-18.564-23.839-23.839-3.705.052-12.723.219-16.591.27v.032c-3.648.051-11.589.16-15.061.209-5.193,5.193-18.481,18.481-23.672,23.672v137.948c-10.281,2.037-20.567,3.229-30.577,3.054-42.356.076-66.214-27.811-70.168-67.635l92.203-107.055,9.818-11.399c-2.406-1.598-72.598-48.404-98.856-65.907,14.654-27.465,42.512-42.685,73.957-46.042,7.797-.891,15.736-1.21,23.622-.851v89.112c5.28,5.279,18.563,18.564,23.839,23.839,3.705-.052,12.723-.219,16.591-.27v-.032c3.648-.051,11.589-.16,15.061-.209,5.194-5.193,18.481-18.481,23.673-23.672v-137.948c10.281-2.037,20.567-3.229,30.577-3.054,42.356-.076,66.214,27.811,70.168,67.635l-92.203,107.055-9.818,11.399c2.406,1.598,72.598,48.404,98.856,65.907-14.654,27.465-42.512,42.685-73.957,46.042Z"
      />
    </svg>
  );
}

const ICONS: (React.ComponentType<any> | "sneaker")[] = [
  Trophy,
  Shirt,
  Star,
  Dribbble,
  Medal,
  Award,
  Circle, // as a generic ball
  BBXLogo,
  ShoppingCart,
  ShoppingBag,
  Tag,
  DollarSign,
  Box,
  Package,
  CreditCard,
  "sneaker",
];

const COLORS = [
  "#F59E42", // orange
  "#FFD700", // gold
  "#22223B", // dark
  "#F2E9E4", // light
  "#4A4E69", // purple
  "#9A8C98", // muted
  "#C9ADA7", // gray
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem<T>(arr: readonly T[]): T {
  return arr[getRandomInt(0, arr.length - 1)];
}

interface FloatingIcon {
  id: number;
  left: number;
  top: number;
  size: number;
  Icon: React.ComponentType<any> | "sneaker";
  color: string;
}

// Define safe zones (in percent) to avoid logo, headline, button, and form
const SAFE_ZONES = [
  { top: 0, bottom: 28, left: 0, right: 100 }, // Logo area (top 28%)
  { top: 40, bottom: 70, left: 15, right: 85 }, // Form area (centered)
  { top: 85, bottom: 100, left: 0, right: 100 }, // Button area (bottom 15%)
];

function isInSafeZone(top: number, left: number) {
  return SAFE_ZONES.some(
    (zone) =>
      top >= zone.top &&
      top <= zone.bottom &&
      left >= zone.left &&
      left <= zone.right
  );
}

function getSafeTopLeftRange() {
  if (typeof window !== "undefined" && window.innerWidth < 640) {
    // Mobile: only allow icons in top 0-28% (not center horizontally) or bottom 85-98%
    return [
      { topMin: 0, topMax: 28, leftMin: 0, leftMax: 30 },
      { topMin: 0, topMax: 28, leftMin: 70, leftMax: 90 },
      { topMin: 85, topMax: 98, leftMin: 0, leftMax: 90 },
    ];
  }
  // Desktop: allow full range, will be filtered by isInSafeZone
  return [{ topMin: 0, topMax: 80, leftMin: 0, leftMax: 90 }];
}

export default function BasketballBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const Icon = getRandomItem(ICONS);
      const color = getRandomItem(COLORS);
      let size = getRandomInt(32, 64);
      if (Icon === BBXLogo) {
        size = Math.round(size * 1.5);
      }
      // Generate random position outside safe zones
      let left, top, attempts = 0;
      do {
        left = getRandomInt(0, 90); // percent
        top = getRandomInt(0, 80); // percent
        attempts++;
      } while (isInSafeZone(top, left) && attempts < 10);
      const id = idRef.current++;
      setIcons((prev) => [
        ...prev,
        { id, left, top, size, Icon, color },
      ]);
      // Remove after 3.5s
      setTimeout(() => {
        setIcons((prev) => prev.filter((icon) => icon.id !== id));
      }, 3500);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 w-full h-full overflow-hidden"
      style={{ userSelect: "none" }}
    >
      {icons.map(({ id, left, top, size, Icon: IconComp, color }) => (
        <span
          key={id}
          className="absolute animate-basketball-float"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            opacity: 0.7,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
            transition: "opacity 0.3s",
          }}
        >
          {IconComp === BBXLogo ? (
            <BBXLogo size={size} />
          ) : IconComp === "sneaker" ? (
            <Icon iconNode={sneaker} size={size} color={color} strokeWidth={1.5} />
          ) : (
            IconComp && <IconComp size={size} color={color} strokeWidth={1.5} />
          )}
        </span>
      ))}
      <style jsx global>{`
        @keyframes basketball-float {
          0% {
            transform: scale(0.7) translateY(20px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          60% {
            transform: scale(1.1) translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateY(-40px);
            opacity: 0;
          }
        }
        .animate-basketball-float {
          animation: basketball-float 3.5s cubic-bezier(0.4,0.2,0.2,1) forwards;
        }
      `}</style>
    </div>
  );
} 