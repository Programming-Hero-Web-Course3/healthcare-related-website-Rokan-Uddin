import React from 'react';
import Doctor from '../Doctor/Doctor';
const doctors=[
    {
        id:1,
        Name: "Dr. Ahmed Rasel",
        expert:"Oral & Maxillofacial Surgery",
        degree:"BDS (Dhaka), MS (Oral & Maxillofacial Surgery), FCPS (Oral & Maxilofacial Surgery).",
        url:"https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg"
    },
    {
        id:2,
        Name:"Dr. Shohidur Rahman",
        expert:"Dental & Maxillofacial",
        degree:"BDS, FCPS, MS. BCS (Health)",
        url:"https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg"
    },
    {
        id:3,
        Name:"Dr. Shirin Chowdhury",
        expert:"Conservative Dentistry & Endodontics",
        degree:"BDS (DU), PGT in Conservative Dentistry (SSMCH), PGT in Oral & Maxillofacial Surgery (DMC)",
        url:"https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
    }
]

const Doctors = () => {
    return (
        <div id="doctors" className="container my-5">
            <h1 className="text-center">Our Doctors</h1>
            <hr />
            <div className="row g-4">
            {
                doctors.map(doctor=> <Doctor
                key={doctor.id}
                doctor={doctor}
                ></Doctor> )
            }
        </div>
     </div>

    );
};

export default Doctors;