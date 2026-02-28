import util from "util";

const firstname = "Elham";
const lastname = "Abdussalam";

console.info(`Halo ${firstname} ${lastname}`);
console.info(util.format("Halo %s %s", firstname, lastname));

const person = {
  firstname: "Elham",
  lastname: "Abdussalam",
};

console.info(`Halo ${JSON.stringify(person)}`);
console.info(util.format("Halo %j", person));
