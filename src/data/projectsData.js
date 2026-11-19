/**
 * Mahaveer Developers & Construction
 * Projects Portfolio Data
 * Note: Presented as illustrative architectural concepts pending client photo handover.
 */

export const PROJECT_CATEGORIES = [
  'All',
  'Row Houses',
  'Custom Homes',
  'Land Development',
];

export const PROJECTS_DATA = [
  {
    id: 'row-house-2bhk',
    title: '2BHK Modern Row House',
    category: 'Row Houses',
    bhkType: '2BHK',
    location: 'Kohka, Bhilai, Chhattisgarh',
    status: 'Illustrative Concept',
    carpetArea: '850 - 950 sq.ft. (Approx.)',
    superBuiltUp: '1,150 sq.ft. (Approx.)',
    configuration: '2 Bedrooms, 2 Bathrooms, Living & Dining, Covered Porch',
    facing: 'East / North Options',
    parking: '1 Dedicated Car Parking',
    imageKey: 'project2bhk',
    shortDescription:
      'Smartly engineered compact row houses designed for nuclear families seeking modern comfort, optimal cross-ventilation, and cost efficiency.',
    overview:
      'This 2BHK row house concept features space-efficient floor planning with zero wasted circulation area. Engineered with high-strength RCC framed columns, waterproof exterior plaster, and contemporary street frontage.',
    highlights: [
      'Efficient rectangular layout maximizing usable carpet area',
      'Naturally illuminated living hall with double-glazed sliding windows',
      'Vitrified tile flooring (600x600mm) with anti-skid bathroom surfaces',
      'Concealed ISI-marked electrical copper wiring and AC conduits',
      'Private car parking porch and overhead water storage tank',
      'Rooftop terrace with parapet wall for personal recreation',
    ],
    structuralSpecs: {
      foundation: 'Isolated RCC footings engineered for regional soil strata',
      steel: 'Fe550D TMT reinforcement bars',
      cement: '43/53 grade OPC/PPC from certified manufacturers',
      masonry: 'High-density AAC blocks / premium kiln-burnt red bricks',
      waterproofing: 'Polymer-modified cementitious coating on roof & wet areas',
    },
    isIllustrative: true,
  },
  {
    id: 'row-house-3bhk',
    title: '3BHK Luxury Row House',
    category: 'Row Houses',
    bhkType: '3BHK',
    location: 'Kurud Road Corridor, Kohka, Bhilai',
    status: 'Illustrative Concept',
    carpetArea: '1,250 - 1,400 sq.ft. (Approx.)',
    superBuiltUp: '1,650 sq.ft. (Approx.)',
    configuration: '3 Bedrooms, 3 Bathrooms, Double Height Living, Balcony, Car Porch',
    facing: 'Vastu-Compliant Layout Options',
    parking: '1 Car + 2 Wheeler Covered Parking',
    imageKey: 'project3bhk',
    shortDescription:
      'Premium duplex row residences with expansive living rooms, en-suite master bedrooms, private balconies, and dedicated parking.',
    overview:
      'Our flagship 3BHK duplex row house concept offers modern suburban living near Kurud Road. Featuring double-height ceilings, a modular kitchen preparation area, private front garden, and premium sanitary fittings.',
    highlights: [
      'G+1 Duplex architecture with private internal staircase',
      'Spacious master bedroom with attached walk-in wardrobe area',
      'Front-facing cantilevered balcony with safety glass railings',
      'Granite kitchen countertop with stainless steel sink & glazed tiles',
      'Designer teak-finish main door with multi-point locking system',
      'Provisions for solar inverter backup and rainwater harvesting recharge',
    ],
    structuralSpecs: {
      foundation: 'Reinforced strip & column footings for G+1 vertical loads',
      steel: 'Certified corrosion-resistant Fe550D TMT bars',
      cement: 'Ready-mix or site-batched M20/M25 concrete mix',
      doors: 'Teakwood framed entrance, flush doors for internal rooms',
      plumbing: 'CPVC concealed water pipes and PVC drainage lines',
    },
    isIllustrative: true,
  },
  {
    id: 'row-house-4bhk',
    title: '4BHK Executive Row House',
    category: 'Row Houses',
    bhkType: '4BHK',
    location: 'Kohka Residential Sector, Bhilai',
    status: 'Illustrative Concept',
    carpetArea: '1,800 - 2,100 sq.ft. (Approx.)',
    superBuiltUp: '2,400 sq.ft. (Approx.)',
    configuration: '4 Bedrooms, 4 Bathrooms, Family Lounge, Terrace Lounge, Dual Parking',
    facing: 'East / West Facing Choices',
    parking: '2 Car Covered Parking',
    imageKey: 'project4bhk',
    shortDescription:
      'Substantial multi-generational family homes featuring dual family lounges, guest suite on ground floor, and private open-to-sky terrace.',
    overview:
      'Engineered for discerning families requiring generous living spaces. This 4BHK architectural design separates public entertainment areas from private family quarters, delivering unmatched elegance and acoustic privacy.',
    highlights: [
      'Grand living and dining area accommodating extended family gatherings',
      'Ground-floor senior citizen friendly bedroom with walk-in shower',
      'Upper-floor family lounge opening onto an expansive outdoor terrace',
      '800x800mm nano-polished vitrified flooring throughout',
      'Concealed plumbing with provision for pressure pumps and solar heaters',
      'Contemporary exterior facade combining stone cladding and wood-finish louvers',
    ],
    structuralSpecs: {
      foundation: 'Deep engineered RCC footings with plinth tie beams',
      framing: 'Heavy RCC columns and beams designed for seismic zone safety',
      windows: 'Heavy-gauge powder-coated aluminum sliding windows with mosquito mesh',
      finishes: 'Double-coat external weather-proof acrylic emulsion paint',
      electrical: 'Fire-retardant low smoke (FRLS) wiring with independent MCBs',
    },
    isIllustrative: true,
  },
  {
    id: 'plotted-development-demo',
    title: 'Planned Residential Plotted Colony',
    category: 'Land Development',
    bhkType: 'Plots',
    location: 'Bhilai Development Periphery, Chhattisgarh',
    status: 'Illustrative Concept',
    carpetArea: 'Plot Sizes: 1,000 to 2,400 sq.ft.',
    superBuiltUp: 'Fully Demarcated Layout',
    configuration: 'Individual Residential Plots with Arterial Road Access',
    facing: 'Multiple Orientations',
    parking: '30ft & 40ft Internal Roads',
    imageKey: 'projectLandDev',
    shortDescription:
      'Organized residential layout development with wide concrete/asphalt roads, underground stormwater conduits, and boundary demarcations.',
    overview:
      'A planned land development blueprint showcasing Mahaveer Developers civil infrastructure capabilities. Each plot is clearly surveyed and demarcated, with ready connectivity to arterial transit routes and municipal water routes.',
    highlights: [
      'Clear boundary demarcation with durable concrete survey pillars',
      '30-foot and 40-foot wide all-weather internal access roads',
      'Covered roadside stormwater drains to prevent monsoon waterlogging',
      'Gated entrance portal with dedicated security checkpoint infrastructure',
      'Underground electrification conduits and street illumination poles',
      'Reserved green zone and community open spaces',
    ],
    structuralSpecs: {
      roads: 'WMM base with bituminous asphalt or high-grade concrete paving',
      drainage: 'Pre-cast RCC stormwater channels with silt traps',
      boundaries: '9-inch solid brickwork boundary wall with barbed wire crest',
      compliance: 'Designed per local town planning regulations and road widths',
    },
    isIllustrative: true,
  },
  {
    id: 'custom-residence-demo',
    title: 'Custom Turnkey Bungalow',
    category: 'Custom Homes',
    bhkType: 'Custom',
    location: 'Client Land, Bhilai-Durg Region',
    status: 'Illustrative Concept',
    carpetArea: 'Customizable (1,500 - 3,500+ sq.ft.)',
    superBuiltUp: 'Tailored to Plot Dimensions',
    configuration: 'Tailored Architectural Layout to Client Specifications',
    facing: 'Custom Vastu Optimization',
    parking: 'Integrated Garage / Porch',
    imageKey: 'projectCustom',
    shortDescription:
      'Tailored turnkey home construction built on the client’s own plot, managed end-to-end with structural engineering rigor and BOQ transparency.',
    overview:
      'For clients who already possess a residential plot in Bhilai or Durg, Mahaveer Developers provides custom turnkey construction. We handle architectural blueprints, soil testing, structural calculations, and complete material management with milestone-linked billing.',
    highlights: [
      'Custom floor plans created in consultation with client family needs',
      'Itemized Bill of Quantities (BOQ) guaranteeing zero hidden surprises',
      'Regular photo and video milestone progress updates during construction',
      'Dedicated on-site engineer overseeing daily concrete and masonry works',
      'Full material choice transparency: pick your tiles, paints, and sanitary ware',
      '12-month post-handover structural and waterproofing maintenance support',
    ],
    structuralSpecs: {
      customization: 'Engineered specifically for your soil condition and plot orientation',
      materialChoice: 'Premium brand selections (Tata Tiscon / Jindal steel, UltraTech cement)',
      sanctions: 'Assistance with municipal building permission drawings',
    },
    isIllustrative: true,
  },
];
