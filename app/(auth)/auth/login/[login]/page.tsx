import dynamic from "next/dynamic";
const VerifyEmail = dynamic(
  () => import("@/components/auth/login/VerifyEmail")
);
const VerifyCode = dynamic(() => import("@/components/auth/login/VerifyCode"));

interface LoginType {
  params: Promise<{ login: "verifyEmail" | "verifyCode" }>;
}

export default async function LoginPage({ params }: LoginType) {
  const render = (key: "verifyEmail" | "verifyCode") => {
    switch (key) {
      case "verifyEmail":
        return <VerifyEmail />;
      case "verifyCode":
        return <VerifyCode />;
      default:
        return <VerifyEmail />;
    }
  };

  return <>{render((await params).login)}</>;
}
