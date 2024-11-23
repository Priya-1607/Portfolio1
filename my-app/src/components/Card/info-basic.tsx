import React, { ReactNode } from 'react';

// Define types for component props
interface InfoProps {
  children: ReactNode;
  useStyles: () => InfoStyles;
}

interface InfoEyebrowProps {
  children: ReactNode;
}

interface InfoTitleProps {
  children: ReactNode;
}

interface InfoSubtitleProps {
  children: ReactNode;
}

// Define types for styles returned by useStyles
interface InfoStyles {
  eyebrow: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
}

// Main Info component with a custom `useStyles` prop
export const Info: React.FC<InfoProps> = ({ children, useStyles }) => {
  const styles = useStyles();
  return <div style={styles}>{children}</div>;
};

// Sub-components for InfoEyebrow, InfoTitle, and InfoSubtitle
export const InfoEyebrow: React.FC<InfoEyebrowProps> = ({ children }) => (
  <div style={{ textTransform: 'uppercase', fontSize: 12 }}>{children}</div>
);

export const InfoTitle: React.FC<InfoTitleProps> = ({ children }) => (
  <h1 style={{ fontSize: 20, fontWeight: 'bold' }}>{children}</h1>
);

export const InfoSubtitle: React.FC<InfoSubtitleProps> = ({ children }) => (
  <h2 style={{ fontSize: '0.8rem' }}>{children}</h2>
);
