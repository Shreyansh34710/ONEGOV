import {
  GraduationCap,
  FileText,
  Building2,
  HeartPulse,
  Car,
  BriefcaseBusiness,
  Landmark,
} from "lucide-react";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="page">
        <div className="section-header">
          <h1>Government Services</h1>
          <p>
            Services connected through one unified journey
          </p>
        </div>

        <div className="service-grid">
          <Link to="/service/scholarship">
            <ServiceCard
              icon={GraduationCap}
              title="Scholarships"
              description="Student scholarships and financial assistance."
            />
          </Link>

          <ServiceCard
            icon={FileText}
            title="Certificates"
            description="Income, residence and other certificates."
          />

          <ServiceCard
            icon={Building2}
            title="Government Schemes"
            description="Discover government welfare schemes."
          />

          <ServiceCard
            icon={HeartPulse}
            title="Healthcare"
            description="Government healthcare services."
          />

          <ServiceCard
            icon={Car}
            title="Transport"
            description="Driving licence and vehicle services."
          />

          <ServiceCard
            icon={BriefcaseBusiness}
            title="Employment"
            description="Employment and skill development services."
          />

          <ServiceCard
            icon={Landmark}
            title="Tax & Finance"
            description="Access government financial services."
          />
        </div>
      </main>

      <BottomNav />
    </>
  );
}