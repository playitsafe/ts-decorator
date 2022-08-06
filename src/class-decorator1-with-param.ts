function FirstClassDecorator(param: any) {
  console.log('decor param: ', param);
  return function(targetClass: any) {
    let targetObj = new targetClass()
    targetObj.buy()
  }
}

@FirstClassDecorator('I\'m decorator param')
class CustomerService {
  name: string = "下单"
  constructor() {

  }
  buy() {
    console.log(this.name + "购买");
  }
  placeOrder() {//下单
    console.log(this.name + "下单购买");
  }
}

export {}
