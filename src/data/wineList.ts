export interface WineListType {
  name: string;
  type: string;
  year: number;
  description: string;
  tasting: string;
  price: number;
}

const WineList: WineListType[] = [
  {
    name: "Sama",
    type: "Pinor Noir",
    year: 2022,
    description:
      "Floral, fruity notes that match perfectly with any summer twilight",
    tasting: "",
    price: 40,
  },
];

export default WineList;
