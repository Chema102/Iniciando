//es un objeto
const a = {    
};
console.log(a);

const persona = {
    nombre: 'pipo',
    apellifo: 'garcia',
    edad: 20,
    pasatiempos: ['corrar','dormir','comer','sentarse'],
    soltero:true,
    contacto:{
        gmail:'jose_13123@hotmail.com',
        face:'pipo garcia',
        telefono: 6645544556
    },
    saludar:function(){
        console.log('hola papi')
    },
    minombre:function(){
        console.log(`hola mi nombre es ${this.nombre} ${this.apellifo} y me puedes
        contactar por ${this.contacto.telefono}`)
    },

}

console.log(persona);
console.log(persona.nombre,persona.apellifo, persona.edad);
console.log(persona.pasatiempos);
console.log(persona.pasatiempos[1]);
console.log(`estoy soltero ${persona.soltero}`);
console.log(persona.contacto.gmail, persona.contacto.telefono);
persona.saludar();
persona.minombre();

console.log(Object.keys(persona));

console.log(Object.values(persona));

console.log(persona.hasOwnProperty("nombre"));
