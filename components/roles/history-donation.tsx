
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
import { getAllHistoryDonationByDonorId } from '@/app/services/apiService';
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

export function TableHistoryDonation() {

  const [listHistoryDonationByDonorId, setListHistoryDonationByDonorId] = useState([
    {
      fullname: "Shin",
      hospitalId: "shin@gmail.com",
      gender: "male",
      typeOfBlood: "AB+",
      mobile: "0988989889",
      date: "Long An",

    },
    {
      fullname: "Shin",
      hospitalId: "shin@gmail.com",
      gender: "male",
      typeOfBlood: "AB+",
      mobile: "0988989889",
      date: "Long An",

    },
  ]);

  useEffect(() => {
    fetchListHistoryDonationByDonorId();
  }, []);

  const fetchListHistoryDonationByDonorId = async () => {
    const userId = localStorage.getItem("userId");
    console.log('hospddfadadi:', userId);
    const api = `/api/get-all-history-by-donorId?userId=${userId}`;
    console.log('api:', api);
    try {
      const res: any = await getAllHistoryDonationByDonorId(api);
      console.log('Error in API controller:', res);
      if (res && res.EC === 0) {
        setListHistoryDonationByDonorId(res.DT);


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
            <TableHead>Hospital ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>


            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>


          {listHistoryDonationByDonorId && listHistoryDonationByDonorId.length > 0 &&
            listHistoryDonationByDonorId.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.hospitalId}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.typeOfBlood}</TableCell>

                </TableRow>
              )
            }

            )}
          {listHistoryDonationByDonorId && listHistoryDonationByDonorId.length === 0 && <TableCell>Not found data</TableCell>}



        </TableBody>
      </Table>
    </>
  );
}
