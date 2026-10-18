import React from "react";

// Company logo on a white plate, or its monogram when no logo is available.
export default function CompanyMark({ role, className = "" }) {
  return (
    <span className={`company-mark ${role.logo ? "company-mark--logo" : ""} ${className}`.trim()} aria-hidden="true">
      {role.logo ? <img src={role.logo} alt="" draggable="false" /> : role.monogram}
    </span>
  );
}
