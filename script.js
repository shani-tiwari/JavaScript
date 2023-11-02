            
         // 1.  program to display current day and time. 
                
                        // var today = new Date();
                        // var day = today.getDay();  // method to get day. 
                        // var daylist = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];
                        // console.log("today is : "+daylist[day]); //ES5
                        // console.log(`today is : ${daylist[day]}`);    //ES6
                
                        // var hou = today.getHours(); // hours of given date 0-23
                        // var min = today.getMinutes();   //min of specified date according to local time 0-59
                        // var sec = today.getSeconds();   // 
                
                        // var prepand = (hou >= 12)? "pm":"am";
                        // hou = (hou >= 12)?hou - 12 : hou; // for 1,2,3,4 counts.....
                
                        // if (hou === 0 && prepand === 0)
                        // {
                        //     //day
                        //         if (min === 0 && sec === 0) 
                        //         {
                        //                 hou = 12;
                        //                 prepand = 'noon';
                        //         }
                        //         else
                        //         {
                        //             hou = 12;
                        //             prepand = 'pm';
                        //         }
                
                        //         if (hou === 0 && prepand === 'am') 
                        //         {
                        //             //night
                        //             if (min === 0 && sec === 0) 
                        //             {
                        //                 prepand = 'midnight';
                        //                 hou = 12;
                        //             }
                        //             else
                        //             {
                        //                 hou = 12;
                        //                 prepand = 'am';
                        //             }
                        //         }
                
                      
                        // }
                        // console.log("current time : "+hou + prepand + ":"+min+":" + sec);
                        // console.log(`current time : ${hou} : ${prepand} :${min}:  ${sec}`);
                
        // 2.   function to print content of current window. 
                            //method - window.print();
                
         // 3.  get the current date. 
                        /*var today = new Date();
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
                        console.log(today = `${mm} - ${dd} - ${yyy}`); */
                
                
         // 4.  function to find the area of a triangle. 
                
                        /*function area(a, b, c) {
                            var s = (a+b+c)/2;
                            var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
                                return area ;
                        }
                        console.log(`Area of triangle is : ` + area(5, 6, 7));*/
                
                
        // 5.  rotate a string from left to right. 

                     var  ele =  document.querySelector(".string");
                     var textnode = ele.childNodes[0];
                     var text = textnode.data;
                      setInterval(function(){
                                text = text[text.length - 1] + text.substring(0, text.length - 1);
                                textnode.data = text;
                      }, 200 )


        
        //  6.   find that the given year is leap year or not. --  divisible to 100, 400 and remainder 0. 
                        
                        //    function leapY(year){
                        //             return(year % 100 === 0)? (year%400 === 0 ):(year%4 === 0)
                        //    }
                        //    console.log(leapY(2016), leapY(1224), leapY(2000), leapY(1900), leapY(1700));
                                // console.log(leapY(2000));
                                // console.log(leapY(1900));
                                // console.log(leapY(1700));
                                // console.log(leapY(2023));

        //  7.  find out if 1st jan will be a sunday between 2014 and 2050. 

                            // for (let year = 2014; year <= 2050; year++) {
                            //             const d = new Date(year, 0, 1); // 0 is sunday, 1st jan
                            //             if (d.getDay() === 0) {
                            //                     console.log(` 1st jan is falling on sunday ${year}`);
                            //             }
                                
                            // }

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
                                
                                // today = new Date();
                                // var cmas = new Date(today.getFullYear(), 11, 25); // 12th month 25 date
                                // if(today.getMonth() == 11 && today.getDate() > 25)
                                // {
                                //     cmas.getFullYear(cmas.getFullYear()+1); // making it 12th month
                                // }
                                // var oneDay = 1000*60*60*24;
                                // console.log(Math.ceil((cmas.getTime()-today.getTime()) / (oneDay)) +" days left. ");

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
                            // function celsiusTOfahrenheit(){
                            //     c = document.getElementById("temp").value;   // without value it's always - NaN
                            //     // fahrenheit mai badalne ka formula.....
                            //     document.getElementById("res2").innerHTML = ((9*c + (32 * 5)) / 5) +" ℉ 🥵(●'◡'●)";
                            // }
                            // function fahrenheitTOcelsiusTO(){
                            //     f = document.getElementById("temp2").value;
                            //     // celsius mai badalne ka formula.....
                            //     document.getElementById("res3").innerHTML = ((f - 32) * 5 / 9) + " ℃ 🏂⛄❄️";
                            // }
                
        //  12.  get the website URL ( loading page ).
                            //  console.log(document.URL);

        //  13.  create a variable with a user defined name. 
                            //   var name = 'abcd' ;  // defining our own name
                            //   name = 150; // giving value to that name
                            //   console.log(name +" = " + this[name]);   --  undefined

                            //   var name = 'shani' ;  // defining our own name
                            //   this[name] = 150; // giving value to that name, this for your value pointing to defined name
                            //   console.log(name +" = " + this[name]);
                            //   console.log(typeof name);         // string
                            //   console.log(typeof this[name]);   // number

       //  14.  get the filename extension. 
                                // filename = "system.php";          //    Extension - .php
                                // console.log(filename.split('.').pop());   // specifying that we need after dot's content, don't give space before and after the dot
                                // filename = "withjs.html";
                                // console.log(filename.split('.').pop());   // specifying that we need after dot's content, don't give space before and after the dot


      //  15 . get difference between given number and 13, if the number is broader than 13 return double the absolute difference. 
                                // let p = prompt(" Enter a number  : ");
                                //  p = Math.parseint(p);
                                //  console.log(p);
                                //  console.log(typeof p);

                                    // function diff(n){
                                    //     if (n <=13) {
                                    //         return 13 - n;
                                    //     }else{
                                    //         return (n - 13) * 2;
                                    //     }
                                    // }
                                    // console.log(diff(12));
                                    // console.log(diff(22));

      //  16 . compute sum of two integers . if two values are the same, then return triple their sum. 
                                // function compute(a, b){
                                //     if (a == b) {
                                //             return (a + a + a);
                                //     }else{
                                //         return (a + b);
                                //     }
                                // }
                                // console.log(compute(5,6));
                                // console.log(compute(1, 2));
                                // console.log(compute(1, 1));


    // 17 .  compute the absolute difference between a specified number and 19. return triple the absolute difference if the specified number is 
                        // greater than 19. 
                                // function diff(n){
                                //     if ( n <= 19 ) {
                                //             return (19 - n);
                                //     }else{
                                //          return (n - 19)*3;
                                //     }
                                // }
                                // console.log(diff(12));
                                // console.log(diff(22));
                                // console.log(diff(19));














        


