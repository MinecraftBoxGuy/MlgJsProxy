//set up Proxy
const kewlobject = require("../index")({}, {});

//set a
kewlobject.LOOOOOOOOOOOOOOOOOOOOOOOOL4REEEEEKT = "hi";

//get a
console.log(kewlobject.LOOOOOOOOOOOOOOOOOOOOOOOOL4REEEEEKT);

//custom options replace must be regex
const options = {
  replace: {
    "1": "I",
  }
};

const kewlerobject = require("../index")({}, options);

//set aI
kewlerobject.LOOOOOOOOOOOOOOOOOOOOOOOOL4REEEEEKT1 = "hi";

//get aI
console.log(kewlerobject.LOOOOOOOOOOOOOOOOOOOOOOOOL4REEEEEKT1);

//log them
console.log(kewlobject);
console.log(kewlerobject);
