let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = true;

let runnersAge = Math.floor(Math.random() * 60);

if (isRegisteredEarly && runnersAge > 18) raceNumber += 1000;

if (runnersAge > 18 && isRegisteredEarly)
  console.log(`You race starts at 9:30am, ${raceNumber}`);
else if (runnersAge > 18 && !isRegisteredEarly)
  console.log(`You race starts at 11:00am, ${raceNumber}`);
else if (runnersAge < 18)
  console.log(`You race starts at 12:30pm, ${raceNumber}`);
else if (runnersAge === 18)
  console.log(`See the registration desk ${raceNumber}`);
