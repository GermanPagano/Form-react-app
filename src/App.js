import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>


      <div class="container">
        <header class="header">
            <h1 id="title" class="text-center">Encuesta de Satisfaccion</h1>
            <p id="description" class="description text-center">Gracias por ayudarnos a ser cada dia mejores.</p>
    </header>


    <form id="survey-form">
        <div class="form-group">
        <label id='name-label 'for="name" >Nombre</label>
    
        <input type="text"  id='name' name='name' class="form-control" placeholder='ingresa tu nombre' required />
    </div>

    <div class="form-group">
        <label id='email-label' for="email">Email</label>
    
        <input type="email"  id='email' class="form-control" name='name' placeholder='ingresa tu email' required/>
    </div>
    <div class="form-group">
        <label id='number-label' for="number">Edad(opcional)</label>
    
        <input type="number"  id='number' class="form-control"  name='age' placeholder='Edad'  min='15' max='99'required/>
    </div>
    
        <div class="form-group">
            <p id='description'>Cual de estas opciones define tu situacion actual?</p>
        <select name="role" id="dropdown" class="form-control" required>
            <option value="student">Estudiante</option>
            <option value="job">Trabajando medio tiempo</option>
            <option value="learner">Trabajando tiempo completo</option>
            <option value="preferNo">Prefiero no contestar</option>
            <option value="other">Otra</option>
        </select>
    </div>
    
    <div class="form-group">
        <p>Que tan probable es que recomiendes nuestros cursos?</p>
        <label ><input type="radio" name="user-recommend" class="input-radio" value="definitely" checked/>Definitivamente
        </label>
        <label ><input type="radio" name="user-recommend" class="input-radio" value="maybe"/>Quizas</label>
        <label ><input type="radio" name="user-recommend" class="input-radio" value="not-sure"/>No estoy seguro</label>
    </div>
    
    <div class="form-group">
        <p>Que fue lo que mas te gusto de nuestra plataforma?</p>
        <select name="nostlike" class="form-control" id="nost-like" required>
            <option value="" selected disabled>Elige una opcion</option>
            <option value="challenges">Enseñanza bajo demanda</option>
            <option value="projects">Proyectos</option>
            <option value="community">Comunidad</option>
            <option value="openSource">Bolsa de empleo</option>
        </select>
    </div>
    
    <div class="form-group">
        <p>Cuales cursos hiciste con nosotros?
            <span class="clue">(selecciona los que correspondan)</span>
        </p>
        <label id='name-label'>
            <input type="checkbox"  class="input-checkbox" name="prefer" value="front-end-projects" />Desarrollo Full Stack
        </label>
        <label >
            <input type="checkbox" class="input-checkbox" name="prefer" value="back-end-projects"/>Desarrollo Back-end
        </label>
        <label >
            <input type="checkbox" class="input-checkbox" name="prefer" value="data-visualization"/>Desarrollo Front-end
        </label>
        <label >
            <input type="checkbox" class="input-checkbox" name="prefer" value="challenges"/> Logica de programacion
        </label>

    </div>
    
    <div class="form-group">
        <p>Envianos tu comentario o sugerencia</p>
        <textarea name="comment" id="comments" class="input-textarea" placeholder="Ingresa tu comentario aca..."></textarea>
    </div>
    
    <div class="form-group">
        <button id="submit" class="submit-button" type="submit">Enviar</button>
    </div>
    </form>
</div>























      


    </div>




  );
}


export default App;
