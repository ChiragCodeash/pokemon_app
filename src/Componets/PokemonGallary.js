import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

const PokemonGallary = () => {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const data = await res.json();
      setPokemonData(data.results);
   
    };
    fetchData();
  } , []);
  return (
    <>
      <Container className="mt-4">
        <div className="row">
          {pokemonData.length != 0
            ? pokemonData.map((item , i) => {
                return (
                  <div key={i} className="border border-3 col-lg-4 col-md-12 mb-4 mb-lg-0 rounded-4">
                    <div
                      className="bg-image hover-overlay ripple shadow-1-strong rounded"
                      data-ripple-color="light"
                    >
                      <img
                        src={`https://img.pokemondb.net/artwork/${item.name}.jpg`}
                        className="w-100"
                      />
                      <a
                        href="#!"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal1"
                      >
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}

        
        </div>
      </Container>
      {/* <div>
        Pokemon Gallary
      </div> */}
    </>
  );
};

export default PokemonGallary;
