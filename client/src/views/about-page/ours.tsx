import React from "react";

export default function OursAbout() {
  return (
    <div className="grid grid-cols-12 gap-8 mt-2">
      {data.map((item) => (
        <div className="col-span-12 lg:col-span-6 mt-4">
          <h1 className="text-2xl font-[600]">{item.title}</h1>
          <p className="prose text-lg font-light my-2">
            <span dangerouslySetInnerHTML={{ __html: item.description }} />
          </p>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "Our environment is a direct reflection of our people as a collective spirit dedicated to supporting our customers while positively impacting the world around us. Refreshing, intelligent, creative, and transparent. This is Dheefside; our strengths and differences are people, processes, and technology.",
    type: "right",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "Dheefside continuously adopts the most innovative technologies, pays attention to peoplecentered principles, and pursues the most effective, agile, and sustainable solutions that are unmatched in and out of space, We are committed to providing the best services to our customers and partners.",
    type: "left",
  },
];
