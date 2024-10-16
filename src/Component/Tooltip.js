import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BotIcon from "@mui/icons-material/SmartToy"; // Bot Icon
import UserIcon from "@mui/icons-material/AccountCircle"; // User Icon
import { grey, green, red, blue, purple, yellow } from "@mui/material/colors"; // Colors
import { SvgIcon } from "@mui/material"; // Import SvgIcon for custom icon
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Eye icons
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; // Thumbs up icon from MUI
import ThumbDownIcon from "@mui/icons-material/ThumbDown"; // Thumbs down icon from MUI

// Create a ClosedEyeIcon component using SVG
const ClosedEyeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 4.5C6.5 4.5 2.5 9 2.5 9c-.8 1.2-.8 2.7 0 3.9 0 0 4 4.5 9.5 4.5s9.5-4.5 9.5-4.5c.8-1.2.8-2.7 0-3.9 0 0-4-4.5-9.5-4.5zm0 10.5c-4.1 0-7.5-3.4-7.5-3.4s3.4-3.4 7.5-3.4 7.5 3.4 7.5 3.4-3.4 3.4-7.5 3.4zM15 9h-6v1.5h6V9z" />
  </SvgIcon>
);

export const Transcription = () => {
  const [isTranscriptionVisible, setTranscriptionVisible] = useState(false);

  // Function to toggle visibility
  const toggleTranscription = () => {
    setTranscriptionVisible((prev) => !prev);
  };

  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: "10px",
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
        marginBottom: 4,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          left: "62.5%",
          transform: "translateX(-50%)",
          top: "-10px",
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "10px solid #f9f9f9",
        },
      }}
    >
      <Typography variant="h4" component="h4" gutterBottom>
        Resume of transcription
      </Typography>
      <Typography variant="body1" gutterBottom>
        The customer said his signal was lost this afternoon and requested
        support through a technical visit. He confirmed that he made all steps
        to reset the equipment, but the problem keeps happening. We suggest
        waiting a couple of hours to restore the signal in the area, but the
        customer was important.
      </Typography>
      <Typography
        variant="h6"
        component="h5"
        display="flex"
        alignItems="center"
      >
        Transcription Details
        {isTranscriptionVisible ? (
          <Visibility sx={{ fontSize: 24, marginRight: 1 }} /> // Open eye icon
        ) : (
          <ClosedEyeIcon sx={{ fontSize: 24, marginRight: 1 }} /> // Closed eye icon
        )}
      </Typography>
      <Typography
        variant="body2"
        onClick={toggleTranscription}
        sx={{
          cursor: "pointer",
          
          marginBottom: 2,
        }}
      >
        {isTranscriptionVisible ? "Click to close" : "Click to Show"}
      </Typography>

      {isTranscriptionVisible && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 2,
            borderRadius: "10px",
          }}
        >
          {/* Bot and User Chat Box */}
          <Box sx={{ width: "60%", padding: 2 }}>
            {/* Bot Chat */}
            <Box display="flex" alignItems="center" mb={2}>
              <BotIcon sx={{ fontSize: 40, color: grey[700], mr: 1 }} />
              <Box
                sx={{
                  backgroundColor: grey[300],
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: "60%",
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1">
                  Hello! How can I assist you today?
                </Typography>
              </Box>
            </Box>

            {/* User Chat */}
            <Box display="flex" alignItems="center" mb={2}>
              <UserIcon sx={{ fontSize: 40, color: grey[700], mr: 1 }} />
              <Box
                sx={{
                  backgroundColor: green[100],
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: "60%",
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1">
                  Hi, I need help with my account settings.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Chat Options Box */}
          <Box sx={{ width: "30%", padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginLeft: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  borderRadius: "24px",
                  border: "2px solid blue",
                  color: "blue",
                  padding: 1,
                  marginBottom: 1,
                  textAlign: "center",
                  boxShadow: 1,
                }}
              >
                1. Technical Problem
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  borderRadius: "24px",
                  border: "2px solid blue",
                  color: "blue",
                  padding: 1,
                  marginBottom: 1,
                  textAlign: "center",
                  boxShadow: 1,
                }}
              >
                2. Change your plan
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  borderRadius: "24px",
                  border: "2px solid blue",
                  color: "blue",
                  padding: 1,
                  textAlign: "center",
                  boxShadow: 1,
                }}
              >
                3. Change Language
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Client's Emotion and Tips for GreeAi Section */}
      <Box display="flex" alignItems="flex-start" mb={1}>
        {/* Client's Emotion Section (Left Side) */}
        <Box
          sx={{
            flex: 1,
            marginRight: 4,
            backgroundColor: "#4dc9bf", // Left section background color
            padding: 2,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" component="h6" gutterBottom>
            Client's Emotion
          </Typography>

          {/* Emojis Section */}
          <Box display="flex" justifyContent="center" alignItems="center"mt={1}>
            <Typography
              variant="h5"
              sx={{ color: red[500], fontSize: "2rem", marginRight: 2 }}
            >
              😡 {/* Angry emoji */}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: green[500], fontSize: "2rem", marginRight: 2 }}
            >
              😊 {/* Happy emoji */}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: blue[500], fontSize: "2rem", marginRight: 2 }}
            >
              😐 {/* Neutral emoji */}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: purple[500], fontSize: "2rem", marginRight: 2 }}
            >
              😢 {/* Sad emoji */}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: yellow[700], fontSize: "2rem" }}
            >
              🤩 {/* Excited emoji */}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2} mt={1}>
            <BotIcon sx={{ fontSize: 40, color: grey[700], mr: 1 }} />
            <Box>
              <Typography variant="body1">
                Client is upset with the service.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Tips for GreeAi Section (Right Side) */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#ebf1f6", // Right section background color
            padding: 2,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" component="h6" gutterBottom>
            Tips for GreeAi
          </Typography>
          <Box display="flex" flexDirection="column">
            <Typography variant="body1"> Show confidence;</Typography>
            <Typography variant="body1">Maybe telling him that you will resolve</Typography>
            <Typography variant="body1">
            the issue soon would be good.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // Align icons to the left
                gap: 2, // Space between icons
                marginTop: 1, // Space above icons
              }}
            >
              <ThumbUpIcon sx={{ color: "green", fontSize: 30 }} />
              <ThumbDownIcon sx={{ color: "red", fontSize: 30 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
