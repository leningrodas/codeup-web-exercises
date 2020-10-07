// let b = 2;
// while (b <= 65536) {
//     console.log(b);
//     //important to reassigned the variable!!!!!!!!! b+2 creates an infinite loop.
//     b*=2;
// }

//  my attempt.
//
//  do {
//      console.log("There are this many " + allCones + " cones avialable");
//      var conesSold = Math.floor(Math.random() * 5) + 1;
//  }

/*
var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("i have this many cones to sell: " + allCones);

    do{
    var conesSold = Math.floor(Math.random() * 5) + 1;

    if(conesSold > allCones){
        var outofstock = "can't sell you " + conesSold + "i only have " + allCones;
        console.log(outofstock);
        } else {
            allCones -= conesSold;
            var soldCones = conesSold + " cones sold..." + allCones + " cones to go";
            console.log(soldCones);
        }
    } while (allCones >0;

 */