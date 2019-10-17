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

I've written some code in `change.js`, but it's incomplete. It's supposed to print the number of quarters, dimes, nickels, and pennies needed to make change (or an error message if the user enters a value outside of the accepted range). Your algorithm should always prioritize larger denominations over smaller ones.

* Your code must be written in a file named `change.js`.
* Use `const` variables to represent the value of a quarter, dime, and nickel.
* Use `const` variables to represent the minimum and maximum values of the accepted range.
* Your message must match mine exactly (including spacing and punctuation).

### Exercise 2

Prompt the user to enter an integer. Is it positive, negative, or zero?

There are three possible outputs.
* `Positive`.
* `Negative`.
* `Zero`.

Your code must work for all integers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. These are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

* Your code must be written in a file named `sign.js`.
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
