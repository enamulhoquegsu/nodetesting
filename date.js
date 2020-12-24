module.exports.getDate = getDate;

function getDate(){
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  let today = new Date();

  return today = today.toLocaleDateString("en-US",options);

}

module.exports.getDay = getDay;
function getDay(){
  let options = {
    weekday: "long"
  }
  let today = new Date();

  return today = today.toLocaleDateString("en-US",options);

}
