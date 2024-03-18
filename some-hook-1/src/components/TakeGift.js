import React, { useState } from "react";

const gifts = [
  "cpu 2024",
  "Ram 32gb rgb",
  "rgb Keyboard",
  "Wireless mouse",
  "External hard drive",
  "Gaming headset",
  "Portable charger",
  "Smartphone stand",
  "Bluetooth speaker",
  "Smartwatch",
];

const TakeGift = () => {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isGiftOpenRandom, setIsGiftOpenRandom] = useState(false);
  const [randomGift, setRandomGift] = useState(null);

  const handleTakeGifts = () => {
    setIsGiftOpen(!isGiftOpen);
  };

  const handleRandom = () => {
    setIsGiftOpenRandom(!isGiftOpenRandom);
    setRandomGift(gifts[Math.floor(Math.random() * gifts.length)]);
  };

  return (
    <div className="p-7">
      {isGiftOpen && (
        <ol className="list-decimal pl-4">
          {gifts.map((gift) => (
            <li className="pl-4" key={gift}>
              {gift}
            </li>
          ))}
        </ol>
      )}

      {!isGiftOpen && <h1>No Gifts</h1>}

      <button onClick={handleTakeGifts}>Take a Gifts</button>

      {isGiftOpenRandom && <h1>{randomGift}</h1>}

      {!isGiftOpenRandom && <h1>Click it!</h1>}

      <button className="block" onClick={handleRandom}>
        Get a random gift
      </button>
    </div>
  );
};

export default TakeGift;
