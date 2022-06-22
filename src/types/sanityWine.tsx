export default interface WineRes {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  description: [
    {
      _key: string;
      _type: string;
      children: [
        {
          _key: string;
          _type: string;
          marks: string[];
          text: string;
        }
      ];
      markDefs: string[];
      style: string;
    }
  ];
  name: string;
  tasting: [
    {
      _key: string;
      _type: string;
      children: [
        {
          _key: string;
          _type: string;
          marks: string[];
          text: string;
        }
      ];
      markDefs: string[];
      style: string;
    }
  ];
  type: string;
  year: number;
}
