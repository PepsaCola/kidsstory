import {APIProvider} from "@vis.gl/react-google-maps";

export const Maps = ()=>{
    return (
        <APIProvider apiKey={process.env.REACT_APP_API_KEY}>

        </APIProvider>
    )
}