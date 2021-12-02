var word = document.getElementById('word'),
    words = ['Hi.','I\'ll be your guide today.','I\'m just pixels and code.. but I can be useful.','Have a look around.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 12,
    speed = 80;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i == len){
              forwards = false;
              i=3;
              offset == words[i].length;
            } 
         }
         
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      
    	word.textContent = part;
      if(i == 3) {
          forwards = true;
          offset++;
        }
  },speed);
};

(function() {    
    wordflick();
})();