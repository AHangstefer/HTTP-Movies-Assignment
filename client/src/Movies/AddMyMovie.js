// import React, {useState} from "react";
// import axios from "axios"
// import Movie from "./Movie";

// const initialMovie = {
//         id: '',
//         title: '',
//         director: '',
//         metascore: "",
//         stars: []
// }



// const AddMyMovie = (props) => {

//     const [addMovie, setAddMovie] = useState(initialMovie)


//     const handleChange = (e) => {
//         e.persist()
//         console.log(e.target.name, e.target.value)
//         setAddMovie({[e.target.name]: e.target.value })
       
//     }


//     const AddNewMovie = (e) => {
//         e.preventDefault()
//         const newMovie = {
//             ...addMovie,
//         }
//         axios
//         .post(`http://localhost:5000/api/movies`, newMovie)
//         .then((res) =>{ 
//             props.getMyMovieList(res.data)
//             //setAddMovie()
//             console.log("this is your res from AddMovie:", res)
//         })
//         .catch((err)=> {
//             console.log("this is your error from AddMovie: ",err)
//         })
//     }


//     // const handleChange = (e) => {
//     //     console.log(e.target.name, e.target.value)
//     //     setAddMovie({[e.target.name]: e.target.value })
       
//     // }


    

//     return(
//         <div>
//             <h2>Add Movie Form</h2>
//         <form onSubmit = {AddNewMovie}>
//             <div>
//                 <input 
//                 type = "text"
//                 name = "id"
//                 onChange = {handleChange}
//                 placeholder = "id"
//                 value = {addMovie.id}
//                 />  
//             </div>
//             <div>
//                 <input 
//                 type = "text"
//                 name = "title"
//                 onChange = {handleChange}
//                 placeholder = "title"
//                 value = {addMovie.title}
//                 />  
//             </div>
//             <div>
//                 <input 
//                 type = "text"
//                 name = "director"
//                 onChange = {handleChange}
//                 placeholder = "director"
//                 value = {addMovie.director}
//                 />  
//             </div>
//             <div>
//                 <input 
//                 type = "text"
//                 name = "metascore"
//                 onChange = {handleChange}
//                 placeholder = "metascore"
//                 value = {addMovie.metascore}
//                 />  
//             </div>
//             <button>Add Your Movie</button>
//         </form>
//     </div>

        
//     )
// }

// export default AddMyMovie;