var retrocesso = {
  revert: function(text){
    var str = text;
    var result = '';
    var i = str.length;
    while (i > 0) {
            i--;
            result += str.charAt(i);
    }
    return result;
  },

  revertField: function(el, callback){
    var str = document.getElementById(el).value;
    document.getElementById(el).value = retrocesso.revert(str);
    if(typeof(callback) == 'function') callback(el);
  },


  /**
   * Warning:
   * this method should be used on elements
   * that contains only text
   */
  revertEl: function(el, callback){
    var str = document.getElementById(el).innerHTML;
    document.getElementById(el).innerHTML = retrocesso.revert(str);
    if(typeof(callback) == 'function') callback(el);
  }
}

