export const sendOtp = async (email: string) => {
  const res = await fetch("/api/enquiry/send-otp", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  return res.json();
};

export const verifyOtp = async (email: string, otp: string) => {
  const res = await fetch("/api/enquiry/verify-otp", {
    method: "POST",
    body: JSON.stringify({ email, otp }),
  });
  return res.json();
};