


 ## Earthquake Visualizer

A real-time web application that visualizes global earthquake data on an interactive map. The app fetches live earthquake data from the USGS Earthquake API and plots it on a map with details like location, magnitude, and time.

## Features

Real-time earthquake data visualization

Interactive Leaflet.js map

Magnitude-based color-coded markers

Popup with earthquake details (location, magnitude, time)

Built with React + Vite + TailwindCSS

Lazy Loading for performance optimization

## Tech Stack

Frontend: React, Vite, TailwindCSS

Mapping Library: Leaflet.js + react-leaflet

API: USGS Earthquake API

## Lazy Loading Feature

Since the earthquake dataset can be very large, loading all markers at once may slow down the map.
We added lazy loading / virtualization to improve performance:

Only visible markers on the map are rendered at a time

Uses react-leaflet-markercluster or a virtualized list approach




