"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Header from "./header";
import { useEffect } from "react";

export default function Portfolio() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-background w-full flex flex-col items-center justify-start">
      {/* Navigation */}

      <Header navLinks={JSON.stringify(navLinks)} />

      {/* Hero Section */}
      <section
        id="about"
        className="max-w-[1000px] w-full py-[50px] md:py-[100px] px-4"
      >
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-4">
          <div className="order-1 md:order-1 flex justify-center items-center w-full md:w-[35%] aspect-square rounded-3xl overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
            {/* @@ts-expect-error */}

              <img
                src="/profile-pic.png"
                alt="Alexandra Tulchinsky"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="order-2 md:order-2 flex flex-col items-center justify-center px-0">
            <h4 className="text-lg text-muted-foreground mb-2 font-semibold">
              Hello, I&apos;m
            </h4>
            <h1 className="text-3xl text-5xl font-bold mb-4">Alexandra</h1>
            <h2 className="text-xl text-3xl font-semibold text-muted-foreground mb-8 w-full text-center">
              AI, LLM, Machine Learning Engineer
            </h2>
            <div className="flex gap-4 mb-8">
              <Link href="/Alexandra_Tulchinsky_Resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-black h-[50px] px-6 font-semibold text-xs"
                >
                  Download CV
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="rounded-full border-2 border-black h-[50px] px-6 font-semibold text-xs">
                  Contact Info
                </Button>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com/in/alexandratulchinsky"
                target="_blank"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/AlexandraTulchinsky"
                target="_blank"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="max-w-[1000px] w-full py-12 py-[50px] h-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Get to know me</h2>

        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start w-full h-full">
          <div className="flex justify-center items-center w-full md:w-[50%] h-[300px] md:h-[600px] shrink-0 rounded-lg overflow-hidden">
            {/* <img
              src="/profile-pic2.png"
              alt="image"
              className="w-full h-full object-cover"
            /> */}
            <div className="w-full h-full">
              {/* @ts-ignore */}

              <model-viewer
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src="/phoenix_bird.glb"
                // environmentImage="shared-assets/environments/moon_1k.hdr"
                // poster="shared-assets/models/NeilArmstrong.webp"
                shadowIntensity={1}
                cameraControls
                camera-orbit="-45deg 90deg auto"
                // touchAction="pan-y"
                autoplay
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-8 h-full w-full">
            <Card className="w-full shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                <div className="flex justify-between items-center gap-4">
                  {/* <div className="w-[3px] h-[200px] bg-red-500 shrink-0"></div> */}

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">
                        LLM, AI & Machine Learning Engineer (financials &
                        licensing){" "}
                      </h4>
                      <p className="text-sm text-muted-foreground">Nokia</p>
                      <p className="text-sm">SEPTEMBER 2023 - AUGUST 2024</p>
                      <p className="text-sm mt-2">
                        Created an enterprise search solution using GenAI. The
                        solution enabled users to ask interactive questions and
                        request summaries from any enterprise licensing content
                        Optimized and streamlined revenue allocation across
                        diverse business units using Gen AI. Leveraged the
                        Hugging Face transformers library, NLP auto-tagging
                        processes, and MS Power Automate to fully automate the
                        workflow.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Data Scientist (optics and photonics)
                      </h4>
                      <p className="text-sm text-muted-foreground">Lumentum</p>
                      <p className="text-sm">Feb 2020 - Dec 2020</p>
                      <p className="text-sm mt-2">
                        Created and deployed an artificial neural network on
                        Azure that predicts light steering in WSS products,
                        achieving an accuracy of around 85 to 90 percent.
                        Optimized the number of features, resulting in increased
                        model scalability and reduced machine processing time by
                        30%. Helped improve the next version of product releases
                        by collaborating with key clients (Ciena, HANA and
                        Fujitsu) to collect their feedback and prioritize new
                        features & capabilities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Data Systems Analyst (internal software usage and
                        optimization)
                      </h4>
                      <p className="text-sm text-muted-foreground">Lumentum</p>
                      <p className="text-sm">May 2019 - Aug 2019</p>
                      <p className="text-sm mt-2">
                        Communicated between the R&D, IT, Data Science and
                        Analytics teams to understand business requirements and
                        desired user experience in terms of capabilities and
                        features. Collaborated with external vendors (AnyDesk
                        and ConnectWise) on findings and required improvements
                        in future product releases. Leveraged feature-by-feature
                        usage data, end-user survey data, and user data tracking
                        to gain insights into consumer needs and predict future
                        third-party application use. Developed data-driven
                        solutions by mining and analyzing consumer usage data.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="font-semibold">
                  B.Sc. Bachelors Degree in Computer Science
                </p>
                <p className="text-sm text-muted-foreground">4.0/4.0 GPA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-[1000px] w-full px-4 py-[50px] md:py-[100px]"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Machine Learning and GenAI
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Finetuning LLMs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>RAG</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>OpenAI & HuggingFace</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>DeepSpeed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Prompt Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Tranformers Architecture</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Web Dev</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>React, Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>JavaScript, HTML, CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Node.js, Go</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Git</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-[1000px] w-full px-4 py-[50px] md:py-[100px]"
      >
        <div className="text-center space-y-2 mb-16">
          <p className="text-muted-foreground font-semibold">
            Browse My Recent
          </p>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="overflow-hidden shadow-sm">
            <div className="bg-sky-100 aspect-square">
            {/* @@ts-expect-error */}

              <img
                src="/project-1.png"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Customer Feedback- Amazon Product Recommendation
              </h3>
              <Link
                href="https://github.com/AlexandraTulchinsky/CSI2132_Project"
                target="_blank"
              >
                <Button variant="outline" className="w-full">
                  DEMO
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-sm">
            <div className="relative bg-neutral-100 aspect-square">
                  {/* @@ts-expect-error */}

              <img
                src="/project-2.png"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Dental Clinic using Data & Cloud - Clinic Web Application
              </h3>
              <Link
                href="https://github.com/AlexandraTulchinsky/CSI2132_Project"
                target="_blank"
              >
                <Button variant="outline" className="w-full">
                  DEMO
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-sm">
            <div className="relative bg-emerald-100 aspect-square">
                    {/* @@ts-expect-error */}

              <img
                src="/project-3.png"
                alt="Project 3"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Better Digital Audience Engagement - YouTube Data Analysis
              </h3>
              <Link
                href="https://github.com/AlexandraTulchinsky/YouTube-Data-Analysis"
                target="_blank"
              >
                <Button variant="outline" className="w-full">
                  DEMO
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-[1000px] w-full px-4 py-[50px] md:py-[100px]"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href="mailto:alexandratulchinsky@gmail.com">
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              alexandratulchinsky@gmail.com
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/alexandratulchinsky/">
            <Button variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center items-center text-center gap-4 p-8">
        <div className="max-w-[1000px] w-full py-8 px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 justify-center gap-6 mb-10">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="hover:text-gray-500 transition-colors duration-300 w-full"
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground hover:text-gray-500 transition-colors duration-300">
            Copyright © 2025 Alexandra Tulchinsky. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
