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

import { getAllBloodBank } from '@/app/services/apiService';

export function TableBlood() {
    const [listBloodBank, setListBloodBank] = useState([
        {
            id: "1",
            typeOfBlood: "B+",
            quanlity: "2",
            expirationDate: "3/3/2024"
        },
        {
            id: "2",
            typeOfBlood: "AB+",
            quanlity: "3",
            expirationDate: "3/3/2024"
        },
    ]);

    useEffect(() => {
        fetchListBloodBank();
    }, []);

    const fetchListBloodBank = async () => {

        const api = '/api/get-all-blood-bank';
        try {
            const res: any = await getAllBloodBank(api);
            //console.log('Error in API controller:', res);
            if (res && res.EC === 0) {
                setListBloodBank(res.DT);

            }
        } catch (error) {
            console.error('Error fetching list:', error);
            toast.error('An error occurred while fetching list.');
        }
    }
    console.log("check blood", listBloodBank)
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quanlity</TableHead>
                    <TableHead>Expiration Date</TableHead>
                    {/* <TableHead>Actions</TableHead> */}
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {listBloodBank && listBloodBank.length > 0 &&
                    listBloodBank.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.typeOfBlood}</TableCell>
                                <TableCell>{item.quanlity}</TableCell>
                                <TableCell>{item.expirationDate}</TableCell>
                                <TableCell>
                                    {/* <DeleteDialog /> */}
                                </TableCell>
                            </TableRow>
                        )
                    }

                    )}
                {listBloodBank && listBloodBank.length === 0 && <TableCell>Not found data</TableCell>}
            </TableBody>
        </Table>
    );
}
