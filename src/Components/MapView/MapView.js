import React, { useRef, useState } from "react"
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Polygon, Popup, TileLayer, useMapEvent } from 'react-leaflet';
import CreateMarkerForm from "../../Components/CreateMarkerForm/CreateMarkerForm";
import CreatePolygonForm from "../../Components/CreatePolygonForm/CreatePolygonForm";
import { PageBodyContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const MapView = () => {

    const mapRef = useRef()

    const navigate = useNavigate()

    const [map, setMap] = useState(null)

    const [markerLat, setMarkerLat] = useState(null)
    const [markerLng, setMarkerLng] = useState(null)
    const [markerButton, setMarkerButton] = useState(false)
    const [markerName, setMarkerName] = useState("")

    const [polygonData, setPolygonData] = useState([])
    const [polygonButton, setPolygonButton] = useState(false)
    const [polyName, setPolyName] = useState("")
    const [hideDataForMarker, setHideDataForMarker] = useState(false)
    const [hideDataForPoly, setHideDataForPoly] = useState(false)
    const [polygonColor, setPolygonColor] = useState("")

    const [changeSaveButton, setChangeSaveButton] = useState(false)

    const handleChangeSaveButton = () => {
        setChangeSaveButton(!changeSaveButton)
        setPolygonButton(!polygonButton)
    }
    
    const handleMarkerName = (e) => {
        setMarkerName(e.target.value)
    }

    const handlePolyName = (e) => {
        setPolyName(e.target.value)
    }

    const handleMarkerButton = () => {
        setMarkerButton(!markerButton)
        setHideDataForMarker(!hideDataForMarker)
    }

    const handlePolygonButton = () => {
        setPolygonButton(!polygonButton)
        setHideDataForPoly(!hideDataForPoly)
        setChangeSaveButton(!changeSaveButton)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handlePolygonColor = (e) => {
        setPolygonColor(e.target.value)
    }

    const FindLatLngForMarker = () => {

        useMapEvent('click', (e) => {
            if(markerButton === true){
                setMarkerLat(e.latlng.lat)
                setMarkerLng(e.latlng.lng)
        }})
        return null
    }

    const Button = () => {
        if(markerButton === false){
            return (
                <button>Criar ponto</button>
            )
        }else if(markerButton === true){
            return(
                <div className="form-buttons">
                    <button onClick={handleChangeSaveButton} id="save-button">Salvar</button>
                </div>
            )
        }
    }

    const createPolygon = () => {

        let arrayValores = []

        if(changeSaveButton === true && polygonData.length === 0){
            map?.on('click', e => {
                
                const data = {
                    lat: e.latlng.lat,
                    lng: e.latlng.lng
                }

                arrayValores.push(data)
                setPolygonData(arrayValores)
        })}
    }

    createPolygon()

    const polygon = polygonData

    const makePolygon = polygon?.map((poli) => {
        return(
            [poli.lat, poli.lng]
        )
    })

    const changePolygonColor = {
        fillColor: polygonColor,
        color: polygonColor ? polygonColor : "black",
        fillOpacity: 0.5
    }


    const ButtonPolygon = () => {
        if(polygonButton === false){
            return (
                <button>Criar polígono</button>
            )
        }else if(polygonButton === true){
            return(
                <div className="form-buttons">
                    <button onClick={handleSubmit} id="save-button">Salvar</button>
                </div>
            )
        }
    }

    return(
        <PageBodyContainer>
            <div className="buttons-container">
                <div>
                    {hideDataForPoly === false ? <>
                        {markerButton === true ? 
                        <CreateMarkerForm 
                            value={markerName}
                            onChange={handleMarkerName}
                            submit={handleSubmit}
                        /> 
                        : <></>
                    }
                    <div onClick={handleMarkerButton}>
                        <Button />
                    </div>
                </> : "" }
                </div>
                    <div>
                        {hideDataForMarker === false ? <>{polygonButton === true ? 
                            <CreatePolygonForm 
                                nameValue={polyName}
                                nameOnChange={handlePolyName}
                                colorOnChange={handlePolygonColor}
                                colorValue={polygonColor}
                                submit={handleSubmit}
                            /> 
                            : <></>
                            }
                    <div onClick={handlePolygonButton}>
                        <ButtonPolygon/>
                    </div> </> 
                    : <></>}
                    </div>
                <div>
                    {hideDataForMarker === false & hideDataForPoly === false ? 
                        <><button onClick={() => navigate('/signup')}>Cadastrar novo usuário</button></>
                        : ""
                    }
                </div>
            </div>
            <div className="map-container">
                <MapContainer 
                    ref={e => { mapRef.current = e; setMap(e); }} 
                    center={[-15.262131836496131, -49.80816340042375]} 
                    zoom={4} >
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> 
                        contributors" 
                    />
                    <FindLatLngForMarker />
                    {markerLat != null && markerLng != null ? 
                        <Marker position={[markerLat, markerLng]}> 
                            {markerName != "" ? <Popup>{markerName}</Popup> : <></>}
                                </Marker>
                    : ""}
                    <Polygon 
                        pathOptions={changePolygonColor} 
                        positions={makePolygon}
                    >
                    {polyName ? <Popup>{polyName}</Popup> : <></>} 
                    </Polygon>
                </MapContainer> 
            </div>
        </PageBodyContainer>
    )
}

export default MapView