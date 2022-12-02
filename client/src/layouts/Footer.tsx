import { Link } from "react-router-dom";
import { PATH } from "routes";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-[1240px] mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl text-white font-bold">Dheefside</h1>
            <p className="text-gray-400 prose">
              From digital customer experience to trust and safety, AI services,
              and consulting, we believe we are responsible for supporting our
              partner's success in protecting their interests through innovation
              and technology.
              <br />
              <q>
                We protect what matters most to us, you, and citizens worldwide.
              </q>
            </p>
          </div>
          {[...Array(3)].map((_, i) => (
            <div className="flex flex-col space-y-4" key={i}>
              <h1 className="text-xl text-white font-bold">
                {i === 0 ? "Company" : i === 1 ? "Services" : "Contact"}
              </h1>
              <nav>
                <ul className="space-y-2 mx-2">
                  <li>
                    <Link to={PATH.home} className="text-gray-400 no-underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH.about}
                      className="text-gray-400 no-underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH.about}
                      className="text-gray-400 no-underline"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH.contact}
                      className="text-gray-400 no-underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
