"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ViewDialog } from "./view-dialog";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAllDonorInfor, postRequestBloodFromAdmin } from '@/app/services/apiService';

interface Donor {
  id: string;
  userId: string;
  fullname: string;
  email: string;
  gender: string;
  typeOfBlood: string;
  mobile: string;
  city: string;
}

export function TableDonors() {
  const [listDonorInfor, setListDonorInfor] = useState<Donor[]>([]);

  useEffect(() => {
    fetchListDonorInfor();
  }, []);

  const fetchListDonorInfor = async () => {
    const api = '/api/admin/get-donor-infor';
    try {
      const res: any = await getAllDonorInfor(api);
      if (res && res.EC === 0) {
        setListDonorInfor(res.DT);
      }
    } catch (error) {
      console.error('Error fetching request list:', error);
      toast.error('An error occurred while fetching request list.');
    }
  }

  const saveRequestData = async (requestData: Donor & { message: string }) => {


    console.log('requestData', requestData);
    const api = '/api/request-blood-from-admin';

    try {
      // const res = await axios.post(api, requestData, {
      //     headers: {
      //         Authorization: `Bearer ${localStorage.getItem("jwt")}`
      //     }
      // });
      const res: any = await postRequestBloodFromAdmin(api, requestData);
      if (res && res.EC === 0) {
        toast.success(res.EM);
      } else {
        toast.error(res.EM);
      }
    } catch (error) {
      console.error('Error saving request data:', error);
      toast.error('An error occurred while saving request data.');
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>User Id</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listDonorInfor && listDonorInfor.length > 0 && listDonorInfor.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{item.userId}</TableCell>
            <TableCell>{item.fullname}</TableCell>
            <TableCell>{item.mobile}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.typeOfBlood}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>
              <ViewDialog donor={item} onSendRequest={(message: string) => {
                // Handle sending request
                const requestData = {
                  ...item,
                  message
                };
                // Gọi API để lưu dữ liệu vào database
                saveRequestData(requestData);
              }} />
            </TableCell>
          </TableRow>
        ))}
        {listDonorInfor && listDonorInfor.length === 0 && <TableCell>Not found data</TableCell>}
      </TableBody>
    </Table>
  );
}
