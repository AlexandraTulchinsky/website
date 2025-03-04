"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Header from "./header";
import { useEffect } from "react";
import { workExperience, education, skills, projects } from "./data";

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
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-center md:items-center gap-4">
          <div className="order-1 md:order-1 flex justify-center items-center w-full md:w-[35%] aspect-square rounded-full overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
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
        <h2 className="text-3xl font-bold text-center mb-0 md:mb-16">
          Get to know me
        </h2>

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
                alt="phoenix"
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
            <Card className="w-full shadow-[0_0px_20px_rgba(0,0,0,0.35)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                <div className="flex justify-between items-center gap-4">
                  {/* <div className="w-[3px] h-[200px] bg-red-500 shrink-0"></div> */}

                  <div className="space-y-4">
                    {workExperience.map((experience, index) => (
                      <div key={index}>
                        <h4 className="font-semibold">{experience.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {experience.company}
                        </p>
                        <p className="text-sm">{experience.date}</p>
                        <p className="text-sm mt-2">{experience.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-[0_0px_20px_rgba(0,0,0,0.35)]">
              <CardContent className="p-6">
                {education.map((education, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <p className="font-semibold">{education.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {education.gpa}
                    </p>
                  </div>
                ))}
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
          {skills.map((skill, index) => (
            <Card className="shadow-[0_0px_20px_rgba(0,0,0,0.35)]" key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skill.skills.map((s, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-[0_0px_20px_rgba(0,0,0,0.35)] flex flex-col"
            >
              <div className="aspect-square p-0 shrink-0 flex items-center justify-center">
                <img
                  src={project.image}
                  alt="Project 1"
                  className="object-cover rounded-lg aspect-square w-[80%] h-[80%] md:w-full md:h-full"
                />
              </div>
              <CardContent className="p-8 pt-0 md:p-6 flex flex-col justify-between items-center h-full">
                <h3 className="font-semibold text-md mb-6 text-center shrink-0">
                  {project.title}
                </h3>
                <div className="w-full h-full"></div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="shrink-0 w-full"
                >
                  <Button variant="outline" className="w-full">
                    DEMO
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
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