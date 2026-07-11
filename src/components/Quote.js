export function Quote(){

return `

<section class="quote" id="cotizar">


<div class="container">


<div class="quote-box">


<div class="quote-content">


<span>
COTIZACIÓN
</span>


<h2>
¿Tienes un proyecto?
</h2>


<p>
Cuéntanos qué necesitas fabricar
y encontremos la mejor solución.
</p>


</div>



<form class="quote-form" id="quoteForm">


<input 
type="text"
name="nombre"
placeholder="Nombre completo">



<input 
type="email"
name="correo"
placeholder="Correo electrónico">



<input 
type="tel"
name="telefono"
placeholder="Teléfono">



<select name="servicio">


<option value="">
Tipo de proyecto
</option>


<option>
Impresión 3D
</option>


<option>
Diseño CAD
</option>


<option>
Prototipo
</option>


<option>
Desarrollo personalizado
</option>


</select>




<textarea

name="mensaje"

placeholder="Describe tu proyecto">
</textarea>



<button class="btn-primary">

Solicitar cotización

</button>



<p class="form-message"></p>



</form>


</div>


</div>


</section>


`;

}