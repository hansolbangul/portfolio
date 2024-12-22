"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaBitcoin, FaEthereum, FaDollarSign } from "react-icons/fa";
import {
  SiDogecoin,
  SiRipple,
  SiLitecoin,
  SiCardano,
  SiPolkadot,
  SiStellar,
  SiBinance,
} from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// 암호화폐 정보를 위한 타입
type CryptoPrice = {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
    market_cap: number;
    symbol: string;
    name: string;
  };
};

const CRYPTO_IDS = [
  "bitcoin",
  "ethereum",
  "binancecoin",
  "ripple",
  "cardano",
  "polkadot",
  "dogecoin",
  "litecoin",
  "stellar",
  "solana",
];

const getCryptoIcon = (id: string) => {
  switch (id) {
    case "bitcoin":
      return <FaBitcoin className="text-[#F7931A]" />;
    case "ethereum":
      return <FaEthereum className="text-[#627EEA]" />;
    case "binancecoin":
      return <SiBinance className="text-[#F3BA2F]" />;
    case "ripple":
      return <SiRipple className="text-[#23292F]" />;
    case "cardano":
      return <SiCardano className="text-[#0033AD]" />;
    case "polkadot":
      return <SiPolkadot className="text-[#E6007A]" />;
    case "dogecoin":
      return <SiDogecoin className="text-[#C2A633]" />;
    case "litecoin":
      return <SiLitecoin className="text-[#345D9D]" />;
    case "stellar":
      return <SiStellar className="text-[#08B5E5]" />;
    default:
      return <FaDollarSign className="text-gray-400" />;
  }
};

export const FinanceBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkFooterVisibility = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top <= window.innerHeight;
        setIsVisible(!isFooterVisible);
      }
    };

    window.addEventListener("scroll", checkFooterVisibility);
    checkFooterVisibility(); // Initial check

    return () => window.removeEventListener("scroll", checkFooterVisibility);
  }, []);

  const { data: cryptoData, isError: cryptoError } = useQuery({
    queryKey: ["crypto-prices"],
    queryFn: async () => {
      try {
        const response = await axios.get<CryptoPrice>(
          `https://api.coingecko.com/api/v3/simple/price?ids=${CRYPTO_IDS.join(
            ","
          )}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true`
        );
        return response.data;
      } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
        return null;
      }
    },
    refetchInterval: 30000, // 30초마다 갱신
  });

  if (!cryptoData || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 overflow-hidden z-40"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Object.entries(cryptoData).map(([id, data], index) => {
            const change = data.usd_24h_change;
            return (
              <div
                key={id}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  {getCryptoIcon(id)}
                  <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </span>
                  <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
                    ${data.usd.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs ${
                      change <= 0 ? "text-blue-500" : "text-red-500"
                    }`}
                  >
                    ({change?.toFixed(2)}%)
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};
