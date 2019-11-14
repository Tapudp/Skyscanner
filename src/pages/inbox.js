import React from "react";
import PageContainer from "../components/Atom/PageContainer";
import Box from "../components/Molecule/Box";
import HorizontalNav from "../components/Molecule/HorizontalNav";

function Inbox() {
  const Alerts = [
    {
      message: "James sent you travel tip",
      date: "20.03.2019",
      buttonname: "Checkout"
    },
    {
      message: "Charles commented on your topic",
      date: "20.06.2019",
      buttonname: "Checkout"
    },
    {
      message: "Charles commented on your topic",
      date: "25.08.2019",
      buttonname: "Checkout"
    },
    {
      message: "James sent you travel tip",
      date: "20.03.2019",
      buttonname: "Checkout"
    }
  ];

  const Inbox = [
    {
      message: "industry. Lorem ipsum has been the industry's standard dummy",
      date: "20.03.2019",
      buttonname: "Read"
    },
    {
      message: "industry. Lorem ipsum has been the industry's standard dummy",
      date: "20.03.2019",
      buttonname: "Read"
    },
    {
      message: "industry. Lorem ipsum has been the industry's standard dummy",
      date: "20.03.2019",
      buttonname: "Read"
    },
    {
      message: "industry. Lorem ipsum has been the industry's standard dummy",
      date: "20.03.2019",
      buttonname: "Read"
    },
    {
      message: "industry. Lorem ipsum has been the industry's standard dummy",
      date: "20.03.2019",
      buttonname: "Read"
    }
  ];
  return (
    <PageContainer
      url="https://cdn.discordapp.com/attachments/632394785025425429/633269930586013716/Background1.jpg"
      className="text-center"
    >
      <HorizontalNav />
      <div className="container">
        <div className="row">
          <Box data={Alerts} boxname="Alerts" />
          <Box data={Inbox} boxname="Inbox" />
        </div>
      </div>
    </PageContainer>
  );
}

export default Inbox;
