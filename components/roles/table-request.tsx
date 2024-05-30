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

import { DeleteDialog } from "./delete-dialog";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import { getAllRequest, deteleteRequest } from '@/app/services/apiService';

export function TableRequests() {
  const [listRequest, setListRequest] = useState([
    {
      id: "1",
      hospitalName: "Hospital01",
      doctorID: "H001-ABC",
      typeOfBlood: "B+",
      quanlity: "2",
      mobile: "022888113",


    },
    {
      id: "2",
      hospitalName: "Hospital02",
      doctorID: "H002-ABC",
      typeOfBlood: "AB+",
      quanlity: "3",
      mobile: "022888113",

    },
  ]);

  useEffect(() => {
    fetchListRequest();
  }, []);

  const fetchListRequest = async () => {
    const api = '/api/admin/get-all-request';
    try {
      const res: any = await getAllRequest(api);
      if (res && res.EC === 0) {
        setListRequest(res.DT);
      }
    } catch (error) {
      console.error('Error fetching request list:', error);
      toast.error('An error occurred while fetching request list.');
    }
  }

  const handleDelete = async (request: any) => {
    //console.log("check request", request)

    const api = '/api/delete-request';


    try {
      const res: any = await deteleteRequest(api, request);
      if (res && res.EC === 0) {
        toast.success(res.EM);
        fetchListRequest();
      } else {
        toast.error(res.EM);
      }
    } catch (error) {
      console.log(error);
      //setError(`An error occurred. Please try again. ${error}`);
    }
  };



  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Hospital</TableHead>
          <TableHead>DoctorID</TableHead>
          <TableHead>Mobile</TableHead>

          <TableHead>Type</TableHead>
          <TableHead>Bags</TableHead>
          <TableHead>Actions</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {listRequest && listRequest.length > 0 &&
          listRequest.map((request, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.hospitalName}</TableCell>
                <TableCell>{request.doctorID}</TableCell>
                <TableCell>{request.mobile}</TableCell>

                <TableCell>{request.typeOfBlood}</TableCell>
                <TableCell>{request.quanlity}</TableCell>
                <TableCell>
                  <DeleteDialog onDelete={() => handleDelete(request)} />
                </TableCell>
              </TableRow>
            )
          }

          )}
        {listRequest && listRequest.length === 0 && <TableCell>Not found data</TableCell>}
      </TableBody>
    </Table>
  );
}
