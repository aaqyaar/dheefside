import { Button } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "routes/paths";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl">404 Page Not Found</h1>
        <p className="text-2xl capitalize my-4">
          oops, page is not found in the server
        </p>
        <Link to={PATH.home}>
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
}
