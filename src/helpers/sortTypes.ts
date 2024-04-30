// Re-orders type strings according to the currently selected charge type
const sortTypes = (types: string, selectedType: string): string[] => {
  const typesArr = types.split(",");
  const typeIndex = typesArr.findIndex(
    (type) => type.toLowerCase() === selectedType.toLowerCase()
  );

  if (typeIndex !== -1 && typeIndex !== 0) {
    const temp = typesArr[typeIndex];
    typesArr[typeIndex] = typesArr[0];
    typesArr[0] = temp;
  }

  return typesArr;
};

export default sortTypes;