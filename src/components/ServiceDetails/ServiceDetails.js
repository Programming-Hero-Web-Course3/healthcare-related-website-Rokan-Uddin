import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
const data=[
    {
      id: "1",
      name: "ORTHODONTICS",
      description: "Orthodontics is the treatment of improperly positioned teeth. We can use functional appliances as well as fixed braces which apply gentle pressure to move teeth into the desired position. Orthodontics straightens teeth, brings your bite into alignment and improves both the appearance and function of your teeth. Crowded, crooked or protruding teeth are more difficult to keep clean and are vulnerable to gum disease as you age. Treatment may take anywhere from several months to a couple of years, depending on the nature of the problem. Treatment during childhood usually takes less time because the teeth and jaws are still developing. Treatment for both children and adults can be achieved with excellent results. Invisalign treatment will be available in the near future.",
      shortdescription: "Orthodontics is the treatment of improperly positioned teeth. We can use functional appliances as well as fixed braces which apply gentle pressure to move teeth into the desired position.",
      url: "http://www.farazydental.com/images/services-icon-image/1537770481.png"
    },
    {
      id: "2",
      name: "ENDODONTICS",
      description: "If a tooth is damaged by decay or injury, the canals inside the root of the tooth may become infected. If the infection is not treated, it can lead to severe pain, abscess and tooth loss. Fortunately, the infection can be removed from the tooth and and the tooth can be restored to normal function. This treatment is also known as a root canal. Root canal treatment is one of the most successful of all dental procedures and enables you to keep your teeth for your lifetime.",
      shortdescription: "If a tooth is damaged by decay or injury, the canals inside the root of the tooth may become infected. If the infection is not treated, it can lead to severe pain, abscess and tooth loss. ",
      url: "http://www.farazydental.com/images/services-icon-image/1537769328.png"
    },
    {
      id: "3",
      name: "CROWNS AND BRIDGES",
      description: "Crowns and bridges are usually made out of porcelain or metal alloys and they will strengthen and protect your teeth as well as enhance your smile. Crowns are placed over your weakened or decayed tooth after they are reduced in size, to allow the crown to fit over the tooth like a thimble. A bridge replaces a missing tooth by placing crowns on the teeth on either side of the missing tooth and another false crown is attached between them to replace the missing tooth. Crowns are extremely durable and require only the same care as your own teeth.",
      shortdescription: "Crowns and bridges are usually made out of porcelain or metal alloys and they will strengthen and protect your teeth as well as enhance your smile.",
      url: "http://www.farazydental.com/images/services-icon-image/1537771063.png"
    },
    {
      id: "4",
      name: "DENTURES",
      description: "Partial and complete dentures can be fabricated for patients who are missing many, or all of their teeth. Patients may have lost their teeth due to advanced periodontal disease or perhaps by weakened or decayed teeth.In most cases, if a patient has to have their remaining teeth extracted, complete dentures can be placed at the same appointment so they never have to go without teeth.If a patient is missing only a few teeth, removable partial dentures can be fabricated to replace only the missing teeth. There are many styles of partial dentures and your dentist can determine which is the best option for you",
      shortdescription: "Partial and complete dentures can be fabricated for patients who are missing many, or all of their teeth.",
      url: "http://www.farazydental.com/images/services-icon-image/1537770245.png"
    },
    {
      id: "5",
      name: "PERIODONTAL THERAPY",
      description: "Periodontal therapy treats gum infections caused by the bacteria in plaque. Gum disease, otherwise known as periodontal disease, attacks the bone, ligaments and gums that support your teeth. Early symptoms are red, puffy gums that bleed when brushed or flossed. You may also experience a bad odour or taste in your mouth. As infection progresses, space may appear beween the teeth, gums may recede and teeth will loosen. Without treatment, periodontal disease leads to tooth loss. Fortunately, with early diagnosis, periodontal disease can be successfully treated at almost any stage. Our hygiene department will effectively assess, treat and recommend the proper professional and at home care of each of our patients. Through proper treatment, the loss of teeth can be prevented and everyone can keep their teeth for a lifetime.",
      shortdescription: "Periodontal therapy treats gum infections caused by the bacteria in plaque. Gum disease, otherwise known as periodontal disease, attacks the bone, ligaments and gums that support your teeth. ",
      url: "http://www.farazydental.com/images/services-icon-image/1537769387.png"
    },
    {
      id: "6",
      name: "BONDING",
      description: "Dental Bonding is a rebuilding procedure in which a tooth-colored gum is bonded to a tooth and restored with an UV light. Bonding is quicker and more affordable than crowns or bridges, and would thus be able to be a decent alternative to make little cosmetic upgrades to your teeth.",
      shortdescription: "Dental Bonding is a rebuilding procedure in which a tooth-colored gum is bonded to a tooth and restored with an UV light. ",
      url: "http://www.farazydental.com/images/services-icon-image/1537769718.png"
    },
    {
      id: "7",
      name: "WHITENING",
      description: "Have you ever wondered, what is the best way to whiten my teeth? We offer a home bleaching system that has given hundreds of our patients a whiter, brighter smile. We begin by taking impressions of the patients’ teeth and then we fabricate very thin plastic ‘trays’ into which the patient is instructed to place the bleach and wear it overnight. We recommend two weeks of use to obtain the optimum results. We have used this product for our patients for over ten years now and it is gentle on the teeth and our patients are ecstatic with the results. Please ask our staff if bleaching is an option for you!",
      shortdescription: "Have you ever wondered, what is the best way to whiten my teeth? We offer a home bleaching system that has given hundreds of our patients a whiter, brighter smile. ",
      url: "http://www.farazydental.com/images/services-icon-image/1537770563.png"
    },
    {
      id: "8",
      name: "DENTAL IMPLANTS",
      description: "Implants are used to replace missing roots and support artificial replacement teeth. They are comfortable and look like natural teeth. A dental implant is an artificial root made of titanium metal. It is inserted into the jawbone to replace the root of the natural tooth. An artificial replacement tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.",
      shortdescription: "Implants are used to replace missing roots and support artificial replacement teeth. They are comfortable and look like natural teeth.",
      url: "http://www.farazydental.com/images/services-icon-image/1537771003.png"
    },
    {
      id: "9",
      name: "DENTAL LAB",
      description: "Orthodontics is the treatment of improperly positioned teeth. We can use functional appliances as well as fixed braces which apply gentle pressure to move teeth into the desired position. Orthodontics straightens teeth, brings your bite into align.",
      shortdescription: "Orthodontics is the treatment of improperly positioned teeth. ",
      url: "http://www.farazydental.com/images/services-icon-image/1537771479.png"
    }
  ]
const ServiceDetails = () => {
    const {serviceID}= useParams();
    const serviceData=data.find(d=> d.id ===serviceID);
    return (
        <div>
            <div className=" container mt-4 rounded-3 bg-info p-2">
            <p className="fs-1">"We care to see you smile."</p>
            </div>
        <div className="container my-5">
         <div className="row border-top">
             <hr />
            <div className="col-lg-5 col-sm-12">
                <img className="p-3 border border-secondary border-4 rounded-circle rounder-3 service-img" src={serviceData.url} alt="" />
            </div>
            <div className="col-lg-7 col-sm-12 d-flex justify-content-center ">
               <div>
               <h2 className="mt-5">{serviceData.name}</h2>
                <p>{serviceData.description}</p>
                <Link to='/appoinment' className="myButton mt-5" >Make and Appoinment</Link>
               </div>
            </div>
        </div>
        </div>

        </div>
    );
};

export default ServiceDetails;