import { Button } from "components";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "routes/paths";
import {
  useResendCodeMutation,
  useVerifyCodeMutation,
} from "__generated__/generated";
import Code from "./Code";

export default function VerifyCode() {
  const params = useParams();

  const getFirst2 = (str: string) => str.slice(0, 2);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const getLast2BeforeEmail = (str: string) => str.slice(str.indexOf("@") - 2);
  const getMiddle = (str: string) =>
    str.slice(2, str.slice(str.indexOf("@") - 2).length - 4);

  const [verifyMutation] = useVerifyCodeMutation();
  const [sendCodeMutation] = useResendCodeMutation();
  const navigate = useNavigate();

  const handleVerifyCode = async (code: string) => {
    setLoading(true);
    const res = await verifyMutation({
      variables: {
        email: params.email as string,
        code,
      },
      onCompleted: () => {
        setLoading(false);
        setSuccess(true);
      },
      onError: () => {
        setLoading(false);
        setSuccess(false);
      },
    });

    const err: any = res.errors;
    if (res.errors) {
      setLoading(false);
      setSuccess(false);
      toast.error(err.message);
    }

    if (!res.errors) {
      toast.success("Email verified successfully");
      navigate(PATH.auth.login, {
        replace: true,
      });
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    const res = await sendCodeMutation({
      variables: {
        email: params?.email,
      },
      onCompleted: () => {
        setLoading(false);
        setSuccess(true);
      },
      onError: () => {
        setLoading(false);
        setSuccess(false);
      },
    });

    const err: any = res.errors;
    if (res.errors) {
      toast.error(err.message);
    }

    if (!res.errors) {
      toast.success("Email sent successfully");
    }
  };

  return (
    <div className="md:h-[80vh] flex justify-center items-center">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white shadow-2xl shadow-gray-100 h-fit py-3 rounded-lg text-center">
              <h1 className="text-2xl font-bold">Verify your email address</h1>
              <div className="flex flex-col mt-4 max-w-sm md:max-w-md mx-auto">
                <span>
                  Enter the verification code sent to your email address to
                  verify your account and continue to the dashboard.
                </span>
                <span className="font-bold">
                  {getFirst2(params?.email as string)}
                  {getMiddle(params?.email as string).replace(/./g, "*")}
                  {getLast2BeforeEmail(params?.email as string)}
                </span>

                <span className="text-sm text-gray-500 flex justify-center items-center gap-4 mt-3">
                  Didn't receive the code?{" "}
                  <Button
                    disabled={loading}
                    className="btn btn-text"
                    onClick={handleResendCode}
                  >
                    Resend
                  </Button>
                </span>
              </div>

              <Code
                onVerifyCode={handleVerifyCode}
                success={success}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
