//Given a string, replace every word with the word 'sex'. I dunno why, it was part of the coding challenge instructions.





function toFreud(string) {
return string ? string.split(' ').map(element => element = 'sex').join(' ') : string;
}
