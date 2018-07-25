import { observable,computed ,action, when,autorun } from 'mobx'

// 点击次数
class MainStore {
  @observable price = 1;
  @observable amount = 1;

  constructor() {
    when(
        // once...
        () => this.price>10,
        // ... then
        () => this.dispose()
    );
    autorun(() =>{this.dispose()})
}

  @action.bound total() {
      this.price+=1;
  }
  dispose(){
    console.log(this.price)
  }
  
}

export default new MainStore();