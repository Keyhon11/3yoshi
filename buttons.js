function breakoutRoom() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var lanaguage = document.getElementById("language").value;
    var breakoutRoom = document.getElementById("breakout_Rooms").value;
    var str = `${name} ${age} ${lanaguage} ${breakoutRoom}`;
    // document.getElementById("demo1").textContent = str
    window.location.href = 'page2.html'
}
function exitRoom() {

  window.location.href = 'website.html'
}


function mute_unmute(x) {
    x.classList.toggle("fa-microphone-slash");
  }

//   chat functions
function openForm() {
    document.getElementById("myForm").style.display = "block";
    // document.getElementsByClassName("chat-popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }