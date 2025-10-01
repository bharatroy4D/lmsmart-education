import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // ✅ AuthContext ইম্পোর্ট করো

const Otp = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const { VerifyOtp, OtpSend } = useAuth(); // ✅ AuthContext থেকে ফাংশন নিই
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // OTP value handle
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input automatically
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    // ✅ OTP Verify
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const code = otp.join("");
            const res = await VerifyOtp({ otp: code }); // API call
            setSuccess("OTP Verified Successfully!");
            console.log("Verify Response:", res);
        } catch (err) {
            setError(err?.message || "OTP verification failed");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Resend OTP
    const handleResend = async () => {
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const res = await OtpSend({ email: "user@email.com" }); // এখানে ইউজারের ইমেইল/ফোন পাঠাতে হবে
            setSuccess("OTP Resent Successfully!");
            console.log("Resend Response:", res);
        } catch (err) {
            setError(err?.message || "Failed to resend OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">OTP Verification</h2>
                <p className="text-gray-600 mt-2">
                    Enter the 6-digit OTP sent to your email/phone
                </p>

                {/* Error & Success Message */}
                {error && <p className="text-red-600 mt-2">{error}</p>}
                {success && <p className="text-green-600 mt-2">{success}</p>}

                {/* OTP inputs */}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex justify-between gap-2">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg focus:border-blue-500 outline-none"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                            />
                        ))}
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>

                {/* Resend link */}
                <p className="mt-4 text-sm text-gray-600">
                    Didn’t receive code?{" "}
                    <button
                        type="button"
                        onClick={handleResend}
                        className="text-blue-600 hover:underline"
                        disabled={loading}
                    >
                        {loading ? "Resending..." : "Resend OTP"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Otp;
