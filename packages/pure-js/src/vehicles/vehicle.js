/**
 * @param {string} type The type of vehicle.
 * @param {number} wheels The number of wheels.
 * @returns {string} A description of the vehicle.
 */
export function formatVehicle(type, wheels) {
  return `I'm a ${type} and have ${wheels} wheels`;
}

class Vehicle {
  /**
   * Indicates what type of vehicle this is.
   *
   * @type {string}
   */
  type;

  /**
   * Indicates how many wheels this vehicle has.
   * @type {string}
   */
  wheels;

  /**
   * @override
   * @returns A human readable description of this vehicle.
   */
  toString() {
    return formatVehicle(this.type, this.wheels);
  }
}

export default Vehicle;
