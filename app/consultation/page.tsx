"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { format, addDays, isPast, isWeekend } from "date-fns";
import { CalendarIcon, Clock, Loader2, CheckCircle2, User, Video, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.date({
    required_error: "Please select a date for your consultation",
  }),
  time: z.string().min(1, "Please select a time"),
  format: z.enum(["inPerson", "virtual", "phone"], {
    required_error: "Please select a consultation format",
  }),
  topic: z.string().min(1, "Please select a topic"),
  notes: z.string().optional(),
});

const consultants = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    role: "Academic Advisor",
    specialty: "Undergraduate Programs",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Chen has over 15 years of experience in higher education advising, specializing in undergraduate programs and first-generation student support.",
  },
  {
    id: 2,
    name: "Professor James Wilson",
    role: "Program Director",
    specialty: "Graduate Studies",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Professor Wilson leads our graduate programs and can provide insight into research opportunities, career pathways, and advanced academic options.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "International Student Coordinator",
    specialty: "International Programs",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Maria specializes in supporting international students with their unique needs, from visa applications to cultural adaptation and academic success strategies.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Financial Aid Counselor",
    specialty: "Scholarships & Financial Planning",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "David helps students navigate financial aid options, scholarship opportunities, and creating a sustainable financial plan for their education.",
  },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const topics = [
  "Program Information",
  "Application Process",
  "Financial Aid & Scholarships",
  "International Student Requirements",
  "Career Opportunities",
  "Campus Life & Housing",
  "Transfer Credits",
  "Other",
];

export default function ConsultationPage() {
  const [selectedConsultant, setSelectedConsultant] = useState(consultants[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof consultationSchema>>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      format: undefined,
      topic: "",
      notes: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof consultationSchema>) => {
    try {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Consultation scheduled successfully!");
      setIsSubmitted(true);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to check if a date should be disabled
  const isDateDisabled = (date: Date) => {
    return isPast(date) || isWeekend(date);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Schedule a Consultation</h1>
          <p className="text-muted-foreground">
            Get personalized guidance from our expert advisors to help you make informed decisions
          </p>
        </div>

        {!isSubmitted ? (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="space-y-4 sticky top-20">
                <h2 className="text-xl font-semibold">Our Consultants</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Select an advisor to schedule your consultation
                </p>
                
                <div className="space-y-4">
                  {consultants.map((consultant) => (
                    <motion.div
                      key={consultant.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: consultant.id * 0.1 }}
                    >
                      <Card 
                        className={cn(
                          "cursor-pointer transition-all hover:border-primary/50",
                          selectedConsultant.id === consultant.id && "border-primary"
                        )} 
                        onClick={() => setSelectedConsultant(consultant)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden">
                              <img
                                src={consultant.image}
                                alt={consultant.name}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{consultant.name}</h3>
                              <p className="text-xs text-muted-foreground">{consultant.specialty}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <img
                        src={selectedConsultant.image}
                        alt={selectedConsultant.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{selectedConsultant.name}</CardTitle>
                      <CardDescription>
                        {selectedConsultant.role} • {selectedConsultant.specialty}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    {selectedConsultant.bio}
                  </p>
                  
                  <Separator className="my-6" />
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
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
                      </div>
                      
                      <FormField
                        control={form.control}
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
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Consultation Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={isDateDisabled}
                                    initialFocus
                                    fromDate={new Date()}
                                    toDate={addDays(new Date(), 30)}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="format"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Consultation Format</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="inPerson" />
                                  </FormControl>
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <FormLabel className="font-normal">
                                      In-Person
                                    </FormLabel>
                                  </div>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="virtual" />
                                  </FormControl>
                                  <div className="flex items-center gap-2">
                                    <Video className="h-4 w-4 text-muted-foreground" />
                                    <FormLabel className="font-normal">
                                      Virtual Meeting
                                    </FormLabel>
                                  </div>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="phone" />
                                  </FormControl>
                                  <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <FormLabel className="font-normal">
                                      Phone Call
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Consultation Topic</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {topics.map((topic) => (
                                  <SelectItem key={topic} value={topic}>
                                    {topic}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific questions or topics you'd like to discuss" 
                                className="resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scheduling...
                          </>
                        ) : (
                          <>
                            Schedule Consultation
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
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
                <CardTitle className="text-2xl">Consultation Scheduled!</CardTitle>
                <CardDescription>
                  Your consultation has been successfully scheduled
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-w-sm mx-auto bg-muted p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={selectedConsultant.image}
                        alt={selectedConsultant.name}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{selectedConsultant.name}</p>
                      <p className="text-xs text-muted-foreground">{selectedConsultant.specialty}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {format(form.getValues().date, "EEEE, MMMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{form.getValues().time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {form.getValues().format === "inPerson" && (
                        <User className="h-4 w-4 text-muted-foreground" />
                      )}
                      {form.getValues().format === "virtual" && (
                        <Video className="h-4 w-4 text-muted-foreground" />
                      )}
                      {form.getValues().format === "phone" && (
                        <Phone className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="text-sm">
                        {form.getValues().format === "inPerson" && "In-Person"}
                        {form.getValues().format === "virtual" && "Virtual Meeting"}
                        {form.getValues().format === "phone" && "Phone Call"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  We've sent a confirmation email to <strong>{form.getValues().email}</strong> with all the details.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" onClick={() => {
                  form.reset();
                  setIsSubmitted(false);
                }}>
                  Schedule Another Consultation
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}