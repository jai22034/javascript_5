//mean of the array

function mean(arr){
            let sum=0;
            for(let i=0;i<arr.length;i++){
            sum = sum + arr[i];
                } 
   return sum/arr.length;
}
function sort(arr){
            var tmp;
            for(var i = 0; i < arr.length; i++){
            for(var j = i + 1; j < arr.length; j++){
/* if ASCII code greater then swap the elements position*/
          if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
    }
}
}
  
    return arr;
  }

function mode(numbers) {
    
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
       
            if (count[i] === maxIndex) {
                modes.push(Number(i));
       
        }
 
    return modes;
}
function main()
{
  
  var temp = [27,19,16,25,30,12,12,36,40,42,43];
  temp.push(49);
  temp.push(50);
  temp.push(56);
  var sort_temp = sort(temp);
  console.log("assending order");
  for(var i=0;i<sort_temp.length;i++){
      
      console.log(sort_temp[i]);//sorted temp array
  }
  // will print the details about the temp.
  console.log("maximum value is");
  console.log(sort_temp[sort_temp.length-1]);
  console.log("minimum value is");
  console.log(sort_temp[0]);

  console.log("mean value is");
  console.log(mean(sort_temp));
  console.log("mode value is");
  console.log(mode(sort_temp));
  

}
console.log(main());
