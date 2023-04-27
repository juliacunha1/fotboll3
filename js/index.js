// Detekterar om menyn är öppen eller stängd och animerar den + visar eller tar bort innehållet. 
  const menuBtn = document.querySelector('.dropbtn');
  let menuOpen = false;
  menuBtn.addEventListener('click',() => {
      if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.getElementById('myDropdown').classList.toggle('show');    
      } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById('myDropdown').classList.remove('show');
      }
  });


