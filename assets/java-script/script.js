 
//  Section Switching Script 

 const buttons = document.querySelectorAll('.btn-outline-light');
  const sections = document.querySelectorAll('.content-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      
    // Section Hiding 

      sections.forEach(section => section.classList.add('hidden'));
      
    //   Highlight Removal for buttons 

      buttons.forEach(b => b.classList.remove('bg-gray-700'));

    //   Clicked Section 

      const target = btn.getAttribute('data-section');
      document.getElementById(target).classList.remove('hidden');

    //   Active Button Highlight 

      btn.classList.add('bg-gray-700');
    });
  });
