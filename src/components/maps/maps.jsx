import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {Container} from "./styled";

const RedIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
    shadowSize: [41, 41]
});

const position = [52.3403012, 4.8753019];

export const Map = () => {
    return (
        <Container>
            <div style={{width: "100%", height: "500px"}}>
                <MapContainer center={position} zoom={14} style={{height: "100%", width: "100%"}}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />

                    <Marker position={position} icon={RedIcon}>
                        <Popup>Strawinskylaan 1353, 1077 XX Amsterdam</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </Container>
    );
};