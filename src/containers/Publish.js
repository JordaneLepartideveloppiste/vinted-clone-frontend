import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import "../assets/css/containers/Publish.scss"
import DragDrop from "../components/DragDrop";


const Publish = ({userToken}) => {
const [title, setTitle] = useState("Titre de l'annonce");
const [description, setDescritption] = useState("Décrivez-nous le produit");
const [price, setPrice] = useState("Fixez votre prix");
const [condition, setCondition] = useState("Dans quel état est-il ?");
const [city, setCity] = useState("Où peut-on le trouver ?");
const [brand, setBrand] = useState("De quelle marque ?");
const [size, setSize] = useState("Indiquez-nous la taille du produit");
const [color, setColor] = useState("Précisez la ou les couleurs");
const [picture, setPicture] = useState();
const [data, setData] = useState();

const history = useHistory();



const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        console.log(userToken);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("picture", picture);

        const res = await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish", formData, {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        });

        console.log(res.data);
        setData(res.data.result);
        if (res.data._id) {
        history.push(`/offer/${res.data._id}`);
        }

        const userId = res.data.owner._id;
        console.log(userId);
        
    } catch (err) {
        console.log(err.response);
        console.log(err.message);
    }
}





    return (
      <div className="publish">
        <div className="publish_content">
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={(e) => {
                setPicture(e.target.files[0]);
              }}
            />
            {/* <DragDrop file={picture} 
            setFile={setPicture} /> */}
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <textarea
            col="20"
              type="text"
              onChange={(e) => {
                setDescritption(e.target.value);
              }}
              placeholder={description}
            ></textarea>
            <input
              type="text"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
            />
            <input
              type="text"
              onChange={(e) => {
                setCondition(e.target.value);
              }}
              value={condition}
            />
            <input
              type="text"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
            <input
              type="text"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              value={brand}
            />
            <input
              type="text"
              onChange={(e) => {
                setSize(e.target.value);
              }}
              value={size}
            />
            <input
              type="text"
              onChange={(e) => {
                setColor(e.target.value);
              }}
              value={color}
            />

            <input type="submit" value="Envoyer" />
          </form>
          {data && <img src={data.secure_url} alt="pic_uploaded" />}
        </div>
      </div>
    ); 
};

export default Publish;