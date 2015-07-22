var phones = ["301-512-0042", "427-669-5202", "202-695-4276", "202-596-4276"];

function phoneSum(array){	
var highest = 0;
var highestIndex = 0;
 for(var i=0; i<array.length; i++){
 	var currentTotal = 0;
 	for(var j=0; j<array[i].length; j++){
 		if(parseInt(array[i][j])){
 			currentTotal += parseInt(array[i][j])
 			console.log(highest)
 		}
 		if(currentTotal >= highest){
 			highest = currentTotal;
 			highestIndex = i;
 		}
 	}
 }
return array[highestIndex]
}

phoneSum(phones)



