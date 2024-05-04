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

const invoices = [
    {
        id: "1",
        hospital: "Hospital01",
        doctorID: "H001-ABC",
        BG: "B+",
        bags: "2",
        phone: "022888113",
        city: "Ho Chi Minh",
        status: "disable",
    },
    {
        id: "2",
        hospital: "Hospital02",
        doctorID: "H002-ABC",
        BG: "AB+",
        bags: "3",
        phone: "022888113",
        city: "Long An",
        status: "disable",
    }
];

export function TableRequests() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Hospital</TableHead>
                    <TableHead>DoctorID</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Bags</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.hospital}</TableCell>
                        <TableCell>{invoice.doctorID}</TableCell>
                        <TableCell>{invoice.phone}</TableCell>
                        <TableCell>{invoice.city}</TableCell>
                        <TableCell>{invoice.BG}</TableCell>
                        <TableCell>{invoice.bags}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>
                            <DeleteDialog />
                        </TableCell>
                        {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
