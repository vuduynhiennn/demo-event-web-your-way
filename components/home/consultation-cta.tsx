"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/lib/motion";
import { Calendar, Phone, Video, ArrowRight, Clock, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ConsultationCTA() {
  return (
    <section className="py-24 ">
      <div className="container">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
              Expert Guidance
            </Badge>

            <h2 className="text-4xl font-bold leading-tight">
              Start Your Journey to Excellence Today
            </h2>

            <p className="text-lg text-muted-foreground">
              Schedule a personalized consultation with our expert advisors to
              explore your educational path and discover the perfect program for
              your aspirations.
            </p>

            <div className="grid gap-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Expert Advisors</CardTitle>
                      <CardDescription>
                        Dedicated guidance for your success
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Flexible Scheduling
                      </CardTitle>
                      <CardDescription>
                        Choose a time that works for you
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Multiple Formats
                      </CardTitle>
                      <CardDescription>
                        In-person, virtual, or phone consultations
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center pb-2">
                <CardTitle className="text-2xl">
                  Book Your Consultation
                </CardTitle>
                <CardDescription>
                  Take the first step towards your future
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium">Flexible Appointments</p>
                      <p className="text-muted-foreground">
                        Monday-Friday, 9AM-5PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium">30-Minute Sessions</p>
                      <p className="text-muted-foreground">
                        Focused on your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-medium">Direct Support</p>
                      <p className="text-muted-foreground">
                        Get immediate answers
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full group" asChild>
                  <Link href="/consultation">
                    Schedule Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  No obligation • Free consultation
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
