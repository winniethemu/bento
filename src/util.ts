/* eslint-disable */
export const compact = (obj: Record<string, any>) => {
  const result: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  return result;
};
/* eslint-enable */
