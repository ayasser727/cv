import React from "react";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

const BorderLinearBox = styled(Box)(({ theme }) => ({
  padding: "4px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 10,
}));
function ProgressCard({ precent, skill }) {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.primary">
          {skill}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {precent}%
        </Typography>
      </Box>
      <BorderLinearBox>
        <BorderLinearProgress variant="determinate" value={precent} />
      </BorderLinearBox>
    </Box>
  );
}

export default ProgressCard;
