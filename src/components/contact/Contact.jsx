import React, { useState } from "react";
import PageLayout from "../Layouts/PageLayout";
import SectionTitle from "../section-title/SectionTitle";
import { Grid, TextField } from "@mui/material";
import ContactCard from "../cards/ContactCard";
import { contact } from "@/common/data";
import SmallSectionTitle from "../section-title/SmallSectionTitle";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CustomButton from "../cutom-btn/CustomButton";
import axios from "axios";
import { toast } from "react-toastify";
function Contact() {
  const [cred, setCred] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/contact", cred)
      .then((e) => {
        toast.success("Thank You..!");
        setCred({ name: "", email: "", subject: "", message: "" });
      })
      .catch((e) => toast.success("Error While Submting Form"));
  };
  return (
    <PageLayout className="animate__animated" id="contact">
      <SectionTitle title="Contact" />
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          {contact.map((cont) => (
            <ContactCard contact={cont} key={cont.info} />
          ))}
        </Grid>
        <Grid item sm={8} xs={12}>
          <SmallSectionTitle title="How Can I " subTitle="Help You?" />
          <Grid container spacing={2} component="form" onSubmit={onSubmit}>
            <Grid item lg={6} xs={12}>
              <TextField
                name="name"
                value={cred.name}
                onChange={onChange}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                sx={{ mb: 2, mr: 2 }}
                fullWidth
                required
              />
              <TextField
                name="email"
                value={cred.email}
                onChange={onChange}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                name="subject"
                value={cred.subject}
                onChange={onChange}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextareaAutosize
                name="message"
                value={cred.message}
                onChange={onChange}
                style={{
                  background: "transparent",
                  padding: "10px",
                  color: "#fff",
                  width: "100%",
                }}
                placeholder="Message"
                minRows={12}
                required
              />
            </Grid>
            <Grid lg={12} item>
              <CustomButton type="submit">Submit</CustomButton>
            </Grid>
          </Grid>
        </Grid>
        {/* test */}
      </Grid>
    </PageLayout>
  );
}

export default Contact;
