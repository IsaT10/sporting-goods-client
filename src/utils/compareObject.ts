export function compareObjects(defaultObj, modifiedObj) {
  const changedObj = {};

  function compareNestedObjects(obj1, obj2) {
    const nestedChangedObj = {};
    for (const key in obj2) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null) {
        const nestedChanges = compareNestedObjects(obj1[key] || {}, obj2[key]);
        if (Object.keys(nestedChanges).length > 0) {
          nestedChangedObj[key] = nestedChanges;
        }
      } else if (obj2[key] !== obj1[key]) {
        nestedChangedObj[key] = obj2[key];
      }
    }
    return nestedChangedObj;
  }

  for (const key in modifiedObj) {
    if (key === 'category') {
      const categoryChanges = compareNestedObjects(
        defaultObj[key] || {},
        modifiedObj[key]
      );
      if (Object.keys(categoryChanges).length > 0) {
        changedObj[key] = categoryChanges;
      }
    } else if (modifiedObj[key] !== defaultObj[key]) {
      changedObj[key] = modifiedObj[key];
    }
  }

  return changedObj;
}
