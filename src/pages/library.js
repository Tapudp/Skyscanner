import React from "react";
import styled from "styled-components";
import PageContainer from "../components/Atom/PageContainer";
import HorizontalNav from "../components/Molecule/HorizontalNav";
import searchicon from "../images/searchicon.png";

function Library() {
  const Destinations = [
    {
      destinationImage:
        "https://cdn.discordapp.com/attachments/632394785025425429/633269930586013716/Background1.jpg",
      destinationName: "Indian Destination"
    },
    {
      destinationImage:
        "https://cdn.discordapp.com/attachments/632394785025425429/633269930586013716/Background1.jpg",
      destinationName: "American Destination"
    },
    {
      destinationImage:
        "https://cdn.discordapp.com/attachments/632394785025425429/633269930586013716/Background1.jpg",
      destinationName: "Carribean Destination"
    },
    {
      destinationImage:
        "https://cdn.discordapp.com/attachments/632394785025425429/633269930586013716/Background1.jpg",
      destinationName: "African Destination"
    },
    {
      destinationImage:
        "https://cdn.discordapp.com/attachments/632394785025425429/633269930586013716/Background1.jpg",
      destinationName: "European Destination"
    }
  ];
  return (
    <PageContainer
      url="https://cdn.discordapp.com/attachments/632394785025425429/633269939167428638/Background2.jpg"
      className="text-center"
    >
      <HorizontalNav />
      <div className="d-flex flex-column m-auto p-5">
        <div className="d-flex flex-row align-items-start mb-5">
          <CustomSearch
            className="form-control form-control-lg"
            placeholder="Search"
            type="text"
            name="search"
            onKeyUp={event => {
              if (event.keyCode === 13) {
                alert(`**${event.target.value}** will be searched online`);
              }
            }}
          />
          <div className="d-flex flex-column text-left pl-4">
            <h3>Indian Destination</h3>
            <span className="my-4">Description</span>
            <p>
              Industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1500s, when an unknown printer took a gallery of type
              and scrambled it to make a type speciment book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum
            </p>
            <button className="btn btn-dark border border-light text-center w-25">
              Watch
            </button>
          </div>
          <div className="mx-2 px-5 text-nowrap">80% done</div>
        </div>
        <div className="row justify-content-around">
          {Destinations.map(item => (
            <div>
              <CustomCard className="border border-light rounded" />
              <p>{item.destinationName}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

const CustomSearch = styled.input`
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`;

const CustomCard = styled.div`
  background-image: url(${searchicon});
  background-size: contain;
  background-position: center;
  background: no-repeat;
  background-color: rgba(255, 255, 255, ${props => props.opac});
  backdrop-filter: blur(${props => props.blurpixels});
  min-height: 150px;
  max-height: 150px;
  min-width: 100%;
  max-width: 120px;
`;

export default Library;
