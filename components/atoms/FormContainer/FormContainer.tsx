// Form container that takes in child props and renders them has some margin
// and padding. This is to make sure that the form is centered on the page.

import { ReactNode } from "react";

const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white border-solid border-2 border-white shadow-lg rounded-3xl px-8 pt-6 pb-8 m-6 ">
      {children}
    </div>
  );
};

export default FormContainer;
