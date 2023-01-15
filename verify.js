 var password=123456,input,message="Enter Password";
while (input!=password){
    input=prompt(message);
    if (input==password){
        break;
    }
    message="Access Denied";
}
