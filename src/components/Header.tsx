// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Waves, Activity, Eye, Target, FileText, Users, Home, Info, CalendarDays, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

// Streamlined navigation structure with fewer top-level items
const navItems = [
  { name: "Home", href: "/#home", icon: <Home className="w-4 h-4" /> },
  { 
    name: "About",
    href: "#",
    icon: <Info className="w-4 h-4" />,
    submenu: [
      { name: "App Demo", href: "/#video", icon: <Play className="w-4 h-4" /> },
      { name: "Domain", href: "/#domain", icon: <FileText className="w-4 h-4" /> },
      { name: "Team", href: "/#team", icon: <Users className="w-4 h-4" /> }
    ]
  },
  { 
    name: "Research", 
    href: "#",
    icon: <Activity className="w-4 h-4" />,
    submenu: [
      { name: "Features", href: "/#features", icon: <Activity className="w-4 h-4" /> },
      { name: "Milestones", href: "/#milestones", icon: <CalendarDays className="w-4 h-4" /> },
      { name: "Results", href: "/#results", icon: <Target className="w-4 h-4" /> },
      { name: "Documents", href: "/#documents", icon: <FileText className="w-4 h-4" /> },
      
    ]
  },
  { 
    name: "AI Modules", 
    href: "#",
    icon: <Activity className="w-4 h-4" />,
    submenu: [
      { name: "Performance & Fatigue", href: "/project/performance-fatigue", icon: <Activity className="w-4 h-4" /> },
      { name: "Injury Detection", href: "/project/injury-detection", icon: <Eye className="w-4 h-4" /> },
      { name: "Kick & Turn Analysis", href: "/project/kick-turn-analysis", icon: <Waves className="w-4 h-4" /> },
      { name: "Race Prediction", href: "/project/race-prediction", icon: <Target className="w-4 h-4" /> }
    ]
  },
  { name: "Contact", href: "/#contact", icon: <Users className="w-4 h-4" /> }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      
      // Close mobile menu if open
      setSheetOpen(false);
      
      // If we're not on the home page, navigate to home page first
      if (!isHomePage) {
        window.location.href = href;
        return;
      }
      
      // If we're already on the home page, just scroll to the element
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : isHomePage ? "bg-transparent py-6" : "bg-white/95 backdrop-blur-md shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, '/')}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span style={{ color: scrolled || !isHomePage ? 'var(--color-primary-dark)' : 'white' }}>Swim</span>
                <span style={{ color: 'var(--color-accent)' }}>Sight</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <div 
                    className="group flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="flex items-center hover:text-primary-light transition-colors font-medium"
                      style={{ color: scrolled || !isHomePage ? 'var(--color-foreground)' : 'white' }}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-60 rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-black/5 z-20"
                        >
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={(e) => scrollToSection(e, subitem.href)}
                                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 border-l-2 border-transparent hover:border-primary transition-all"
                                style={{ color: 'var(--color-foreground)' }}
                              >
                                <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                  {subitem.icon}
                                </div>
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="relative hover:text-primary-light transition-colors font-medium group"
                    style={{ color: scrolled || !isHomePage ? 'var(--color-foreground)' : 'white' }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button with Sheet */}
          <div className="md:hidden flex items-center">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                  style={{ color: scrolled || !isHomePage ? 'var(--color-primary-dark)' : 'white' }}
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] max-w-md p-0">
                {/* Adding the required SheetTitle for accessibility */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                        <Waves className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold tracking-tight">
                        <span style={{ color: 'var(--color-primary-dark)' }}>Swim</span>
                        <span style={{ color: 'var(--color-accent)' }}>Sight</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-4 px-2">
                    <nav className="space-y-1">
                      {navItems.map((item) => (
                        <div key={item.name} className="py-1">
                          {item.submenu ? (
                            <Accordion type="single" collapsible className="border-none">
                              <AccordionItem value={item.name} className="border-none">
                                <AccordionTrigger className="py-3 px-4 hover:bg-gray-50 rounded-lg no-underline">
                                  <div className="flex items-center">
                                    <div className="p-1 rounded-md mr-2" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                      {item.icon}
                                    </div>
                                    <span className="text-base font-medium" style={{ color: 'var(--color-foreground)' }}>{item.name}</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3 px-2">
                                  <div className="flex flex-col space-y-1 ml-2">
                                    {item.submenu.map((subitem) => (
                                      <Link
                                        key={subitem.name}
                                        href={subitem.href}
                                        onClick={(e) => scrollToSection(e, subitem.href)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 rounded-lg border-l-2 border-transparent hover:border-primary-light transition-all"
                                        style={{ color: 'var(--color-foreground)' }}
                                      >
                                        <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                          {subitem.icon}
                                        </div>
                                        {subitem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={(e) => scrollToSection(e, item.href)}
                              className="flex items-center gap-3 px-4 py-3 text-base font-medium hover:text-primary-light hover:bg-gray-50 rounded-lg transition-colors"
                              style={{ color: 'var(--color-foreground)' }}
                            >
                              <div className="p-1 rounded-md" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                                {item.icon}
                              </div>
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6 border-t mt-auto">
                    <Link
                      href="/#contact"
                      onClick={(e) => scrollToSection(e, '/#contact')}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}