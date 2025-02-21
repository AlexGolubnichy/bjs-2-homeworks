//Задача 1. Усовершенствуйте кэширующий декоратор
function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];

  function wrapper(...rest) {
    let hash = rest.join(',');
    let existResult = cache.find(cacheRecord => cacheRecord.hash === hash);

    if (existResult) {
      console.log('Из кэша: ' + existResult.value);
      return 'Из кэша: ' + existResult.value;
    }

    let value = func.call(this, ...rest);
    console.log('Вычисляем: ' + value);

    cache.push({hash, value});

    if (cache.length > 5) {
      cache.shift()
    }

    return 'Вычисляем: ' + value;
  }

  return wrapper;
}

//Задача 2. Debounce декоратор с моментальным вызовом
function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;
  let firstCall = true;

  return function (...rest) {
    if (firstCall) {
      func.call(this, ...rest);
      firstCall = false;
      return
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.call(this, ...rest);
      firstCall = true;
    }, ms);
  };
}

//Задача 3. Усовершенствуйте debounceDecoratorNew
function debounceDecorator2(func, ms) {
    // Ваш код
    let timeout;
    let firstCall = true;

    function wrapper(...rest) {
      if (firstCall) {
        func.call(this, ...rest);
        firstCall = false;
        wrapper.count++;
        return
      }

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.call(this, ...rest);
        firstCall = true;
        wrapper.count++;
      }, ms);
    };

    wrapper.count = 0;

    return wrapper;
}