var findWordsContaining = function(words, x) {
    let indices = [];
   for(let i = 0; i<words.length; i++){
    let word = words[i];
    if(word.includes(x)){
        indices.push(i);
    }
   }
   return indices; 
};