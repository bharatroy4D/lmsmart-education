import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function OTPPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60); // 60 sec timer
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputsRef = useRef([]);
  const { VerifyOtp, OtpSend, user } = useAuth(); // ✅ user সহ নিলাম

  const navigate = useNavigate();

  // OTP Change
  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // শুধু সংখ্যা
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    if (value && inputsRef.current[idx + 1]) {
      inputsRef.current[idx + 1].focus();
    }
  };

  // কীবোর্ড events
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && inputsRef.current[idx - 1]) {
      const newOtp = [...otp];
      newOtp[idx - 1] = "";
      setOtp(newOtp);
      inputsRef.current[idx - 1].focus();
    }
    if (e.key === "ArrowLeft" && inputsRef.current[idx - 1]) {
      inputsRef.current[idx - 1].focus();
    }
    if (e.key === "ArrowRight" && inputsRef.current[idx + 1]) {
      inputsRef.current[idx + 1].focus();
    }
  };

  // Verify button click
  const handleVerify = async () => {
    try {
      const data = {
        email: user?.email, // user থেকে email
        otp: otp.join(""), // OTP join করে পাঠাচ্ছি
      };
      const res = await VerifyOtp(data);
      console.log("Verify Response:", res);
      if (res.status === 200) {
        navigate("/dashboardLayout");
      }
    } catch (err) {
      console.log("OTP Verify Failed:", err);
    }
  };

  // Clear button
  const handleClear = () => {
    setOtp(new Array(6).fill(""));
    inputsRef.current[0].focus();
  };

  // Resend OTP
  const handleResend = async () => {
    setOtp(new Array(6).fill(""));
    setTimeLeft(60);
    setIsResendDisabled(true);

    try {
      const res = await OtpSend({ email: user?.email });
      console.log("Resend Response:", res);
      alert("A new OTP has been sent!");
    } catch (err) {
      console.log("Resend Failed:", err);
    }
  };

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white shadow-lg">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-2xl font-bold">Verify Your OTP</h2>
        </div>

        <p className="text-sm opacity-80 text-center">
          Please enter the 6-digit OTP sent to your email/phone.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mt-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-12 h-12 text-center text-lg font-semibold border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 bg-white text-gray-800"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleVerify}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>
          <button
            onClick={handleClear}
            className="w-full py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>

        {/* Resend OTP */}
        <div className="mt-4 text-center">
          {isResendDisabled ? (
            <p className="text-sm opacity-70">
              Resend available in{" "}
              <span className="font-bold">{timeLeft}s</span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-blue-500 font-semibold hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
