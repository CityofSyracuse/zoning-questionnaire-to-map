const DECISION_TREE = {
  "start": {
    "question": "What best describes your business or use?",
    "helpText": "Choose the option that most closely matches the main activity. This tool is a discovery guide, not an approval.",
    "answers": [
      {
        "label": "Sell goods / retail",
        "next": "q2"
      },
      {
        "label": "Food & drink",
        "next": "q3"
      },
      {
        "label": "Office / professional",
        "next": "q4"
      },
      {
        "label": "Personal services",
        "next": "q6"
      },
      {
        "label": "Entertainment / recreation",
        "next": "q7"
      },
      {
        "label": "Industrial / manufacturing / storage",
        "next": "q8"
      },
      {
        "label": "Health / education / civic",
        "next": "q9"
      },
      {
        "label": "Vehicle-related",
        "next": "q10"
      },
      {
        "label": "Lodging",
        "next": "q11"
      },
      {
        "label": "Animal-related",
        "next": "q12"
      },
      {
        "label": "Day care",
        "next": "q13"
      },
      {
        "label": "Residential / live-work",
        "next": "q14"
      },
      {
        "label": "Not sure / other",
        "next": "uncertain"
      }
    ]
  },
  "q2": {
    "question": "Retail – what is your retail store size?",
    "answers": [
      {
        "label": "Under 1,000 sq ft",
        "resultUseType": "Retail, general <1,000 sq ft"
      },
      {
        "label": "1,000–15,000 sq ft",
        "resultUseType": "Retail, general 1,000–15,000 sq ft"
      },
      {
        "label": "Over 15,000 sq ft",
        "resultUseType": "Retail, general >15,000 sq ft"
      },
      {
        "label": "Specialty retail type",
        "next": "q2a"
      },
      {
        "label": "I do not know",
        "resultUseType": "Retail, general <1,000 sq ft",
        "warning": "Square footage can change the zoning result. Confirm the actual size with Zoning."
      }
    ]
  },
  "q2a": {
    "question": "Retail – is it a specialty retail type?",
    "answers": [
      {
        "label": "Drug store / pharmacy",
        "resultUseType": "Drug store or pharmacy"
      },
      {
        "label": "Grocery / supermarket",
        "resultUseType": "Grocery or supermarket"
      },
      {
        "label": "Liquor store",
        "resultUseType": "Liquor store"
      },
      {
        "label": "Greenhouse / plant nursery",
        "resultUseType": "Greenhouse or plant nursery"
      }
    ]
  },
  "q3": {
    "question": "Food & drink – what type of food/drink business?",
    "answers": [
      {
        "label": "Restaurant",
        "next": "q3a"
      },
      {
        "label": "Bar / nightclub",
        "next": "q3b"
      },
      {
        "label": "Brewery / distillery",
        "next": "q3c"
      },
      {
        "label": "Other food use",
        "next": "q3d"
      }
    ]
  },
  "q3a": {
    "question": "Restaurant – what is the restaurant's square footage?",
    "answers": [
      {
        "label": "1,000 sq ft or less",
        "resultUseType": "Restaurant ≤1,000 sq ft"
      },
      {
        "label": "Over 1,000 sq ft",
        "resultUseType": "Restaurant >1,000 sq ft"
      },
      {
        "label": "I do not know yet",
        "resultUseType": "Restaurant ≤1,000 sq ft",
        "warning": "Square footage can change the zoning result. Confirm the actual size with Zoning."
      }
    ]
  },
  "q3b": {
    "question": "Bar / nightclub – which type?",
    "answers": [
      {
        "label": "Bar",
        "resultUseType": "Bar"
      },
      {
        "label": "Nightclub",
        "resultUseType": "Nightclub"
      }
    ]
  },
  "q3c": {
    "question": "Brewery / distillery – which type?",
    "answers": [
      {
        "label": "Microbrewery or microdistillery",
        "resultUseType": "Microbrewery or microdistillery"
      },
      {
        "label": "Brewpub",
        "resultUseType": "Brewpub"
      }
    ]
  },
  "q3d": {
    "question": "Other food – which type?",
    "answers": [
      {
        "label": "Café / coffee shop",
        "resultUseType": "Beverage café"
      },
      {
        "label": "Commercial kitchen / catering",
        "resultUseType": "Commercial food preparation establishment"
      },
      {
        "label": "Event venue",
        "resultUseType": "Event Center"
      }
    ]
  },
  "q4": {
    "question": "Office / professional – what type?",
    "answers": [
      {
        "label": "General office",
        "resultUseType": "Office"
      },
      {
        "label": "Financial institution / bank",
        "resultUseType": "Financial institution"
      },
      {
        "label": "Business services & supply",
        "resultUseType": "Business services and supply"
      },
      {
        "label": "Radio / TV station",
        "resultUseType": "Radio or television station"
      }
    ]
  },
  "q6": {
    "question": "Personal services – which type?",
    "answers": [
      {
        "label": "General personal services ≤1,000 sq ft",
        "resultUseType": "Personal services, general ≤1,000 sq ft"
      },
      {
        "label": "General personal services >1,000 sq ft",
        "resultUseType": "Personal services, general >1,000 sq ft"
      },
      {
        "label": "Funeral home",
        "resultUseType": "Funeral home"
      }
    ]
  },
  "q7": {
    "question": "Entertainment / recreation – which type?",
    "answers": [
      {
        "label": "Indoor, such as gym or theater",
        "resultUseType": "Entertainment and Recreation, indoor"
      },
      {
        "label": "Outdoor",
        "resultUseType": "Entertainment and recreation, outdoor"
      },
      {
        "label": "Private recreation club",
        "resultUseType": "Recreation club, private"
      }
    ]
  },
  "q8": {
    "question": "Industrial / manufacturing – which type?",
    "answers": [
      {
        "label": "Artisan / craft manufacturing",
        "resultUseType": "Manufacturing, Artisan"
      },
      {
        "label": "Light manufacturing",
        "resultUseType": "Manufacturing, Light"
      },
      {
        "label": "Heavy manufacturing",
        "resultUseType": "Manufacturing, Heavy"
      },
      {
        "label": "Research & innovation",
        "resultUseType": "Research and innovation"
      },
      {
        "label": "Storage, warehouse, freight, or contractor yard",
        "next": "q8a"
      }
    ]
  },
  "q8a": {
    "question": "Industrial – need storage or freight?",
    "answers": [
      {
        "label": "Warehouse, commercial",
        "resultUseType": "Warehouse-Commercial"
      },
      {
        "label": "Warehouse, industrial",
        "resultUseType": "Warehouse-Industrial"
      },
      {
        "label": "Mini-storage",
        "resultUseType": "Mini-storage"
      },
      {
        "label": "Contractor yard",
        "resultUseType": "Contractor yard"
      }
    ]
  },
  "q9": {
    "question": "Health / education / civic – which type?",
    "answers": [
      {
        "label": "Medical clinic",
        "resultUseType": "Clinic"
      },
      {
        "label": "Hospital",
        "resultUseType": "Hospital"
      },
      {
        "label": "School / university",
        "next": "q9a"
      },
      {
        "label": "Community / civic",
        "next": "q9b"
      }
    ]
  },
  "q9a": {
    "question": "Education – which type?",
    "answers": [
      {
        "label": "Public or private K-12 school",
        "resultUseType": "School, public or private"
      },
      {
        "label": "College or university",
        "resultUseType": "College or university"
      },
      {
        "label": "Vocational / trade / arts school",
        "resultUseType": "Vocational, arts, trade, or business"
      }
    ]
  },
  "q9b": {
    "question": "Civic / community – which type?",
    "answers": [
      {
        "label": "Assembly / house of worship",
        "resultUseType": "Assembly"
      },
      {
        "label": "Civic building / government",
        "resultUseType": "Civic building"
      },
      {
        "label": "Cultural institution",
        "resultUseType": "Cultural institution"
      },
      {
        "label": "Public safety facility",
        "resultUseType": "Public safety facility"
      }
    ]
  },
  "q10": {
    "question": "Vehicle-related – which type?",
    "answers": [
      {
        "label": "Auto repair, light",
        "resultUseType": "Automobile repair, light"
      },
      {
        "label": "Auto repair, heavy",
        "resultUseType": "Automobile repair, heavy"
      },
      {
        "label": "Auto sales / showroom",
        "next": "q10a"
      },
      {
        "label": "Gas station",
        "next": "q10b"
      },
      {
        "label": "Car wash",
        "resultUseType": "Car wash"
      }
    ]
  },
  "q10a": {
    "question": "Auto sales – which type?",
    "answers": [
      {
        "label": "Automobile sales, outdoor lot",
        "resultUseType": "Automobile sales"
      },
      {
        "label": "Automobile showroom, indoor",
        "resultUseType": "Automobile showroom"
      }
    ]
  },
  "q10b": {
    "question": "Gas station – which type?",
    "answers": [
      {
        "label": "Fueling station only",
        "resultUseType": "Gasoline fueling station"
      },
      {
        "label": "Fueling station with retail and/or restaurant",
        "resultUseType": "Gasoline fueling station with retail and/or restaurant"
      }
    ]
  },
  "q11": {
    "question": "Lodging – which type?",
    "answers": [
      {
        "label": "Bed and breakfast or inn",
        "resultUseType": "Bed and breakfast or inn"
      },
      {
        "label": "Hotel or motel",
        "resultUseType": "Hotel or motel"
      }
    ]
  },
  "q12": {
    "question": "Animal-related – which type?",
    "answers": [
      {
        "label": "Grooming / day care",
        "resultUseType": "Animal grooming and day care"
      },
      {
        "label": "Kennel",
        "resultUseType": "Kennel"
      },
      {
        "label": "Veterinary hospital",
        "resultUseType": "Veterinary hospital"
      }
    ]
  },
  "q13": {
    "question": "Day care – which type?",
    "answers": [
      {
        "label": "Day care center, commercial",
        "resultUseType": "Day care center"
      },
      {
        "label": "Family day care, home-based",
        "resultUseType": "Family day care"
      }
    ]
  },
  "q14": {
    "question": "Residential – which type?",
    "answers": [
      {
        "label": "Single-unit detached",
        "resultUseType": "Dwelling, single-unit detached"
      },
      {
        "label": "Two-unit",
        "resultUseType": "Dwelling, two-unit"
      },
      {
        "label": "Multi-unit / apartment",
        "resultUseType": "Dwelling, Multi-unit"
      },
      {
        "label": "Live/work",
        "resultUseType": "Dwelling, Live/Work"
      }
    ]
  },
  "uncertain": {
    "question": "Not sure? Choose the closest starting point.",
    "helpText": "For unclear cases, the result screen should direct the user to contact Zoning before leasing a space.",
    "answers": [
      {
        "label": "I mostly sell products",
        "next": "q2"
      },
      {
        "label": "I serve food or drinks",
        "next": "q3"
      },
      {
        "label": "I provide a service",
        "next": "q6"
      },
      {
        "label": "I need staff help classifying this",
        "resultUseType": "Needs Zoning Review",
        "warning": "This business type needs Zoning staff review before a zoning district can be suggested."
      }
    ]
  }
};

const ALLOWED_USES = {
  "Dwelling, single-unit detached": {
    "category": "Residential",
    "permitted": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3"
    ],
    "specialUse": []
  },
  "Dwelling, single-unit attached": {
    "category": "Residential",
    "permitted": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2"
    ],
    "specialUse": [
      "MX-3",
      "MX-4",
      "MX-5"
    ]
  },
  "Dwelling, two-unit": {
    "category": "Residential",
    "permitted": [
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2"
    ],
    "specialUse": []
  },
  "Dwelling, Live/Work": {
    "category": "Residential",
    "permitted": [
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R3",
      "R4"
    ]
  },
  "Dwelling, Multi-unit": {
    "category": "Residential",
    "permitted": [
      "R3",
      "R4",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5"
    ]
  },
  "Dwelling, Single Unit Commercial Conversion (DSUCC)": {
    "category": "Residential",
    "permitted": [
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3"
    ],
    "specialUse": [
      "MX-5",
      "CM"
    ]
  },
  "Dwelling, Two Unit Commercial Conversion (DTUCC)": {
    "category": "Residential",
    "permitted": [
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3"
    ],
    "specialUse": [
      "MX-5",
      "CM"
    ]
  },
  "Congregate Living": {
    "category": "Residential",
    "permitted": [],
    "specialUse": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ]
  },
  "Residential care facility": {
    "category": "Residential",
    "permitted": [],
    "specialUse": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ]
  },
  "Assembly": {
    "category": "Public/Civic",
    "permitted": [
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Civic building": {
    "category": "Public/Civic",
    "permitted": [
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4"
    ],
    "specialUse": []
  },
  "Family support facility": {
    "category": "Public/Civic",
    "permitted": [
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2"
    ],
    "specialUse": []
  },
  "Correctional facility": {
    "category": "Public/Civic",
    "permitted": [],
    "specialUse": [
      "CM",
      "LI"
    ]
  },
  "Cultural institution": {
    "category": "Public/Civic",
    "permitted": [
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4"
    ],
    "specialUse": [
      "CM"
    ]
  },
  "Public safety facility": {
    "category": "Public/Civic",
    "permitted": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI",
      "OS"
    ],
    "specialUse": []
  },
  "College or university": {
    "category": "Public/Civic",
    "permitted": [
      "R5",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-2"
    ]
  },
  "School, public or private": {
    "category": "Public/Civic",
    "permitted": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI",
      "OS"
    ],
    "specialUse": []
  },
  "Vocational, arts, trade, or business": {
    "category": "Public/Civic",
    "permitted": [
      "R5",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-2",
      "MX-3"
    ]
  },
  "Clinic": {
    "category": "Health Care",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "R5",
      "MX-1",
      "MX-2"
    ]
  },
  "Hospital": {
    "category": "Health Care",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1"
    ]
  },
  "Park and recreation facility": {
    "category": "Parks/Open Space",
    "permitted": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI",
      "OS"
    ],
    "specialUse": []
  },
  "Animal grooming and day care": {
    "category": "Commercial – Animal",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Kennel": {
    "category": "Commercial – Animal",
    "permitted": [
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-4",
      "MX-5"
    ]
  },
  "Veterinary hospital": {
    "category": "Commercial – Animal",
    "permitted": [
      "MX-2",
      "MX-3",
      "CM",
      "LI"
    ],
    "specialUse": [
      "R5",
      "MX-5"
    ]
  },
  "Day care center": {
    "category": "Commercial – Day Care",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-5",
      "CM",
      "LI",
      "OS"
    ],
    "specialUse": [
      "R3",
      "MX-4"
    ]
  },
  "Family day care": {
    "category": "Commercial – Day Care",
    "permitted": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Entertainment and Recreation, indoor": {
    "category": "Commercial – Entertainment",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1",
      "CM"
    ]
  },
  "Entertainment and recreation, outdoor": {
    "category": "Commercial – Entertainment",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1"
    ]
  },
  "Recreation club, private": {
    "category": "Commercial – Entertainment",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1",
      "MX-2"
    ]
  },
  "Event Center": {
    "category": "Commercial – Entertainment",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5"
    ]
  },
  "Bar": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1"
    ]
  },
  "Beverage café": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": []
  },
  "Commercial food preparation establishment": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R5"
    ]
  },
  "Microbrewery or microdistillery": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1"
    ]
  },
  "Nightclub": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "MX-2"
    ]
  },
  "Restaurant ≤1,000 sq ft": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1"
    ]
  },
  "Restaurant >1,000 sq ft": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1"
    ]
  },
  "Brewpub": {
    "category": "Commercial – Food & Drink",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "R5",
      "MX-1"
    ]
  },
  "Bed and breakfast or inn": {
    "category": "Commercial – Lodging",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R3",
      "R4",
      "R5"
    ]
  },
  "Hotel or motel": {
    "category": "Commercial – Lodging",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R5"
    ]
  },
  "Mixed Use Development": {
    "category": "Commercial – Mixed Use",
    "permitted": [
      "R5",
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": []
  },
  "Business services and supply": {
    "category": "Commercial – Office",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "R4",
      "R5"
    ]
  },
  "Financial institution": {
    "category": "Commercial – Office",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": []
  },
  "Office": {
    "category": "Commercial – Office",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "R4"
    ]
  },
  "Radio or television station": {
    "category": "Commercial – Office",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "R5"
    ]
  },
  "Funeral home": {
    "category": "Commercial – Personal Svcs",
    "permitted": [
      "MX-3",
      "MX-4"
    ],
    "specialUse": [
      "R5",
      "MX-1",
      "MX-2"
    ]
  },
  "Personal services, general ≤1,000 sq ft": {
    "category": "Commercial – Personal Svcs",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Personal services, general >1,000 sq ft": {
    "category": "Commercial – Personal Svcs",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Drug store or pharmacy": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1"
    ]
  },
  "Greenhouse or plant nursery, commercial": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-1",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "MX-3",
      "MX-4"
    ]
  },
  "Grocery store or supermarket": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1"
    ]
  },
  "Liquor store": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5"
    ],
    "specialUse": []
  },
  "Neighborhood Market": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1"
    ]
  },
  "Retail, general <1,000 sq ft": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Retail, general 1,000–15,000 sq ft": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Retail, general >15,000 sq ft": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": []
  },
  "Smoking establishment": {
    "category": "Commercial – Retail",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1"
    ]
  },
  "Automobile rental": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-3",
      "MX-4"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1",
      "MX-2"
    ]
  },
  "Automobile repair, heavy": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "LI"
    ],
    "specialUse": [
      "CM"
    ]
  },
  "Automobile repair, light": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-4"
    ],
    "specialUse": [
      "R5",
      "MX-2",
      "MX-3"
    ]
  },
  "Automobile sales": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "MX-3"
    ]
  },
  "Automobile showroom": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": []
  },
  "Car wash": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "MX-3"
    ]
  },
  "Gasoline fueling station": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "MX-1",
      "MX-2",
      "MX-3"
    ]
  },
  "Gasoline fueling station with retail and/or restaurant": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-4",
      "MX-5"
    ],
    "specialUse": [
      "MX-1",
      "MX-2",
      "MX-3"
    ]
  },
  "Parking lot": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-2",
      "MX-3",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "R4",
      "R5",
      "MX-1"
    ]
  },
  "Parking structure": {
    "category": "Commercial – Vehicles",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "MX-1",
      "MX-2"
    ]
  },
  "Contractor yard": {
    "category": "Industrial",
    "permitted": [
      "LI",
      "OS"
    ],
    "specialUse": [
      "CM"
    ]
  },
  "Fuel distribution facility": {
    "category": "Industrial",
    "permitted": [
      "LI"
    ],
    "specialUse": []
  },
  "Industrial service, general": {
    "category": "Industrial",
    "permitted": [
      "LI",
      "OS"
    ],
    "specialUse": [
      "CM"
    ]
  },
  "Research and innovation": {
    "category": "Industrial",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-1"
    ]
  },
  "Manufacturing, Artisan": {
    "category": "Industrial – Mfg",
    "permitted": [
      "MX-3",
      "MX-4",
      "MX-5",
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-1"
    ]
  },
  "Manufacturing, Light": {
    "category": "Industrial – Mfg",
    "permitted": [
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-4",
      "MX-5"
    ]
  },
  "Manufacturing, Heavy": {
    "category": "Industrial – Mfg",
    "permitted": [
      "OS"
    ],
    "specialUse": [
      "LI"
    ]
  },
  "Manufacturing, general": {
    "category": "Industrial – Mfg",
    "permitted": [
      "OS"
    ],
    "specialUse": [
      "MX-4",
      "MX-5",
      "LI"
    ]
  },
  "Motor freight or fleet terminal": {
    "category": "Industrial – Transport",
    "permitted": [
      "CM"
    ],
    "specialUse": [
      "MX-3",
      "MX-4",
      "MX-5"
    ]
  },
  "Transportation terminal": {
    "category": "Industrial – Transport",
    "permitted": [
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-3",
      "MX-4",
      "MX-5"
    ]
  },
  "Mini-storage": {
    "category": "Industrial – Warehouse",
    "permitted": [
      "LI"
    ],
    "specialUse": [
      "CM"
    ]
  },
  "Storage yard": {
    "category": "Industrial – Warehouse",
    "permitted": [
      "LI"
    ],
    "specialUse": []
  },
  "Warehouse-Commercial": {
    "category": "Industrial – Warehouse",
    "permitted": [
      "MX-5",
      "CM"
    ],
    "specialUse": [
      "MX-1",
      "MX-2",
      "MX-3",
      "MX-4"
    ]
  },
  "Warehouse-Industrial": {
    "category": "Industrial – Warehouse",
    "permitted": [
      "LI",
      "OS"
    ],
    "specialUse": []
  },
  "Wholesale establishment": {
    "category": "Industrial – Warehouse",
    "permitted": [
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-3",
      "MX-4",
      "MX-5"
    ]
  },
  "Indoor dismantling facility": {
    "category": "Industrial – Waste",
    "permitted": [],
    "specialUse": [
      "LI",
      "OS"
    ]
  },
  "Indoor recycling center": {
    "category": "Industrial – Waste",
    "permitted": [
      "CM",
      "LI"
    ],
    "specialUse": [
      "MX-4",
      "MX-5"
    ]
  },
  "Junk yard": {
    "category": "Industrial – Waste",
    "permitted": [],
    "specialUse": [
      "LI"
    ]
  },
  "Scrap metal processing": {
    "category": "Industrial – Waste",
    "permitted": [],
    "specialUse": [
      "LI"
    ]
  },
  "Needs Zoning Review": {
    "category": "Unclassified / staff review",
    "permitted": [],
    "specialUse": []
  }
};

const CONFIG = {
<<<<<<< HEAD
  // ArcGIS Experience Builder app and zoning layer filter details.
  experienceBuilderUrl: "https://experience.arcgis.com/experience/21dbdedc635842cda73887ea153f856d",
  dataSourceId: "dataSource_1-193db687bd3-layer-3",
  zoningDistrictField: "REZONE"
=======
  // Replace these when GIS/Jonah confirms the ArcGIS Experience Builder app and layer details.
  experienceBuilderUrl: "https://experience.arcgis.com/experience/YOUR_APP_ID",
  dataSourceId: "YOUR_DATA_SOURCE_ID",
  zoningDistrictField: "ZONE_DISTRICT"
>>>>>>> 50a60ecb6cfd4f7753b1101b828a2dea905be4ef
};
