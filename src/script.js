// const message = 'Hello world' // Try edit me
// const array = [1,1,2,0,0];
// const message2 = findeUniq(array);

var inputValue;

 
// document.write( XO([
//     ["O", "O", "X"],
//     ["X", "O", "O"],
//     ["O", "X", "O"]
//   ]));


function myFunction1() {
    var x = document.getElementById("myStar").value;
    inputValue = x;
    console.log(inputValue);
    matrix(parseInt( inputValue));
}

function myFunction2() {
    var x = document.getElementById("MyUniqNumber").value;
    inputValue = x;
    
    document.write(findeUniq(inputValue.split(",")));
}

function myFunction3() {
    var x = document.getElementById("MyTime").value;
    inputValue = x;
    
    document.write(convertTime12to24(inputValue));
}

function myFunction4() {
    var x = document.getElementById("text").value;
    inputValue = x;
    
    document.write(reverse(inputValue));
}

function myFunction5() {
    var x = document.getElementById("sort").value;
    inputValue = x;
    
    document.write(sortByLength(inputValue.split(",")));
}

function myFunction6() {
    var x = document.getElementById("sum").value;
   
    inputValue = x;
    
    console.log(sumSquareMatrix(JSON.parse(inputValue)));
    // document.write(sumSquareMatrix());
}


function myFunction7() {
    var X = document.getElementById("X").value;
    var Y = document.getElementById("Y").value;
    var Z = document.getElementById("Z").value;

    parseInt( inputValue)
    console.log(catchTheMous(parseInt(X) ,parseInt(Y),parseInt(Z) ));
    // document.write(sumSquareMatrix());
}

function myFunction8() {
    var x = document.getElementById("XO").value;
    
    // console.log(XO(JSON.parse(x) ));
    document.write(XO(JSON.parse(x)));
}


function findeUniq(input) {
    console.log(input);
    let b = [input.length];
    let c ;
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        c = input[i];
        b[c]++;
    }    

    for(let i=0 ; i<b.length;i++){
        if((b[i] != 0 ) && ((b[i] % 2 ) != 0)){
            result = i;
        }
    }

    return result;
}

function matrix(input) {
    console.log(input);
    for(let i = 0 ; i < input ; i++ ){
        document.write(" ");
            for(let j = 0; j<= i ; j++){
                document.write("#");
            }
            document.write("<br/>");
    }
    
}

function convertTime12to24(input) {
    const [time,modifier] = input.split(' ');
    let [hours, minutes,seconds] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    document.write(hours+":"+minutes+":"+seconds);
    document.write("<br/>");
}

function reverse(input) {
    var array = input.split('');
    document.write(array.reverse().join(''));
    document.write("<br/>");
}

function sortByLength(input) {
    let length = input.length;
    let result = input;
    let index ="";
    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length; j++){
            if (result[i].length > result[j].length) {
                index = result[i];
                result[i]= result[j];
                result[j] = index;
            }
        }
    }
    document.write(result);
    document.write("<br/>");
}


function sumSquareMatrix(A) {
    let length = A.length;
    var mainDiameter =0;
    let subDiameter = 0;
    let r = length - 1 ;
    let c;
   for (let i = 0; i < 3; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if(i == j){
                mainDiameter +=A[i][j];
               
            }
            if (j == r) {
                subDiameter += A[i][j];
            }
            
        }
        r--;
    }
    

    document.write((subDiameter - mainDiameter));
    document.write("<br/>");
}

function catchTheMous(X , Y , Z) {
    if (X >= Z) {
        X = X - Z;
    } else if(X < Z){
        X = Z - X;
    }
    if (Y >= Z) {
        Y = Y - Z;
    }else if(Y < Z){
        Y = Z - X;
    }


    if (X === Y) {
        document.write("Mouse C as the two cats fight and mouse escapes.")
    }else if(X < Y){
        document.write("Cat A.")
    }else if (X>Y) {
        document.write("Cat B.")
    }
    document.write("<br/>");

}

function XO(array) {
    let length = array.length;
    let X = 0;
    let O = 0;
    let r = length - 1 ;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i === j) {
                if (array[i][j] === "X") {
                    X++;
                }else if(array[i][j] === "O"){
                    O++;
                }
            }
        }
    }
    if (X === 3 ) {
        return "X win";
    }else if (O === 3) {
        return "O win";
    }
    X=0;
    O=0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (j === r) {
                if (array[i][j] === "X") {
                    X++;
                }else if(array[i][j] === "O"){
                    O++;
                }
            }
        }
        r--;
    }
    if (X === 3 ) {
        return "X win";
    }else if (O === 3) {
        return "O win";
    }
    X=0;
    O=0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === "X") {
                X++;
            }else if(array[i][j] === "O"){
                O++;
            }
        }
        if (X === 3 ) {
            return "X win";
        }else if (O === 3) {
            return "O win";
        }
        X=0;
        O=0;
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[j][i] === "X") {
                console.log(array[j][i]);
                X++;
            }else if(array[j][i] === "O"){
                console.log(array[j][i]);
                O++;
            }
        }
        
        if (X === 3 ) {
            
            return "X win";
        }else if (O === 3) {
            return "O win";
        }
        X=0;
        O=0;
    }
    if (X !=3 && O !=3) {
        return "tie";
    }

}


// Update header text
// document.querySelector('#header').innerHTML = message
// document.querySelector('#header').innerHTML = message2
// Log to console
// console.log(message)
console.log(inputValue);