import { useRef, useEffect } from "react";
import "./Dots.css";

const LightSwitchboard = () => {
  const switchboardRef = useRef(null);
  const states = ["off", "medium", "high"];

  useEffect(() => {
    const switchboard = switchboardRef.current;
    if (!switchboard) return;

    const lights = Array.from(switchboard.children);

    lights.forEach((light) => {
      light.dataset.state = "off";
    });

    setInterval(() => {
      toggleLights(false);
    }, 300);
  }, []);

  const toggleLights = (hover) => {
    const switchboard = switchboardRef.current;
    if (!switchboard) return;

    const lights = Array.from(switchboard.children);

    if (hover) {
      lights.forEach((light) => {
        light.dataset.state = "off";
      });
    } else {
      const numOfLights = lights.length;
      const numOfLightsToUpdate = Math.floor(numOfLights * 0.3);
      const updatedLights = new Set();

      while (updatedLights.size < numOfLightsToUpdate) {
        const randomIndex = Math.floor(Math.random() * numOfLights);
        updatedLights.add(lights[randomIndex]);
      }

      const timeouts = [];

      updatedLights.forEach((light) => {
        const currentState = light.dataset.state;
        const random = Math.random() > 0.2;
        if (random && (currentState === "off" || currentState === "low")) {
          timeouts.push(
            setTimeout(() => {
              light.style.transform = "scale(2)";
              light.style.background = "#3291ff";
              light.style.boxShadow = "0 0 2px 1px rgba(50, 145, 255, 0.25)";
            }, getTime(100, 500))
          );
          timeouts.push(
            setTimeout(() => {
              light.style.transform = "scale(1.2)";
              light.style.background = "#fff";
              light.style.boxShadow =
                "0 0 1px 1px rgba(50, 145, 255, 0.8),0 0 2px 1px rgba(50, 145, 255, 0.25)";
            }, 250 + getTime(100, 500))
          );
          timeouts.push(
            setTimeout(() => {
              light.style.transform = "scale(1)";
              light.style.background = "#888";
            }, 2250 + getTime(100, 500))
          );
        }

        if (currentState === "high" && randomState() === "medium" && random) {
          light.dataset.state = "off";
        } else {
          light.dataset.state = randomState();
        }
      });

      return () => {
        clearTimeouts(timeouts);
      };
    }
  };

  const clearTimeouts = (arr) => {
    arr.forEach((timeout) => clearTimeout(timeout));
  };

  const getTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <div
        className="features_switchboard"
        ref={switchboardRef}
        onMouseEnter={() => toggleLights(true)}
        onMouseLeave={() => toggleLights(false)}
      >
        {Array.from({ length: 252 }).map((_, index) => (
          <div
            key={index}
            data-index={index}
            data-light="true"
            data-state="off"
          />
        ))}
      </div>
    </>
  );
};

export default LightSwitchboard;
