import React from 'react';
import './Tracks.css';

const Tracks = () => {
 const tracksData = [
  {
    id: 1,
    img: '/Images/e1.jpg',
    title: 'Gynecology',
    subtitle: 'Advancements in Women\'s Reproductive Health',
    description: 'Explore breakthroughs in Women\'s Health, Reproductive Medicine, and Minimally Invasive Surgery. Gain insights into Fertility Solutions, Gynecologic Oncology, Hormonal Therapies, and Robotic Techniques that enhance patient outcomes and advance Precision Medicine and Innovative Diagnostics in female healthcare, addressing policy challenges and aging-related reproductive health'
  },
  {
    id: 2,
    img: '/Images/e2.jpg',
    title: 'Pediatrics',
    subtitle: 'Innovative Solutions in Child Health',
    description: 'Focus on Child Development, Pediatric Oncology, Neonatal Care, and Immunization Strategies. Discover innovations in Chronic Disease Management, Pediatric Surgery, and Preventive Pediatrics. Learn about emerging Therapeutic Models and cutting-edge Pediatric Medicine aimed at improving outcomes for children from prenatal stages through adolescence.'
  },
  {
    id: 3,
    img: '/Images/e3.jpg',
    title: 'Emergency Medicine',
    subtitle: 'Delivering Critical Care in Acute Situations',
    description: 'Address innovations in Trauma Care, Emergency Diagnostics, and Acute Intervention Protocols. Explore advancements in Triage Systems, AI-Driven Tools, Life-Saving Treatments, and Emergency Procedures. Learn how Technology enhances Acute Care delivery, improving survival rates and patient safety in high-pressure clinical environments'
  },
  {
    id: 4,
    img: '/Images/e4.jpg',
    title: 'Genetic Disorders',
    subtitle: 'Revolutionizing the Future of Genetic Medicine',
    description: 'Explore Genetic Testing, Gene Therapies, and CRISPR Technologies revolutionizing medicine. Focus on Rare Disease Diagnosis, Genomic Precision Medicine, and Ethical Issues in Genetic Modification. Learn how Innovative Diagnostics and Personalized Treatments transform outcomes in hereditary and complex Genetic Disorders.'
  },
  {
    id: 5,
    img: '/Images/e5.jpg',
    title: 'Mental Health',
    subtitle: 'Innovative Approaches to Behavioral Healthcare',
    description: 'Discover emerging Therapeutic Models for psychiatric disorders such as Depression, Anxiety, and Schizophrenia. Learn about Digital Mental Health Solutions, Behavioral Therapies, and strategies to reduce Mental Health Stigma. Explore Innovative Diagnostics and treatments that improve patient outcomes and promote psychological well-being.'
  },
  {
    id: 6,
    img: '/Images/e6.jpg',
    title: 'Telemedicine & Digital Health',
    subtitle: 'The Future of Healthcare Delivery',
    description: 'Explore breakthroughs in Telehealth Platforms, Remote Monitoring, AI in Healthcare, and Digital Therapeutics. Gain insights into Virtual Care Models, Healthcare Apps, Data Security, and Regulatory Frameworks that enhance accessibility and efficiency in modern healthcare systems.'
  },
  {
    id: 7,
    img: '/Images/e7.jpg',
    title: 'Cardiology',
    subtitle: 'Advances in Heart Health and Cardiovascular Care',
    description: 'Explore breakthroughs in Cardiac Surgery, Interventional Cardiology, and Heart Disease Prevention. Gain insights into Electrophysiology, Structural Heart Disease, and Advanced Imaging Techniques that enhance patient outcomes in cardiovascular healthcare.'
  },
  {
    id: 8,
    img: '/Images/e8.jpg',
    title: 'Oncology',
    subtitle: 'Innovations in Cancer Treatment and Research',
    description: 'Discover advancements in Cancer Immunotherapy, Targeted Therapies, and Precision Oncology. Learn about Early Detection Methods, Personalized Treatment Plans, and Multidisciplinary Approaches that improve survival rates and quality of life for cancer patients.'
  },
  {
    id: 9,
    img: '/Images/e9.jpg',
    title: 'Neurology',
    subtitle: 'Breaking New Ground in Brain Health',
    description: 'Explore innovations in Stroke Treatment, Neurodegenerative Diseases, and Brain-Computer Interfaces. Gain insights into Advanced Neuroimaging, Neurological Disorders Management, and cutting-edge therapies for conditions like Alzheimer\'s and Parkinson\'s disease.'
  },
  {
    id: 10,
    img: '/Images/e10.jpg',
    title: 'Orthopedics',
    subtitle: 'Revolutionizing Musculoskeletal Care',
    description: 'Discover advancements in Joint Replacement, Sports Medicine, and Spinal Surgery. Learn about Biologics in Orthopedics, Minimally Invasive Techniques, and Rehabilitation Technologies that enhance mobility and improve patient outcomes in musculoskeletal health.'
  },
  {
    id: 11,
    img: '/Images/e11.jpg',
    title: 'Endocrinology',
    subtitle: 'Innovations in Hormonal Health and Metabolism',
    description: 'Explore breakthroughs in Diabetes Management, Thyroid Disorders, and Metabolic Diseases. Gain insights into Hormone Therapies, Precision Endocrinology, and Advanced Diagnostic Tools that transform care for patients with endocrine system disorders.'
  },
  {
    id: 12,
    img: '/Images/e12.jpg',
    title: 'Dermatology',
    subtitle: 'Advances in Skin Health and Aesthetic Medicine',
    description: 'Discover innovations in Skin Cancer Detection, Cosmetic Dermatology, and Chronic Skin Conditions. Learn about Laser Technologies, Biologic Treatments, and Advanced Dermatologic Procedures that enhance skin health and patient confidence.'
  },
  {
    id: 13,
    img: '/Images/e13.jpg',
    title: 'Gastroenterology',
    subtitle: 'Transforming Digestive Health Care',
    description: 'Explore advancements in Endoscopic Procedures, Inflammatory Bowel Disease, and Liver Health. Gain insights into Microbiome Research, Advanced Diagnostics, and Minimally Invasive Treatments for gastrointestinal disorders and digestive system health.'
  },
  {
    id: 14,
    img: '/Images/e14.jpg',
    title: 'Pulmonology',
    subtitle: 'Innovations in Respiratory Health',
    description: 'Discover breakthroughs in COPD Management, Sleep Medicine, and Critical Care Pulmonology. Learn about Advanced Ventilation Techniques, Interventional Pulmonology, and Respiratory Disease Prevention strategies that improve lung health and patient outcomes.'
  },
  {
    id: 15,
    img: '/Images/e15.jpg',
    title: 'Nephrology',
    subtitle: 'Advances in Kidney Health and Renal Care',
    description: 'Explore innovations in Dialysis Technology, Kidney Transplantation, and Chronic Kidney Disease Management. Gain insights into Precision Nephrology, Renal Replacement Therapies, and Advanced Diagnostic Methods for kidney-related disorders.'
  },
  {
    id: 16,
    img: '/Images/e16.jpg',
    title: 'Rheumatology',
    subtitle: 'Transforming Autoimmune Disease Care',
    description: 'Discover advancements in Arthritis Treatment, Autoimmune Disorders, and Connective Tissue Diseases. Learn about Biologic Therapies, Precision Medicine in Rheumatology, and Advanced Diagnostic Approaches for inflammatory and autoimmune conditions.'
  },
  {
    id: 17,
    img: '/Images/e17.jpg',
    title: 'Ophthalmology',
    subtitle: 'Innovations in Vision Care and Eye Health',
    description: 'Explore breakthroughs in Retinal Diseases, Cataract Surgery, and Corneal Treatments. Gain insights into Advanced Laser Procedures, Ocular Imaging Technologies, and Vision Correction Techniques that enhance eye health and visual outcomes.'
  },
  {
    id: 18,
    img: '/Images/e18.jpg',
    title: 'Infectious Diseases',
    subtitle: 'Advances in Pathogen Management and Prevention',
    description: 'Discover innovations in Antimicrobial Therapies, Vaccine Development, and Pandemic Preparedness. Learn about Emerging Infectious Diseases, Antimicrobial Resistance Strategies, and Advanced Diagnostic Methods for infectious disease management.'
  },
  {
    id: 19,
    img: '/Images/e19.jpg',
    title: 'Preventive Medicine',
    subtitle: 'Promoting Health and Wellness Through Prevention',
    description: 'Explore advancements in Health Screening, Lifestyle Medicine, and Population Health. Gain insights into Preventive Strategies, Health Promotion Programs, and Early Intervention Approaches that reduce disease burden and enhance community wellness.'
  }
];


  return (
    <div className="tracks-container">
      <div className="tracks-grid">
        {tracksData.map((track) => (
          <div key={track.id} className="track-card">
            <div className="track-image">
              <img
                src={process.env.PUBLIC_URL + track.img}
                alt={track.title}
              />
            </div>
            <div className="track-content">
              <h2 className="track-title">{track.title}</h2>
              <h4 className="track-subtitle">{track.subtitle}</h4>
              <p className="track-description">{track.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
