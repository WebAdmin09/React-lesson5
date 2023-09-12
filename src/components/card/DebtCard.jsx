import React from "react";
import PropTypes from "prop-types";
import '../../pages/DebtsPage.css';

const DebtCard = ({ name, phone, debt, id, editDebt }) => {
  return (
    <div className="container">
      <div className="debt-card"> 
        <div className="debt-content">
          <h3>{name}</h3>
          <p>{phone}</p>
          <p>{debt} $</p>
        </div>
        <div className="debt-action">
          <button onClick={() => editDebt(id)} className="btn btn-primary me-3">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

DebtCard.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  debt: PropTypes.number,
  id: PropTypes.string,
};

export default DebtCard;
