import "./Dogs.css";
import { Link, useParams } from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";

const dogsData = [
  {
    name: "whiskey",
    age: 3,
    loves: "Whiskey loves popcorn",
    hates: "He hates cats",
    hobby: "Likes to leak on his litte .. idk",
  },
  {
    name: "hazel",
    age: 6,
    loves: "Hazel loves milk",
    hates: "He hates cats",
    hobby: "Loves to disturb people",
  },
  {
    name: "tubby",
    age: 5,
    loves: "Tubby loves popcorn",
    hates: "He hates cats",
    hobby: "Loves to disturb people",
  },
];

const Dogs = () => {
  const { name } = useParams();

  const dog = dogsData.filter((el) => el.name === name)[0];

  return (
    <div>
      <h1 className="header">
        Hello! We have dogs. Click on their names for more info
      </h1>

      <div className="dogs">
        <Link to="/whiskey">
          <img src={whiskey} alt="whiskey" />
          Whiskey
        </Link>
        <Link to="/hazel">
          <img src={hazel} alt="hazel" /> Hazel
        </Link>
        <Link to="/tubby">
          <img src={tubby} alt="tubb" /> Tubby
        </Link>
      </div>
      <div className="dog-info-container">
        <h1> {`Name:  ${dog.name.toUpperCase()}`} </h1>
        <h2> {`Age:  ${dog.age}`} </h2>
        <p> {dog.loves} </p>
        <p> {dog.hates} </p>
        <p> {dog.hobby} </p>
      </div>
    </div>
  );
};

export default Dogs;
