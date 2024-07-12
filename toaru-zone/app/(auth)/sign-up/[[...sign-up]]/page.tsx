import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center w-full lg:max-w-lg px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]">
                        Welcome Back!
                    </h1>
                    <p className="text-base text-[#7E8CA0]">
                        Log in or Create account to get back to your dashboard!
                    </p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <ClerkLoaded>
                        <SignUp />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center bg-blue-600">
                {/* 可选：为大屏幕添加一个额外的背景或图像 */}
            </div>
        </div>
    );
}