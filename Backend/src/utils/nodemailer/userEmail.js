import transporter from "../../libs/nodemailer.libs.js";

const sendRegisterationEmail = async (email) => {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome to Our Service",
        text: "Thank you for registering with us!",
    };
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending registration email:", error);
    }
};

const sendLoginEmail = async (email) => {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Login Notification",
        text: "You have successfully logged in to your account.",
    };
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending login email:", error);
    }
};

const sendPasswordResetEmail = async (email, otp) => {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Password Reset Request",
        text: `Your OTP for password reset is: ${otp}`,
    };
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending password reset email:", error);
    }
};

export {
    sendRegisterationEmail,
    sendLoginEmail,
    sendPasswordResetEmail,
};