// src/app/page.tsx
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import DomainSection from "@/components/DomainSection";
import FeaturesSection from "@/components/FeaturesSection";
import MilestonesSection from "@/components/MilestonesSection";
import ResearchResultsSection from "@/components/ResearchResultsSection";
import DocumentsSection from "@/components/DocumentsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hidden form for Netlify detection - DO NOT REMOVE */}
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="subject" />
        <textarea name="message"></textarea>
      </form>
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="video">
        <VideoSection />
      </div>
      <div id="domain">
        <DomainSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="milestones">
        <MilestonesSection />
      </div>
      <div id="results">
        <ResearchResultsSection />
      </div>
      <div id="documents">
        <DocumentsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}