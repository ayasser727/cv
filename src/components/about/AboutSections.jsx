import React from "react";
import PageLayout from "../Layouts/PageLayout";
import SectionTitle from "../section-title/SectionTitle";
import { Grid } from "@mui/material";
import AboutInfo from "./AboutInfo";
import SkillCard from "../cards/SkillCard";
import { Skills } from "@/common/data";

function AboutSections() {
  return (
    <PageLayout className="animate__animated" id="about">
      <SectionTitle title="About" subTitle="Me" />
      <AboutInfo />
      <SectionTitle title="What" subTitle="I Do" />

      <Grid container>
        {Skills.map((skill) => (
          <Grid item lg={6} key={skill.title}>
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
}

export default AboutSections;
