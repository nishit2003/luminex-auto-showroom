export interface Product {
  code: string;
  name: string;
  variant?: string;
  category: string;
  subcategory?: string;
  tags: string[];
  description?: string;
  image?: string;
  price?: {
    mrp: number;
    sellingPrice: number;
    currency: string;
  };
  specifications?: {
    power?: string;
    voltage?: string;
    material?: string;
    dimensions?: string;
    weight?: string;
    warranty?: string;
    features?: string[];
  };
  compatibility?: string[];
  availability?: "in-stock" | "out-of-stock" | "limited";
  rating?: number;
  isPopular?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

// Helper function to categorize products
const categorizeProduct = (
  name: string,
  description: string | null
): string => {
  const productName = (name || "").toLowerCase();
  const productDesc = (description || "").toLowerCase();

  if (
    productName.includes("head light") ||
    productName.includes("shield beam")
  ) {
    return "Head Lights";
  } else if (
    productName.includes("fog lamp") ||
    productName.includes("mini boss") ||
    productName.includes("mini cute") ||
    productName.includes("swift") ||
    productName.includes("bolero") ||
    productName.includes("ecco") ||
    productName.includes("etios") ||
    productName.includes("hunter") ||
    productName.includes("thar")
  ) {
    return "Fog Lamps";
  } else if (productName.includes("spot lite")) {
    return "Spot Lights";
  } else if (productName.includes("fan")) {
    return "Fans";
  } else if (
    productName.includes("converter") ||
    productName.includes("charger") ||
    productName.includes("usb") ||
    productName.includes("mobile stand")
  ) {
    return "Power & Chargers";
  }
  return "Head Lights"; // Default category
};

// Helper function to get subcategory
const getSubcategory = (name: string, description: string | null): string => {
  const productName = (name || "").toLowerCase();
  const productDesc = (description || "").toLowerCase();

  if (
    productName.includes("head light") ||
    productName.includes("shield beam")
  ) {
    if (
      productDesc.includes("tri colour") ||
      productDesc.includes("white drl")
    ) {
      return "LED Headlights";
    } else if (productDesc.includes("mfr")) {
      return "Halogen Headlights";
    }
    return "LED Headlights";
  } else if (
    productName.includes("fog lamp") ||
    productName.includes("mini boss") ||
    productName.includes("mini cute")
  ) {
    if (productDesc.includes("high power") || productDesc.includes("30 led")) {
      return "High Power LED";
    } else if (productDesc.includes("universal")) {
      return "Universal Fog Lamps";
    }
    return "LED Fog Lamps";
  } else if (productName.includes("spot lite")) {
    return "LED Spot Lights";
  } else if (productName.includes("fan")) {
    return "Cab Fans";
  } else if (productName.includes("converter")) {
    return "DC Converters";
  } else if (productName.includes("charger") || productName.includes("usb")) {
    return "USB Chargers";
  }
  return "LED Headlights";
};

// Helper function to generate tags
const generateTags = (name: string, description: string | null): string[] => {
  const tags: string[] = [];
  const productName = (name || "").toLowerCase();
  const productDesc = (description || "").toLowerCase();

  // Brand tags
  if (productName.includes("tata")) tags.push("Tata");
  if (productName.includes("mahindra")) tags.push("Mahindra");
  if (productName.includes("leyland")) tags.push("Leyland");
  if (productName.includes("swift")) tags.push("Swift");
  if (productName.includes("bolero")) tags.push("Bolero");
  if (productName.includes("ecco")) tags.push("ECCO");
  if (productName.includes("etios")) tags.push("Etios");
  if (productName.includes("hunter")) tags.push("Hunter");
  if (productName.includes("thar")) tags.push("Thar");
  if (productName.includes("canter")) tags.push("Canter");
  if (productName.includes("ace")) tags.push("ACE");

  // Feature tags
  if (productDesc.includes("led")) tags.push("LED");
  if (productDesc.includes("drl")) tags.push("DRL");
  if (productDesc.includes("mfr")) tags.push("MFR");
  if (productDesc.includes("tri colour")) tags.push("Tri Colour");
  if (productDesc.includes("white drl")) tags.push("White DRL");
  if (productDesc.includes("indicator")) tags.push("Indicator");
  if (productDesc.includes("dipper")) tags.push("Dipper");
  if (productDesc.includes("6 in 1")) tags.push("6 in 1");
  if (productDesc.includes("universal")) tags.push("Universal");
  if (productDesc.includes("high power")) tags.push("High Power");
  if (productDesc.includes("aluminum")) tags.push("Aluminum");
  if (productDesc.includes("sheet metal")) tags.push("Sheet Metal");
  if (productDesc.includes("bullet")) tags.push("Bullet");
  if (productDesc.includes("flat body")) tags.push("Flat Body");

  // Technology tags
  if (productDesc.includes("usb")) tags.push("USB");
  if (
    productDesc.includes("12/24v") ||
    productDesc.includes("12v") ||
    productDesc.includes("24v")
  )
    tags.push("12V/24V");
  if (productDesc.includes("watt") || productDesc.includes("w"))
    tags.push("Power");

  return tags;
};

// Helper function to generate pricing
const generatePricing = (
  category: string,
  subcategory: string
): { mrp: number; sellingPrice: number; currency: string } => {
  const basePrices: {
    [key: string]: { [key: string]: { mrp: number; sellingPrice: number } };
  } = {
    "Head Lights": {
      "LED Headlights": { mrp: 12000, sellingPrice: 10000 },
      "Halogen Headlights": { mrp: 8000, sellingPrice: 6500 },
      "Projector Headlights": { mrp: 15000, sellingPrice: 12500 },
      "HID Headlights": { mrp: 18000, sellingPrice: 15000 },
    },
    "Fog Lamps": {
      "LED Fog Lamps": { mrp: 4000, sellingPrice: 3200 },
      "High Power LED": { mrp: 6000, sellingPrice: 4800 },
      "Universal Fog Lamps": { mrp: 3000, sellingPrice: 2400 },
      "Vehicle Specific": { mrp: 3500, sellingPrice: 2800 },
    },
    "Spot Lights": {
      "LED Spot Lights": { mrp: 5000, sellingPrice: 4000 },
      "High Power Spot": { mrp: 8000, sellingPrice: 6500 },
      "Work Lights": { mrp: 6000, sellingPrice: 4800 },
      "Off-Road Lights": { mrp: 10000, sellingPrice: 8000 },
    },
    Fans: {
      "Cab Fans": { mrp: 2500, sellingPrice: 2000 },
      "Twin Fans": { mrp: 4000, sellingPrice: 3200 },
      "Blower Fans": { mrp: 3500, sellingPrice: 2800 },
      "Ventilation Fans": { mrp: 3000, sellingPrice: 2400 },
    },
    "Power & Chargers": {
      "DC Converters": { mrp: 6000, sellingPrice: 4800 },
      "Mini Converters": { mrp: 3000, sellingPrice: 2400 },
      "USB Chargers": { mrp: 2000, sellingPrice: 1600 },
      "Mobile Accessories": { mrp: 1500, sellingPrice: 1200 },
    },
  };

  const price = basePrices[category]?.[subcategory] || {
    mrp: 5000,
    sellingPrice: 4000,
  };
  return { ...price, currency: "INR" };
};

// Helper function to generate specifications
const generateSpecifications = (
  category: string,
  subcategory: string,
  description: string | null
) => {
  const specs: any = {
    warranty: "2 Years",
    features: [],
  };

  const desc = (description || "").toLowerCase();

  if (category === "Head Lights") {
    specs.power = desc.includes("high power") ? "80W" : "60W";
    specs.voltage = "12V/24V";
    specs.material = "ABS Plastic + Aluminum";
    specs.dimensions = "320x180x120mm";
    specs.weight = "1.2kg";
    specs.features = [
      "LED Technology",
      "Weather Resistant",
      "Easy Installation",
    ];

    if (desc.includes("tri colour")) specs.features.push("Tri-Color DRL");
    if (desc.includes("white drl")) specs.features.push("White DRL");
    if (desc.includes("mfr")) specs.features.push("MFR Certified");
    if (desc.includes("indicator"))
      specs.features.push("Integrated Indicators");
  } else if (category === "Fog Lamps") {
    const ledCount = desc.match(/(\d+)\s*led/i)?.[1] || "24";
    specs.power = `${parseInt(ledCount) * 2}W`;
    specs.voltage = "12V/24V";
    specs.material = desc.includes("aluminum")
      ? "Aluminum Body"
      : "Sheet Metal Body";
    specs.dimensions = desc.includes("90 mm")
      ? "90mm"
      : desc.includes("125mm")
      ? "125mm"
      : "Standard";
    specs.weight = "0.8kg";
    specs.features = [
      `${ledCount} High-Power LEDs`,
      "Universal Mounting",
      "Weather Resistant",
    ];

    if (desc.includes("drl")) specs.features.push("DRL Function");
    if (desc.includes("6 in 1")) specs.features.push("6-in-1 Functionality");
    if (desc.includes("dipper")) specs.features.push("Dipper Function");
  } else if (category === "Spot Lights") {
    const ledCount = desc.match(/(\d+)\s*led/i)?.[1] || "4";
    specs.power = `${parseInt(ledCount) * 3}W`;
    specs.voltage = "12V/24V";
    specs.material = "Aluminum Housing";
    specs.dimensions = "150x100x80mm";
    specs.weight = "0.6kg";
    specs.features = [
      `${ledCount} LED Array`,
      "High Beam Output",
      "Off-Road Ready",
    ];

    if (desc.includes("6 in 1")) specs.features.push("6-in-1 Functionality");
  } else if (category === "Fans") {
    const size = desc.match(/(\d+)"?/i)?.[1] || "4";
    specs.power = `${parseInt(size) * 15}W`;
    specs.voltage = "12V/24V";
    specs.material = "ABS Plastic";
    specs.dimensions = `${size}" Diameter`;
    specs.weight = "0.5kg";
    specs.features = ["High Airflow", "Quiet Operation", "Easy Installation"];

    if (desc.includes("twin")) specs.features.push("Dual Fan System");
    if (desc.includes("mobile charger"))
      specs.features.push("Mobile Charging Port");
  } else if (category === "Power & Chargers") {
    const wattage = desc.match(/(\d+)w/i)?.[1] || "40";
    specs.power = `${wattage}W`;
    specs.voltage = "12V/24V";
    specs.material = "ABS Plastic + Metal";
    specs.dimensions = "100x80x40mm";
    specs.weight = "0.3kg";
    specs.features = [
      "Pure Sine Wave",
      "Overload Protection",
      "Compact Design",
    ];

    if (desc.includes("usb")) specs.features.push("USB Charging Ports");
    if (desc.includes("dual")) specs.features.push("Dual USB Ports");
    if (desc.includes("type c")) specs.features.push("USB-C Support");
    if (desc.includes("cabin light"))
      specs.features.push("Built-in Cabin Light");
  }

  return specs;
};

// Raw product data from JSON
const rawProducts = [
  { code: "GS-101", name: "Tata Head Light Assy .", description: "1312" },
  { code: "GS-102", name: "Tata Head Light Assy .", description: "1312 MFR" },
  {
    code: "GS-104",
    name: "Tata Head Light Assy .",
    description: "1312 T ri Colour",
  },
  {
    code: "GS-105",
    name: "Tata Head Light Assy .",
    description: "1312 with Indicator",
  },
  {
    code: "GS-103",
    name: "Tata Head Light Assy .",
    description: "1312 White DRL",
  },
  { code: "GS-106", name: "Tata Head Light Assy .", description: "709" },
  { code: "GS-107", name: "Tata Head Light Assy .", description: "709 MFR" },
  {
    code: "GS-108",
    name: "Tata Head Light Assy .",
    description: "709 White DRL",
  },
  {
    code: "GS-109",
    name: "Tata Head Light Assy .",
    description: "709 T ri Colour",
  },
  {
    code: "GS-110",
    name: "Tata Head Light Assy .",
    description: "709 with Indicator",
  },
  { code: "GS-111", name: "Tata Head Light Assy .", description: "407" },
  { code: "GS-112", name: "Tata Head Light Assy .", description: "407 MFR" },
  {
    code: "GS-113",
    name: "Tata Head Light Assy .",
    description: "407 White DRL",
  },
  {
    code: "GS-114",
    name: "Tata Head Light Assy .",
    description: "407 T ri Colour",
  },
  {
    code: "GS-115",
    name: "Tata Head Light Assy .",
    description: "407 with Indicator",
  },
  {
    code: "GS-120",
    name: "Tata Head Light Assy .",
    description: "2416 TC Tri Colour",
  },
  { code: "GS-121", name: "Tata Head Light Assy .", description: "709 MFR" },
  { code: "GS-123", name: "Head Light Assy .", description: "Leyland" },
  { code: "GS-125", name: "Shield Beam", description: 'Leyland  7"' },
  {
    code: "GS-126",
    name: "Shield Beam",
    description: 'Leyland T ri Colour 7"',
  },
  { code: "GS-127", name: "Head Light Assy .", description: "Canter" },
  { code: "GS-128", name: "Shield Beam", description: "Canter" },
  {
    code: "GS-116",
    name: "Head Light Assy .",
    description: "Leyland Cargo O/M",
  },
  { code: "GS-117", name: "TATA Head Light Assy .", description: "2416 TC" },
  {
    code: "GS-118",
    name: "Tata Head Light Assy .",
    description: "2416 TC MFR",
  },
  {
    code: "GS-119",
    name: "Tata Head Light Assy .",
    description: "2416 TC White DRL",
  },
  {
    code: "GS-124",
    name: "Head Light Assy .",
    description: "Leyland T ri Colour",
  },
  { code: "GS-122", name: "Head Light Assy .", description: "Tata ACE" },
  { code: "GS-129", name: "Head Light Assy .", description: "Bolero O/M" },
  {
    code: "GS-130",
    name: "Head Light Assy .",
    description: "Bolero O/M T ri Colour",
  },
  { code: "GS-135", name: "Mini Cute 30 LED", description: null },
  { code: "GS-136", name: "Mini Cute", description: "30 LED with DRL" },
  {
    code: "GS-138",
    name: "Universal Fog Lamp 24 LED",
    description: "Flat Body Sheet Metal",
  },
  {
    code: "GS-141",
    name: "Universal Fog Lamp 14 LED",
    description: "Flat Body Sheet Metal",
  },
  {
    code: "GS-142",
    name: "Universal Fog Lamp 32 LED",
    description: "Flat Body Sheet Metal",
  },
  {
    code: "GS-143",
    name: "Universal Fog Lamp 12 LED",
    description: "Bullet Aluminum Body",
  },
  { code: "GS-131", name: "Head Light Assy .", description: "Swaraj Mazda" },
  { code: "GS-132", name: "Mini Boss", description: "30 LED with DRL" },
  { code: "GS-133", name: "Mahindra 3 Pin", description: "30 LED with DRL" },
  { code: "GS-134", name: "High Power", description: "30 LED with DRL" },
  {
    code: "GS-139",
    name: "Universal Fog Lamp 18 LED",
    description: "Flat Body Sheet Metal",
  },
  {
    code: "GS-137",
    name: "Mini Super Flat Body",
    description: "30 LED with DRL",
  },
  {
    code: "GS-140",
    name: "Universal Fog Lamp 18 LED",
    description: "with DRL Flat Body Sheet Metal",
  },
  {
    code: "GS-144",
    name: "Universal Fog Lamp 25 LED DRL",
    description: "Flat Body Sheet Metal",
  },
  {
    code: "GS-145",
    name: "Universal Fog Lamp Super Cute",
    description: "Aluminum Body 6 in 1",
  },
  { code: "GS-150", name: "Swift 4 LED", description: null },
  {
    code: "GS-151",
    name: "Swift 4 LED",
    description: "DRL (All Colour Available )",
  },
  { code: "GS-153", name: "Swift 8 LED", description: null },
  { code: "GS-156", name: "Fog Lamp Bolero", description: "4 LED" },
  {
    code: "GS-157",
    name: "Fog Lamp Bolero 4 LED",
    description: "DRL (All Colour Available)",
  },
  { code: "GS-158", name: "Fog Lamp Bolero 6 LED", description: null },
  {
    code: "GS-146",
    name: "Universal Fog Lamp 22 LED",
    description: "Aluminum Body",
  },
  {
    code: "GS-147",
    name: "Universal Fog Lamp 16 LED",
    description: "Aluminum Body",
  },
  {
    code: "GS-148",
    name: "Universal Fog Lamp 16 LED",
    description: "Mini Square Aluminum Body",
  },
  { code: "GS-149", name: "Fog LAMP 709", description: "with Bracket" },
  { code: "GS-154", name: "Swift 8 LED with Dipper", description: null },
  { code: "GS-152", name: "Swift 6 LED", description: null },
  { code: "GS-155", name: "Swift 4 LED", description: "6 in 1" },
  { code: "GS-159", name: "Fog Lamp Bolero 8 LED", description: null },
  { code: "GS-160", name: "Fog Lamp Bolero 4 LED", description: "6 in 1" },
  { code: "GS-165", name: "Fog Lamp ECCO 4 LED", description: "6 in 1" },
  {
    code: "GS-166",
    name: "Fog Lamp Etios 4 LED",
    description: "DRL (All Colour Available)",
  },
  {
    code: "GS-168",
    name: "Universal Fog Lamp Hunter",
    description: "4 LED 90 mm",
  },
  {
    code: "GS-171",
    name: "Universal Fog Lamp Hunter",
    description: "8 LED 90 mm",
  },
  {
    code: "GS-172",
    name: "Universal Fog Lamp Hunter",
    description: "8 LED 90 mm with Dipper",
  },
  {
    code: "GS-173",
    name: "Universal Fog Lamp Hunter",
    description: "4 LED 90 mm 6 in 1",
  },
  { code: "GS-161", name: "Fog Lamp ECCO 4 LED", description: null },
  {
    code: "GS-162",
    name: "Fog Lamp ECCO 4 LED",
    description: "DRL (All Colour Available)",
  },
  { code: "GS-163", name: "Fog Lamp ECCO 6 LED", description: null },
  { code: "GS-164", name: "Fog Lamp ECCO 8 LED", description: null },
  {
    code: "GS-169",
    name: "Universal Fog Lamp Hunter 4 LED",
    description: "90 mm DRL (All Colour Available)",
  },
  { code: "GS-167", name: "Fog Lamp Etios 8 LED", description: null },
  {
    code: "GS-170",
    name: "Universal Fog Lamp Hunter",
    description: "6 LED 90 mm",
  },
  { code: "GS-174", name: "Universal Fog Lamp", description: "8 LED" },
  {
    code: "GS-175",
    name: "Universal Fog Lamp",
    description: "8 LED 125mm w/o DRL",
  },
  {
    code: "GS-180",
    name: "Universal Fog Lamp Thar",
    description: "8 LED 6 in 1",
  },
  {
    code: "GS-181",
    name: "Universal Fog Lamp",
    description: "Super Thar 8 LED",
  },
  { code: "GS-183", name: "Spot Lite 4 LED", description: "6 in 1" },
  { code: "GS-186", name: '4" Cute Fan', description: null },
  { code: "GS-187", name: 'Twin Fan 4"', description: "with Mobile Charger" },
  {
    code: "GS-176",
    name: "Universal Fog Lamp 8 LED 125mm",
    description: "with DRL (All Colour Available)",
  },
  { code: "GS-177", name: "Mini Boss", description: "30 LED with DRL" },
  {
    code: "GS-178",
    name: "Universal Fog Lamp Thar",
    description: "8 LED W/o DRL",
  },
  {
    code: "GS-179",
    name: "Universal Fog Lamp Thar 8 LED",
    description: "with DRL (All Colour Available)",
  },
  { code: "GS-184", name: "Spot Lite 6 LED", description: "6 in 1" },
  {
    code: "GS-182",
    name: "Universal Fog Lamp Super Thar 8 LED",
    description: "with DRL (All Colour Available)",
  },
  {
    code: "GS-185",
    name: "Universal Fog Lamp",
    description: 'Mini Thar 6 LED FAN 10" COOL COOL',
  },
  { code: "GS-188", name: null, description: null },
  {
    code: "GS-189",
    name: "DC Converter with USB 65W",
    description: "12/24V DC",
  },
  { code: "GS-195", name: "Dual USB Charger 12/24V", description: null },
  {
    code: "GS-196",
    name: "Type A & Type C",
    description: "USB Charger 12/24V",
  },
  {
    code: "GS-198",
    name: "DC Converter with USB 100W",
    description: "12/24V DC",
  },
  { code: "GS-191", name: "Mini Converter  40W", description: "12/24V DC" },
  {
    code: "GS-192",
    name: "Mini Converter Dual USB",
    description: "12/24V DC 100W",
  },
  {
    code: "GS-193",
    name: "Micro Converter with USB",
    description: "40W    12/24V",
  },
  { code: "GS-194", name: "Mobile Stand with Charger", description: null },
  { code: "GS-199", name: "Super USB Charger", description: null },
  { code: "GS-197", name: "King Kong USB Carger", description: null },
  {
    code: "GS-190",
    name: "DC Converter w/o USB 65W",
    description: "12/24V DC",
  },
  {
    code: "GS-200",
    name: "DC Converter 120W",
    description: "with Cabin light & C T ype Port",
  },
  {
    code: "GS-201",
    name: "USB Fast Charger 20W",
    description: "with A & C T ype Port",
  },
];

// Transform raw data to Product objects
export const PRODUCTS: Product[] = rawProducts.map((rawProduct, index) => {
  const category = categorizeProduct(rawProduct.name, rawProduct.description);
  const subcategory = getSubcategory(rawProduct.name, rawProduct.description);
  const tags = generateTags(rawProduct.name, rawProduct.description);
  const price = generatePricing(category, subcategory);
  const specifications = generateSpecifications(
    category,
    subcategory,
    rawProduct.description
  );

  // Clean up product name and description
  const cleanName = (rawProduct.name || `Product ${rawProduct.code}`).replace(
    /\.\s*$/,
    ""
  );
  const cleanDescription =
    rawProduct.description?.replace(/T ri/g, "Tri") || undefined;

  // Generate compatibility based on tags - simplified
  const compatibility = ["Universal Fit"];

  // Set special flags
  const isPopular = index < 20 || tags.includes("LED") || tags.includes("DRL");
  const isBestSeller =
    tags.includes("High Power") ||
    tags.includes("MFR") ||
    tags.includes("6 in 1");
  const isNew = index >= 80; // Recent products

  return {
    code: rawProduct.code,
    name: cleanName,
    variant: cleanDescription,
    category,
    subcategory,
    tags,
    description: `${cleanName} ${
      cleanDescription || ""
    } - Premium automotive lighting solution with ${tags
      .join(", ")
      .toLowerCase()} features.`,
    price,
    specifications,
    compatibility,
    availability: "in-stock" as const,
    rating: 4.5 + Math.random() * 0.5, // Random rating between 4.5-5.0
    isPopular,
    isNew,
    isBestSeller,
  };
});

export const CATEGORIES = [
  "All",
  "Head Lights",
  "Fog Lamps",
  "Spot Lights",
  "Fans",
  "Power & Chargers",
];

export const SUBCATEGORIES = {
  "Head Lights": [
    "LED Headlights",
    "Halogen Headlights",
    "Projector Headlights",
    "HID Headlights",
  ],
  "Fog Lamps": [
    "LED Fog Lamps",
    "High Power LED",
    "Universal Fog Lamps",
    "Vehicle Specific",
  ],
  "Spot Lights": [
    "LED Spot Lights",
    "High Power Spot",
    "Work Lights",
    "Off-Road Lights",
  ],
  Fans: ["Cab Fans", "Twin Fans", "Blower Fans", "Ventilation Fans"],
  "Power & Chargers": [
    "DC Converters",
    "Mini Converters",
    "USB Chargers",
    "Mobile Accessories",
  ],
};

export const PRODUCT_FILTERS = {
  brands: [
    "Tata",
    "Mahindra",
    "Ashok Leyland",
    "Maruti Suzuki",
    "Toyota",
    "Mitsubishi",
    "Universal",
  ],
  features: [
    "LED",
    "DRL",
    "MFR",
    "High Power",
    "Tri Colour",
    "White DRL",
    "Indicator",
    "Dipper",
    "6 in 1",
    "Aluminum",
    "Sheet Metal",
    "Bullet",
    "Flat Body",
    "Universal",
  ],
  priceRanges: [
    { label: "Under ₹2,000", min: 0, max: 2000 },
    { label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
    { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
    { label: "Above ₹10,000", min: 10000, max: Infinity },
  ],
  availability: ["in-stock", "limited", "out-of-stock"],
  ratings: [4.5, 4.0, 3.5, 3.0],
};

// Helper functions
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter((product) => product.category === category);
};

export const getProductByCode = (code: string): Product | undefined => {
  return PRODUCTS.find((product) => product.code === code);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return PRODUCTS.filter((product) => product.subcategory === subcategory);
};

export const getProductsByPriceRange = (
  min: number,
  max: number
): Product[] => {
  return PRODUCTS.filter(
    (product) =>
      product.price &&
      product.price.sellingPrice >= min &&
      product.price.sellingPrice <= max
  );
};

export const getPopularProducts = (): Product[] => {
  return PRODUCTS.filter((product) => product.isPopular).slice(0, 8);
};

export const getBestSellerProducts = (): Product[] => {
  return PRODUCTS.filter((product) => product.isBestSeller).slice(0, 6);
};

export const getNewProducts = (): Product[] => {
  return PRODUCTS.filter((product) => product.isNew).slice(0, 4);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return PRODUCTS.filter((product) =>
    product.tags.some((tag) => tag.toLowerCase().includes(brand.toLowerCase()))
  );
};

export const getProductsByFeature = (feature: string): Product[] => {
  return PRODUCTS.filter(
    (product) =>
      product.tags.some((tag) =>
        tag.toLowerCase().includes(feature.toLowerCase())
      ) ||
      product.specifications?.features?.some((f) =>
        f.toLowerCase().includes(feature.toLowerCase())
      )
  );
};

export const getProductsByRating = (minRating: number): Product[] => {
  return PRODUCTS.filter(
    (product) => product.rating && product.rating >= minRating
  );
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.code.toLowerCase().includes(searchTerm) ||
      product.variant?.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      product.specifications?.features?.some((f) =>
        f.toLowerCase().includes(searchTerm)
      )
  );
};
