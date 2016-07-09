

  var words = ["about not giving up", "fun", "exciting", "being helpful", "being open", "what I learned at CodingDojo!"],//array of words
    el = document.getElementById('magic'),//grabs div titled 'magic',
    word_counter = 0,//phrase or string in array

    character_counter = 0;

  function updateText()
  //innerHTML is a built-in javascript property that defines html code AND the text within the given element
  // &nbsp; defines a non-breaking space

  {
    if (words[word_counter][character_counter] == ' '){//this calls every space (' ') within a given string defined as var words
      el.innerHTML += '&nbsp;';character_counter++;
//the above IF statement sets a non-breaking space into the var words strings spaces(' ')to increment at same interval time as an alphanumeric character. Javascript in html interprets a ' ' between characters as NON-EXISTENT ...not as an actual space...&nbsp; fixes this issue

    }//innerHTML is what is defined as everything within body container (div madic)
    el.innerHTML = el.innerHTML+words[word_counter][character_counter++];


    if(character_counter == words[word_counter].length+1)//ADDED +1 TO PRINT FULL WORD
    {
      word_counter++; 	//choose a different word
      character_counter = 0;	//start over with the first character of the word
      el.innerHTML = "";  //set the html to be blank

      //if we're displaying the last word, go back to the first word
      if(word_counter == words.length)
        word_counter = 0;
    }
  }

  setInterval(updateText,600);
