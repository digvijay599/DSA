function timeConversion(s) {
    // Write your code here
    s = s.split(':');
    let hours = parseInt(s[0]);
    let timeFrame = s[2].slice(2);
    let seconds = s[2].slice(0, 2);

    if ((timeFrame === 'PM') && (hours !== 12)) {
        hours += 12;
    }

    if ((hours === 12) && (timeFrame === 'AM')) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours.toString();
    } else {
        hours = hours.toString();
    }
    console.log([hours, s[1], seconds].join(':'));

}
timeConversion('07:05:45PM');