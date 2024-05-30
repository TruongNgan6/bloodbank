"use client"

import React, { useState } from 'react';
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from 'react-toastify';
import { postCreateBookDonation } from '@/app/services/apiService';
export function DonateDialog() {
  const [fullname, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedHospitalId, setSelectedHospitalId] = useState(1);
  const [date, setDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const hospitals = [
    { id: 1, name: "Hospital 1" },
    { id: 2, name: "Hospital 2" },
    { id: 3, name: "Hospital 3" },
  ];

  const handleHospitalChange = (e: any) => {
    const selectedValue = parseInt(e.target.value);
    if (!isNaN(selectedValue)) {
      setSelectedHospitalId(selectedValue);
    }
  };

  const handleSubmit = async () => {
    // Handle form submission here
    const userId = localStorage.getItem("userId");

    const formData = {
      userId,
      fullname,
      phoneNo,
      email,
      city,
      selectedHospitalId,
      date,
      bloodType,
      gender,
      message,
    };
    console.log(formData); // For testing, you can replace with actual submission logic

    const api = '/api/create-book-donation';


    try {
      const res: any = await postCreateBookDonation(api, formData);
      if (res && res.EC === 0) {
        toast.success(res.EM);
      } else {
        toast.error(res.EM);
      }
    } catch (error) {
      console.log(error);
      //setError(`An error occurred. Please try again. ${error}`);
    }
  };

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="ml-2 bg-cyan-500 hover:bg-cyan-600">
          Book Donation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donation Form</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input id="name" value={fullname} onChange={(e) => setFullname(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phoneNo" className="text-right">
              Phone No.
            </Label>
            <Input id="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hospital" className="text-right">
              Choose a hospital
            </Label>
            <select id="hospital" value={selectedHospitalId} onChange={handleHospitalChange} className="col-span-3 border rounded px-2 py-1">
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.id}>
                  {hospital.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Input id="type" value={bloodType} onChange={(e) => setBloodType(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Input id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="col-span-3" />
          </div>
          <div>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here." />
          </div>
        </div>
        <DialogFooter>
          <Button name="send-request" type="submit" onClick={handleSubmit}>
            Send request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
