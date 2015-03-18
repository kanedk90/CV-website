var password;

var password2;

var pass = "1000-5999";

var count = 0;

var count2 = 0;

while(count < 3)
{
password = prompt('Enter PIN', ' ');

if (password == pass)
{
count = 4;

while(count2 < 3)
{

password2 = prompt('Re-enter PIN', ' ');

if (password2 == pass)
{
count2 = 4;

alert('Access granted. Click OK to enter the page.');
}

else
{
count2++;

alert('Incorrect password. Please try again.');
}

if (count2 == 3)
{
alert('Too many incorrect attempts.');


}
}
}

else
{
count++;

alert('Incorrect password. Please try again.');
}

if (count == 3)
{
alert('Too many incorrect attempts.');


}
}