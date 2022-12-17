//Задача № 1
function cachingDecoratorNew(func) {
  let casheArray = [];  
  return (...args) => {
    const hash = md5(args.join(','));
    console.log(hash);
    for (cache of casheArray) {
        if (hash in cache) {
            return "Из кэша: " + cache[hash];
        }
    }
    if (casheArray.length === 5) {
        casheArray.shift();
    }
    const result = func(...args);
    let newCache = {};
    newCache[hash] = result;
    casheArray.push(newCache);
    return "Вычисляем: " + newCache[hash];
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    wrapper.allCount = 0;
    wrapper.count = 0;
    timeoutId = null;
    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId === null && wrapper.count === 0) {
            func(...args);
            wrapper.count++;
        } else if (timeoutId) { 
            clearTimeout (timeoutId) ;
        }
        timeoutId = setTimeout(() => {
            timeoutId = null;
            func(...args);
            wrapper.count++;
        }, delay);
    }
    return wrapper;
}
