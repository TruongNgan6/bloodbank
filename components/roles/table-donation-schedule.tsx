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

import { ConfirmDialog } from "./confirm-dialog";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import { getAllDonationScheduleByHopitalId, postCreateDonorInfor } from '@/app/services/apiService';
// interface DonationSchedule {
//     id: string;
//     fullname: string;
//     mobile: string;
//     email: string;
//     city: string;
//     hospitalId: number;
//     date: string;
//     typeOfBlood: string;
//     gender: string;
//     message: string;
// }

export function TableDonationSchedule() {
    const [listDonationSchedule, setListDonationSchedule] = useState([
        {
            id: "1",
            fullname: "fghj",
            mobile: "fghj",
            email: "fghj",
            city: "fghj",
            hospitalId: 2,
            date: "fghj",
            typeOfBlood: "fghj",
            gender: "fghj",
            message: "fghj",
        },
        {
            id: "2",
            fullname: "fghj",
            mobile: "fghj",
            email: "fghj",
            city: "fghj",
            hospitalId: 1,
            date: "fghj",
            typeOfBlood: "fghj",
            gender: "fghj",
            message: "fghj",
        },
    ]);

    useEffect(() => {
        fetchListDonationScheduleByHopitalId();
    }, []);

    const fetchListDonationScheduleByHopitalId = async () => {
        const hospitalId = localStorage.getItem("hospitalId");
        console.log('hospi:', hospitalId);
        const api = `/api/get-all-donation-schedule?hospitalId=${hospitalId}`;
        console.log('api:', api);
        try {
            const res: any = await getAllDonationScheduleByHopitalId(api);
            console.log('Error in API controller:', res);
            if (res && res.EC === 0) {
                setListDonationSchedule(res.DT);


            }
        } catch (error) {
            console.error('Error fetching list:', error);
            toast.error('An error occurred while fetching list.');

        }
    }
    //console.log("check blood", listDonationSchedule)

    const handleConfirm = async (item: any) => {
        console.log("check", item)

        const api = '/api/create-donor-infor';


        try {
            const res: any = await postCreateDonorInfor(api, item);
            if (res && res.EC === 0) {
                toast.success(res.EM);
                fetchListDonationScheduleByHopitalId();
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
                    <TableHead>Fullname</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Hospital Id</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Blood Group</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Actions</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {listDonationSchedule && listDonationSchedule.length > 0 &&
                    listDonationSchedule.map((item, index) => {
                        return (

                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.fullname}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.hospitalId}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.typeOfBlood}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.message}</TableCell>
                                <TableCell>
                                    <ConfirmDialog onConfirm={() => handleConfirm(item)} />
                                </TableCell>
                            </TableRow>
                        )
                    }

                    )}
                {listDonationSchedule && listDonationSchedule.length === 0 && <TableCell>Not found data</TableCell>}
            </TableBody>
        </Table>
    );
}
