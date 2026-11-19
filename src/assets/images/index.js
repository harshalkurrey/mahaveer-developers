/**
 * Mahaveer Developers & Construction
 * Local Architectural Assets Registry
 *
 * NOTE: Generated demo architectural photographs are stored locally.
 * Clearly identified as illustrative architectural concepts pending client handover.
 */

import heroResidence from './hero-residence.jpg';
import serviceHouseConstruction from './service-house-construction.jpg';
import serviceConcrete from './service-concrete.jpg';
import serviceConsulting from './service-consulting.jpg';
import serviceLandDev from './service-land-dev.jpg';
import projectRowhouse from './project-rowhouse.jpg';
import projectInterior from './project-interior.jpg';

export const ASSETS = {
  hero: heroResidence,
  serviceHouse: serviceHouseConstruction,
  serviceConcrete: serviceConcrete,
  serviceConsulting: serviceConsulting,
  serviceLandDev: serviceLandDev,
  projectRowhouse: projectRowhouse,
  projectInterior: projectInterior,
};

export const getImageByKey = (key) => {
  switch (key) {
    case 'hero':
      return heroResidence;
    case 'houseConstruction':
    case 'serviceHouse':
      return serviceHouseConstruction;
    case 'concreteConstruction':
    case 'serviceConcrete':
      return serviceConcrete;
    case 'civilConsulting':
    case 'serviceConsulting':
      return serviceConsulting;
    case 'landDevelopment':
    case 'serviceLandDev':
      return serviceLandDev;
    case 'project2bhk':
      return projectRowhouse;
    case 'project3bhk':
      return heroResidence;
    case 'project4bhk':
      return projectRowhouse;
    case 'projectLandDev':
      return serviceLandDev;
    case 'projectCustom':
      return serviceHouseConstruction;
    case 'interior':
    case 'living':
      return projectInterior;
    default:
      return heroResidence;
  }
};
