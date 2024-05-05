DECLARE @lat FLOAT = 40.7128; -- Latitude of the given point
DECLARE @lon FLOAT = -74.0060; -- Longitude of the given point
DECLARE @distance FLOAT = 100; -- Maximum distance in kilometers

SELECT *
FROM your_table
WHERE (
    6371 * 2 * ASIN(
        SQRT(
            POWER(SIN(RADIANS((@lat - latitude) / 2)), 2) +
            COS(RADIANS(latitude)) * COS(RADIANS(@lat)) *
            POWER(SIN(RADIANS((@lon - longitude) / 2)), 2)
        )
    )
) <= @distance;






DECLARE @lat1 FLOAT = 40.7128; -- Latitude of location 1
DECLARE @lon1 FLOAT = -74.0060; -- Longitude of location 1
DECLARE @lat2 FLOAT = 34.0522; -- Latitude of location 2
DECLARE @lon2 FLOAT = -118.2437; -- Longitude of location 2

DECLARE @R FLOAT = 6371; -- Radius of the Earth in kilometers
DECLARE @dLat FLOAT = RADIANS(@lat2 - @lat1);
DECLARE @dLon FLOAT = RADIANS(@lon2 - @lon1);

DECLARE @a FLOAT = SIN(@dLat / 2) * SIN(@dLat / 2)
    + COS(RADIANS(@lat1)) * COS(RADIANS(@lat2)) * SIN(@dLon / 2) * SIN(@dLon / 2);
DECLARE @c FLOAT = 2 * ATN2(SQRT(@a), SQRT(1 - @a));
DECLARE @distance FLOAT = @R * @c;

SELECT @distance AS DistanceInKM
ORDER BY DistanceInKM ASC
FETCH FIRST 1 ROWS ONLY;





const { Op } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

// Define your Sequelize model
class Location extends Model {}
Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize, // Your Sequelize instance
    modelName: "location",
  }
);

// Perform the distance-based query
const givenLatitude = 40.7128; // Latitude of the given point
const givenLongitude = -74.0060; // Longitude of the given point
const maxDistance = 100; // Maximum distance in kilometers

Location.findAll({
  attributes: [
    "id",
    "longitude",
    "latitude",
    [
      sequelize.literal(`
        6371 *
        2 *
        ASIN(
          SQRT(
            POWER(SIN(RADIANS((${givenLatitude} - latitude) / 2)), 2) +
            COS(RADIANS(latitude)) * COS(RADIANS(${givenLatitude})) *
            POWER(SIN(RADIANS((${givenLongitude} - longitude) / 2)), 2)
          )
        )
      `),
      "distance",
    ],
  ],
  where: sequelize.where(
    sequelize.literal(`
      6371 *
      2 *
      ASIN(
        SQRT(
          POWER(SIN(RADIANS((${givenLatitude} - latitude) / 2)), 2) +
          COS(RADIANS(latitude)) * COS(RADIANS(${givenLatitude})) *
          POWER(SIN(RADIANS((${givenLongitude} - longitude) / 2)), 2)
        )
      )
    `),
    "<=",
    maxDistance
  ),
  order: sequelize.literal("distance ASC"),
})
  .then((result) => {
    // Process the filtered data
    console.log(result);
  })
  .catch((error) => {
    console.error("Error retrieving data:", error);
  });
