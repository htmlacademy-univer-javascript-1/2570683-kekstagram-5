/* eslint-disable no-console */
const isMeetingWithinWorkingHours = (startWork, endWork, startMeeting, meetingDuration) => {
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;

  return (startMeetingMinutes >= startWorkMinutes) && (endMeetingMinutes <= endWorkMinutes);
};

console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));     // true
console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900)); // false
