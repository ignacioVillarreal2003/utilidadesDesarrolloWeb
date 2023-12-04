"use strict";
// 👇 By default Enums are numerated from [0, 1, 2, ..., +inf)
var OrderStateEnum;
(function (OrderStateEnum) {
    OrderStateEnum[OrderStateEnum["Buyed"] = 0] = "Buyed";
    OrderStateEnum[OrderStateEnum["Packed"] = 1] = "Packed";
    OrderStateEnum[OrderStateEnum["Ready to go"] = 2] = "Ready to go";
    OrderStateEnum[OrderStateEnum["On Way"] = 3] = "On Way";
    OrderStateEnum[OrderStateEnum["Delivered"] = 4] = "Delivered";
    OrderStateEnum[OrderStateEnum["Reclaimed"] = 5] = "Reclaimed";
    OrderStateEnum[OrderStateEnum["Refund"] = 6] = "Refund";
})(OrderStateEnum || (OrderStateEnum = {}));
const ItemStatus = OrderStateEnum.Packed;
console.log(`ItemStatus: ${ItemStatus}`);
// 💡 We can set a enumeration string in order to see a more representative value
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["Buyed"] = "Buyed";
    OrderEnum["Packed"] = "Packed";
    OrderEnum["ReadyToGo"] = "Ready to go";
    OrderEnum["OnWay"] = "On Way";
    OrderEnum["Delivered"] = "Delivered";
    OrderEnum["Reclaimed"] = "Reclaimed";
    OrderEnum["Refund"] = "Refund";
})(OrderEnum || (OrderEnum = {}));
const ItemStat = OrderEnum.Packed;
console.log(`ItemStat: ${ItemStat}`);
// 👇 We can do the same with numbers...
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["SeverSideError"] = 500] = "SeverSideError";
    ResponseCode[ResponseCode["ClientSideError"] = 400] = "ClientSideError";
    ResponseCode[ResponseCode["Ok"] = 200] = "Ok";
})(ResponseCode || (ResponseCode = {}));
const responseStatus = ResponseCode.SeverSideError;
console.log(`responseStatus: ${responseStatus}`);
