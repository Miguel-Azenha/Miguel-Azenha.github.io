
    // small helpers
    document.getElementById('year').textContent = new Date().getFullYear();

    function filterProjects(type){
      const cards = document.querySelectorAll('#projectsGrid .card');
      cards.forEach(c=>{
        if(type==='all' || c.dataset.type===type) c.style.display='flex'; else c.style.display='none';
      })
    }

    function sendContact(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      // fallback: open mail client. For production, integrate with serverless function or service.
      const subject = encodeURIComponent('Contacto via portfólio: ' + name);
      const body = encodeURIComponent(message + '\n\n--\n' + name + '\n' + email);
      window.location.href = `mailto:teuemail@exemplo.com?subject=${subject}&body=${body}`;
    }
