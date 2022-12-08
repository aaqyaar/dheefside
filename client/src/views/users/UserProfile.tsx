import Avatar from "components/Avatar";
import { useAuth } from "contexts/AuthContext";

export default function UserProfile() {
  const { auth } = useAuth();
  const photoURL = auth?.user?.avatar !== undefined ? auth?.user?.avatar : "";
  return (
    <div className="h-screen max-w-screen-xl mx-auto p-4">
      <div
        className={`h-96 w-full bg-secondary rounded-xl relative ${photoURL}`}
      >
        <div className="absolute -bottom-2 left-4 md:left-10 flex flex-col justify-center items-center">
          <div className="flex items-center">
            <Avatar
              name={auth?.user?.name}
              parentClassName="w-20 h-20 ring-2 ring-offset-2 ring-primary"
              className="text-4xl"
            />
            <div className="flex flex-col ml-4">
              <h1 className="text-2xl font-semibold text-white">
                {auth?.user?.name}
              </h1>
              <h2 className="text-sm text-gray-300">{auth?.user?.email}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* booked software */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold">Booked Softwares</h1>
        <div className="mt-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar
                name="Adobe Photoshop"
                parentClassName="w-12 h-12 ring-2 ring-offset-2 ring-primary bg-secondary"
                className="text-2xl"
              />
              <h1 className="ml-4 text-lg font-semibold">Adobe Photoshop</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-lg font-semibold">Expires in 2 days</h1>
              <button className="ml-4 text-sm text-primary font-semibold">
                Extend
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar
                name="Adobe Photoshop"
                parentClassName="w-12 h-12 ring-2 ring-offset-2 ring-primary bg-secondary"
                className="text-2xl"
              />
              <h1 className="ml-4 text-lg font-semibold">Adobe Photoshop</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-lg font-semibold">Expires in 2 days</h1>
              <button className="ml-4 text-sm text-primary font-semibold">
                Extend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
