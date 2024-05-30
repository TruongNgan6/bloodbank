"use client"

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postSendBloodRequest } from '@/app/services/apiService';
import { toast } from 'react-toastify';
const accountFormSchema = z.object({
  hospitalName: z.string().min(2, { message: "Hospital name must be at least 2 characters." }),
  mobile: z.string(),
  typeOfBlood: z.string(),
  bags: z.string(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function DoctorsRequestForm() {
  const [doctorID, setDoctorID] = useState("");
  const [error, setError] = useState<string | undefined>();
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {},
  });

  useEffect(() => {
    const storedDoctorID = localStorage.getItem("userId");
    if (storedDoctorID) {
      setDoctorID(storedDoctorID);
    }
  }, []);
  console.log("check doctorID", doctorID)


  const handleSubmit = async (data: AccountFormValues) => {

    const userData = { ...data, doctorID }; // Lấy doctorID từ state và kết hợp với dữ liệu form

    console.log("check data", userData);

    const api = '/api/doctors/send-blood-request';
    try {
      const res: any = await postSendBloodRequest(api, userData);
      if (res && res.EC === 0) {
        toast.success(res.EM);
      } else {
        toast.error(res.EM);
      }
    } catch (error) {
      setError(`An error occurred. Please try again. ${error}`);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
      <div>
        <label htmlFor="hospitalName">Hospital Name</label>
        <Input
          id="hospitalName"
          placeholder="Your hospital name"
          {...form.register("hospitalName")} // Thêm đoạn này để liên kết với hook form
        />
        {form.formState.errors.hospitalName && (
          <span className="text-red-600">{form.formState.errors.hospitalName.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="mobile">Mobile</label>
        <Input
          id="mobile"
          placeholder="Hotline of Hospital"
          {...form.register("mobile")} // Thêm đoạn này để liên kết với hook form
        />
      </div>
      <div>
        <label htmlFor="typeOfBlood">Type of Blood</label>
        <Input
          id="typeOfBlood"
          placeholder="Type"
          {...form.register("typeOfBlood")} // Thêm đoạn này để liên kết với hook form
        />
      </div>
      <div>
        <label htmlFor="bags">How many Bags?</label>
        <Input
          id="bags"
          placeholder="1 or 2 bags"
          {...form.register("bags")} // Thêm đoạn này để liên kết với hook form
        />
      </div>
      <Button type="submit" id="send-request">
        Send Request
      </Button>
    </form>
  );
}
