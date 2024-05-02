"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() { 
    const router = useRouter();
    const logout = async () => { 
        try {
            const response = await axios.get('https://localhost:7098/api/UserAPI/Signout');
            console.log("logout success", response.data);
            toast.success("Logout success");
            router.push("/login");

            document.cookie = "token=; expires=" + new Date().toUTCString() + "; path=/;";
        }
        catch (error: any) {
            console.log("logout failed", error.message);
            toast.error("Logout failed");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <hr />
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >LogOut</button>
        </div>
    );
}