import React, { useState } from "react";

const Otp = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered OTP is: ${otp.join("")}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">OTP Verification</h2>
                <p className="text-gray-600 mt-2">
                    Enter the 6-digit OTP sent to your email/phone
                </p>

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
                        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Verify OTP
                    </button>
                </form>

                {/* Resend link */}
                <p className="mt-4 text-sm text-gray-600">
                    Didn’t receive code?{" "}
                    <button className="text-blue-600 hover:underline">
                        Resend OTP
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Otp;
