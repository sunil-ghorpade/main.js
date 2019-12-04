/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global input, y, numbers */

//console.log("hi sunil ghorpade")
/**
 * http://usejsdoc.org/
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TEST IF INPUT IS A PANANDROME
//var input = prompt ('please enter the input')
/*var input = "madam"
//var input = [1,2,3,4,5,6,7,8]
var resversedInput = reverse([...input])
  //console.log(resversedInput)
  //console.log(input)

function reverse(array){
  if (array.length == 0 ) return []
  for (x=0,n=array.length-1;n!=x;x=x+1,n=n-1)
    {
     t = array[n];
      array[n] = array[x]
      array[x] = t
    }
  console.log(array);
    return array
  }
function equal(input,resversedInput){
	for (x=0,l=input.length-1,p=0;p!=l,l!=x;x=x+1)
    { if (input[x] == resversedInput[x]) {
    	p=p+1
		console.log(p)
	} else {
		console.log("input is not panandrome");
		return
	}
    equal(input,resversedInput)
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // COUNT ALL PAIRS OF "ab"
//ababbab
/*function pairFinder(input) {
  for (x=0, l=input.length-1, n=0;  l!=x ; x=x+1) 
  {
   if(input[x]=="a" && input[x+1]=="b")
   {
     n=n+
   } 
   
}   
    return n
  } 
  input = "abcababbab"

  count = pairFinder(input)

  console.log(count)
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SUM OF NUMBERS 1 TO  n
/*function sum(n){
  
  for(s=0;n!=0 ; n=n-1)
  {
    s=s+n
  }
  return s
}
//sum(9)
//  console.log(s)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Modify the previous program such that only multiples of three or five are 
considered in the sum,
// e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
function sumtf(n){
for(s=0,x=1;n!=0;n=n-1,x=x+1)

{
  if((n%3==0)||(n%5==0)) 
  {s=s+n}
}
 
return s

}

//sumtf(3)
//console.log(s)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PRODUCT OF NUMBERS 1 TO n
function product(n){
for(p=1;n!=0;n=n-1){
  p=p*n
 // console.log(p)
}
return p

}
function sop(o,n){
		if (o==1)
		{ //console.log(n)
			r=sum(n)
			console.log(r)
			return
			
	
		
			//console.log(n)
			
			//}	
}
		r=product(n)
		console.log(p)
}
//sop(1,5)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//WRITE A PROGRAM THAT PRINTS A MULTIPLICATION TABLE FOR NUMBERS UP TO 12

function table(n){
	for(m=1,r=1;m!=11;m=m=m+1){
		r=n*m
		console.log(r)
	}
	
}

for (n=1;n!=13;n=n+1){
	table(n);
	
	
}
//table(15)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Write a program that prints all prime numbers.
    function prime(n) {
    	for (var i = 0,j=n; i < j; i++,n--) {
    	
    		if (n%2!=0 && n%3!=0) {
    			console.log(n);
    			
    			
    		} 
    	}
    }
    prime(50)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Write a guessing game where the user has to guess a secret number.
 * After every guess the program tells the user whether their number was too 
 * large 
 * or
 *  too small. At the end the number of tries needed should be printed. 
 *  It counts only as one try if they input the same number multiple times 
 *  consecutively.
 *  */ 
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   /*    Write a program that computes the sum of an alternating series where 
    * each 
    * element of the series is an expression of the form 
   ((−1)k+1)/(2*k−1)((-1)^{k+1})/(2 * k-1) for each value of kk from 1 to a
    million,
    multiplied by 4. Or, in more mathematical notation*/
   /* function power(a,n){
    	for(m=0,x=1;m!==n;m=m+1){
    		x=x*a;
    	
    	}
    	return x;
    	console.log(x);
    	
    }
    
    
    
    
    function series(k){
    	for (z=0,j=1;j!==k+1;j=j+1) {
    		n=j+1;
    		console.log ("n=",n);
    		power(-1,n);
    		console.log ("x=",x);
    			console.log ("j=",j);
			o=(x/(2*j-1));
			console.log ("output=",o);
				console.log ("z=",z);
			z=z+o;
			console.log("z =",z);	
		}
    	p=z*4;
	console.log("Answer is =",p);	
	}
    
    series (10000);
    */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   //Write a function that returns the largest element in a list.
  /* var numbers=[1,4,67,34,677,8,9,4];
   
     
  
    function compare (numbers){
    	l = numbers.length;
        console.log(l);
          
    	for(i=0,y=0;i!==l;i=i+1){
      console.log(i);
     
        if (numbers[i]<numbers[i+1]) {
            //console.log(numbers[i]);
            numbers[i] = y;
    			numbers[i] = numbers[i+1];
    			y=numbers[i];
        }
    		
    						}
    	
    	
    					return ;	}
    
  console.log(numbers);
   compare(numbers);
    console.log(numbers); 
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //Write function that reverses a list, preferably in place.
      
/*function reverse(array){
    	  if (array.length == 0 ) return []
    	  for (x=0,n=array.length-1;n!=x;x=x+1,n=n-1)
    	    {
    	     t = array[n];
    	      array[n] = array[x]
    	      array[x] = t
    	    }
    	  console.log(array);
    	    return array    	 
        }
    var array = ["a","b","c","d","e"];
    reverse(array);
            */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //  Write a function that returns the largest element in a list. 
    
  /* var numbers = [29999,556,7,2,6,888,4456,7,4];
    function largest(numbers) {
        l=numbers.length;
    for (j=0;j!==l; j=j+1) {
        
         for (i=0;i!==l; i=i+1) {
    
        if (numbers[i]>numbers[i+1]){
            p=0;
          p=numbers[i];
      r=(numbers[i]);
      numbers[i]=numbers[i+1];
      numbers[i+1]=r;
  }  
}     
    }  
console.log(numbers);
l=numbers.length;

       return numbers;
       return l;
    }
largest(numbers);
   */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //Write a function that returns the largest element in a list.  
   /* console.log("hi");
    var numbers = [29999,556,7,2,6,888,4456,7,4];
    function largest_element(numbers) {
        l=numbers.length;
    
         for (i=0;i!==l; i=i+1) {
        if (numbers[i]>numbers[i+1]){
            p=0;
          p=numbers[i];
      r=(numbers[i]);
      numbers[i]=numbers[i+1];
      numbers[i+1]=r;
  }  
  
}     
  return   numbers[l];
       return numbers;
    }
largest_element(numbers);
 console.log(numbers[l]);   */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    
 //Write a function that checks whether an element occurs in a list.
 /*var list = [1,2,3,5,4,5] 
 function occurs (list,v) {
     l=list.length;
     for ( i = 0; i!=l;i=i+1) {
        if (list[i]==v){
            console.log("element ",v,"occurs in list");
        }
    }
   
    
}
occurs(list,4);
 
  */
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Write a function that returns the elements on odd positions in a list.
 
 