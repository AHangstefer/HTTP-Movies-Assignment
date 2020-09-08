import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";

const initialState= {

  id: "",
  title: '',
  director: '',
  metascore: "",
  stars: []

};

// The form should make a PUT request to the server when submitted

// When the call comes back successfully, reset your form state and 
// route the user to /movies where they will see the updated movie in 
// the list

const UpdateMovie = props => {
    const {push} = useHistory();
    const [item, setItem] = useState(initialState);
    const {id} = useParams();

    useEffect(()=> {
        axios
            .get(`http://localhost:5000/update-movie/${id}`)
            .then(res=>{
                console.log("this is from UpdateMovie:", res.data)
                setItem(res.data);
            })
            .catch((err)=> {
                console.log ("oh shit! You've got an error: ",err)
            })

    }, [id]);

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;


        setItem({
            ...item,
            [ev.target.name]: value
        });

    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/update-movie/${id}`, item)
            .then((res)=> {
                props.setItems(res.data)
                console.log("this is your updated movie!:", res.data)
                push(`/update-movie/${id}`);
            })
            .catch((err)=> {
                console.log("Oh shit.. error from update movie: ", err)
            })
    };





    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input 
                    type = "text"
                    name = "id"
                    onChange = {changeHandler}
                    placeholder = "id"
                    value = {item.id}
                    />  
                </div>
                <div>
                    <input 
                    type = "text"
                    name = "title"
                    onChange = {changeHandler}
                    placeholder = "title"
                    value = {item.title}
                    />  
                </div>
                <div>
                    <input 
                    type = "text"
                    name = "director"
                    onChange = {changeHandler}
                    placeholder = "director"
                    value = {item.director}
                    />  
                </div>
                <div>
                    <input 
                    type = "text"
                    name = "metascore"
                    onChange = {changeHandler}
                    placeholder = "metascore"
                    value = {item.metascore}
                    />  
                </div>
            </form>
        </div>

    )

    



}


export default UpdateMovie;


