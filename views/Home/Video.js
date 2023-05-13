import React, {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const Thumbnail = styled("div")({
  backgroundImage: "url(/bg-video.jpeg)",
  width: `100%`,
  height: `100vh`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  cursor: `pointer`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderRadius: "12px",
  overflow: "hidden"
});
const PlayIconConrainer = styled("div")({
  width: `100%`,
  height: `100%`,
  backgroundColor: `rgba(36, 52, 130, 0.5)`,
  position: `relative`,
  transition: `all 0.5s cubic-bezier(0.1, 0.8, 0, 1) 0s`,
  borderRadius: "12px"
});
const PlayIconForeground = styled("img")({
  position: `absolute`,
  left: `50%`,
  top: `50%`,
  transform: `translateY(-50%) translateX(-50%)`,
  height: `100%`,
  transition: `all 0.5s cubic-bezier(0.1, 0.8, 0, 1) 0s`
});
const PlayIcon = styled("img")({
  position: `absolute`,
  left: ` 50%`,
  top: ` 50%`,
  transform: `translateY(-50%) translateX(-50%)`,
  width: `128px`,
  height: `128px`,
  transition: `all 0.5s cubic-bezier(0.1, 0.8, 0, 1) 0s`
});
const Iframe = styled("iframe")({
  border: " none",
  width: "100%",
  height: "600px",
  borderRadius: "12px"
});
const Video = () => {
  const [playivideo, setPlayvieo] = useState(false);
  return (
    <Box
      sx={{
        padding: "100px 4px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Box>

          {playivideo == false
            ? <Thumbnail>
                <PlayIconConrainer
                  className="PlayIconConrainer"
                  onClick={() => setPlayvieo(true)}
                >
                  <PlayIconForeground
                    src="/svgexport-10.svg"
                    alt=""
                    className="PlayIconForeground"
                  />
                  <PlayIcon
                    src="/svgexport-11.svg"
                    alt=""
                    className="PlayIcon"
                  />
                </PlayIconConrainer>
              </Thumbnail>
            : <Iframe frameborder="0" title="Prospuh Intro" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://www.veed.io/embed/c5f5f5c8-08c9-4af7-9709-a7421c8eff3d?watermark=0&color=green&sharing=0&title=0" />}

        </Box>
      </Container>
    </Box>
  );
};

export default Video;
