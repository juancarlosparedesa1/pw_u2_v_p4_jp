const obtenerPokemons=async()=>{
    //Retornar el array de pokemons
    console.log('Aleatorio')
    const vectorObj = await obtenerNombresPokemon(obtenerVectorNumerico())
    console.log(vectorObj)
    return vectorObj
}

//Funcion para numero aleatorio
function getNumeroAleatorio(min, max){
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

const obtenerVectorNumerico=()=>{
    const vector = [getNumeroAleatorio(1,600),getNumeroAleatorio(1,600),getNumeroAleatorio(1,600),getNumeroAleatorio(1,600)] 

    return vector;
}

const obtenerNombresPokemon=async([id1,id2,id3,id4]=[])=>{
    const data1 = await consumirAPI(id1);
    const data2 = await consumirAPI(id2);
    const data3 = await consumirAPI(id3);
    const data4 = await consumirAPI(id4);

    console.log(data1.name)
    console.log(data2.name)
    console.log(data3.name)
    console.log(data4.name)

    const obje1 = {
        nombre: data1.name,
        id: data1.id
    }

    const obje2 = {
        nombre: data2.name,
        id: data2.id
    }

    const obje3 = {
        nombre: data3.name,
        id: data3.id
    }

    const obje4 = {
        nombre: data4.name,
        id: data4.id
    }

    const vectorObjetos = [obje1,obje2,obje3,obje4];

    return vectorObjetos

}

const consumirAPI=async(id)=>{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((result)=>result.json());
    console.log(data.name)
    console.log(data.id)
    return data
}

//Intermediario
const obtenerFachadaPokemons=async()=>{
    return await obtenerPokemons();
}

//Exportar el metodo al componente
export default obtenerFachadaPokemons