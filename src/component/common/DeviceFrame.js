import React from "react";
import LaptopFrame from "./LaptopFrame";
import DesktopFrame from "./DesktopFrame";
import TabletFrame from "./TabletFrame";
import PhoneFrame from "./PhoneFrame";

const FRAMES = {
  laptop: LaptopFrame,
  desktop: DesktopFrame,
  tablet: TabletFrame,
  phone: PhoneFrame,
};

// Picks the device for a project's screenshot from `project.frame` (laptop by default).
// Phone projects with a `gallery` show a second phone tucked behind the first.
export default function DeviceFrame({ project, eager = false, alt = "" }) {
  const Frame = FRAMES[project.frame] || LaptopFrame;
  const model = project.model || "pro";

  if (project.frame === "phone" && project.gallery?.length) {
    return (
      <div className="phone-group">
        <PhoneFrame src={project.img} alt={alt} eager={eager} model={model} className="phone-group__front" />
        <PhoneFrame src={project.gallery[0]} eager={eager} model={model} className="phone-group__back" />
      </div>
    );
  }

  return <Frame src={project.img} alt={alt} eager={eager} model={model} />;
}
