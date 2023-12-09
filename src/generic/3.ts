/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, R>(objA: T, objB: R): T & R {
  return {...objA, ...objB}
}

export {}