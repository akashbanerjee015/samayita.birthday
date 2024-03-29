document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.card').style.display = 'none';
  });
  
  // Additional code for the card rotation effect
  document.querySelector('.card').addEventListener('mouseover', function() {
    this.style.transform = 'rotateY(180deg)';
  });
  
  document.querySelector('.card').addEventListener('mouseout', function() {
    this.style.transform = 'rotateY(0deg)';
  });