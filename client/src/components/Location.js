/*global kakao*/
import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.24853832334571, 127.0569114754529),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    //드래그 막기
    map.setDraggable(false);
    //줌 막기
    map.setZoomable(false);
    // 마커한곳의 위,경도
    var markerPosition = new kakao.maps.LatLng(
      37.24853832334571,
      127.0569114754529
    );
    // 지도위에 마커 표시
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: "1200px",
          height: "600px",
          border: "1px solid #cfcfcf",
        }}
      ></div>
    </div>
  );
};

export default Location;
