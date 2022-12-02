import React from "react";
import styles from "styles/style";

export default function Register() {
  return (
    <section className="h-[90vh] w-full">
      <div className={`${styles.flexCol} items-center justify-center h-full`}>
        <div
          className={`${styles.flexCol} items-center justify-center space-y-4`}
        >
          <h1 className="text-2xl font-bold">Register</h1>
          <p className="text-gray-400">Create a new account</p>
        </div>
      </div>
    </section>
  );
}
