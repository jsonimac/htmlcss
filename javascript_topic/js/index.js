concatinate = (string1, string2) => {
    return "hello there "+string1+" "+string2;
}

checkVowelConsonant = (char) =>{
    switch (char) {
        case "a":
            
        case "e":
            
        case "i":
            
        case "o":
            
        case "u":
            return "It is a Vowel";   

        default:
            return "It is a Consonant";
    }
}
compute = (operatorS, num1, num2) => {

    if(operatorS=="+"){
        return num1 + num2;
    }else if(operatorS=="-"){
        return num1 - num2;
    }else if(operatorS=="/"){
        return num1 / num2;
    }else if(operatorS=="*"){
        return num1 * num2;
    }else{
        return "No executions";
    }
}

month = (day) => {
    switch(day){
        case 0:
            return "January";
            
        case 1: 
            return "February";
            
        case 2: 
            return "March";
            
        case 3: 
            return "April";
            
        case 4: 
            return "May";
            
        case 5: 
            return "June";
            
        case 6: 
            return "July";
            
        case 7: 
            return "August";
            
        case 8: 
            return "September";
            
        case 9: 
            return "October";
            
        case 10: 
            return "November";
            
        case 11: 
            return "December";
            
        default:
            return "Unknown date value";
            
    }
}
loopFunction = (number,output) =>{
    while (number<=10) {
        output.innerHTML += number;
        number++
    }
}

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});