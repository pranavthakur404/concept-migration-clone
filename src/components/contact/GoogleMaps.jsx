import React from "react";

const GoogleMaps = () => {
  return (
    <div className="w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.189622304508!2d77.34699813211975!3d28.534019627054494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce670f356fd21%3A0x4c3ff857e0997214!2sLogix%20Techno%20Park!5e0!3m2!1sen!2sin!4v1715436322888!5m2!1sen!2sin"
        width={600}
        height={690}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMaps;
