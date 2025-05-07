"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Loader2,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "@/lib/motion";

const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Vui lòng nhập địa chỉ email hợp lệ"),
  phone: z.string().optional(),
  birthdate: z.string().optional(),
  address: z.string().optional(),
});

const programSelectionSchema = z.object({
  program: z.string().min(1, "Vui lòng chọn một chương trình"),
  startDate: z.string().min(1, "Vui lòng chọn ngày bắt đầu mong muốn"),
  studyFormat: z.enum(["fullTime", "partTime", "online"], {
    required_error: "Vui lòng chọn hình thức học",
  }),
});

const additionalInfoSchema = z.object({
  education: z.string().min(1, "Vui lòng chọn trình độ học vấn cao nhất"),
  howDidYouHear: z
    .string()
    .min(1, "Vui lòng cho chúng tôi biết bạn biết đến chúng tôi qua đâu"),
  additionalComments: z.string().optional(),
});

const programs = [
  "Thiết Kế Đồ Họa",
  "Thiết Kế Thời Trang",
  "Thiết Kế Nội Thất",
  "Công Nghệ Thông Tin",
  "Công Nghệ Kỹ Thuật Điện Tử - Viễn Thông",
  "Công Nghệ Kỹ Thuật Điều Khiển và Tự Động Hóa",
  "Quản Trị Kinh Doanh",
  "Kế Toán",
  "Thương Mại Điện Tử",
  "Tài Chính - Ngân Hàng",
  "Bảo Hiểm",
  "Luật",
  "Luật Kinh Tế",
  "Luật Quốc Tế",
  "Ngôn Ngữ Anh",
  "Ngôn Ngữ Trung Quốc",
  "Công Nghệ Sinh Học",
  "Công Nghệ Thực Phẩm",
  "Kiến Trúc",
  "Quản Trị Dịch Vụ Du Lịch và Lữ Hành",
  "Quản Trị Khách Sạn",
];

const startDates = [
  "Mùa Thu 2025 (Tháng 9)",
  "Mùa Đông 2026 (Tháng 1)",
  "Mùa Xuân 2026 (Tháng 5)",
  "Mùa Hè 2026 (Tháng 7)",
];

const educationLevels = [
  "Trung Học Phổ Thông",
  "Cao Đẳng",
  "Cử Nhân",
  "Thạc Sĩ",
  "Tiến Sĩ",
];

const referralSources = [
  "Công Cụ Tìm Kiếm",
  "Mạng Xã Hội",
  "Bạn Bè/Gia Đình",
  "Sinh Viên Cũ/Cựu Sinh Viên",
  "Hội Chợ Giáo Dục",
  "Quảng Cáo",
  "Khác",
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
    toast.success("Thông tin cá nhân đã được lưu!");
    setStep(2);
  };

  const onProgramSelectionSubmit = (
    data: z.infer<typeof programSelectionSchema>
  ) => {
    setSavedData((prev) => ({ ...prev, ...data }));
    toast.success("Lựa chọn chương trình đã được lưu!");
    setStep(3);
  };

  const onAdditionalInfoSubmit = async (
    data: z.infer<typeof additionalInfoSchema>
  ) => {
    try {
      setIsSubmitting(true);
      const formData = { ...savedData, ...data };

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Đơn đăng ký đã được gửi thành công!");
      setStep(4);
    } catch (error) {
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại.");
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Đăng Ký Vào Đại Học Mở Hà Nội
          </h1>
          <p className="text-muted-foreground">
            Điền vào mẫu dưới đây để bắt đầu quá trình đăng ký của bạn
          </p>
        </div>

        <div className="mb-8">
          <Tabs value={String(step)} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger
                value="1"
                disabled={step < 1}
                onClick={() => step > 1 && setStep(1)}
              >
                Thông Tin Cá Nhân
              </TabsTrigger>
              <TabsTrigger
                value="2"
                disabled={step < 2}
                onClick={() => step > 2 && setStep(2)}
              >
                Lựa Chọn Chương Trình
              </TabsTrigger>
              <TabsTrigger
                value="3"
                disabled={step < 3}
                onClick={() => step > 3 && setStep(3)}
              >
                Thông Tin Bổ Sung
              </TabsTrigger>
              <TabsTrigger value="4" disabled={step < 4}>
                Xác Nhận
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
                <CardTitle>Thông Tin Cá Nhân</CardTitle>
                <CardDescription>
                  Vui lòng cung cấp thông tin cá nhân của bạn dưới đây
                </CardDescription>
              </CardHeader>
              <Form {...personalInfoForm}>
                <form
                  onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)}
                >
                  <CardContent className="space-y-4">
                    <FormField
                      control={personalInfoForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Họ và Tên</FormLabel>
                          <FormControl>
                            <Input placeholder="Nguyễn Văn A" {...field} />
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
                            <FormLabel>Địa Chỉ Email</FormLabel>
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
                      <FormField
                        control={personalInfoForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số Điện Thoại</FormLabel>
                            <FormControl>
                              <Input placeholder="0123 456 789" {...field} />
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
                          <FormLabel>Ngày Sinh</FormLabel>
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
                          <FormLabel>Địa Chỉ</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123 Đường Lê Lợi, Hà Nội, Việt Nam"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit">
                      Tiếp Tục <ArrowRight className="ml-2 h-4 w-4" />
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
                <CardTitle>Lựa Chọn Chương Trình</CardTitle>
                <CardDescription>
                  Chọn chương trình và hình thức học tập mong muốn của bạn
                </CardDescription>
              </CardHeader>
              <Form {...programSelectionForm}>
                <form
                  onSubmit={programSelectionForm.handleSubmit(
                    onProgramSelectionSubmit
                  )}
                >
                  <CardContent className="space-y-4">
                    <FormField
                      control={programSelectionForm.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Chương Trình Quan Tâm</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn một chương trình" />
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
                          <FormLabel>Ngày Bắt Đầu Ưa Thích</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn ngày bắt đầu" />
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
                          <FormLabel>Hình Thức Học</FormLabel>
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
                                  Toàn Thời Gian
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="partTime" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Bán Thời Gian
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="online" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Trực Tuyến
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
                      <ArrowLeft className="mr-2 h-4 w-4" /> Quay Lại
                    </Button>
                    <Button type="submit">
                      Tiếp Tục <ArrowRight className="ml-2 h-4 w-4" />
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
                <CardTitle>Thông Tin Bổ Sung</CardTitle>
                <CardDescription>
                  Vui lòng cung cấp một số thông tin bổ sung để hoàn tất đơn
                  đăng ký của bạn
                </CardDescription>
              </CardHeader>
              <Form {...additionalInfoForm}>
                <form
                  onSubmit={additionalInfoForm.handleSubmit(
                    onAdditionalInfoSubmit
                  )}
                >
                  <CardContent className="space-y-4">
                    <FormField
                      control={additionalInfoForm.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Trình Độ Học Vấn Cao Nhất</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn trình độ học vấn" />
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
                          <FormLabel>Bạn Biết Đến Chúng Tôi Qua Đâu?</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn một lựa chọn" />
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
                          <FormLabel>
                            Ghi Chú Bổ Sung (Không Bắt Buộc)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Bất kỳ thông tin bổ sung nào bạn muốn chia sẻ"
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
                      <ArrowLeft className="mr-2 h-4 w-4" /> Quay Lại
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Đang
                          Gửi...
                        </>
                      ) : (
                        <>Gửi Đơn Đăng Ký</>
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
                <CardTitle className="text-2xl">
                  Đơn Đăng Ký Đã Được Gửi!
                </CardTitle>
                <CardDescription>
                  Cảm ơn bạn đã đăng ký vào Đại Học Mở Hà Nội
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Đơn đăng ký của bạn đã được gửi thành công. Đội ngũ tuyển sinh
                  của chúng tôi sẽ xem xét thông tin của bạn và liên hệ với bạn
                  trong vòng 2-3 ngày làm việc.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium">Các Bước Tiếp Theo:</p>
                  <ul className="text-left mt-2 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Kiểm tra email của bạn để nhận xác nhận đơn đăng ký
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Đội ngũ tuyển sinh của chúng tôi sẽ liên hệ để sắp xếp
                        lịch phỏng vấn
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Chuẩn bị các tài liệu bổ sung theo yêu cầu</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => router.push("/")}>
                  Trở Về Trang Chủ
                </Button>
                <Button
                  onClick={() => router.push("/hen-tu-van")}
                  className="gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Đặt Lịch Tư Vấn
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
