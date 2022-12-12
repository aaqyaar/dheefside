import { LoadingScreen } from "components";
import Avatar from "components/Avatar";
import { useAuth } from "contexts/AuthContext";
import { FiClock, FiDollarSign, FiUsers } from "react-icons/fi";
import { fDate, fTime } from "utils/formatDate";
import { useGetBookingQuery } from "__generated__/generated";

export default function UserProfile() {
  const { auth } = useAuth();
  const { data, loading } = useGetBookingQuery({
    variables: { email: auth.user.email },
  });

  if (loading) return <LoadingScreen />;
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
          {data?.booking.map((booking: any, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-none"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold">{booking.software}</h1>
                  <h2 className="text-sm text-gray-400">{booking.firstName}</h2>

                  <div className="flex items-center space-x-2">
                    <FiClock className="text-gray-400 text-xl" />
                    <h2 className="text-sm text-gray-400">
                      {booking.createdAt && fDate(booking.createdAt)}
                    </h2>

                    <FiUsers className="text-gray-400 text-xl" />
                    <h2 className="text-sm text-gray-400">
                      {booking.software.users} users
                    </h2>

                    <FiDollarSign className="text-gray-400 text-xl" />
                    <h2 className="text-sm text-gray-400">
                      {booking.software.price} $
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold">Booked On</h1>
                  <h2 className="text-sm text-gray-400">
                    {booking.createdAt && fTime(booking.createdAt)}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
