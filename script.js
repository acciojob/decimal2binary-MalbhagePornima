function decimalToBinary(num) {
  //Write you code here
	let num=13, output="";
	while(num>=2){
		let remainder=num%2;
		output=remainder+output;
		num=parseInt(num/2);
	}
  if(num==1){
	  output=1+output;
  }
	console.log(output);
}

window.decimalToBinary = decimalToBinary;
