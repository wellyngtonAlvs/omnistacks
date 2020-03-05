{\rtf1\ansi\ansicpg1252\cocoartf2511
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function deg2rad(deg) \{\
  return deg * (Math.PI / 180);\
\}\
\
module.exports = function getDistanceFromLatLonInKm(\
  centerCoordinates,\
  pointCoordinates\
) \{\
  const radius = 6371;\
\
  const \{ latitude: lat1, longitude: lon1 \} = centerCoordinates;\
  const \{ latitude: lat2, longitude: lon2 \} = pointCoordinates;\
\
  const dLat = deg2rad(lat2 - lat1);\
  const dLon = deg2rad(lon2 - lon1);\
\
  const a =\
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +\
    Math.cos(deg2rad(lat1)) *\
      Math.cos(deg2rad(lat2)) *\
      Math.sin(dLon / 2) *\
      Math.sin(dLon / 2);\
  const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\
  const distance = radius * center;\
\
  return distance;\
\};\
}