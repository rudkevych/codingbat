/*The parameter weekday is true if it is a weekday,
and the parameter vacation is true if we are on vacation.
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.*/

function sleepIn(weekday: boolean, vacation: boolean): boolean {
    if (!weekday || vacation) {
        return true;
    } else {
        return false;
    }
}
