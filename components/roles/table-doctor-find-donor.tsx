
"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ViewDialog } from "./view-dialog";
import { DeleteDialog } from "./delete-dialog";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { getAllDonorByHospitalId } from '@/app/services/apiService';
// const invoices = [
//   {
//     name: "Nancy",
//     date: "06-06-2000",
//     gender: "female",
//     idCard: "0988872123122",
//     BG: "B+",
//     phone: "0987654321",
//     city: "Ho Chi Minh",
//     status: "disable",
//   },
//   {
//     name: "Shin",
//     date: "06-09-1999",
//     gender: "male",
//     idCard: "098883122",
//     BG: "AB+",
//     phone: "0988989889",
//     city: "Long An",
//     status: "active",
//   },
// ];

export function TableFindDonors() {

  const [listDonorByHospitalId, setListDonorByHospitalId] = useState([
    {
      fullname: "Shin",
      email: "shin@gmail.com",
      gender: "male",
      typeOfBlood: "AB+",
      mobile: "0988989889",
      city: "Long An",



    },
    {
      fullname: "Shin",
      email: "shin@gmail.com",
      gender: "male",
      typeOfBlood: "AB+",
      mobile: "0988989889",
      city: "Long An",

    },
  ]);

  useEffect(() => {
    fetchListDonorByHospitalId();
  }, []);

  const fetchListDonorByHospitalId = async () => {
    const hospitalId = localStorage.getItem("hospitalId");
    console.log('hospi:', hospitalId);
    const api = `/api/get-all-donor-by-hospitalId?hospitalId=${hospitalId}`;
    console.log('api:', api);
    try {
      const res: any = await getAllDonorByHospitalId(api);
      console.log('Error in API controller:', res);
      if (res && res.EC === 0) {
        setListDonorByHospitalId(res.DT);


      }
    } catch (error) {
      console.error('Error fetching list:', error);
      toast.error('An error occurred while fetching list.');

    }
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Fullname</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Gender</TableHead>

            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>

          {listDonorByHospitalId && listDonorByHospitalId.length > 0 &&
            listDonorByHospitalId.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.typeOfBlood}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                </TableRow>
              )
            }

            )}
          {listDonorByHospitalId && listDonorByHospitalId.length === 0 && <TableCell>Not found data</TableCell>}



        </TableBody>
      </Table>
    </>
  );
}
