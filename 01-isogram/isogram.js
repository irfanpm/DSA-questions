//questions
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    str=str.toLowerCase()
    const str1 = str.split("")
    const letters=new Set(str1)
    let text=""
    letters.forEach((value)=>{
        text+=value
    })
    if(str==text){
        return true
    }
    else{
        return false
    }

}
console.log(isIsogram("mn"))