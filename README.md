# _Mr-Robogers-Neighborhood_

#### By **Laura Hope**_

#### _HTML file demonstrating number generating using loops_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This HTML document showcases beginner-level JavaScript skills using loops, array methods, and branching to produce an text output counting up from 0 to the inputted number in the form, replacing certain numbers with text depending on if conditions are met._

## Setup/Installation Requirements

* _Clone “Mr-Robogers-Neighborhood“ from the repository to your desktop_
* _Open “Mr-Robogers-Neighborhood“ directory_
* _Open “index.html“ file in your browser_

## Tests

```
Describe: mrRobo()

Test: "it should return the word "beep!" if the input is 1"
Code: mrRobo(1);
Expected Output: "beep!"

Test: "it should return the word "beep!" if the input includes 1"
Code: mrRobo(41);
Expected Output: "Beep!"

Describe: countUp()

Test: "it should return an array from the users inputted number starting at zero"
Code: countUp(7)
Expected Output: [0,1,2,3,4,5,6,7];

Describe: mrRoboArray()

Test: "it should change the array to a string after the counting up process."
Code: mrRoboArray(5);
Expected Output: '0,1,2,3,4,5'

Test: "it should replace the entire number "15" with the word "beep""
Code: mrRoboArray(15)
Expected Output: "beep"

Test: "should put 3 replacement first, then 2, then 1 if input has both numbers"
Code: mrRoboArray(13);
Expected Output: "won't you be my neighbor?"

Test: "it should replace the number '1' in the array with the word 'beep' while keeping all of the other elements in the array"
Code: mrRoboArray(4)
Expected Outcome: [0,1,'beep',3,4];
```
## Known Bugs

* _No known bugs as of 4/5/23_

## License

MIT License

Copyright (c) [2023] [Laura Hope]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you run into any issues or have questions, ideas or concerns, please reach out via email: lauramhope.dpt@gmail.com. Contributions to the code are highly encouraged._