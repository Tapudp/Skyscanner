import React from "react";
import { Cardiv } from "../components/Atom/Cardiv";
import PageContainer from "../components/Atom/PageContainer";
import Scrollablediv from "../components/Atom/Scrollablediv";
import History from "../components/Molecule/History";
import HorizontalNav from "../components/Molecule/HorizontalNav";
import PaymentForm from "../components/Molecule/PaymentForm";

function Payment() {
  const PaymentHistoryValues = [
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    },
    {
      title: "Indian Dest",
      price: "9.99",
      date: "20.09.2019"
    }
  ];
  return (
    <PageContainer
      url="https://cdn.discordapp.com/attachments/632394785025425429/633269939167428638/Background2.jpg"
      className="text-center"
    >
      <HorizontalNav />
      <div className="container no-gutters">
        <div className="row">
          <div className="col-5">
            <Cardiv opac="0.1" blurpixels="50px" className="p-4 mx-2 rounded">
              <h1 className="text-left pb-4">Payment</h1>
              <PaymentForm />
              <div className="row flex-column">
                <p>or do you want to change to </p>
                <i>Paypal</i>
              </div>
            </Cardiv>
          </div>
          <div className="col-4">
            <Cardiv
              className="d-flex border rounded flex-column"
              opac="0.4"
              blurpixels="1px"
            >
              <p className="mx-3 py-2 text-left text-black">Payment History</p>
              <div>
                <Scrollablediv
                  maxheight="55vh"
                  minheight="50vh"
                  className="d-flex flex-column px-4 mx-1"
                >
                  {PaymentHistoryValues.map(item => (
                    <History
                      className="d-flex"
                      title={item.title}
                      price={item.price}
                      date={item.date}
                    />
                  ))}
                </Scrollablediv>
              </div>
            </Cardiv>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Payment;
