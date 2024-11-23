import React from "react";

export interface InfoProps {
  text: string; // Define props for the components, e.g., a `text` string
}

export const Info: React.FC<InfoProps> = ({ text }) => {
  return <div>{text}</div>;
};

export const InfoEyebrow: React.FC<InfoProps> = ({ text }) => {
  return <div style={{ fontStyle: "italic", fontSize: "12px" }}>{text}</div>;
};

export const InfoSubtitle: React.FC<InfoProps> = ({ text }) => {
  return <div style={{ fontWeight: "bold", fontSize: "14px" }}>{text}</div>;
};

export const InfoTitle: React.FC<InfoProps> = ({ text }) => {
  return <h1 style={{ fontSize: "24px" }}>{text}</h1>;
};
