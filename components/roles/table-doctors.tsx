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

const invoices = [
  {
    name: "Nancy",
    date: "06-06-2000",
    gender: "female",
    idCard: "0988872123122",
    BG: "B+",
    phone: "0987654321",
    city: "Ho Chi Minh",
    status: "disable",
  },
  {
    name: "Shin",
    date: "06-09-1999",
    gender: "male",
    idCard: "098883122",
    BG: "AB+",
    phone: "0988989889",
    city: "Long An",
    status: "active",
  },
];

export function TableFindDonors() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">ID</TableHead> */}
            <TableHead>Name</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Status</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.BG}>
              {/* <TableCell className="font-medium">{invoice.id}</TableCell> */}
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.phone}</TableCell>
              <TableCell>{invoice.city}</TableCell>
              <TableCell>{invoice.BG}</TableCell>
              <TableCell>{invoice.gender}</TableCell>
              <TableCell>{invoice.status}</TableCell>

              {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
