import React from "react";
import { useAppSelector } from "../../../store/hooks";
import formatDate from "../../../lib/formatDate";

const ViewsAndDate: React.FC = () => {
  const { views, createdAt } = useAppSelector(({ videos }) => ({
    views: videos.video?.views,
    createdAt: videos.video?.createdAt,
  }));

  return (
    <div className="view--actions__container__views">
      <div className="views">
        <span>{views?.toLocaleString()}</span>
        &nbsp;
        <span>views</span>
      </div>
      <span className="date">{formatDate(createdAt, "verbal")}</span>
    </div>
  );
};

export default ViewsAndDate;
