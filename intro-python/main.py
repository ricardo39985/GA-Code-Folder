# exercise-01 Vowel or Consonant

# Write the code that:
# 1. Prompts the user to enter a letter in the alphabet:
#      Please enter a letter from the alphabet (a-z or A-Z):
from unittest import result
import datetime
import os
clear = lambda: os.system('clear')
import time

# 3. Print one of following messages (substituting the letter for x):
#      - The letter x is a vowel
#      - The letter x is a consonant

# 2. Write the code that determines whether the letter entered is a vowel

# Hints:  Use the in operator to check if a character is in another string
#         For example, if some_char in 'abc':


def exercise1():
    clear()
    print("EXERCISE 1\n")

    user_input = input("Please enter a letter from the alphabet (a-z or A-Z)\t")
    if user_input.lower() in "aeiou":
        print("The letter x is a vowel")
    else:
        print("The letter x is a consonant")
    time.sleep(2)
    clear()


# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase:
# 2. Print the following message:
    #      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.


def exercise2():
    print("EXERCISE 2\n")

    second_user_input = input(
        "Please enter a word or phrase:\nEnter quit to end\n")
    while second_user_input != "quit":
        print(f'What you entered is {len(second_user_input)} characters long')
        second_user_input = input(
            "Please enter a word or phrase:\nEnter quit to end\n")
    time.sleep(2.0)
    clear()




# exercise-03 Calculate Dog Years
# Write the code that:
# 1. Prompts the user to enter a dog's age like this:
#      Input a dog's age:
# 2. Calculates the equivalent dog years, where:
#      - The first two years count as 10 years each
#      - Any remaining years count as 7 years each
# 3. Prints the answer in the following format:
#      The dog's age in dog years is xx

# Hints:
# Use the int() function to convert the string returned from input() into an integer
# Start with an if that checks if the age is less than 3
def exercise3():
    print("EXERCISE 3\n")

    dog_age = int(input("Input a dog's age:\n"))
    result = 0
    if dog_age >= 2:
        dog_age -= 2
        result = 20
        result += dog_age*7
        print(f"The dog's age in dog years is {result}")
    else:
        print(f"The dog's age in dog years is {10}")
    print("*********************\nEnd of exercise\n\n")
    time.sleep(2.0)

    clear()




# exercise-04 What kind of Triangle?

# Write the code that:
# 1. Prompts the user to enter the three lengths of a triangle (one at a time):
#      Enter the lengths of three side of a triangle:
#      a:
#      b:
#      c:
# 2. Write the code that determines if the triangle is:
#      equilateral - all three sides are equal in length
#      scalene - all three sides are unequal in length
#      isosceles - exactly two sides are the same length
# 3. Print a message such as:
#      - A triangle with sides of <a>, <b> & <c> is a <type of triangle> triangle


def exercise4():
    print("EXERCISE 4\n")

    print("Enter the lengths of three side of a triangle:\n")
    a = int(input("Enter the size of the first side:\t"))
    b = int(input("Enter the size of the second side:\t"))
    c = int(input("Enter the size of the third side:\t"))
    if a == b == c:
        print(
            f"A triangle with sides of {a}, {b} & {c} is a equilateral triangle")
    elif a == b or a == c or b == c:
        print(
            f"A triangle with sides of {a}, {b} & {c} is a isosceles triangle")
    else:
        print(
            f"A triangle with sides of {a}, {b} & {c} is a scalene triangle")
    time.sleep(2.0)
    clear()




# exercise-05 Fibonacci sequence for first 50 terms

# Write the code that:
# 1. Calculates and prints the first 50 terms of the fibonacci sequence.
# 2. Print each term and number as follows:
#      term: 0 / number: 0
#      term: 1 / number: 1
#      term: 2 / number: 1
#      term: 3 / number: 2
#      term: 4 / number: 3
#      term: 5 / number: 5
#      etc.

# Hints:
# The next number is found by adding the two numbers before it
# Use a while loop with a looping variable, or look into Python ranges, e.g.:
#   for n in range(50):
def exercise5():
    print("EXERCISE 5\n")
    fib = 0
    first_num = 0
    second_num = 1
    while fib < 50:
        if fib < 2:
            print(f'term: {fib} / number: {fib}')
        else:
            sequence = first_num + second_num
            print(f'term: {fib} / number: {sequence}')
            first_num = second_num
            second_num = sequence
        fib += 1
    time.sleep(2.0)

    clear()



# exercise-06 What's the Season?

# Write the code that:
# 1. Prompts the user to enter the month (as three characters):
#      Enter the month of the year (Jan - Dec):
# 2. Then prompts the user to enter the day of the month:
#      Enter the day of the month:
# 3. Calculate what season it is based upon this chart:
#      Dec 21 - Mar 19: Winter
#      Mar 20 - Jun 20: Spring
#      Jun 21 - Sep 21: Summer
#      Sep 22 - Dec 20: Fall
# 4. Print the result as follows:
#      <Mmm> <dd> is in <season>

# Hints:
# Consider using the in operator to check if a string is in a particular list/tuple like this:
#   if input_month in ('Jan', 'Feb', 'Mar'):
#
# After setting the likely season, you can use another if...elif...else statement to "adjust" if
# the day number falls within a certain range.


def exercise6():
    print("EXERCISE 6\n")

    month = input('Enter month as 3 letters: (Jan - Dec)\n')
    day = input('Enter day of the month')
    today = convert_to_date(month, day)
    seasons = {
        "Winter": {
            "start": convert_to_date('Dec', 21),
            "end": convert_to_date('Mar', 19)
        },
        "Spring": {
            "start": convert_to_date('Mar', 20),
            "end": convert_to_date('Jun', 20)
        },
        "Summer": {
            "start": convert_to_date('Jun', 21),
            "end": convert_to_date('Sep', 21)
        },
        "Fall": {
            "start": convert_to_date('Sep', 22),
            "end": convert_to_date('Dec', 20)
        }
    }
    current_season = ""
    for season in seasons:
        if (seasons[season]["start"] <= convert_to_date(month, day) and today <= seasons[season]["end"]):
            current_season = season
    print(f'{month} {day} is in {current_season or "Winter"}')
    time.sleep(2.0)

    clear()




def convert_to_date(month, day):
    return datetime.datetime.strptime(f'{day}-{month}-{2022}', '%d-%b-%Y')




exercise1()
exercise2()
exercise3()
exercise4()
exercise5()
exercise6()
