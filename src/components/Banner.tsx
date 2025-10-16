// Banner.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Activity, TrendingUp, Eye, Award } from "lucide-react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { 
      title: "Performance Analytics", 
      description: "AI-powered training optimization and fatigue monitoring", 
      icon: <TrendingUp className="w-6 h-6" />,
      delay: 0.6
    },
    { 
      title: "Injury Prevention", 
      description: "Real-time biomechanical movement analysis", 
      icon: <Activity className="w-6 h-6" />,
      delay: 0.7
    },
    { 
      title: "Technique Analysis", 
      description: "Automated kick and turn efficiency assessment", 
      icon: <Eye className="w-6 h-6" />,
      delay: 0.8
    },
    { 
      title: "Race Prediction", 
      description: "Advanced forecasting with confidence intervals", 
      icon: <Award className="w-6 h-6" />,
      delay: 0.9
    }
  ];

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img15.jpg"
          alt="SwimSight Banner"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover brightness-[0.6]"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Overlay with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-5" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen py-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="pt-16 md:pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                x: isVisible ? 0 : -50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full text-xs md:text-sm font-medium text-white border border-white/20 backdrop-blur-sm" 
                   style={{ backgroundColor: 'rgba(46, 125, 114, 0.3)' }}>
                <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-white">
                  <Activity className="w-2 h-2 md:w-3 md:h-3" style={{ color: 'var(--color-primary)' }} />
                </span>
                Research Project 2025
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 tracking-tight">
                <span className="block">Swim<span style={{ color: 'var(--color-accent)' }}>Sight</span></span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 font-normal text-white/80">AI-Powered Swimming Analytics</span>
              </h1>
              
              <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl">
                A revolutionary all-in-one platform transforming competitive swimming through AI-powered performance analysis, injury prevention, and race prediction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(46, 125, 50, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/documents"
                  className="px-4 md:px-6 py-2.5 md:py-3.5 text-sm md:text-base text-white font-medium rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                   View Documents
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1" />
                </motion.a>
 
              </div>
            </motion.div>
          </div>
          
          {/* Feature cards with hover effect - desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 30 
                }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                className="backdrop-blur-sm border border-white/20 p-6 rounded-xl transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile feature grid - optimized for smaller screens */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden mt-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg mb-1.5 sm:mb-2 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on smaller screens where space is limited */}
      <motion.div 
        className="hidden sm:block absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/70 text-xs md:text-sm font-medium">Scroll to explore</p>
          <div className="w-6 h-10 md:w-8 md:h-12 rounded-full border-2 border-white/50 flex justify-center">
            <motion.div 
              className="w-1 h-2 md:h-3 bg-white rounded-full mt-2"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, 4, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}