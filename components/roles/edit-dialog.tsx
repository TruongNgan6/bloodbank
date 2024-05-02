import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EditDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-2 bg-amber-500 hover:bg-amber-600">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Donors</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="full-name" className="text-right">
                            Full Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Nancy"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phoneNo" className="text-right">
                            Phone No.
                        </Label>
                        <Input
                            id="phoneNo"
                            defaultValue="0987654321"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="city" className="text-right">
                            City
                        </Label>
                        <Input
                            id="city"
                            defaultValue="Ho Chi Minh"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                            Type
                        </Label>
                        <Select>
                            <SelectTrigger id="type">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="a-">A-</SelectItem>
                                <SelectItem value="a+">A+</SelectItem>
                                <SelectItem value="b-">B-</SelectItem>
                                <SelectItem value="b+">B+</SelectItem>
                                <SelectItem value="ab-">AB-</SelectItem>
                                <SelectItem value="ab+">AB+</SelectItem>
                                <SelectItem value="o-">O-</SelectItem>
                                <SelectItem value="o+">O+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="gender" className="text-right">
                            Gender
                        </Label>
                        <Select>
                            <SelectTrigger id="gender">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="a-">Male</SelectItem>
                                <SelectItem value="a+">Female</SelectItem>
                                <SelectItem value="b-">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
