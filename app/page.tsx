import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginButtonProps } from "@/components/auth/login_button";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-red-500">
        <div className="space-y-6 text-center">
          <div className="text-6xl font-semibold text-black">RedBlood</div>
          <p className="text-black text-lg">Best place for blood management</p>
          <div>
            <LoginButtonProps>
              <Button variant="secondary" size="lg">
                Sign In
              </Button>
            </LoginButtonProps>
          </div>
        </div>
      </main>
    </>
  );
}
