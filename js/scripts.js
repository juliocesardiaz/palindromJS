var palindromes = function(word) {
    var wordReverse = word.split('').reverse().join('');

    if(word === wordReverse) {
        return true;
    } else {
        return false;
     }
}

$(document).ready(function() {

    $("form#palindromes").submit(function(event) {
        var word = ($("input#word").val());
        var result = palindromes(word);
        var printOut = "";

        if(result === true) {
             printOut =  "Yes, it is a Palindrome!";
        } else {
            printOut = "No, this is not a Palindrome...";
        }

        $(".answer").text(printOut);
        $("#result").show();
        event.preventDefault();
    });
});
