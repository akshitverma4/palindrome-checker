document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mainForm");
    let randomtext = ['Oh Noo!!', 'You lost!', 'Try a next time!!'];

  
    // Attach the event listener to the form element
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
    //   checkPalindrome();
      textGenerator();
    });
  
    function textGenerator(){
        text = randomtext[Math.floor(Math.random() * randomtext.length)];
        alert(text);
    }


    function checkPalindrome() {
        const inputPalindrome = document.getElementById("inputPalindrome").value;
      
        // Convert the input to lowercase and remove any non-alphanumeric characters
        const cleanedWord = inputPalindrome.toLowerCase().replace(/[^a-z0-9]/g, '');
      
        // Reverse the cleaned word
        const reversedWord = cleanedWord.split('').reverse().join('');
      
        // Check if the word is the same forwards and backwards
        if (cleanedWord === reversedWord) {
          alert("The word is a palindrome!");
        } else {
          alert("The word is not a palindrome.");
        }
      }      
      
  });
  