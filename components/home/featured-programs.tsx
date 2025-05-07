"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Globe, Lightbulb, Microscope, Palette } from "lucide-react";
import { motion } from "@/lib/motion";

const programs = [
  {
    id: 1,
    title: "Computer Science",
    description: "Develop cutting-edge skills in programming, artificial intelligence, and data science.",
    icon: <Code className="h-10 w-10 text-chart-1" />,
    badge: "High Demand",
    link: "/programs/computer-science"
  },
  {
    id: 2,
    title: "Business Administration",
    description: "Master business fundamentals, leadership, and strategic management for the modern economy.",
    icon: <Lightbulb className="h-10 w-10 text-chart-2" />,
    badge: "Popular",
    link: "/programs/business-administration"
  },
  {
    id: 3,
    title: "Biological Sciences",
    description: "Explore the complexities of life through laboratory research and theoretical study.",
    icon: <Microscope className="h-10 w-10 text-chart-3" />,
    badge: "Research Focus",
    link: "/programs/biological-sciences"
  },
  {
    id: 4,
    title: "International Relations",
    description: "Analyze global issues, diplomacy, and cross-cultural communication in our interconnected world.",
    icon: <Globe className="h-10 w-10 text-chart-4" />,
    badge: "Global Impact",
    link: "/programs/international-relations"
  },
  {
    id: 5,
    title: "Creative Arts",
    description: "Develop your artistic talents and creative thinking in a supportive, inspiring environment.",
    icon: <Palette className="h-10 w-10 text-chart-5" />,
    badge: "Creative Focus",
    link: "/programs/creative-arts"
  },
  {
    id: 6,
    title: "Education & Teaching",
    description: "Prepare for a rewarding career shaping the next generation of learners and leaders.",
    icon: <BookOpen className="h-10 w-10 text-chart-1" />,
    badge: "Community Impact",
    link: "/programs/education"
  }
];

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-2">Featured Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Path to Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of academic programs designed to prepare you for success in your chosen field.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mb-2">{program.icon}</div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {program.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 flex-1">
                  <CardDescription className="text-base text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="group" asChild>
                    <Link href={program.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}