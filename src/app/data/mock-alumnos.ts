import { alumno } from '../models/alumno.model';
export const ALUMNOS: alumno[] = [
    {   id: 1, 
        nombre:"Juan",
        apellido:"Perez",
        // edad:22,
        dni:"12345678",
        sexo:"Masculino",
        fechaNacimiento:"01/01/2000",
        direccion:"Av. Siempreviva 555",
        telefono:"12345678",
        email:"jperez99@gmail.com",
        estado:"Inactivo",
        imagen: "/assets/avatars/av1.png",
        conocimientos:["Angular","JavaScript","TypeScript","C#","C++","HTML","CSS","SQL","PHP"],
        cursos:["Angular","JavaScript","TypeScript"],
        descripcion:"Curioso, fanatico de lo que hago."
    },
    {   id: 2, 
        nombre:"Santiago",
        apellido: "Pachano",
        // edad:23,
        dni:"12345678",
        sexo:"Masculino",
        fechaNacimiento:"05/23/1999",
        direccion:"En la sierra cordobeza",
        telefono:"12345678",
        email:"p4ch4n0@gmail.com" ,
        estado:"Activo",
        //imagen: "/assets/avatars/av2.png",
        imagen: "",
        //imagen: null,
        conocimientos:["React","JavaScript","TypeScript"],
        cursos:["JavaScript",],
    },
    {   id: 3, 
        nombre:"Sofia",
        apellido: "Soule",
        // edad:46,
        dni:"12345678",
        sexo:"Masculino",
        fechaNacimiento:"07/20/1976",
        direccion:"Al pie del Aconquija",
        telefono:"12345678",
        email:"sofita88@live.com" ,
        estado:"Inactivo",
        imagen: "/assets/avatars/av3.png",
        conocimientos:["HTML","JavaScript","CSS"],
        cursos:["Desarrollo Web"],
        descripcion:"me gusta la musica, los animales y la web"
    },
    {   id: 4, 
        nombre:"Cintia",
        apellido: "Nañarara",
        // edad:24,
        dni:"12345678",
        sexo:"Masculino",
        fechaNacimiento:"06/14/1998",
        direccion:"Balcarce 50",
        telefono:"12345678",
        email:"hnana@gmail.com" ,
        estado:"Activo",
        imagen: "/assets/avatars/av4.png",
        conocimientos:[],
        cursos:["Desarrollo Web"],
        descripcion:"Buscando aprender para desarrollarme profesionalmente."
    },
    {   id: 5, 
        nombre:"Lucy",
        apellido: "Liu",
        // edad:21,
        dni:"12345678",
        sexo:"Masculino",
        fechaNacimiento:"01/09/2001",
        direccion:"Av. Rivadavia 12333",
        telefono:"12345678",
        email:"lliu_chi@hotmail.com" ,
        estado:"Activo",
        imagen: "/assets/avatars/av5.png",
        conocimientos:[".NET","HTML","SQL","C#","CSS", "Backend"],
        cursos:[".NET","Node.js","TypeScript","C#"],
        descripcion:"Curiosa, amante de la tecnologia."
    }  
  ];