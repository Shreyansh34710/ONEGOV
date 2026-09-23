import {
  Search,
  GraduationCap,
  FileText,
  Building2,
  HeartPulse,
  Car,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const services = [
    { icon: GraduationCap, title: "Scholarships", description: "Apply for student scholarships and financial support.", to: "/service/scholarship" },
    { icon: FileText, title: "Certificates", description: "Apply for income, caste and residence certificates." },
    { icon: Building2, title: "Government Schemes", description: "Discover schemes and benefits you may be eligible for." },
    { icon: HeartPulse, title: "Healthcare", description: "Access government healthcare services." },
    { icon: Car, title: "Transport", description: "Access driving and vehicle related services." },
  ];
  const query = searchTerm.trim().toLowerCase();
  const filteredServices = query
    ? services.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(query)
      )
    : services;

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="home-hero">
          <h1>Good morning 👋</h1>

          <p>
            What government service do you need today?
          </p>

          <div className="search-box">
            <Search size={18} />

            <input
              placeholder="Search for a government service..."
              aria-label="Search government services"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </section>

        <div className="section-header">
          <h2>Popular services</h2>
          <p>Access services across departments</p>
        </div>

        <div className="service-grid" aria-live="polite">
          {filteredServices.map((service) => {
            const card = <ServiceCard key={service.title} {...service} />;
            return service.to ? <Link key={service.title} to={service.to}>{card}</Link> : card;
          })}
        </div>
        {filteredServices.length === 0 && (
          <p className="empty-state">No services match “{searchTerm}”. Try a broader search.</p>
        )}

        <div
          className="card"
          style={{
            marginTop: "35px",
            padding: "22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <strong>Track your application</strong>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "12px",
                marginTop: "5px",
              }}
            >
              See exactly which department is processing
              your application.
            </p>
          </div>

          <Link to="/track">
            <button className="secondary-button">
              Track <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </main>

      <BottomNav />
    </>
  );
}
