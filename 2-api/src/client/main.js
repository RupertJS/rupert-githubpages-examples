$.get('/greet').then(addNames);

$('#name').on('change', function(event){
  var name = event.target.value;

  $('#hello').text('Hello, ' + name + '!');

  addNames([name]);

  $.ajax ({
    url: '/greet',
    type: 'POST',
    data: JSON.stringify({name: name}),
    contentType: 'application/json; charset=utf-8'
  });
});

function addNames(names){
  names.forEach(function(name){
    $('#greeted').append($('<li>').text(name));
  });
}
