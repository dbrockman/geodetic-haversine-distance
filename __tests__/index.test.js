'use strict';

const haversineDistance = require('..');

describe('with two positions in Sweden', () => {

  it('should give the distance in meters between two positions', () => {
    const a = { latitude: 59.338746, longitude: 18.060683 };
    const b = { latitude: 59.339042, longitude: 18.061779 };

    const expected_distance = 70.377;

    const distance = haversineDistance(a, b);
    expect(distance).toBeCloseTo(expected_distance, 4);
  });

});

describe('with two positions in Brazil', () => {

  it('should give the distance in meters between two positions', () => {
    const a = { latitude: 0.034199, longitude: -51.050784 };
    const b = { latitude: 0.034055, longitude: -51.048738 };

    const expected_distance = 228.3222;

    const distance = haversineDistance(a, b);
    expect(distance).toBeCloseTo(expected_distance, 4);
  });

});
