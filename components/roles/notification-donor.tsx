"use client";

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getNotificationByDonorId } from '@/app/services/apiService';

export function DonorMessages() {
    const [notifications, setNotifications] = useState([
        {

            messageFromAdmin: "Xin chào, tôi muốn đăng ký hiến máu."
        },
        {

            messageFromAdmin: "Tôi sẽ đến bệnh viện vào ngày mai."
        },
    ]);

    useEffect(() => {
        fetchNotificationByDonorId();
    }, []);

    const fetchNotificationByDonorId = async () => {
        let userId = localStorage.getItem("userId")
        const api = `/api/get-notification-by-donorid?userId=${userId}`;
        try {
            const res: any = await getNotificationByDonorId(api);
            if (res && res.EC === 0) {
                setNotifications(res.DT);
            }
        } catch (error) {
            console.error('Error fetching ', error);
            toast.error('An error occurred while fetching ');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" bg-white p-8 border rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Notifications</h2>
                <div className="space-y-4">
                    {notifications.map((notification, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                            <h3 className="text-xl font-semibold mb-2">Message from ADMIN</h3>
                            <p className="text-gray-800"><strong>Message:</strong> {notification.messageFromAdmin}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
