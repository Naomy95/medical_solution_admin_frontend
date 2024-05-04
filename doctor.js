import React from 'react';

const doctor = ({ doctors }) => {
  return (
    <div className="doctor-container">
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
          {doctors.map((doctor, index) => (
            <div className="table-row" key={index}>
              <div className="table-item">{doctor.name}</div>
              <div className="table-item">{doctor.email}</div>
              <div className="table-item">{doctor.phone}</div>
              <div className="table-item">{doctor.enrollNumber}</div>
              <div className="table-item">{doctor.dateOfAdmission}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default doctor;

