import nodemailer from "nodemailer";

const email = "ayasser727@gmail.com";
const pass = "iyrwgdpozgpvlvbb";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
