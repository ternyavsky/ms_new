import { FC, memo } from "react";
import { IMap } from "./types";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { GOOGLE_LIBRARIES } from "@/shared/config";

import styles from "./Map.module.scss";

const MapComponent: FC<IMap> = ({
    children,
    width,
    height,
    position,
    zoom = 14,
}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY as string,
        libraries: GOOGLE_LIBRARIES,
    });

    const containerStyle = {
        width: "100%",
        height: "100%",
    };

    return (
        <div className={styles.map} style={{ width, height }}>
            {isLoaded && (
                <GoogleMap
                    zoom={zoom}
                    center={position}
                    mapContainerStyle={containerStyle}
                    options={{ disableDefaultUI: true }}
                >
                    {children}
                </GoogleMap>
            )}
        </div>
    );
};

const Map = memo(MapComponent, (prevProps, nextProps) => {
    return (
        prevProps.width === nextProps.width &&
        prevProps.height === nextProps.height &&
        prevProps.position === nextProps.position &&
        prevProps.zoom === nextProps.zoom
    );
});

export { Map };
