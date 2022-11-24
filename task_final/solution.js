// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:

// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв. 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }
function merge_options(obj1,obj2) {
    var obj3 = {};
    for (var key in obj1) { obj3[key] = obj1[key]; }
    for (var key in obj2) { obj3[key] = obj2[key]; }
    return obj3;
  };
  
  
function sendRequest(name, phone, address, goods, sum) {
    
    let data = {client: {},order: {}, goods:[]};

    let countOfGoods = goods.length;
    
    
    for (let i = 0; i < countOfGoods; i += 1) {
        let obj = {title:'', count:''};
       
        obj.title= goods[i].title;
        obj.count = goods[i].count;
        
        data.goods.push(obj);
    }
    
    data.order.address = 'ул. ' +  address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, кв. ' + address.flat;
    data.order.sum = sum;

    data.client = name + ' ' + phone;

        let jsonData = JSON.stringify({data: data});
   
    return jsonData;
}
