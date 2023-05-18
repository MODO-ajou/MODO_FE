import { useEffect, useState } from 'react';

export default function Map() {
  const [mapPoint, setMapPoint] = useState({ x: null, y: null });
  const [location, setLocation] = useState('');

  useEffect(() => {
    const mapDiv = document.getElementById('map');
    const map = new window.naver.maps.Map(mapDiv);
    window.naver.maps.Event.addDOMListener(mapDiv, 'click', () => {
      const coordinate = { x: map.data.map.center.x, y: map.data.map.center.y };
      setMapPoint({ x: coordinate.x, y: coordinate.y });
      window.naver.maps.Service.reverseGeocode(
        {
          coords: new window.naver.maps.LatLng(coordinate.y, coordinate.x),
          orders: [
            window.naver.maps.Service.OrderType.ADDR,
            window.naver.maps.Service.OrderType.ROAD_ADDR,
          ].join(','),
        },
        (
          status: number,
          response: {
            v2: {
              address: {
                jibunAddress: string;
              };
            };
          },
        ) => {
          if (status !== window.naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
          const result = response.v2;
          setLocation(result.address.jibunAddress);
        },
      );
    });
  }, []);
  return (
    <div>
      <div id="map" style={{ width: '1065px', height: '579px' }} />
      <div>{mapPoint.x}</div>
      <div>{mapPoint.y}</div>
      <div>주소는 : {location}</div>
    </div>
  );
}
