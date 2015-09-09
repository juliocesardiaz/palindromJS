var palindromes = function(word) {
    var wordReverse = word.split('').reverse().join('');

    if(word === wordReverse) {
        return true;
    } else {
        return false;
     }
}
