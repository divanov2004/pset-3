# Problem Set 3

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on using conditional statements to introduce branching logic to your programs.

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-3`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.
```
$ cd ~/Desktop/APCSP
```
3. Clone my skeleton repository into a directory named `pset-3`.
```
$ git clone git@github.com:ap-principles-ucvts/pset-3-skeleton.git pset-3
````
4. Change into your newly created `pset-3` directory.
```
$ cd pset-3
```
5. Overwrite the remote, which originally points at my skeleton repository.
```
$ git remote rename origin upstream
```
6. Add a new remote that points at your `pset-3` repository. Replace `YOUR-USERNAME` with your actual username.
```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-3.git
```
7. Install the required packages for reading user input. This command should be executed in the `pset-3` folder, and will create a `node_modules` folder that contains everything you need.
```
$ npm install
```
8. Open up the `change.js` file, which is in the `src` folder. All your `.js` files should go in the `src` folder.

The first exercise is partially done for you. You'll be on your own for the rest. There are a lot of exercises in this problem set, but none of them are too challenging. Take your time and try not to get frustrated.

## Exercises

The specifications for each exercise are outlined below. Your job is to write lines of code to solve the problems. Your code must meet the requirements set forth in this section. Each solution must be written in its own file, and named accordingly.

Work through these exercises on your own. Experiment, make mistakes, ask questions, and fix your mistakes. It's the only way to get good at programming.

### Exercise 1

I've written some code in `change.js`, but it's incomplete. It's supposed to print the number of quarters, dimes, nickels, and pennies needed to make change.

// supported, unsuported, invalid, examples

* Your code must be written in a file named `change.js`.
* Use `const` variables to represent the value of a quarter, dime, and nickel.
* Use `const` variables to represent the minimum and maximum values of the supported range.
* Your message must match mine exactly (including spacing and punctuation).

### Exercise 2

Prompt the user to enter an integer. Is it positive, negative, or zero?

// supported, unsupported, invalid, examples

There are three possible outputs.
* `Positive.`
* `Negative.`
* `Zero.`

Your code must work for all integers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. These are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

* Your code must be written in a file named `sign.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 3

Prompt the user to enter an integer. Is it even or odd?

// supported, unsupported, invalid, examples

There are two possible outputs.
* `Even.`
* `Odd.`

Remember, `0` is an even number. Your code must work for all integers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. These are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

* Your code must be written in a file named `parity.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 4

Prompt the user to enter three integers. How are the integers ordered?

// supported, unsupported, invalid, examples

There are five possible outputs.
* `Strictly increasing.`, where each integer is greater than the previous.
* `Increasing.`, where each integer is greater than or equal to the previous.
* `Same.`, where all integers are equal to one another.
* `Decreasing.`, where each integer is less than or equal to the previous.
* `Strictly decreasing.`, where each integer is less than the previous.
* `Unordered.`, where none of the above applies.

Your code must work for all integers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. These are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

* Your code must be written in a file named `sequence.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 5

Prompt the user to enter a letter grade. What's the corresponding GPA?

// supported, unsupported, invalid, examples

There are two possible outputs.
* `Your GPA is #.##.`
* `That's not a valid letter grade.`

Letter grades are given the following numeric equivalents.
* `A` is worth 4.00 points.
* `B` is worth 3.00 points.
* `C` is worth 2.00 points.
* `D` is worth 1.00 point.
* `F` is worth 0.00 points.

Letter grades may or may not be suffixed with a `+` or `-`. With a few exceptions, a `+` adds `0.33` points to the baseline value of that letter, while a `-` subtracts `0.33` points. There is no `F+` or `F-`, and the maximum grade point is `4.00` (meaning an `A` and an `A+` are scored the same). Your code must be case-insensitive.

* Your code must be written in a file named `letters.js`.
* Use `const` variables to represent the values for `A`, `B`, `C`, `D`, and `F`.
* Use `const` variables to represent the `0.33` addition or subtraction for the optional `+` or `-`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 6

Prompt the user to enter a grade. What's the corresponding letter grade?

// supported, unsupported, invalid, examples

There are four possible outputs.
* `You received a X.`, where `X` can be `B`, `C`, or `D` (with or without `+` or `-`).
* `You received an X.`, where `X` can be `A` or `F` (with or without `+` or `-`).
* `Grades above 100 are invalid.`
* `Grades below 0 are invalid.`

The grading policy is defined as follows.
* `90` to `100` constitutes an `A`.
* `80` to `89` constitutes a `B`.
* `70` to `79` constitutes a `C`.
* `60` to `69` constitutes a `D`.
* `0` to `59` constitutes an `F`.
* All other grades are invalid.

Your code must support fractional grades (i.e., `97.3`), and your output must be grammatically correct.

* Your code must be written in a file named `numbers.js`.
* Use `const` variables to represent the thresholds between `A`, `B`, `C`, `D`, and `F`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 7

Prompt the user to enter a year. Is it a leap year or not?

// supported, unsupported, invalid, examples

There are two possible outputs.
* `X is a leap year.`, where `X` is a valid year.
* `X is not a leap year.`, where `X` is a valid year.

Your code must work for all years in the range [`0`, `Number.MAX_SAFE_INTEGER`]. This is a constant built into the `Number` object. You'll have to do a little research to figure out what value it represents.

* Your code must be written in a file named `years.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 8

Prompt the user to enter a playing card. What card was entered?

// supported, unsupported, invalid, examples

There are four possible suits.
* `Clubs`
* `Diamonds`
* `Hearts`
* `Spades`

There are 13 possible ranks.
* `Two`
* `Three`
* `Four`
* `Five`
* `Six`
* `Seven`
* `Eight`
* `Nine`
* `Ten`
* `Jack`
* `Queen`
* `King`
* `Ace`

Possible inputs will be a combination of ranks and suits, where ranks are written as 2-9, T, J, Q, K, or A, and suits are written as C, D, H, or S.

There are two possible outputs.
* `Rank of Suit.`, where `Rank` and `Suit` are placeholders for actual card ranks and suits.
* `That's not a valid card.`

Your code must be case-insensitive.

* Your code must be written in a file named `cards.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 9

Prompt the user to enter a month. How many days are in that month?

// supported, unsupported, invalid, examples

There are four possible outputs.
* `28 or 29 days.`
* `30 days.`
* `31 days.`
* `That's not a valid month.`

Your code must recongnize months fully spelled out or abbreviated to the first three letters, and it must be case-insensitive.

* Your code must be written in a file named `months.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

### Exercise 10

Prompt the user to enter a temperature and scale. At that temperature, is water a solid, liquid, or gas?

// supported, unsupported, invalid, examples

There are four possible outputs.
* `Solid.`
* `Liquid.`
* `Gas.`
* `That's not a valid temperature and/or scale.`

Your code must support Fahrenheit, Celsius, and Kelvin temperatures, which are designated by scales of `F`, `C`, and `K`, respectively. Your code must be case-insensitive, and should gracefully handle unsupported values.

* Your code must be written in a file named `temperature.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

* November 6, 2019, at 11:59pm.

If you submit your problem set at midnight (i.e., November 7, 2019, at 12:00am), it is considered **late**!

### Submission Requirements

* Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
* There must be **at least** 10 unique commits to your repository.
* Your code must meet each requirement outlined in the Exercises and Deliverables sections.
* Your code must adhere to the course style guidelines.

Happy coding!
