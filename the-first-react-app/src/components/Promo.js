import PromoHeading from "./PromoHeading";

const data = {
  heading: "99% off all time!",
  callToAction: "Everything must go!",
};

function Promo() {
  return (
    <PromoHeading heading={data.heading} callToAction={data.callToAction} />
  );
}

export default Promo;
