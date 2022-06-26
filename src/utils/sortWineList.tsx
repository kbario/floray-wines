import WineRes from "../types/sanityWine";

export default (a: WineRes, b: WineRes): number => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
};
