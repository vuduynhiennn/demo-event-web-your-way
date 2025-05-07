"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Trophy, Users, BookOpen, Building } from "lucide-react";
import { motion } from "@/lib/motion";

const accreditations = [
  {
    id: 1,
    name: "Higher Education Commission",
    logo: <Building className="h-12 w-12 text-primary" />,
    year: "Since 1998"
  },
  {
    id: 2,
    name: "International Accreditation Council",
    logo: <BookOpen className="h-12 w-12 text-primary" />,
    year: "Since 2005"
  },
  {
    id: 3,
    name: "Professional Education Alliance",
    logo: <Users className="h-12 w-12 text-primary" />,
    year: "Since 2010"
  }
];

const metrics = [
  {
    id: 1,
    label: "Graduation Rate",
    value: "94%",
    icon: <CheckCircle className="h-8 w-8 text-chart-1" />
  },
  {
    id: 2,
    label: "Employment Rate",
    value: "89%",
    icon: <Award className="h-8 w-8 text-chart-2" />
  },
  {
    id: 3,
    label: "Student Satisfaction",
    value: "4.8/5",
    icon: <Trophy className="h-8 w-8 text-chart-3" />
  }
];

export default function QualityAssurance() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-2">Our Standards</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commitment to Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards in education, backed by prestigious accreditations and impressive outcomes.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Accreditations & Partnerships</h3>
              <div className="grid gap-4">
                {accreditations.map((accreditation) => (
                  <div key={accreditation.id} className="flex items-center gap-4 p-4 border rounded-md">
                    <div className="rounded-full p-2 border bg-muted/40">
                      {accreditation.logo}
                    </div>
                    <div>
                      <h4 className="font-medium">{accreditation.name}</h4>
                      <p className="text-sm text-muted-foreground">{accreditation.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Industry Partners</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Microsoft</Badge>
                  <Badge variant="secondary">Google</Badge>
                  <Badge variant="secondary">Amazon</Badge>
                  <Badge variant="secondary">IBM</Badge>
                  <Badge variant="secondary">Tesla</Badge>
                  <Badge variant="secondary">Johnson & Johnson</Badge>
                  <Badge variant="secondary">World Health Organization</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Success Metrics</h3>
              
              <div className="grid gap-4 mb-8">
                {metrics.map((metric) => (
                  <Card key={metric.id} className="border-none shadow-none bg-muted/40">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-medium">{metric.label}</CardTitle>
                        {metric.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-chart-1">{metric.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-4">Awards & Recognition</h4>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Top 50 Educational Institutions (2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Excellence in Innovation Award (2022)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Best Student Support Services (2021)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Global Education Partner of the Year (2020)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}