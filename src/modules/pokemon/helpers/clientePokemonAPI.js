
const obtenerPokemons =async () => {
    //Retorna el array de 
    console.log('Aleatorio')
    const vectorObj=await obtenerNombresPokemon(obtenerVectorNumerico())
    console.log(vectorObj)
}

function getNumeroAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)

}

const obtenerVectorNumerico=()=>{
    const vector=[getNumeroAleatorio(1,600),getNumeroAleatorio(1,600),getNumeroAleatorio(1,600),getNumeroAleatorio(1,600)]

    return vector;
}

const obtenerNombresPokemon=async([id1,id2,id3,id4]=[])=>{//desestructurando

    const data1= await consumirAPI(id1)
    const data2=await consumirAPI(id2)
    const data3=await consumirAPI(id3)
    const data4=await consumirAPI(id4)
    console.log(data1.name)
    console.log(data2.name)
    console.log(data3.name)
    console.log(data4.name)

    const obj1={
        nombre:data1.name,
        id:data1.id
    }
    const obj2={
        nombre:data2.name,
        id:data2.id
    }
    const obj3={
        nombre:data3.name,
        id:data3.id
    }

    const obj4={
        nombre:data4.name,
        id:data4.id
    }

    const vectorObejtos=[obj1,obj2,obj3,obj4]
    return vectorObejtos
    

}



const consumirAPI=async(id)=>{
    //consume el API
    const data= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((result)=>result.json());
    console.log(data.name)
    console.log(data.id)
    return data
}



const obtenerFachadaPokemons = async() => {
    return await obtenerPokemons();
}
//exporto para consumir desde el componenete
export default obtenerFachadaPokemons