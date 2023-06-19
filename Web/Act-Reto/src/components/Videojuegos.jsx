import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function MyWebPage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Reto_VideoJuego_Final/Build/Reto_VideoJuego_Final.loader.js",
    dataUrl: "/Reto_VideoJuego_Final/Build/Reto_VideoJuego_Final.data.unityweb",
    frameworkUrl: "/Reto_VideoJuego_Final/Build/Reto_VideoJuego_Final.framework.js.unityweb",
    codeUrl: "/Reto_VideoJuego_Final/Build/Reto_VideoJuego_Final.wasm.unityweb",
  });

  const unityStyle = {
    width: "100%", // Adjust the width to your desired value
    height: "600px", // Adjust the height to your desired value
  };

  return <Unity unityProvider={unityProvider} style={unityStyle} />;
}

export default MyWebPage;