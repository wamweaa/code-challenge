//code for our speed detector
function demeritPointDetermination(speed) {
    const speedLimit = 70;
    const demeritPointPerKm = 5;
    const maxPoint = 12;
    if (speed <= speedLimit){
        console.log("ok");
        return 0; //demerit point = 0
    }else{
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointPerKm);//calculation of demerit points
        console.log(`points:${demeritPoints}`);
        if(demeritPoints >= maxPoint){
            console.log("license suspended");
        }
        return demeritPoints
    }
}
//to test code
demeritPointDetermination(200)

