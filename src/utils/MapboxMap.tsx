
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MapPin } from "lucide-react";

type Project = {
  name: string;
  coords: [number, number];
  sector: string;
  region: string;
  status: string;
  investment: string;
};

type MapboxMapProps = {
  token: string;
  projects: Project[];
};

const statusColors: Record<string, string> = {
  "Planning": "#facc15",
  "Under Construction": "#0284c7",
  "Operational": "#22c55e",
  "Completed": "#34d399",
};

const MapboxMap: React.FC<MapboxMapProps> = ({ token, projects }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || !token) return;
    if (mapInstance.current) return; // only init once

    mapboxgl.accessToken = token;

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [10, 28],
      zoom: 1.6,
      projection: 'globe',
      pitch: 35
    });

    mapInstance.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      'top-right'
    );
    mapInstance.current.scrollZoom.disable();

    mapInstance.current.on('style.load', () => {
      mapInstance.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.3,
      });
    });

    // Add demo project markers
    projects.forEach((p) => {
      // Create a div for marker with Lucide icon (custom color)
      const el = document.createElement("div");
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><circle cx="13" cy="13" r="13" fill="${statusColors[p.status] || "#2563eb"}" opacity="0.18"/><g><path d="M13 21c4.418 0 8-4.03 8-9 0-3.87-3.134-7-8-7-4.866 0-8 3.13-8 7 0 4.97 3.582 9 8 9z" stroke="${statusColors[p.status] || "#2563eb"}" stroke-width="1.5" /><circle cx="13" cy="12" r="3" fill="white" stroke="${statusColors[p.status] || "#2563eb"}" stroke-width="1"/><circle cx="13" cy="12" r="1.2" fill="${statusColors[p.status] || "#2563eb"}"/></g></svg>`;
      el.style.cursor = "pointer";
      el.style.display = "flex";
      el.style.justifyContent = "center";
      el.style.alignItems = "center";

      const popup = new mapboxgl.Popup({ offset: 16 }).setHTML(`
        <div class="font-semibold text-slate-700 mb-1">${p.name}</div>
        <div class="text-xs text-slate-500 mb-1"><b>Sector:</b> ${p.sector}</div>
        <div class="text-xs text-slate-500 mb-1"><b>Status:</b> ${p.status}</div>
        <div class="text-xs text-slate-500 mb-1"><b>Region:</b> ${p.region}</div>
        <div class="text-xs text-slate-500 mb-1"><b>Investment:</b> ${p.investment}</div>
      `);

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(p.coords)
        .setPopup(popup)
        .addTo(mapInstance.current!);
    });

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
    // Only on mount/unmount
    // eslint-disable-next-line
  }, [token, projects]);

  return (
    <div style={{ minHeight: 400, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px #0003" }}>
      <div ref={mapRef} style={{ width: "100%", height: 450 }} />
    </div>
  );
};

export default MapboxMap;
