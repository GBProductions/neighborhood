# _Mr. Roboger's Neighboorhood_

#### _Program returns a range of numbers with certain rules and styles applied._
#### _February 11th 2021_

#### By _**Garrett Brown**_

## Description
Web application that takes an input number and returns a range of numbers. There are certain exceptions, with certain numerical digits being swapped for certain words.

## Specs
### Rules:
    * The following rules are written in order ascending of power (i.e. rule #3, overrules rule #2).
        * Rule 1: Numbers that contain a 1: all digits are reploaced (all digits) with "Beep!"
        * Rule 2: Numbers that contain a 2: all digits are reploaced (all digits) with "Boop!"
        * Rule 3: Numbers that contain a 3: all digits are reploaced (all digits) with "Won't you be my neighbor?"


#### Describe: rangeCreate()
* Test: "If the number 0 is inputted, it should return an array with 0 in it."
    * Expect: ```(rangeCreate(0).toEqual([0]))```

* Test: "If the number 5 is inputted, it should return an array filled with a range from 0 to 5 in it."
    * Expect: ```(rangeCreate(5).toEqual([0,1,2,3,4,5]))```

* Test: "If the number 5 is inputted, it should return an array filled with a range from 0 to 5 in it."
    * Expect: ```(rangeCreate(5).toEqual([0,1,2,3,4,5]))```

* Test: "If the number 3 is inputted, it should return an array filled with a range from 0 to 3 in it, with Rule 1 applied."
    * Expect: ```(rangeCreate(3).toEqual([0,"Beep!",2,3]))```

* Test: "If the number 3 is inputted, it should return an array filled with a range from 0 to 3 in it, with Rule 2 applied, and Rule 1 applied."
    * Expect: ```(rangeCreate(3).toEqual([0,"Beep!","Boop!",3]))```

* Test: "If the number 3 is inputted, it should return an array filled with a range from 0 to 3 in it, with Rule 3 applied, and Rule 1 and Rule 2 applied."
    * Expect: ```(rangeCreate(3).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?"]))```

* Test: "If the number 15 is inputted, it should return an array filled with a range from 0 to 15 in it, with Rule 3 applied, and Rule 1 applied, but Rule 3 overrules 1."
    * Expect: ```(rangeCreate(15).toEqual([0,"Beep!",2,"Won't you be my neighbor?"..."Beep!, Beep!,"Won't you be my neighbor?", "Beep!", "Beep!"]))```

* Test: "If the number 23 is inputted, it should return an array filled with a range from 0 to 15 in it, with Rule 3 applied, and Rule 2 applied, but Rule 3 overrules 2."
    * Expect: ```(rangeCreate(15).toEqual([0,1,"Boop!","Won't you be my neighbor?", ..., 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]))```

## Setup/Installation Requirements


* _Open terminal and navigate to 'Desktop'._
* _In terminal, type 'git clone https://github.com/GBProductions/neighborhood.git' and press enter._
* _In terminal, type 'cd neighborhood' and press enter._
* _In terminal, type 'code .' and press enter to open project in VS Code._
* _Right click on 'index.html' and select 'Open with Live Server' to view page in your favorite web browser._


## Known Bugs

_There are currently no known bugs._

## Support and contact details

_For support, please contact Garrett Brown at <garrettpaulbrown@gmail.com>_

## Technologies Used

* _HTML, CSS, JS_
* _Bootstrap, JQuery_
* _VS Code, GitHub_

### License

*Available under MIT Licensing*

Copyright (c) 2021 **_Garrett Brown_**