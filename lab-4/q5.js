function checkDrivingSafe(speedLimit) {
  if (speedLimit < 70) {
    console.log("Good Safe Driving");
  } else if (speedLimit > 70) {
    let points = Math.floor((speedLimit - 70) / 5);
    if (speedLimit > 120) {
      console.log("License Suspended");
      return;
    }
    console.log("Speed Limit Crossed by Penalty Points : " + points);
  }
}

checkDrivingSafe(160);
