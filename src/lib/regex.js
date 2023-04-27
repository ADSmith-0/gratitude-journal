/* eslint-disable no-useless-escape */
const email = "^[\\w|\\d]+(\\.[\\w|\\d]+)*@[\\w|\\d]+(\\.[\\w|\\d]+)+$";
const number = "\\d+";
const text = "[a-zA-Z]+";
const any = ".*";

const regexPatterns = {
    email,
    number,
    text,
    any
};

export default regexPatterns;