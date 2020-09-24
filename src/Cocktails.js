import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
import { Media } from "react-bootstrap";

class Cocktails extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.getCocktail("margarita");
  }

  getCocktail(cocktail) {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail
      )
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.drinks,
        });
        console.log(res.data.drinks);
      });
  }
  render() {
    const listDrink = this.state.data.map((drink) => (
      <Media style={cocktail_look.styling1} key={drink.idDrink}>
        <img
          width={64}
          height={64}
          src={drink.strDrinkThumb}
          alt="Image of cocktail"
        />
        <Media.Body style={cocktail_look.styling2}>
          <h5>Drink name: {drink.strDrink}</h5>
          <p>Alcoholic or not: {drink.strAlcoholic}</p>
        </Media.Body>
      </Media>
    ));
    return (
      <div>
        <div>Searched for cocktail: Margarita</div>
        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        <div>{listDrink}</div>
      </div>
    );
  }
}
export default Cocktails;

const cocktail_look = {
  styling1: {
    display: "inline-flex",
    width: "200px",
    marginRight: "15px",
    height: "200px",
    fontSize: "10px",
    padding: "30px 20px",
  },
  styling2: {
    width: "100px",
  },
};
