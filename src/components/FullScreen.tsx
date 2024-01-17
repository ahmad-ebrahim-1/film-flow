import React from "react";

const FullScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        maxWidth: "1400px",
        minHeight: "100vh",
      }}
    >
      {children}
    </section>
  );
};

export default FullScreen;
