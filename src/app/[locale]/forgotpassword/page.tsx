import Button from "@/components/Common/Button/button";
import MailIcon from "@/components/Common/Icons/Mail";
import Input from "@/components/Common/Input/Input";
import Image from "next/image";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-start justify-center max-w-[1280px] container mx-auto ">
      <div className="w-1/2 p-4">
        <h2 className="text-5xl font-bold mb-2 text-start">Forgot password?</h2>
        <p className="text-start mb-6">
          Please enter the email address used to register and we will send
          password reset instructions.
        </p>
        <div className="mb-4">
          <Input
            type="email"
            className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            label="Email"
            icon={<MailIcon />}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send Email
          </Button>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 p-4 flex items-center justify-center">
        <Image
          src="/assets/images/auth-page-bg.webp"
          alt="Illustration"
          className="max-w-full h-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
