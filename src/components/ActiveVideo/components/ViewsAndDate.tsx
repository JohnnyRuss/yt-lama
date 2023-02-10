import React from "react";

interface ViewsAndDateType {}

const ViewsAndDate: React.FC<ViewsAndDateType> = (props) => {
  return (
    <div className="view--actions__container__views">
      <div className="views">
        <span>7,948,154</span>
        <span>views</span>
      </div>
      <span className="date">Jun 22,2022</span>
    </div>
  );
};

export default ViewsAndDate;
