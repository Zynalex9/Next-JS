import React from "react";

const adminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <aside
        style={{
          backgroundColor: "#dadada",
          marginRight: "5px",
          padding: "20px",
        }}
      >
        Admin Sidebar
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default adminLayout;
