{



const countWordOccurrences =(sentence:string,word:string):number =>{
const sentenceLowercase=sentence.toLocaleLowerCase()
const wordLowercase=word.toLocaleLowerCase()
const result =sentenceLowercase.split(wordLowercase).length -1
return result
}



// Sample Input:
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));




}