import React from "react";
import PageLayout from "../Layouts/PageLayout";
import SectionTitle from "../section-title/SectionTitle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import SmallSectionTitle from "../section-title/SmallSectionTitle";
import ProgressCard from "../cards/ProgressCard";

function ResumeSection() {
  return (
    <PageLayout className="animate__animated" id="resume">
      <SectionTitle title="Resume" />
      <Grid container>
        <Grid item sm={9} xs={12}>
          <Box>
            <SmallSectionTitle title="E D U C A T I O N" />
          </Box>
          <Timeline
            position="right"
            sx={{ padding: "0", mb: "20px", overflow: "hidden" }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ flex: 0, fontSize: "12px" }}
                color="text.secondary"
              >
                2017 - 2022 Al-Safwa High Instituteof Engineering
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ wordBreak: "break-all" }} variant="body1">
                  COMMUNICATION ENGINEERING
                </Typography>
                <List dense disablePadding>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Graduation degree Very good with honors" />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Worked on multiple projects" />
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item sm={3} xs={12}>
          {/* <Box>
            <SmallSectionTitle title="Design" subTitle="Skills" />
          </Box>
          <ProgressCard skill="ENGINEERING" precent="90" /> */}
        </Grid>

        <Grid item sm={8} xs={12}>
          <Box>
            <SmallSectionTitle title="E X P E R I E N C E" />
          </Box>
          <Timeline
            position="right"
            sx={{ padding: "0", mb: "20px", overflow: "hidden" }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ flex: 0, fontSize: "12px" }}
                color="text.secondary"
              >
                Sep, 2021 - Now IT Specialist
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ wordBreak: "break-all" }} variant="body1">
                  BALANCE OF TRANSLATION
                </Typography>
                <List dense disablePadding>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Remote help for more than 60 users" />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="troubleshooting to fix their issues and Providing advice support on a permanent basis." />
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ flex: 0, fontSize: "12px" }}
                color="text.secondary"
              >
                Jan, 2021 - Jul, 2021 IT Specialist
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ wordBreak: "break-all" }} variant="body1">
                  DRAZ Academy
                </Typography>
                <List dense disablePadding>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Troubleshoot the educational platform." />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Help the faculty and the students to use the platform" />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Creat up the platform and the using mechanism." />
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ flex: 0, fontSize: "12px" }}
                color="text.secondary"
              >
                May, 2010 - Now DAILY User{" "}
                <span component="span" style={{ color: "transparent" }}>
                  Specialist
                </span>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ wordBreak: "break-all" }} variant="body1">
                  Professional Windows user
                  <br /> and troubleshooting
                </Typography>
                <List dense disablePadding>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Constant use of the Windows OS and comprehensive knowledge of it." />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Troubleshoot for Windows OS." />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Observe system updates and discovering vulnerabilities." />
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box>
            <SmallSectionTitle title="Knowledges" />
          </Box>
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Programming"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Networking"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Windows,
            Malware Analysis"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Encryption"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="FTK"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Bash"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Bash"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Linux"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Python"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Wireshark"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Hydra"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="IDA Pro"
          />
          <Box sx={{ mt: 4 }}>
            <SmallSectionTitle title="Soft" subTitle="Skills" />
          </Box>
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Communication"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Leadership"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Teamwork"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Problem-Solving"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Critical Thinking"
          />
          <Chip
            sx={{ bgcolor: "primary.main", mx: 0.2, my: 0.2 }}
            label="Time Management"
          />
        </Grid>

        <Grid item xs={12}>
          <Box>
            <SmallSectionTitle title="T R A I N I N G" />
          </Box>
          <Timeline
            position="right"
            sx={{ padding: "0", mb: "20px", overflow: "hidden" }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ flex: 0, fontSize: "12px" }}
                color="text.secondary"
              >
                Feb, 2023 - May, 2023 Advanced CyberSecurity
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ wordBreak: "break-all" }} variant="body1">
                  Digital Egypt Youth Initiative, (NTI), New Capital.
                </Typography>
                <List dense disablePadding>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Technical Modules: (288 hrs)"
                      secondary="RedHat (Admin I, II), Network Security, Cyber Ops, Python for Security, and CCNP Security."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Business Skills Modules: (132 hrs)"
                      secondary="Soft Skills, Business English, Project Management, and Freelancing Skills."
                    />
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ flex: 0, fontSize: "12px" }}
                color="text.secondary"
              >
                May, 2021 - Sep, 2021 Incident Response Trainee{" "}
                <span style={{ color: "transparent" }}>CyberSecurity</span>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={{ wordBreak: "break-all" }} variant="body1">
                  TREND MICRO & CYBERTALENTS
                </Typography>
                <List dense disablePadding>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Worked on Many Reverse Engineering projects." />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Solve challenges professionally." />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="high final score and Solve the final exam challenges well." />
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default ResumeSection;
