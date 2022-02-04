/*
Given a string, we'll say that the front is the first 3 chars of the string.
If the string length is less than 3, the front is whatever is there.
Return a new string which is 3 copies of the front.*/


function front3(str: string): string {
    if (str.length < 3) {
        return str.repeat(3);
    }
    return str.substring(0, 3).repeat((3));
}
