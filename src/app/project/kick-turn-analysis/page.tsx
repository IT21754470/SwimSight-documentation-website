// src/app/project/market-prediction/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink, Waves, Eye, Zap, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketPredictionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Kick & Turn Technique Analysis
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Specialized underwater movement analysis using VGG19 CNN achieving 92% accuracy in classifying kick and turn techniques with explainable AI visualization through Grad-CAM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/market-prediction.png"
                alt="Kick & Turn Analysis System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAaSQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  VGG19 CNN with Grad-CAM visualization achieving 92% accuracy, 91% precision, and 90% recall in analyzing dolphin kicks, flutter kicks, flip turns, and open turns.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <Waves className="w-4 h-4 mr-2" />
                  Deep Learning & Computer Vision
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Three-Function Analysis System</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Waves className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Automated Kick & Turn Classification</h3>
                      <p className="text-gray-600">
                        Fine-tuned VGG19 CNN (19 layers deep) automatically classifies 8 different kick and turn techniques as efficient or inefficient. Trained on 1,200 video clips with 3x data augmentation achieving 92% test accuracy.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Explainable AI Visualization (Grad-CAM)</h3>
                      <p className="text-gray-600">
                        Color-coded heatmaps showing which body parts influenced classification decisions. Focuses on core (95%), hips (93%), knees (88%), and ankles (85%) for dolphin kicks with 100% biomechanical alignment.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Real-Time Processing</h3>
                      <p className="text-gray-600">
                        TensorFlow Lite integration enables on-device inference in under 2 seconds with 30-60 seconds total feedback latency. Frame extraction at 30 FPS with standardization to 224x224 pixels.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Cross-Platform Mobile Application</h3>
                      <p className="text-gray-600">
                        Flutter-based app with 90% adoption rate and 4.6/5.0 satisfaction rating. Features video upload, Grad-CAM overlays, historical tracking, and freemium business model with 35% Pro conversion.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">System Performance</h3>
                  <div className="space-y-3">
                    {[
                      { feature: "Test Accuracy", description: "92%" },
                      { feature: "Precision", description: "91%" },
                      { feature: "Recall", description: "90%" },
                      { feature: "F1-Score", description: "90%" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.feature}</span>
                        <span className="font-medium text-green-600">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Technique Classification</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2" style={{ borderColor: 'var(--color-primary)' }}>
                      <th className="text-left py-4 px-6 font-semibold">Technique Type</th>
                      <th className="text-center py-4 px-6 font-semibold">Classification</th>
                      <th className="text-center py-4 px-6 font-semibold">Focus Areas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Dolphin Kick", mobile: "Efficient/Inefficient", whatsapp: "Core, Hips, Knees, Ankles" },
                      { feature: "Flutter Kick", mobile: "Efficient/Inefficient", whatsapp: "Leg mechanics, Ankle flexibility" },
                      { feature: "Flip Turn", mobile: "Efficient/Inefficient", whatsapp: "Body tuck, Foot placement, Rotation" },
                      { feature: "Open Turn", mobile: "Efficient/Inefficient", whatsapp: "Wall touch, Push-off power" },
                      { feature: "Breaststroke Kick", mobile: "Efficient/Inefficient", whatsapp: "Knee angle, Hip rotation" },
                      { feature: "Backstroke Kick", mobile: "Efficient/Inefficient", whatsapp: "Leg extension, Body position" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-center text-gray-600">{row.mobile}</td>
                        <td className="py-4 px-6 text-center font-medium" style={{ color: 'var(--color-primary-dark)' }}>{row.whatsapp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Technical Implementation */}
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
                <p className="text-gray-600 mb-6">
                  The market prediction system integrates advanced ML models with conversational AI through WhatsApp Business API, making sophisticated predictions accessible to rural farmers.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "WhatsApp Business API integration",
                    "360Dialog for chatbot connectivity",
                    "Machine learning model backend",
                    "Multilingual natural language processing",
                    "Structured conversational workflows"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Performance Analysis</h3>
                <p className="text-gray-600 mb-6">
                  The system provides comprehensive technique analysis with visual feedback through Grad-CAM heatmaps, enabling coaches and swimmers to understand and improve underwater movements.
                </p>
                
                <div className="space-y-4">
                  {[
                    { aspect: "User Flow", description: "Step-by-step data collection with confirmation" },
                    { aspect: "Grad-CAM Visualization", description: "Color-coded heatmaps showing which body parts influenced classification decisions" },
                    { aspect: "Technique Classification", description: "Automated classification of 8 different kick and turn techniques as efficient or inefficient" },
                    { aspect: "Real-Time Processing", description: "TensorFlow Lite integration enables on-device inference in under 2 seconds with 30-60 seconds total feedback latency" },
                    { aspect: "Input Validation", description: "Structured format ensuring data quality" },
                    { aspect: "Result Delivery", description: "Clear profit recommendations with market locations" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{item.aspect}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the WhatsApp-integrated market prediction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}