export default function Clients() {
  return (
    <div className="bg-secondary font-inter overflow-hidden">
      <div className="px-8 py-20">
        <div className="flex justify-center items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-100">
            Trusted by over 1000+ companies worldwide to manage their business
            and grow their revenue online with our all-in-one platform.
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-8 gap-8">
          {clients.map((item, i) => (
            <img
              src={item.logo}
              key={i}
              alt={item.name}
              className="w-20 h-20"
            />
          ))}
        </div>

        {/*  */}
      </div>
    </div>
  );
}

const clients = [
  {
    name: "Slack",
    logo: "/images/slack.svg",
  },
  {
    name: "Google",
    logo: "/images/google.svg",
  },

  {
    name: "Microsoft",
    logo: "/images/microsoft.svg",
  },

  {
    name: "Spotify",
    logo: "/images/spotify.svg",
  },
  {
    name: "Airbnb",
    logo: "/images/airbnb.svg",
  },
];
