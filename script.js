            
         // 1.  program to display current day and time. 
                
                        var today = new Date();
                        var day = today.getDay();  // method to get day. 
                        var daylist = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];
                        console.log("today is : "+daylist[day]); //ES5
                        console.log(`today is : ${daylist[day]}`);    //ES6
                
                        var hou = today.getHours(); // hours of given date 0-23
                        var min = today.getMinutes();   //min of specified date according to local time 0-59
                        var sec = today.getSeconds();   // 
                
                        var prepand = (hou >= 12)? "pm":"am";
                        hou = (hou >= 12)?hou - 12 : hou; // for 1,2,3,4 counts.....
                
                        if (hou === 0 && prepand === 0)
                        {
                            //day
                                if (min === 0 && sec === 0) 
                                {
                                        hou = 12;
                                        prepand = 'noon';
                                }
                                else
                                {
                                    hou = 12;
                                    prepand = 'pm';
                                }
                
                                if (hou === 0 && prepand === 'am') 
                                {
                                    //night
                                    if (min === 0 && sec === 0) 
                                    {
                                        prepand = 'midnight';
                                        hou = 12;
                                    }
                                    else
                                    {
                                        hou = 12;
                                        prepand = 'am';
                                    }
                                }
                
                      
                        }
                        console.log("current time : "+hou + prepand + ":"+min+":" + sec);
                        console.log(`current time : ${hou} : ${prepand} :${min}:  ${sec}`);
                
        // 2.   function to print content of current window. 
                            method - window.print();
                
         // 3.  get the current date. 
                        var today = new Date();
                        var mm = today.getDate();   // 1 - 31
                        var dd = today.getMonth() + 1;  // coz it starts from 0 to make it right. 
                        var yyy = today.getFullYear();   // 1000 - 9999
                
                        if (dd < 10) {
                            dd = '0' + dd;
                            dd = `0 ${dd}`; 
                        }                           // for a better view..
                        if (mm < 10) {
                            mm = '0' + mm;
                        }
                
                        console.log(today = mm + '-' + dd + '-' + yyy);
                        console.log(today = `${mm} - ${dd} - ${yyy}`); 
                
                
         // 4.  function to find the area of a triangle. 
                
                        function area(a, b, c) {
                            var s = (a+b+c)/2;
                            var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
                                return area ;
                        }
                        console.log(`Area of triangle is : ` + area(5, 6, 7));
                
                
        // 5.  rotate a string from left to right. 

                     var  ele =  document.querySelector(".string");
                     var textnode = ele.childNodes[0];
                     var text = textnode.data;
                      setInterval(function(){
                                text = text[text.length - 1] + text.substring(0, text.length - 1);
                                textnode.data = text;
                      }, 200 )


        
        //  6.   find that the given year is leap year or not. --  divisible to 100, 400 and remainder 0. 
                        
                                       function leapY(year){
                                                return(year % 100 === 0)? (year%400 === 0 ):(year%4 === 0)
                                       }
                                       console.log(leapY(2016), leapY(1224), leapY(2000), leapY(1900), leapY(1700));
                                console.log(leapY(2000));
                                console.log(leapY(1900));
                                console.log(leapY(1700));
                                console.log(leapY(2023));

        //  7.  find out if 1st jan will be a sunday between 2014 and 2050. 

                            for (let year = 2014; year <= 2050; year++) {
                                        const d = new Date(year, 0, 1); // 0 is sunday, 1st jan
                                        if (d.getDay() === 0) {
                                                console.log(` 1st jan is falling on sunday ${year}`);
                                        }
                                
                            }

        //  8.  program where it takes a random number int between 1-10 and user is then promptedto input a guess number.the program display 
            //  "good work" if input matches the guess number otherwise "not matched" . 

                            // let random = Math.floor(Math.random()*11);  // generating random no from 1 - 10. 
                               let random = Math.ceil(Math.random()*10);   //  both(floor, ceil) are correct. 
                                    // console.log(random); --  for checking it's properly working or not. 
                                var count = 10;
                                let user = prompt('Enter a number (1 to 10) (10 chances available) : ');
                                for(var i = 0; i <= 9; i++)
                                {
                                    if(random === user){
                                    console.log("Good Work");
                                    }else{console.log("not matched that number was - " + random);}
                                    console.log( " chances are available : " + count--);

                                }
                                console.log(" Game Over ");

        //  9.  calculate how many days left before christmas or any festival of your choice. 
                                
                                today = new Date();
                                var cmas = new Date(today.getFullYear(), 11, 25); // 12th month 25 date
                                if(today.getMonth() == 11 && today.getDate() > 25)
                                {
                                    cmas.getFullYear(cmas.getFullYear()+1); // making it 12th month
                                }
                                var oneDay = 1000*60*60*24;
                                console.log(Math.ceil((cmas.getTime()-today.getTime()) / (oneDay)) +" days left. ");

        //  10 . enter two number by user and  make multiply, divide operations. 
                            function multiplyBy(){
                                n1 = document.getElementById("first").value;
                                n2 = document.getElementById("second").value;
                                document.getElementById("res").innerHTML = n1 * n2;
                            }
                            function divideBy(){
                                n1 = document.getElementById("first").value;
                                n2 = document.getElementById("second").value;
                                document.getElementById("res").innerHTML = n1 / n2;
                            }


      //  11.  convert temperature - celsius to fahrenheit. 
                            function celsiusTOfahrenheit(){
                                c = document.getElementById("temp").value;   // without value it's always - NaN
                                // fahrenheit mai badalne ka formula.....
                                document.getElementById("res2").innerHTML = ((9*c + (32 * 5)) / 5) +" ℉ 🥵(●'◡'●)";
                            }
                            function fahrenheitTOcelsiusTO(){
                                f = document.getElementById("temp2").value;
                                // celsius mai badalne ka formula.....
                                document.getElementById("res3").innerHTML = ((f - 32) * 5 / 9) + " ℃ 🏂⛄❄️";
                            }
                
        //  12.  get the website URL ( loading page ).
                              console.log(document.URL);

        //  13.  create a variable with a user defined name. 
                              var name = 'abcd' ;  // defining our own name
                              name = 150; // giving value to that name
                              console.log(name +" = " + this[name]);   --  undefined

                              var name = 'shani' ;  // defining our own name
                              this[name] = 150; // giving value to that name, this for your value pointing to defined name
                              console.log(name +" = " + this[name]);
                              console.log(typeof name);         // string
                              console.log(typeof this[name]);   // number

       //  14.  get the filename extension. 
                                filename = "system.php";          //    Extension - .php
                                console.log(filename.split('.').pop());   // specifying that we need after dot's content, don't give space before and after the dot
                                filename = "withjs.html";
                                console.log(filename.split('.').pop());   // specifying that we need after dot's content, don't give space before and after the dot


      //  15 . get difference between given number and 13, if the number is broader than 13 return double the absolute difference. 
                                let p = prompt(" Enter a number  : ");
                                 p = Math.parseint(p);
                                 console.log(p);
                                 console.log(typeof p);

                                    function diff(n){
                                        if (n <=13) {
                                            return 13 - n;
                                        }else{
                                            return (n - 13) * 2;
                                        }
                                    }
                                    console.log(diff(12));
                                    console.log(diff(22));

      //  16 . compute sum of two integers . if two values are the same, then return triple their sum. 
                                function compute(a, b){
                                    if (a == b) {
                                            return (a + a + a);
                                    }else{
                                        return (a + b);
                                    }
                                }
                                console.log(compute(5,6));
                                console.log(compute(1, 2));
                                console.log(compute(1, 1));


    // 17 .  compute the absolute difference between a specified number and 19. return triple the absolute difference if the specified number is 
                        // greater than 19. 
                                function diff(n){
                                    if ( n <= 19 ) {
                                            return (19 - n);
                                    }else{
                                         return (n - 19)*3;
                                    }
                                }
                                console.log(diff(12));
                                console.log(diff(22));
                                console.log(diff(19));

// 18 .  check a pair of numbers & return true if one of the number is 50 or if their sum is 50.
                       function compute(a, b){
                                if (a+b === 50) {
                                    return true;
                                }else if(a === 50 || b === 50){
                                    return true;
                                }
                                else{return false;}
                        }
                        console.log(compute(4, 5));
                        console.log(compute(4, 50));
                        console.log(compute(0, 50));

    // 19 . check whether a given integer is within 20 of 100 or 400.
                        function check(a){
                           return ((Math.abs( 100 - a) <= 20) || (Math.abs(400 - a) <= 20)); // abs - absolute value
                        }
                        console.log(check(10));
                        console.log(check(200));
                        console.log(check(90));
                        console.log(check(99));
                        console.log(check(100));

     //  20 .  two given integer ine is positive and another is negative. 
                        function fun(a, b)
                        }
                        // console.log(fun(4, 5));
                        // console.log(fun(2, 19));
                        // console.log(fun( 2, -5));
                        fun(2, 4);
                        fun(-2, 40);
                        fun(2, -4);
                        fun(2, 4);

  // 21 . create another string adding py in front of a given string. if the given sstring brgins with py return original string. 
                        let str = 'papaya';
                        console.log(str);         // papaya
                        console.log(str.valueOf()); // papaya
                        console.log(str.charAt(0));
                        function chng(s){
                            if (s === null || s === undefined || s.substring(0,2) === 'py') {
                                            return s;
                            }
                            else{
                                return 'py'+s;
                            }
                        }
                        console.log(chng('thon'));
                        console.log(chng('python'));

    //  22.  remove char at a specific position in string and return modified string. 
                        function cut(s, idx){
                                    p1 = s.substring(0, idx)
                                    p2 = s.substring(idx+1, s.length)
                                    return p1+p2;
                        }
                        console.log(cut('india', 2));
                        console.log(cut('america', 4));
                        console.log(cut('russia', 1));

    //  23 . create new string from given string by changing the position of first last character . 
                        function str_chng(str){
                            if (str <= 1) {
                                return str;
                            }
                            t = str.substring(1, str.length - 1);  // taking all middle characters excluding first and last . 
                            return (str.charAt(str.length - 1)) + t + str.charAt(0);

                                //  var temp = str.last();
                                //  str.last() = str.first();
                                //  str.first() = temp;
                                //  return str;
                        }
                        console.log(str_chng('shani'));


   //  24 .  check whether the given integer id muultiple of 3 or 7.
                        function multiple(a){
                            if (a % 3 === 0 || a % 7 === 0) {
                                return  true;
                            }
                            else{
                                return false;
                            }
                        }
                        console.log(multiple(14));
                        console.log(multiple(35));
                        console.log(multiple(30));
                        console.log(multiple(10));

   // 25 .  create string from a given string , take last 3 char & adding them both the front & back.
                        function make(str){
                                if (str.length >= 3) {
                                    last_three_char = str.substring(str.length-3);
                                    return (last_three_char + str + last_three_char);
                                }
                                else{
                                    return ('another one.........');
                                }
                        }
                        console.log(make(`shani`));
                        console.log(make(`love`));
                        console.log(make(`fg`));
                        console.log(make(`tiwari`));

    // 26 .  check that given string start with java or not. 
                        function  chk (str){
                            let val = str.substring(0, 4);
                                if ( val === 'java') {
                                        console.log("yes");
                                }else{console.log('no');}
                        } 
                       chk('_learning');

    // 27 . check whether a string 'script' appears at the 5th(idx 4) position. if yes return without 'script' if no return original.
                        function chk(s){
                            if (s.length < 6) {
                                    return s;
                            }
                            let str = s.substring(4, s.length);
                            if (str === 'script') {
                                    return (s.substring(0, 4));
                            }else{
                                return s;
                            }
                        }
                        console.log(chk('javascript'));
    // 28 . find largest of three integer 
                        function largest(a, b, c){
                                if ( a > b && a > c) {
                                     return console.log(`${a} is greater`);
                                } else if( b > a && b > c){
                                        return console.log(`${b} is greter. `);
                                    }
                                    else{
                                        return console.log(`${c} is greter. `);
                                }
                                // **** OR 
                             max = 0;
                             if ( a > b) {
                                max = a;
                             }else{
                                max = b;
                             }
                             if (c > max) {
                                max = c;
                             }
                             return max;
                                   
                        }
                        largest(34, 55, 11);

    // 29 .  find value which is nearest to 100 from two different integers. 
                        function chk(a, b){
                            if ( a != b ) {
                                    a1 = Math.abs(100 - a);
                                    b1 = Math.abs(100 - b);
                                    if (a1 < b1) {
                                        return `${a} is nearest.`;
                                    }else{
                                        return `${b} is nearest.`;
                                    }
                            }else{
                                return console.log("Equal Numbers didn't allow .. ‼️");;
                            }
                        }
                        console.log(chk(99.9, -99.99));
                        console.log(chk(99.9, 99.99));
                        console.log(chk(90, -89));
                        console.log(chk(-90, 89));

    // 30 . check the last digit of 3 numbers are same or not.
                        function chk(a, b, c){
                                if ( a > 9 && b > 9 && c > 9) {
                                                rem1 = a % 10;
                                                rem2 = b % 10;
                                                rem3 = c % 10;
                                                if ( rem1 == rem2  && rem2 == rem3) {
                                                        return `yes`;
                                                }else{
                                                    return `no`;
                                                }

                                    } else{
                                        return `wrong input.....`;
                                    }
                        }
                        console.log(chk(12, 22, 82));
                        console.log(chk(11, 91, 51));
                        console.log(chk(80, 62, 69));
                        console.log(chk(12, 21, 82));
                        console.log(chk(12, 9, 82));

   // 31 . produce a new string that has the first 3 letter in lowercase from given string, if string length is less then 3 then all uppercase.
                        function chk(str){
                                if (str.length < 3) {
                                        return str.toUpperCase();
                                }else{
                                       return v = str.substring(0, 3).toLowerCase() + str.substring(3, str.length);
                                }
                        }
                        console.log(chk('shaNi'));
                        console.log(chk('sh'));
                        console.log(chk('tiwARI'));

    // 32 . check student total marks in various examination . student will get A+ grade if the total marks are in range 89-100, if the 
    // examination is final-exam the student will receive A+ grade & tital marks must be greater than or equal to 90. if the student gets an A+
    // return true, otherwise false. 
                        function data(marks, exam){
                                if (exam) {
                                    return marks >= 90;
                                }
                                return (marks >= 89 && marks  <= 100 );
                        }
                        console.log(data(78, " "));
                        console.log(data(89, "true"));
                        console.log(data(98, "true"));

    // 33. check given number are increasing in strict(10, 15, 31) or soft(24, 26, 31) mode. 
                        function numbers(a, b, c){
                              if( b > a && c > b){
                                return 'strict';
                              } else if( c > b){
                                return 'soft';
                              }
                              else{
                                return 'undefined';
                              } 
                                // if ( b-a <= 7 && b-c <= 7 && d-c <= 7) {
                                //         return `soft`;
                                // }else{
                                //     return `strict`;
                                // }
                        }
                        console.log(numbers(12, 16, 23, 27));
                        console.log(numbers(12, 21, 29, 22));
                        console.log(numbers(10, 15, 31));
                        console.log(numbers(24, 22, 31));

   // 34. reverse a given string . 
                        function rev(str){ 
                                return str.split("").reverse().join("");
                        }
                        console.log(rev('shani'));
                        console.log(rev('shanitiwari'));
                        console.log(rev('shanitiwarideveloper'));

    // 35. capitalize each word's first letter in given string.
                        function cap(str){
                                //return (str.split(" ").subString(0).toUpperCase);
                                s = str.split(" ");
                               for(var i = 0, x = s.length; i < x; i++){
                                        s[i] = s[i][0].toUpperCase() + s[i].substring(1);
                               }
                               return s.join(" ");
                        }
                        console.log(cap('shani tiwari'));
                        console.log(cap('shani tiwari is a developer'));

    // 36 . convert a number into hours and minutes.  450 = 450min = 7hr 30min
                        function con(a){
                                x = Math.floor(a/60);
                                y = Math.floor(a%60);
                                console.log(`${x}:${y} `);
                        }
                        con(450);
                        con(350);










        


