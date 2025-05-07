"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "@/lib/motion";

const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  birthdate: z.string().min(1, "Please enter your date of birth"),
  address: z.string().min(5, "Please enter your address"),
});

const programSelectionSchema = z.object({
  program: z.string().min(1, "Please select a program"),
  startDate: z.string().min(1, "Please select a preferred start date"),
  studyFormat: z.enum(["fullTime", "partTime", "online"], {
    required_error: "Please select a study format",
  }),
});

const additionalInfoSchema = z.object({
  education: z.string().min(1, "Please select your highest education level"),
  howDidYouHear: z.string().min(1, "Please tell us how you heard about us"),
  additionalComments: z.string().optional(),
});

const programs = [
  "Computer Science",
  "Business Administration",
  "Biological Sciences",
  "International Relations",
  "Creative Arts",
  "Education & Teaching",
];

const startDates = [
  "Fall 2025 (September)",
  "Winter 2026 (January)",
  "Spring 2026 (May)",
  "Summer 2026 (July)",
];

const educationLevels = [
  "High School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
];

const referralSources = [
  "Search Engine",
  "Social Media",
  "Friend/Family",
  "Current Student/Alumni",
  "Education Fair",
  "Advertisement",
  "Other",
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedData, setSavedData] = useState({});
  const router = useRouter();

  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      birthdate: "",
      address: "",
    },
  });

  const programSelectionForm = useForm<z.infer<typeof programSelectionSchema>>({
    resolver: zodResolver(programSelectionSchema),
    defaultValues: {
      program: "",
      startDate: "",
      studyFormat: undefined,
    },
  });

  const additionalInfoForm = useForm<z.infer<typeof additionalInfoSchema>>({
    resolver: zodResolver(additionalInfoSchema),
    defaultValues: {
      education: "",
      howDidYouHear: "",
      additionalComments: "",
    },
  });

  const onPersonalInfoSubmit = (data: z.infer<typeof personalInfoSchema>) => {
    setSavedData((prev) => ({ ...prev, ...data }));
    toast.success("Personal information saved!");
    setStep(2);
  };

  const onProgramSelectionSubmit = (data: z.infer<typeof programSelectionSchema>) => {
    setSavedData((prev) => ({ ...prev, ...data }));
    toast.success("Program selection saved!");
    setStep(3);
  };

  const onAdditionalInfoSubmit = async (data: z.infer<typeof additionalInfoSchema>) => {
    try {
      setIsSubmitting(true);
      const formData = { ...savedData, ...data };
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully!");
      setStep(4);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Apply to Excellence Academy</h1>
          <p className="text-muted-foreground">
            Fill out the form below to start your application process
          </p>
        </div>

        <div className="mb-8">
          <Tabs value={String(step)} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="1" disabled={step < 1} onClick={() => step > 1 && setStep(1)}>
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="2" disabled={step < 2} onClick={() => step > 2 && setStep(2)}>
                Program Selection
              </TabsTrigger>
              <TabsTrigger value="3" disabled={step < 3} onClick={() => step > 3 && setStep(3)}>
                Additional Info
              </TabsTrigger>
              <TabsTrigger value="4" disabled={step < 4}>
                Confirmation
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your personal details below
                </CardDescription>
              </CardHeader>
              <Form {...personalInfoForm}>
                <form onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)}>
                  <CardContent className="space-y-4">
                    <FormField
                      control={personalInfoForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={personalInfoForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={personalInfoForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={personalInfoForm.control}
                      name="birthdate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalInfoForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St, City, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit">
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Program Selection</CardTitle>
                <CardDescription>
                  Select your desired program and study preferences
                </CardDescription>
              </CardHeader>
              <Form {...programSelectionForm}>
                <form onSubmit={programSelectionForm.handleSubmit(onProgramSelectionSubmit)}>
                  <CardContent className="space-y-4">
                    <FormField
                      control={programSelectionForm.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program of Interest</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {programs.map((program) => (
                                <SelectItem key={program} value={program}>
                                  {program}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={programSelectionForm.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Start Date</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a start date" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {startDates.map((date) => (
                                <SelectItem key={date} value={date}>
                                  {date}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={programSelectionForm.control}
                      name="studyFormat"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Study Format</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="fullTime" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Full-time
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="partTime" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Part-time
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="online" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Online
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>
                  Please provide some additional details to complete your application
                </CardDescription>
              </CardHeader>
              <Form {...additionalInfoForm}>
                <form onSubmit={additionalInfoForm.handleSubmit(onAdditionalInfoSubmit)}>
                  <CardContent className="space-y-4">
                    <FormField
                      control={additionalInfoForm.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Highest Level of Education</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select education level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {educationLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={additionalInfoForm.control}
                      name="howDidYouHear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {referralSources.map((source) => (
                                <SelectItem key={source} value={source}>
                                  {source}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={additionalInfoForm.control}
                      name="additionalComments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Comments (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Any additional information you'd like to share" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep(2)}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-2xl">Application Submitted!</CardTitle>
                <CardDescription>
                  Thank you for applying to Excellence Academy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your application has been successfully submitted. Our admissions team will review your information and contact you within 2-3 business days.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium">Next Steps:</p>
                  <ul className="text-left mt-2 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Check your email for a confirmation of your application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Our admissions team will contact you to schedule an interview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Prepare any additional documents requested</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => router.push("/")}>
                  Return to Home
                </Button>
                <Button 
                  onClick={() => router.push("/consultation")}
                  className="gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Consultation
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}