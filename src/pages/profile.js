import React from "react";
import { Cardiv } from "../components/Atom/Cardiv";
import FormField from "../components/Atom/FormField";
import PageContainer from "../components/Atom/PageContainer";
import HorizontalNav from "../components/Molecule/HorizontalNav";
import Trips from "../components/Molecule/Trips";

function Profile() {
  const formfieldValues = [
    {
      firstitem: "Name",
      seconditem: "Surname",
      firstplaceholder: "First Name",
      secondplaceholder: "Last Name"
    },
    {
      firstitem: "AddressLogo",
      seconditem: "CountryLogo",
      firstplaceholder: "Address . . .",
      secondplaceholder: "Country"
    },
    {
      firstitem: "CityLogo",
      seconditem: "PhoneLogo",
      firstplaceholder: "City",
      secondplaceholder: "Phone"
    },
    {
      firstitem: "@",
      seconditem: "MessageLogo",
      firstplaceholder: "Email",
      secondplaceholder: "Recommeded"
    }
  ];

  return (
    <PageContainer
      url="https://cdn.discordapp.com/attachments/632394785025425429/633269939167428638/Background2.jpg"
      className="text-center"
    >
      <HorizontalNav />
      <div className="container no-gutters my-3 mx-auto">
        welcome to Profile page
        <Cardiv opac="0.45" blurpixels="5px" className="card d-flex px-2">
          <div className="row mx-2 my-3 py-2">
            <img
              src=""
              alt="profile image"
              className="rounded rounded-circle mx-1"
            />
            <button className="rounded border border-dark bg-dark text-light mx-1">
              Edit Profile
            </button>
          </div>
          <div className="row">
            <div className="my-3 d-flex flex-column">
              {formfieldValues.map(item => (
                <FormField
                  firstitem={item.firstitem}
                  firstplaceholder={item.firstplaceholder}
                  seconditem={item.seconditem}
                  secondplaceholder={item.secondplaceholder}
                />
              ))}
            </div>
            <div className="col-4">
              <div className="row my-3">Previous Experience</div>
              <Trips logo="trips" name="Small trips" />
              <Trips logo="dest" name="Destinations" />
            </div>
          </div>
        </Cardiv>
      </div>
    </PageContainer>
  );
}

export { Profile, PageContainer };
