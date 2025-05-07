"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { format, addDays, isPast, isWeekend } from "date-fns";
import {
  CalendarIcon,
  Clock,
  Loader2,
  CheckCircle2,
  User,
  Video,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion";
import Image from "next/image";

const consultationSchema = z.object({
  name: z.string().min(2, "Tên phải có ít ít nhất 2 ký tự"),
  email: z.string().email("Vui lòng nhập địa chỉ email hợp lệ"),
  phone: z.string().min(10, "Vui lòng nhập số điện thoại hợp lệ"),
  date: z.date({
    required_error: "Vui lòng chọn ngày cho buổi tư vấn của bạn",
  }),
  time: z.string().min(1, "Vui lòng chọn giờ"),
  format: z.enum(["inPerson", "virtual", "phone"], {
    required_error: "Vui lòng chọn hình thức tư vấn",
  }),
  topic: z.string().min(1, "Vui lòng chọn chủ đề"),
  notes: z.string().optional(),
});

const consultants = [
  {
    id: 1,
    name: "Tiến sĩ Emily Chen",
    role: "Cố vấn Học thuật",
    specialty: "Chương trình Đại học",
    image:
      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Tiến sĩ Chen có hơn 15 năm kinh nghiệm trong tư vấn giáo dục đại học, chuyên về các chương trình đại học và hỗ trợ sinh viên thế hệ đầu tiên.",
  },
  {
    id: 2,
    name: "Giáo sư James Wilson",
    role: "Giám đốc Chương trình",
    specialty: "Nghiên cứu Sau Đại học",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Giáo sư Wilson dẫn dắt các chương trình sau đại học của chúng tôi và có thể cung cấp thông tin về cơ hội nghiên cứu, con đường sự nghiệp và các lựa chọn học thuật nâng cao.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Điều phối viên Sinh viên Quốc tế",
    specialty: "Chương trình Quốc tế",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Maria chuyên hỗ trợ sinh viên quốc tế với các nhu cầu đặc thù của họ, từ đơn xin visa đến thích nghi văn hóa và các chiến lược thành công học tập.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Cố vấn Hỗ trợ Tài chính",
    specialty: "Học bổng & Kế hoạch Tài chính",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "David giúp sinh viên tìm hiểu các lựa chọn hỗ trợ tài chính, cơ hội học bổng và lập kế hoạch tài chính bền vững cho việc học của họ.",
  },
];

const timeSlots = [
  "9:00 Sáng",
  "10:00 Sáng",
  "11:00 Sáng",
  "1:00 Chiều",
  "2:00 Chiều",
  "3:00 Chiều",
  "4:00 Chiều",
];

const topics = [
  "Thông tin Chương trình",
  "Quy trình Ứng tuyển",
  "Hỗ trợ Tài chính & Học bổng",
  "Yêu cầu Sinh viên Quốc tế",
  "Cơ hội Nghề nghiệp",
  "Cuộc sống & Nhà ở trong Khuôn viên",
  "Chuyển đổi Tín chỉ",
  "Khác",
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

      toast.success("Đặt lịch tư vấn thành công!");
      setIsSubmitted(true);
    } catch (error) {
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại.");
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Đặt Lịch Tư Vấn
          </h1>
          <p className="text-muted-foreground">
            Nhận hướng dẫn cá nhân hóa từ các cố vấn chuyên gia của chúng tôi để
            giúp bạn đưa ra quyết định sáng suốt
          </p>
        </div>

        {!isSubmitted ? (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="space-y-4 sticky top-20">
                <h2 className="text-xl font-semibold">Cố vấn của Chúng tôi</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Chọn một cố vấn để đặt lịch tư vấn của bạn
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
                          selectedConsultant.id === consultant.id &&
                            "border-primary"
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
                              <p className="text-xs text-muted-foreground">
                                {consultant.specialty}
                              </p>
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
                      <Image
                        src={selectedConsultant.image}
                        alt={selectedConsultant.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{selectedConsultant.name}</CardTitle>
                      <CardDescription>
                        {selectedConsultant.role} •{" "}
                        {selectedConsultant.specialty}
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
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tên của Bạn</FormLabel>
                              <FormControl>
                                <Input placeholder="Nguyễn Văn A" {...field} />
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
                              <FormLabel>Địa chỉ Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="nguyen.van.a@example.com"
                                  {...field}
                                />
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
                            <FormLabel>Số Điện thoại</FormLabel>
                            <FormControl>
                              <Input placeholder="0123 456 789" {...field} />
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
                              <FormLabel>Ngày Tư vấn</FormLabel>
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
                                        <span>Chọn ngày</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
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
                              <FormLabel>Thời gian Ưa thích</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Chọn giờ" />
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
                            <FormLabel>Hình thức Tư vấn</FormLabel>
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
                                      Trực tiếp
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
                                      Họp Trực tuyến
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
                                      Gọi Điện thoại
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
                            <FormLabel>Chủ đề Tư vấn</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn chủ đề" />
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
                            <FormLabel>Ghi chú Bổ sung (Tùy chọn)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Bất kỳ câu hỏi hoặc chủ đề cụ thể nào bạn muốn thảo luận"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Đang Đặt lịch...
                          </>
                        ) : (
                          <>Đặt Lịch Tư Vấn</>
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
                <CardTitle className="text-2xl">
                  Đặt Lịch Tư Vấn Thành Công!
                </CardTitle>
                <CardDescription>
                  Buổi tư vấn của bạn đã được đặt lịch thành công
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
                      <p className="text-xs text-muted-foreground">
                        {selectedConsultant.specialty}
                      </p>
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
                        {form.getValues().format === "inPerson" && "Trực tiếp"}
                        {form.getValues().format === "virtual" &&
                          "Họp Trực tuyến"}
                        {form.getValues().format === "phone" &&
                          "Gọi Điện thoại"}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Chúng tôi đã gửi email xác nhận đến{" "}
                  <strong>{form.getValues().email}</strong> với tất cả thông tin
                  chi tiết.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setIsSubmitted(false);
                  }}
                >
                  Đặt Lịch Tư Vấn Khác
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
