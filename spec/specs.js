
describe('palindromes', function() {
    it("checks if string reverse is palindrome", function(){
        expect(palindromes("racecar")).to.equal(true);
    });

    it("checks if string reverse is palindrome with space", function(){
        expect(palindromes("Hello olleH")).to.equal(true);
    });

    it("returns false when its not a palindrome", function(){
        expect(palindromes("yellow")).to.equal(false);
    });

    it("checks to see if a number is a palindrome", function(){
        expect(palindromes("123")).to.equal(false);
    });

    it("checks to see if a number is a palindrome", function(){
        expect(palindromes("1001")).to.equal(true);
    });
});
