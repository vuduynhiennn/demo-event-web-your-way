"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Quote, Play } from "lucide-react";
import { motion } from "@/lib/motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    program: "Computer Science",
    quote: "My experience at Excellence Academy transformed my career path. The personalized attention from professors and cutting-edge curriculum prepared me for success in the tech industry.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoId: "testimonial-sarah",
    category: "undergraduate",
    fullQuote: "My experience at Excellence Academy transformed my career path. The personalized attention from professors and cutting-edge curriculum prepared me for success in the tech industry. The hands-on projects and internship opportunities helped me secure a position at a leading tech company before graduation.",
    graduation: "2023",
    currentRole: "Software Engineer at Tech Corp"
  },
  {
    id: 2,
    name: "Michael Chen",
    program: "Business Administration",
    quote: "The MBA program equipped me with the strategic thinking and leadership skills I needed to advance my career. The network I built here continues to be invaluable.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoId: "testimonial-michael",
    category: "graduate",
    fullQuote: "The MBA program equipped me with the strategic thinking and leadership skills I needed to advance my career. The network I built here continues to be invaluable. The case study approach and international business focus gave me a global perspective that sets me apart in my industry.",
    graduation: "2022",
    currentRole: "Senior Business Analyst"
  },
  {
    id: 3,
    name: "Aisha Patel",
    program: "International Relations",
    quote: "Studying at Excellence Academy opened doors to global opportunities. The diverse student body and expert faculty created an enriching learning environment.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoId: "testimonial-aisha",
    category: "undergraduate",
    fullQuote: "Studying at Excellence Academy opened doors to global opportunities. The diverse student body and expert faculty created an enriching learning environment. The international exchange programs and cultural events broadened my perspective and prepared me for a career in diplomacy.",
    graduation: "2023",
    currentRole: "Foreign Service Officer"
  },
  {
    id: 4,
    name: "David Rodriguez",
    program: "Creative Arts",
    quote: "The mentorship I received in the Creative Arts program helped me develop my unique artistic voice. The facilities and resources available to students are exceptional.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoId: "testimonial-david",
    category: "undergraduate",
    fullQuote: "The mentorship I received in the Creative Arts program helped me develop my unique artistic voice. The facilities and resources available to students are exceptional. The program's emphasis on both traditional and digital media prepared me for the evolving landscape of contemporary art.",
    graduation: "2022",
    currentRole: "Independent Artist & Gallery Owner"
  },
  {
    id: 5,
    name: "Jennifer Williams",
    program: "Biological Sciences",
    quote: "The research opportunities in the Biological Sciences program gave me hands-on experience that was crucial for my career. The faculty support was outstanding.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoId: "testimonial-jennifer",
    category: "graduate",
    fullQuote: "The research opportunities in the Biological Sciences program gave me hands-on experience that was crucial for my career. The faculty support was outstanding. Access to state-of-the-art laboratories and research funding allowed me to contribute to groundbreaking studies in my field.",
    graduation: "2021",
    currentRole: "Research Scientist"
  },
  {
    id: 6,
    name: "Marcus Taylor",
    program: "Education & Teaching",
    quote: "The Education program's emphasis on practical teaching experience prepared me for the realities of the classroom. I graduated confident in my abilities to make a difference.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoId: "testimonial-marcus",
    category: "professional",
    fullQuote: "The Education program's emphasis on practical teaching experience prepared me for the realities of the classroom. I graduated confident in my abilities to make a difference. The program's focus on inclusive education and technology integration has been invaluable in my teaching career.",
    graduation: "2023",
    currentRole: "High School Teacher"
  }
];

export default function TestimonialsPage() {
  const [category, setCategory] = useState("all");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const filteredTestimonials = category === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === category);

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Student Stories</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Student Success Stories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our students about their experiences and achievements at Excellence Academy.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setCategory("all")}>All</TabsTrigger>
              <TabsTrigger value="undergraduate" onClick={() => setCategory("undergraduate")}>Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate" onClick={() => setCategory("graduate")}>Graduate</TabsTrigger>
              <TabsTrigger value="professional" onClick={() => setCategory("professional")}>Professional</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-60">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                        onClick={() => setSelectedTestimonial(testimonial)}
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>Student Testimonial</DialogTitle>
                        <DialogDescription>
                          {selectedTestimonial?.name} - {selectedTestimonial?.program}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-center p-8">
                          <Play className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground">Video testimonial would play here in a production environment</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardContent className="flex-1 pt-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-primary/40 mr-2 shrink-0 mt-1" />
                    <CardDescription className="text-base">
                      {testimonial.fullQuote}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.currentRole}</p>
                    <p className="text-sm text-muted-foreground">Class of {testimonial.graduation}</p>
                  </div>
                  <Badge variant="secondary">{testimonial.category}</Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}