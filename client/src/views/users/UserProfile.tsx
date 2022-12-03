import { useAuth } from "contexts/AuthContext";

export default function UserProfile() {
  const { auth, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div>
        <h1 className="text-2xl font-bold text-indigo-500">User Profile</h1>
        <img
          src={
            auth?.user?.avatar ||
            "https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
          }
          alt="avatar"
          className="w-32 h-32 rounded-full"
        />
        <h1 className="text-xl font-bold text-indigo-500 mt-4">
          {auth?.user?.name}
        </h1>
        <h1 className="text-xl font-bold text-indigo-500 mt-4">
          {auth?.user?.email}
        </h1>

        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded mt-4 hover:bg-indigo-600"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
