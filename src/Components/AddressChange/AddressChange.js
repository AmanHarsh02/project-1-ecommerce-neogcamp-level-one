import { useData } from "../../contexts/DataContext";
import "./AddressChange.css";
import { AddressSelectModal } from "..";
import { useState } from "react";

export function AddressChange() {
  const { selectedAddress, addresses } = useData();
  const [addressSelectModal, setAddressSelectModal] = useState(false);

  const { name, houseNo, city, state, country, zip } =
    selectedAddress ?? addresses[0];

  return (
    <div className="address__change__container">
      <div className="address__change__details">
        <h3>Delivery Address</h3>
        <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
      </div>

      <button
        className="address__change__btn"
        onClick={() => setAddressSelectModal(true)}
      >
        Change
      </button>

      {addressSelectModal && (
        <AddressSelectModal setAddressSelectModal={setAddressSelectModal} />
      )}
    </div>
  );
}
