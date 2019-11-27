//@flow

declare module 'onlyjs'{
  declare type Obj = { $call?: empty } //anything that is not a function
  declare var html : any => HTMLElement;
  declare var merge : (...args : Array<ObjNotFn>) => Obj;
  declare function makeCss(s : string , o : Obj) : Void;
  // };

  // declare var only : Only;
};
