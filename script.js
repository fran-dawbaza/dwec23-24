function actualizaCeldas(){
    const occupiedCells = document.querySelectorAll('.occupied');

    for (let cell of occupiedCells){
        if (window.innerWidth <= 768)
                cell.replaceChildren();
            else{
                if (!cell.firstElementChild){
                    const email = cell.dataset.email;
                    const reason = cell.dataset.reason;
                    cell.innerHTML = `<div style="font-size:smaller">
                    Email: ${email}<br/>Motivo: ${reason}
                    </div>`;
                }     
            }
    }

}

window.addEventListener('resize', actualizaCeldas);

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector('tbody');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const reservationForm = document.getElementById('reservation-form');
    actualizaCeldas();

    // Delegación de eventos para las celdas ocupadas y disponibles
    tableBody.addEventListener('click', function(event) {
        const targetCell = event.target;

        if (targetCell.classList.contains('occupied')) {
            const email = targetCell.dataset.email;
            const reason = targetCell.dataset.reason;
            if (window.innerWidth <= 768)
                showModal(`Email: ${email}<br/>Motivo: ${reason}`);
        }

        if (targetCell.classList.contains('available')) {
            showModalForm();
        }
    });

    // Mostrar modal con información de celda ocupada
    function showModal(content) {
        const modal = document.getElementById('modal');
        const modalContent = document.querySelector('.modal-content');
        modal.style.display = 'block';
        modalContent.innerHTML = `<p>${content}</p><p>Haga clic en cualquier lugar fuera de este cuadro para cerrar.</p>`;
    }

        // Cerrar modal al hacer clic fuera de él
        window.addEventListener('click',function(event) {
            console.dir(event.target);
            if (window.innerWidth <= 768) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
                else {
                    console.dir(modal.firstElementChild.firstElementChild.firstChild);
                    copiarContenido(modal.firstElementChild.firstElementChild.firstChild.textContent.split('Email: ')[1]);
                }
            }
            else if (event.target.tagName!=='TD' &&
                event.target.childNodes && 
                event.target.childNodes[0].nodeType===3 &&
                event.target.childNodes[0].data.split('Email: ')[1]) {
                //console.dir(event.target.childNodes[0]);
                copiarContenido(event.target.childNodes[0].data.split('Email: ')[1]);
            }
        });

    async function copiarContenido(contenido) {
        try {
          await navigator.clipboard.writeText(contenido);
          console.log(contenido +' copiado al portapapeles');
          /* Resuelto - texto copiado al portapapeles con éxito */
        } catch (err) {
          console.error('Error al copiar: ', err);
          /* Rechazado - fallo al copiar el texto al portapapeles */
        }
      }    
    // Mostrar modal con formulario para reserva
    function showModalForm() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');        
      modal.style.display = 'block';
      modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h2>Reservar Aula</h2>
        <form id="reservation-form">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          <label for="reason">Motivo de la reserva:</label>
          <input type="text" id="reason" name="reason" required><br><br>
          <input type="submit" value="Reservar">
        </form>
      `;
  
      const closeButton = document.querySelector('.close');
      closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
      });
  
      // Cerrar modal al hacer clic fuera de él
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };
  
      // Envío del formulario
      const form = document.getElementById('reservation-form');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.email.value;
        const reason = form.reason.value;
        
        // Aquí puedes enviar los datos a través de AJAX o realizar alguna acción con ellos
        console.log('Email:', email);
        console.log('Motivo de reserva:', reason);
  
        // Cerrar modal después de enviar el formulario
        modal.style.display = 'none';
      });
    }
  });
  

