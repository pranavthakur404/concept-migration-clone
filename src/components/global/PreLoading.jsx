import React from "react";

import loading from "../../assets/loading.svg";

const PreLoading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-start items-center">
      <img src={loading} alt="" className="w-[200px] block my-0 mx-auto" />
    </div>
  );
};

export default PreLoading;
