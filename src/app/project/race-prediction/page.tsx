// src/app/project/race-prediction/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Check, ExternalLink, Activity, TrendingUp, BarChart, LineChart, AlertTriangle, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RacePredictionPage() {
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
                Race Performance Prediction
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Advanced race forecasting system using LSTM achieving ±0.29 seconds MAE, integrating historical data, real-time physiological metrics, and environmental conditions with 85% confidence calibration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img7.jpg"
                alt="Race Performance Prediction System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAaSQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent" />
              
              {/* Animated icon */}
              <motion.div 
                className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  repeatType: "reverse" 
                }}
              >
                <Target className="h-8 w-8" style={{ color: 'var(--color-primary-light)' }} />
              </motion.div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  LSTM model achieving ±0.29 seconds MAE with K-means clustering for performance benchmarking and interactive Flutter dashboard with real-time synchronization.
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
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--color-primary-light)' }}>
                  <Target className="w-4 h-4 mr-2" />
                  Machine Learning & Analytics
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Three-Function Prediction System</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Multi-Model Race Time Prediction</h3>
                      <p className="text-gray-600">
                        LSTM achieves MAE ±0.29 seconds and RMSE ±0.35 seconds. Integrates historical races, heart rate, stroke metrics, and environmental factors with 85% confidence calibration through quantile regression.
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
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Performance Benchmarking & Clustering</h3>
                      <p className="text-gray-600">
                        K-means clustering groups swimmers into 4-6 performance cohorts (Elite, Developing Talent, Stable Intermediate, Emerging Beginners) with 92% positioning accuracy and 85% progression tracking.
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
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Interactive Prediction Dashboard</h3>
                      <p className="text-gray-600">
                        Flutter/Dart dashboard with 1.8s response time, Plotly interactive charts, and 99.9% uptime. Features predictions, confidence intervals, trends, historical tracking, and peer comparison charts.
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
                      <LineChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Real-Time Data Integration</h3>
                      <p className="text-gray-600">
                        Integrates historical race times, real-time physiological metrics from IoT wearables, environmental conditions, fatigue indicators, consistency metrics, and TRIMP scores for comprehensive predictions.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Model Performance</h3>
                  <div className="space-y-3">
                    {[
                      { model: "LSTM MAE", accuracy: "±0.29s", f1: "Best" },
                      { model: "Gradient Boosting MAE", accuracy: "±0.38s", f1: "Good" },
                      { model: "Confidence Calibration", accuracy: "85%", f1: "High" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.model}</span>
                        <div className="text-right">
                          <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.accuracy}</span>
                          <span className="text-gray-500 text-sm ml-2">F1: {stat.f1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* System Architecture */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
                <p className="text-gray-600 mb-6">
                  The race prediction system uses LSTM for time-series forecasting, K-means for performance clustering, and Flask REST API with Firebase integration for real-time synchronization.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "LSTM (Long Short-Term Memory) neural networks",
                    "Gradient Boosting, ARIMA, Linear Regression models",
                    "K-means unsupervised clustering",
                    "Flask REST API with Firebase integration",
                    "Plotly for interactive data visualization"
                  ].map((component, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Data Sources & Features</h3>
                <p className="text-gray-600 mb-6">
                  The system processes comprehensive data from multiple sources to generate accurate race time predictions with confidence intervals.
                </p>
                
                <div className="space-y-4">
                  {[
                    { metric: "Temperature Forecasting", accuracy: "93.2% (±1.8%)", importance: "Critical for pest correlation" },
                    { metric: "Rainfall Prediction", accuracy: "87.5% (±4.2%)", importance: "Guides watering schedules" },
                    { metric: "Humidity Forecasting", accuracy: "91.4% (±2.3%)", importance: "Disease prevention planning" },
                    { metric: "Historical Data Integration", accuracy: "Three-month validation", importance: "Sri Lanka Meteorology Dept" }
                  ].map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{data.metric}</p>
                        <span className="text-green-600 font-semibold">{data.accuracy}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{data.importance}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Agricultural Impact Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl  p-8 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Performance Metrics</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: 'var(--color-primary-light)' }}>
                <AlertTriangle className="w-4 h-4 mr-2" />
                Validated Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "LSTM MAE", value: "±0.29s", detail: "Mean Absolute Error", icon: <Target className="h-6 w-6" /> },
                { metric: "LSTM RMSE", value: "±0.35s", detail: "Root Mean Square Error", icon: <Activity className="h-6 w-6" /> },
                { metric: "Positioning Accuracy", value: "92%", detail: "Correct tier placement", icon: <BarChart className="h-6 w-6" /> },
                { metric: "User Retention", value: "90%", detail: "After 1-month trial", icon: <TrendingUp className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">System Performance Summary:</p>
              <p className="text-gray-600 text-sm">
                LSTM outperforms Gradient Boosting (±0.38s MAE), ARIMA (±0.55s), and Linear Regression (±0.65s). K-means clustering achieves 78% goal success rate vs 52% with generic targets. Dashboard supports 200+ concurrent users with 1.8s response time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the race performance prediction system.
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