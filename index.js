var findWordsContaining = function(words, x) {
    let indices = [];
   for(let i = 0; i<words.length; i++){
    let word = words[i];
    for(let c of word ){
        if(c === x){
        indices.push(i);
        break;
        }
    }
   }return indices; 
};