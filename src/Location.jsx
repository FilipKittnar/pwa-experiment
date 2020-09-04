import { useState, useEffect } from "react";

import React from "react";

export default function Location() {
  const [location, setLocation] = useState(() => undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLocation(coords),
      undefined,
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div>
      {location && (
        <>
          <span>{`latitude=${JSON.stringify(
            location.latitude,
            null,
            2
          )}`}</span>
          <br />
          <span>{`longitude=${JSON.stringify(
            location.longitude,
            null,
            2
          )}`}</span>
          <br />
          <span>{`altitude=${JSON.stringify(
            location.altitude,
            null,
            2
          )}`}</span>
          <br />
          <span>{`accuracy=${JSON.stringify(
            location.accuracy,
            null,
            2
          )}`}</span>
          <br />
          <span>{`altitudeAccuracy=${JSON.stringify(
            location.altitudeAccuracy,
            null,
            2
          )}`}</span>
          <br />
          <span>{`heading=${JSON.stringify(location.heading, null, 2)}`}</span>
          <br />
          <span>{`speed=${JSON.stringify(location.speed, null, 2)}`}</span>
        </>
      )}
    </div>
  );
}
