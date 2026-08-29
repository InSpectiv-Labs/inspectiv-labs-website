import React from 'react';
import { Map, MapControls, MapMarker, MarkerLabel } from "@/components/ui/map";
import 'maplibre-gl/dist/maplibre-gl.css';

const darkMapStyle = {
  version: 8,
  sources: {
    'carto-dark': {
      type: 'raster',
      tiles: [
        'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
      ],
      tileSize: 256,
    }
  },
  layers: [
    {
      id: 'carto-dark-layer',
      type: 'raster',
      source: 'carto-dark',
      minzoom: 0,
      maxzoom: 22
    }
  ]
};

export default function NetworkMap() {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-inner border border-gray-100">
      <Map 
        center={[78.4867, 17.385]} 
        zoom={11} 
        styles={darkMapStyle as any}
      >
        <MapControls position="bottom-right" />
        
        <MapMarker longitude={-74.006} latitude={40.7128} color="#1d4ed8"><div/></MapMarker>
        <MapMarker longitude={-0.1276} latitude={51.5072} color="#1d4ed8"><div/></MapMarker>
        <MapMarker longitude={139.6917} latitude={35.6895} color="#1d4ed8"><div/></MapMarker>
        
        <MapMarker longitude={78.4867} latitude={17.3850} color="#1d4ed8">
          <MarkerLabel>Hyderabad, India</MarkerLabel>
        </MapMarker>

        <MapMarker longitude={151.2093} latitude={-33.8688} color="#1d4ed8"><div/></MapMarker>
        <MapMarker longitude={-70.6693} latitude={-33.4489} color="#1d4ed8"><div/></MapMarker>
        <MapMarker longitude={28.0473} latitude={-26.2041} color="#1d4ed8"><div/></MapMarker>
      </Map>
    </div>
  );
}
