// var findWordsContaining = function(words, x) {
//     let indices = words.map((word, index) => word.includes(x)?index:-1);
    
//     return indices.filter(index => index !== -1); 
// };
//la fonction ci dessus est celle avec la methode map mais je la trouve plus difficile à comprendre que celle que je vais mettre ci dessous

//la function proprement dite
var findWordsContaining = function(words, x) {
        let indices = [];
        words.forEach((word,i) => {
            if(word.includes(x)){
                indices.push(i);
            }
        })
        return indices;
    };