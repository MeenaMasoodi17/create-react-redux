import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

const google = window.google;

const styles = StyleSheet.create({
  mapStyle: {
    border: 'none',
    borderBottom: '1px solid #c6c6c6',
    marginTop: '16px',
    outline: 'none',
    minWidth: '320px'
  },

  map: {
    height: '480px',
    width: '480px',
    marginTop: '32px'
  }
});

class SearchBar extends Component {
  componentDidMount() {
    initAutocomplete();
  }

  render() {
    return (
      <div>
        <input
          id="input"
          className={css(styles.mapStyle)}
          type="text"
          placeholder="Search Box"
        />

        <div id="map" className={css(styles.map)} />
      </div>
    );
  }
}

const initAutocomplete = () => {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  console.log(map);
  // Create the search box and link it to the UI element.
  var input = document.getElementById('input');
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log('Returned place contains no geometry');
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
};

export default connect()(SearchBar);
