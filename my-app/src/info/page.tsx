import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info/info-basic";

const Page: React.FC = () => {
  return (
    <div>
      <Info text="This is the main info." />
      <InfoEyebrow text="Additional details in small font." />
      <InfoSubtitle text="This is a subtitle." />
      <InfoTitle text="Main Title" />
    </div>
  );
};

export default Page;
