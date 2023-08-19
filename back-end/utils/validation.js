exports.emailValidator = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

exports.passwordValidator = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    return passwordRegex.test(password);
};

exports.phoneNumberValidator = (phoneNumber) => {
    const phoneNumberRegex = /^(?:\+94|0)(?:\d{9}|\d{10})$/;
    return phoneNumberRegex.test(phoneNumber);
};

exports.npnValidator = (npn) => {
    const npnRegex = /^[A-Z]{2}[A-Z]{2}\d{4}[A-Z]{2}\d{10}$/;
    return npnRegex.test(npn);
};