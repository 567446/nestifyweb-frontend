const properties = [
  {
    id: 1,
    title: "Modern 2 BHK Apartment",
    location: "Andheri West, Mumbai",
    district: "Mumbai",
    price: 8500000,
    type: "Apartment",
    bhk: 2,
    area: 950,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      kitchen: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      hall: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    }
  },
  {
    id: 2,
    title: "Luxury 3 BHK Apartment",
    location: "Bandra West, Mumbai",
    district: "Mumbai",
    price: 18500000,
    type: "Apartment",
    bhk: 3,
    area: 1450,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      kitchen: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      hall: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    }
  },
  {
    id: 3,
    title: "Premium 1 BHK Flat",
    location: "Powai, Mumbai",
    district: "Mumbai",
    price: 6500000,
    type: "Apartment",
    bhk: 1,
    area: 650,
    furnishing: "Unfurnished",
    parking: false,
    verified: false,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      kitchen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      hall: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    }
  },
  {
    id: 4,
    title: "Spacious 2 BHK Home",
    location: "Goregaon East, Mumbai",
    district: "Mumbai",
    price: 9200000,
    type: "House",
    bhk: 2,
    area: 1100,
    furnishing: "Semi-Furnished",
    parking: true,
    verified: false,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      kitchen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      hall: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    }
  },
  {
    id: 5,
    title: "Cozy 1 BHK Studio",
    location: "Malad West, Mumbai",
    district: "Mumbai",
    price: 5800000,
    type: "Apartment",
    bhk: 1,
    area: 580,
    furnishing: "Unfurnished",
    parking: false,
    verified: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      kitchen: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      hall: "https://images.unsplash.com/photo-1613977257363-707ba9348227"
    }
  },
  {
    id: 6,
    title: "Classic 2 BHK Near Station",
    location: "Dadar, Mumbai",
    district: "Mumbai",
    price: 14500000,
    type: "Apartment",
    bhk: 2,
    area: 1050,
    furnishing: "Semi-Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      kitchen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      hall: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    }
  },
  {
    id: 7,
    title: "Compact Office Space",
    location: "Chembur, Mumbai",
    district: "Mumbai",
    price: 11000000,
    type: "Office",
    bhk: 0,
    area: 800,
    furnishing: "Unfurnished",
    parking: true,
    verified: false,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      kitchen: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      hall: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15"
    }
  },
  {
    id: 8,
    title: "Well-Connected 3 BHK Flat",
    location: "Borivali West, Mumbai",
    district: "Mumbai",
    price: 13800000,
    type: "Apartment",
    bhk: 3,
    area: 1250,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      kitchen: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      hall: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  },
  {
    id: 9,
    title: "Luxury Garden Villa",
    location: "Kharghar, Navi Mumbai",
    district: "Navi Mumbai",
    price: 21000000,
    type: "Villa",
    bhk: 4,
    area: 2800,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      kitchen: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      hall: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    }
  },
  {
    id: 10,
    title: "Modern 2 BHK Apartment",
    location: "Vashi, Navi Mumbai",
    district: "Navi Mumbai",
    price: 9800000,
    type: "Apartment",
    bhk: 2,
    area: 1000,
    furnishing: "Semi-Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      kitchen: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      hall: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    }
  },
  {
    id: 11,
    title: "Sea-View 3 BHK Flat",
    location: "Nerul, Navi Mumbai",
    district: "Navi Mumbai",
    price: 15600000,
    type: "Apartment",
    bhk: 3,
    area: 1400,
    furnishing: "Furnished",
    parking: true,
    verified: false,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      kitchen: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      hall: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    }
  },
  {
    id: 12,
    title: "Affordable 1 BHK Flat",
    location: "Panvel, Navi Mumbai",
    district: "Navi Mumbai",
    price: 4200000,
    type: "Apartment",
    bhk: 1,
    area: 550,
    furnishing: "Unfurnished",
    parking: false,
    verified: false,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      kitchen: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
      hall: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
    }
  },
  {
    id: 13,
    title: "Independent House with Garden",
    location: "Kamothe, Navi Mumbai",
    district: "Navi Mumbai",
    price: 10500000,
    type: "House",
    bhk: 3,
    area: 1600,
    furnishing: "Semi-Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      kitchen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      hall: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    }
  },
  {
    id: 14,
    title: "Beautiful Family House",
    location: "Thane West",
    district: "Thane",
    price: 12500000,
    type: "House",
    bhk: 3,
    area: 1800,
    furnishing: "Semi-Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      kitchen: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      hall: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    }
  },
  {
    id: 15,
    title: "Modern 2 BHK Apartment",
    location: "Ghodbunder Road, Thane",
    district: "Thane",
    price: 8900000,
    type: "Apartment",
    bhk: 2,
    area: 980,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      kitchen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      hall: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    }
  },
  {
    id: 16,
    title: "Budget-Friendly 1 BHK Flat",
    location: "Thane East",
    district: "Thane",
    price: 4800000,
    type: "Apartment",
    bhk: 1,
    area: 600,
    furnishing: "Unfurnished",
    parking: false,
    verified: false,
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
      kitchen: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      hall: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    }
  },
  {
    id: 17,
    title: "Premium 3 BHK Flat",
    location: "Kolshet Road, Thane",
    district: "Thane",
    price: 16200000,
    type: "Apartment",
    bhk: 3,
    area: 1500,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      kitchen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      hall: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb"
    }
  },
  {
    id: 18,
    title: "Spacious Villa with Lawn",
    location: "Manpada, Thane",
    district: "Thane",
    price: 24500000,
    type: "Villa",
    bhk: 4,
    area: 3000,
    furnishing: "Furnished",
    parking: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    gallery: {
      bedroom: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      kitchen: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      hall: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    }
  }
];

export default properties;