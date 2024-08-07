import React from 'react';

const PatientList = ({ patients, fetchPatientUploads, handleEditPatientClick, handleDeletePatientClick }) => (
    <div className="patient-history">
        <h2>History</h2>
        <div className="patient-folders">
            {patients.length > 0 ? patients.map(patient => (
                <div key={patient._id} className="patient-folder">
                    <img src="/src/assets/images/folder-icon.png" alt="Patient Folder" className="folder-icon" onClick={() => fetchPatientUploads(patient._id)} />
                    <div className="patient-info">
                        <p><strong>Patient Name:</strong> {patient.name}</p>
                        <p><strong>ID:</strong> {patient.idNumber}</p>
                    </div>
                    <div className="icon-container">
                        <img 
                            src="src/assets/images/edit-text.png" 
                            alt="Edit" 
                            className="edit-icon" 
                            onClick={(e) => handleEditPatientClick(patient, e)}
                        />
                        <img 
                            src="src/assets/images/bin.png" 
                            alt="Delete" 
                            className="delete-icon" 
                            onClick={(e) => handleDeletePatientClick(patient._id, e)}
                        />
                    </div>
                </div>
            )) : (
                <p>No patients found.</p>
            )}
        </div>
    </div>
);

export default PatientList;
