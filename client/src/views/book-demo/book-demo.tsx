import { Grid } from "components";
import { FiCheck } from "react-icons/fi";
import BookDemoForm from "./book-form";

export default function BookDemo() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <Grid
        container
        xs={1}
        sm={1}
        md={2}
        lg={2}
        spacing={8}
        // className={"max-w-screen-xl p-4"}
      >
        <LeftItems />
        <BookDemoForm />
      </Grid>
    </div>
  );
}

const LeftItems = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start space-y-3">
        <h1 className="text-4xl font-bold text-gray-800 font-tertiary">
          Schedule a Demo
        </h1>
        <h3>Make hybrid work for your company!</h3>
        <br />
        <div className="flex flex-col space-y-2.5">
          {[...Array(5)].map((_, i) => (
            <div className="flex items-center space-x-2" key={i}>
              <FiCheck className="text-secondary text-xl" />
              <p>Get a demo of our platform</p>
            </div>
          ))}
        </div>

        <br />
        {/* animated video of the software */}
        <div className="w-full h-96 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};
