import Code from "./Code";

export default function VerifyCode() {
  return (
    <div className="md:h-[80vh] flex justify-center items-center">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white shadow-2xl shadow-gray-100 h-64 py-3 rounded-lg text-center">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">ab****mo@gmail.com</span>
              </div>

              <Code />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
