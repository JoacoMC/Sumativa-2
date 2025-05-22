const comunasPorRegion = {
  "Arica y Parinacota": ["Arica", "Putre"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte"],
  "Antofagasta": ["Antofagasta", "Calama", "Mejillones"],
  "Atacama": ["Copiapó", "Chañaral", "Caldera"],
  "Coquimbo": ["La Serena", "Coquimbo", "Ovalle"],
  "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "San Antonio"],
  "Metropolitana de Santiago": ["Santiago", "Puente Alto", "Maipú", "Las Condes", "Ñuñoa"],
  "O'Higgins": ["Rancagua", "San Fernando", "Pichilemu"],
  "Maule": ["Talca", "Curicó", "Linares"],
  "Ñuble": ["Chillán", "San Carlos", "Quirihue"],
  "Biobío": ["Concepción", "Talcahuano", "Los Ángeles"],
  "La Araucanía": ["Temuco", "Villarrica", "Pucón", "Angol"],
  "Los Ríos": ["Valdivia", "La Unión", "Río Bueno"],
  "Los Lagos": ["Puerto Montt", "Osorno", "Puerto Varas", "Castro"],
  "Aysén": ["Coyhaique", "Puerto Aysén", "Chile Chico"],
  "Magallanes": ["Punta Arenas", "Puerto Natales", "Porvenir"]
};

document.addEventListener("DOMContentLoaded", function () {
  const regionSelect = document.getElementById("region");
  const comunaSelect = document.getElementById("comuna");

  regionSelect.addEventListener("change", function () {
    const regionSeleccionada = this.value;
    comunaSelect.innerHTML = '<option disabled selected>Seleccione una comuna</option>';

    if (comunasPorRegion[regionSeleccionada]) {
      comunasPorRegion[regionSeleccionada].forEach(function (comuna) {
        const opcion = document.createElement("option");
        opcion.textContent = comuna;
        comunaSelect.appendChild(opcion);
      });
    }
  });
});