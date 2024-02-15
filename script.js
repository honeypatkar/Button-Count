  let count = 0;
  let timeOut;
    
    function increaseCount() {
      count++;
      document.getElementById("countDisplay").innerText = count;
    }
    function decreseCount() {
      count--;
      document.getElementById("countDisplay").innerText = count;
    }
    function autoGenrate() {
      startButton.disabled = true;
      timeOut = setInterval(() => {
         count++;
      document.getElementById("countDisplay").innerText = count;
      },1000);
    }

   function stopButton() {
      startButton.disabled = false;
     if (timeOut) {
       clearInterval(timeOut);
       timeOut = null;
     }
     document.getElementById("countDisplay").innerText = count;
   }

  function resetButton() {
    clearInterval(timeOut);
    count = 0;
    document.getElementById("countDisplay").innerText = count;
    startButton.disabled = false;
  }

