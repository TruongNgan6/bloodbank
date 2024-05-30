"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Donor {
    id: string;
    fullname: string;
    email: string;
    gender: string;
    typeOfBlood: string;
    mobile: string;
    city: string;
}

interface ViewDialogProps {
    donor: Donor;
    onSendRequest: (message: string) => void;
}

export function ViewDialog({ donor, onSendRequest }: ViewDialogProps) {
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSendRequest = () => {
        onSendRequest(message);
        setIsSent(true);
        setTimeout(() => {
            setIsOpen(false);  // Close modal after sending request
        }, 1000); // Delay to show the "Sended" state briefly
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    className={`ml-2 ${isSent ? "bg-yellow-500" : "bg-cyan-500 hover:bg-cyan-600"}`}
                    onClick={() => {
                        setIsSent(false);
                        setMessage("");
                        setIsOpen(true);
                    }}
                >
                    {isSent ? "Sended" : "Send Request"}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Profile</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullname" className="text-right">Full Name</Label>
                        <Input id="fullname" value={donor.fullname} readOnly className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="mobile" className="text-right">Mobile</Label>
                        <Input id="mobile" value={donor.mobile} readOnly className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">Email</Label>
                        <Input id="email" value={donor.email} readOnly className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="city" className="text-right">City</Label>
                        <Input id="city" value={donor.city} readOnly className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="typeOfBlood" className="text-right">Type</Label>
                        <Input id="typeOfBlood" value={donor.typeOfBlood} readOnly className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="gender" className="text-right">Gender</Label>
                        <Input id="gender" value={donor.gender} readOnly className="col-span-3" />
                    </div>
                    <div>
                        <Textarea
                            placeholder="Type your message here."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        name="send-request"
                        onClick={handleSendRequest}
                        className={`${isSent ? "bg-yellow-500" : ""} ${isSent ? "" : "bg-cyan-500 hover:bg-cyan-600"}`}
                        disabled={isSent}
                        style={{ width: "100%" }}  // Ensure the button width is consistent
                    >
                        {isSent ? "Sended" : "Send request"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
