"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

const RequestRa = ({ onClose, request }) => {
    const { regNo } = useParams();
    const router = useRouter();

    const [formData, setFormData] = useState({
        full_name: "",
        mobile_number: "",
        email: "",
        id: regNo || 0,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const payload = {
                ...formData,
                sebi: regNo,
                request_type: request ? "onboard" : "remove",
            };

            const response = await fetch(
                "http://localhost:5000/requestRa",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Something went wrong"
                );
            }

            console.log("Request submitted:", result);

            toast("Request submitted successfully!");

            onClose();

            router.push("/research-analysts");

        } catch (error) {
            console.error("Submit error:", error);

            toast.error(
                error.message || "Failed to submit request"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Toaster />
            {/* Close Button */}
            <span className="flex items-end justify-end px-5 text-end">
                <X
                    className="cursor-pointer text-white"
                    onClick={onClose}
                />
            </span>

            <div className="w-full max-w-170 rounded-[18px] border border-slate-200 bg-white p-7 shadow-sm">

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Full Name + Mobile Number */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Full Name */}
                        <div>
                            <label className="mb-2 block text-[15px] font-bold text-slate-900">
                                Full Name*
                            </label>

                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Nitesh Jain"
                                required
                                className="h-12 w-full rounded-[9px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="mb-2 block text-[15px] font-bold text-slate-900">
                                Mobile Number*
                            </label>

                            <input
                                type="tel"
                                name="mobile_number"
                                value={formData.mobile_number}
                                onChange={handleChange}
                                placeholder="9876543210"
                                required
                                className="h-12 w-full rounded-[9px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                            />
                        </div>

                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-[15px] font-bold text-slate-900">
                            Email*
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                            className="h-12 w-full rounded-[9px] border border-slate-200 bg-white px-4 text-[16px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                        />
                    </div>

                    {/* Request Type */}
                    <div>
                        <label className="mb-2 block text-[15px] font-bold text-slate-900">
                            Request Type*
                        </label>

                        <div className="flex w-full rounded-[9px] border border-slate-200 bg-slate-50 p-1">

                            <div
                                className={`flex w-full items-center justify-center gap-2 rounded-[7px] px-4 py-3 text-[15px] font-bold ${
                                    request === true
                                        ? "bg-emerald-500 text-white"
                                        : "bg-red-600 text-white"
                                }`}
                            >
                                {request === true
                                    ? "Get Onboard"
                                    : "Remove"}
                            </div>

                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="h-12.5 w-full rounded-full bg-emerald-500 text-[16px] font-bold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading
                            ? "Sending..."
                            : "Send Message"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default RequestRa;