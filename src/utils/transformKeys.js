/**
 * Transforms an object's keys from snake_case to camelCase
 * @param {Object} obj - The object to transform
 * @returns {Object} - New object with camelCase keys
 */
export function fromSnakeToCamel(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => fromSnakeToCamel(item));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        return [camelKey, fromSnakeToCamel(value)];
      })
    );
  }

  return obj;
} 

/**
 * Transforms an object's keys from camelCase to snake_case
 * @param {Object} obj - The object to transform
 * @returns {Object} - New object with snake_case keys
 */
export function fromCamelToSnake(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => fromCamelToSnake(item));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        return [snakeKey, fromCamelToSnake(value)];
      })
    );
  }

  return obj;
}
