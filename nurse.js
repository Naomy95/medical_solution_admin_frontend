import React from 'react';

const nurse = ({ nurses }) => {
  return (
    <div className="nurse-container">
      <div className="table-auto">
        <div className="table-header">
          <div className="table-row">
            <div className="table-header-item">Name</div>
            <div className="table-header-item">Email</div>
            <div className="table-header-item">Phone</div>
            <div className="table-header-item">Enroll Number</div>
            <div className="table-header-item">Date of admission</div>
          </div>
        </div>
        <div className="table-body">
          {nurses.map((nurse, index) => (
            <div className="table-row" key={index}>
              <div className="table-item">{nurse.name}</div>
              <div className="table-item">{nurse.email}</div>
              <div className="table-item">{nurse.phone}</div>
              <div className="table-item">{nurse.enrollNumber}</div>
              <div className="table-item">{nurse.dateOfAdmission}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default nurse;
