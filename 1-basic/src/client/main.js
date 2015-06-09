document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('name').addEventListener('change', function(event){
    var name = event.target.value;
    document.getElementById('hello').innerText = "Hello, " + name + "!";
  });
});
