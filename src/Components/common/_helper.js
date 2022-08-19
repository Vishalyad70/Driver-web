import moment from "moment";
export const dateToFormat = (date, format) => moment(date).format(format);

export const generateRandom = (length = 8) => {
  var result = "";
  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charLength = char.length;
  for (var i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};
