function hw(a1)
{

  if(input %3==0 &&input %5!=0)
  {
      document.write("Fizz")

  }else if(input %5==0 &&input %3!=0){
      document.write("Buzz")

  }
  else if(input % 3==0 && input%5==0)
  {
      document.write("FizzBuzz")
  }
  
  for(var i=1;i<=10;i++)
{
    if(i %3==0 &&i %5!=0)
    {
        document.write("Fizz")
  
    }else if(i %5==0 &&i %3!=0){
        document.write("Buzz")
  
    }
    else{
        document.write(i);
    }

}
}

var input= prompt("Enter the values");
input=parseInt(input);

hw(input);
