function outsideFun () {
    const food = 'Hamburger';
    console.log('Called outside');
  
    return function insideFunction () {
      console.log('Called inside');
      console.log(food);
    };
  }
  
  // Вызываем outsideFunction, которая возвращает insideFunction
  // Сохраняем insideFunction в переменной "fn"
  const gf = outsideFun();