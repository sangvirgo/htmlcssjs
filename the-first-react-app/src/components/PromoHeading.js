import Promo from "./Promo";

function PromoHeading(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </div>
  );
}

export default PromoHeading;
