// Flight
// We are building a simulation for birds. One part of it is to design a class called Flight, which deals with the flying of birds. This class has upTime and downTime as the properties. The class should also have a method named calculateFlight, which will return the calculated flying time. You need to complete this method.

// Here, upTime denotes the time at which a given bird starts flying, and downTime is the time at which the bird lands somewhere.

// You don't need to worry about input/output and object of the class. The given template will take care of it. Also, it is given the bird will fly in the morning, and will land before night of the same day.

// The input will contain the upTime and downTime, in 24 hr notation as hh:mm (h is hour, and m is min). You need to calculate the flying time of the given bird (in minutes), as output.

// Input
// First line contains upTime in the given notation. Second line contains downTime in the given notation.

// Output
// One Integer denoting the flying time in minutes.

// Example
// Input1:

// 10:55
// 22:55
// Output1:

// 720
// Explanation:

// Flying time will be 12 hrs = 720 min.





let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
		let num_1 = upTime.split(":");
		let num_2 = downTime.split(":");
		let num_1_hours = 0;
		let num_1_mins = 0;
		let total_upTime_mins = 0;
		let i = 0;
			num_1_hours = num_1[i];
			num_1_mins = num_1[i+1];
			total_upTime_mins = parseInt(num_1_hours * 60) + parseInt(num_1_mins);
		let num_2_hours = 0;
		let num_2_mins = 0;
		let total_downTime_mins = 0;
		let j = 0
			num_2_hours = num_2[j];
			num_2_mins = num_2[j+1];
			total_downTime_mins = parseInt(num_2_hours * 60) + parseInt(num_2_mins);
		    let fly_time = total_upTime_mins - total_downTime_mins;
				return Math.abs(fly_time);
	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());