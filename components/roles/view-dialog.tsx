import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"

export function ViewDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-2 bg-cyan-500 hover:bg-cyan-600" >
                    Send Request
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Profile</DialogTitle>
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
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            defaultValue="nancy@gmail.com"
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
                        <Input
                            id="type"
                            defaultValue="B+"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="gender" className="text-right">
                            Gender
                        </Label>
                        <Input
                            id="gender"
                            defaultValue="female"
                            className="col-span-3"
                        />
                    </div>
                    <div >
                        <Textarea placeholder="Type your message here." />
                    </div>
                </div>
                <DialogFooter>
                    <Button name="send-request" type="submit">Send request</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
