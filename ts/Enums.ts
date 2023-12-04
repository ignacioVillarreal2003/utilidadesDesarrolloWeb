// 👇 By default Enums are numerated from [0, 1, 2, ..., +inf)
enum OrderStateEnum {
  "Buyed",
  "Packed",
  "Ready to go",
  "On Way",
  "Delivered",
  "Reclaimed",
  "Refund",
}
const ItemStatus = OrderStateEnum.Packed;
console.log(`ItemStatus: ${ItemStatus}`);

// 💡 We can set a enumeration string in order to see a more representative value
enum OrderEnum {
  Buyed = "Buyed",
  Packed = "Packed",
  ReadyToGo = "Ready to go",
  OnWay = "On Way",
  Delivered = "Delivered",
  Reclaimed = "Reclaimed",
  Refund = "Refund"
}

const ItemStat = OrderEnum.Packed;
console.log(`ItemStat: ${ItemStat}`);

// 👇 We can do the same with numbers...
enum ResponseCode {
  SeverSideError = 500,
  ClientSideError = 400,
  Ok = 200,
}

const responseStatus = ResponseCode.SeverSideError;
console.log(`responseStatus: ${responseStatus}`);
