var s=prompt("Enter anything:");
var a=s.length;
var count=0;
var i;
for(i=0;i<=a;i++)
{
 if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'||s[i]=='A'||s[i]=='E'||s[i]=='O'||s[i]=='U')
{
  count++;
}  
}
console.log(count);
