function FirstClassDecorator(targetClass: any) {
  let targetObj = new targetClass()
  targetObj.buy()
  console.log("targetClass.name:", targetClass.name);
}

@FirstClassDecorator
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