import React from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PauseIcon from "@mui/icons-material/Pause";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Checkmark icon

// Custom icons for each step
const stepIcons = {
  1: <HomeIcon />,
  2: <PhoneInTalkIcon />,
  3: (
    <Box display="flex" alignItems="center">
      <PauseIcon style={{ marginLeft: '20px' }} />
      <CheckCircleIcon style={{ color: 'green', marginLeft: '-5px', marginTop: '25px' }} /> {/* Checkmark next to PauseIcon */}
    </Box>
  ),
  4: <PersonIcon />,
};

const steps = ['Account Details', 'Shopping Cart', 'Payment', 'Confirmation'];

const CustomizedStepper = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  // Custom StepIconComponent to apply circular border and dynamic background color
  const CustomStepIcon = ({ icon, index }) => {
    const isActive = activeStep === index;
    const iconStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '3px solid blue', // Circular border
      color: isActive ? 'white' : 'blue', // Active step has white icon color
      backgroundColor: isActive ? 'blue' : 'white', // Active step has blue background
    };

    return <div style={iconStyle}>{icon}</div>;
  };

  return (
    <div style={{ width: '100%', marginTop: '50px', position: 'relative' }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          '& .MuiStepConnector-root': {
            top: '20px', // Adjusting connector line to center it between icons
          },
          '& .MuiStepLabel-labelContainer': {
            display: 'none', // Hides default step text
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  icon={stepIcons[index + 1]}
                  index={index}
                />
              )}
            />
          </Step>
        ))}
      </Stepper>

      {/* Adding the '8 mins' text between step 2 and step 3 */}
      <Box
        sx={{
          position: 'absolute',
          top: '0px', // Align it vertically with the Stepper icons
          left: '50%', // Position it between the second and third steps
          transform: 'translateX(-50%)', // Center it horizontally
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2">
          8 mins
        </Typography>
      </Box>

      {/* Adding the '12 mins' text between step 3 and step 4 */}
      <Box
        sx={{
          position: 'absolute',
          top: '0px', // Align it vertically with the Stepper icons
          left: '74%', // Position it between the third and fourth steps
          transform: 'translateX(-50%)', // Center it horizontally
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2">
          12 mins
        </Typography>
      </Box>
    </div>
  );
};

export default CustomizedStepper;
