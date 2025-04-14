import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 12);
};

const matchPassword = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
};

export { hashPassword, matchPassword };