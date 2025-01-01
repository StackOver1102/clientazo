"use client";
import Header from "@/components/Layout/Header/header";
import HeroSection from "@/components/Layout/Sections/Hero/HeroSection";
import CompanySection from "@/components/Layout/Sections/Company/Company";
import ServicesSection from "@/components/Layout/Sections/Service/ServiceSection";
import CtaSection from "@/components/Layout/Sections/Cta/Cta-section";
import CaseStudiesSection from "@/components/Layout/Sections/CaseStudies/Case-studies";
import OurWorkingProcessSection from "@/components/Layout/Sections/OurWorking/OurWorking";
import TeamSection from "@/components/Layout/Sections/Team/Team-section";
import TestimonialsSection from "@/components/Layout/Sections/Test/Test-section";
import Footer from "@/components/Layout/Footer/Footer";

export default function HomePage() {
  // const t = useTranslations("HomePage");
  const data = [
    {
      content:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: { text: "Learn more", path: "#case-study-1" },
    },
    {
      content:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: { text: "Learn more", path: "#case-study-2" },
    },
    {
      content:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: { text: "Learn more", path: "#case-study-3" },
    },
  ];

  const dataOurWorking = [
    {
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      description:
        "After the consultation, we will conduct research to identify the best digital marketing strategies for your business. This will include keyword research, competitor analysis, and market research to develop a comprehensive strategy that will help you achieve your goals.",
    },
    {
      title: "Implementation",
      description:
        "Once the strategy has been developed and approved, we will begin implementing the digital marketing services outlined in the plan. This may include SEO optimization, PPC advertising, social media marketing, email marketing, and content creation.",
    },
    {
      title: "Monitoring and Optimization",
      description:
        "Throughout the campaign, we will monitor the performance of the digital marketing efforts and make adjustments as needed to optimize results. This may include adjusting keywords, ad copy, or targeting to improve performance and achieve the best possible results.",
    },
    {
      title: "Reporting and Communication",
      description:
        "We will provide regular reports on the performance of the digital marketing campaign, including key metrics such as website traffic, leads, and conversions. We will also be available to answer any questions and provide updates on the progress of the campaign.",
    },
    {
      title: "Continual Improvement",
      description:
        "Our goal is to help your business grow and succeed online. We will continually work to improve the performance of the digital marketing campaign and identify new opportunities for growth. This may include testing new strategies, expanding into new markets, or refining existing efforts to achieve better results.",
    },
  ];
  const dataTeam = [
    {
      name: "John Smith",
      title: "CEO and Founder",
      picture: "/assets/images/team-1.webp",
      about:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      title: "Director of Operations",
      picture: "/assets/images/team-2.webp",
      about:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      title: "Senior SEO Specialist",
      picture: "/assets/images/team-3.webp",
      about:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      title: "PPC Manager",
      picture: "/assets/images/team-4.webp",
      about:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      title: "Social Media Specialist",
      picture: "/assets/images/team-5.webp",
      about:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      title: "Content Creator",
      picture: "/assets/images/team-6.webp",
      about:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ].map((item) => ({
    ...item,
    linkedin: "https://www.linkedin.com/",
  }));
  const dataTestimonials = new Array(5).fill({
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  });
  return (
    <>
      <div className="container max-w-[1500px] mx-auto">
        <Header />
        <HeroSection />
        <CompanySection />
        <ServicesSection />
        <CtaSection />
        <CaseStudiesSection data={data} />
        <OurWorkingProcessSection data={dataOurWorking} />
        <TeamSection data={dataTeam} />
        <TestimonialsSection data={dataTestimonials} />
      </div>
      <Footer />
    </>
  );
}
