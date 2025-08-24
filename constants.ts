
import type { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'Urban Heat Island Analysis',
    description: 'Leveraged Landsat 8 thermal imagery to identify and analyze urban heat islands in major metropolitan areas. Utilized Python with GDAL and Rasterio for processing and QGIS for visualization.',
    tags: ['Remote Sensing', 'Python', 'QGIS', 'Data Analysis'],
    imageUrl: 'https://picsum.photos/seed/urban/400/300',
    repoUrl: '#',
  },
  {
    title: 'Interactive Flood Risk Map',
    description: 'Developed a web-based interactive map using Leaflet.js and GeoJSON data to visualize flood risk zones. The application allows users to search for addresses and view detailed risk assessments.',
    tags: ['Web GIS', 'JavaScript', 'Leaflet.js', 'GeoJSON'],
    imageUrl: 'https://picsum.photos/seed/flood/400/300',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Deforestation Tracking in the Amazon',
    description: 'Time-series analysis of Sentinel-2 satellite imagery using Google Earth Engine to monitor and quantify deforestation rates over a five-year period. Presented findings through dynamic charts and maps.',
    tags: ['Google Earth Engine', 'JavaScript', 'Remote Sensing'],
    imageUrl: 'https://picsum.photos/seed/forest/400/300',
  },
   {
    title: 'Spatial SQL & PostGIS Database',
    description: 'Designed and implemented a spatial database with PostGIS and PostgreSQL to manage and query large-scale geospatial datasets for a simulated city planning application.',
    tags: ['PostGIS', 'SQL', 'Database Design', 'QGIS'],
    imageUrl: 'https://picsum.photos/seed/database/400/300',
    repoUrl: '#',
  },
];

export const SKILLS: SkillCategory[] = [
    {
        name: 'GIS Software',
        skills: ['ArcGIS Pro', 'QGIS', 'ENVI', 'ERDAS Imagine']
    },
    {
        name: 'Programming',
        skills: ['Python (Pandas, GeoPandas)', 'JavaScript (ES6+)', 'R', 'SQL']
    },
    {
        name: 'Web Mapping',
        skills: ['Leaflet.js', 'Mapbox GL JS', 'OpenLayers', 'Turf.js']
    },
    {
        name: 'Databases',
        skills: ['PostGIS', 'PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
        name: 'Cloud & Data',
        skills: ['Google Earth Engine', 'AWS S3', 'GDAL', 'Rasterio']
    },
    {
        name: 'Frontend',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js']
    }
];
