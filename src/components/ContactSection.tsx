/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// ContactSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);
  // ensure form-name present:
  if (!formData.get("form-name")) formData.set("form-name", "contact");

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (response.ok) {
      setFormSubmitted(true);
      form.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (err) {
    setError("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Get In Touch
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about our research or interested in collaboration? 
            We&apos;d love to hear from you. Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <MapPin className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 mt-1">Sri Lanka Institute Of Information Technology <br />Malabe, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Mail className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">it21754470@my.sliit.lk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Phone className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">+94 77 334 6523</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium text-gray-900 mb-3">Research Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Computer Vision", "Mobile Development", "Sport Tech", "Data Science"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl border-gray-200 p-8 border">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                    <CheckCircle className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white hover:opacity-90"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </div>
                  
                  {error && (
                    <div className="flex items-center p-4 text-red-800 bg-red-100 border border-red-200 rounded-md">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={isSubmitting}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 -mr-1 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}