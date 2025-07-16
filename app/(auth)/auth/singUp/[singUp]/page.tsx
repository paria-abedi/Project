import dynamic from "next/dynamic";
const Register = dynamic(() => import("@/components/auth/singUp/Register"));
const VerifySingUp = dynamic(
  () => import("@/components/auth/singUp/VerifySingUp")
);

interface SingUpType {
  params: Promise<{ singUp: "register" | "VerifySingUp" }>;
}

export default async function SingUpPage({ params }: SingUpType) {
  const render = (key: "register" | "VerifySingUp") => {
    switch (key) {
      case "register":
        return <Register />;
      case "VerifySingUp":
        return <VerifySingUp />;
      default:
        return <Register />;
    }
  };

  return <>{render((await params).singUp)}</>;
}
