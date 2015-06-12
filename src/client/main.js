$.get('/greet').then(addNames);

window.RupertDoormanLoggedIn = function(){
  $.get('/doorman').then(function(user){
    $('#hello').text(user.displayName);
    addNames([user.displayName]);
  });
}

$('#login').on('click', function(){
  window.open('/doorman/google/connect');
});

function addNames(names){
  names.forEach(function(name){
    $('#greeted').append($('<li>').text(name));
  });
}
