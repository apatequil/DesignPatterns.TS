
// This isn't perfect but gives a good estimate.
// Pulled from: https://stackoverflow.com/a/71115598
export function sizeOfObject(object: any) {
  const objectList = <any>[];
  const stack = [object];
  const bytes = [0];
  while (stack.length) {
    const value = stack.pop();
    if (value == null) bytes[0] += 4;
    else if (typeof value === 'boolean') bytes[0] += 4;
    else if (typeof value === 'string') bytes[0] += value.length * 2;
    else if (typeof value === 'number') bytes[0] += 8;
    else if (typeof value === 'object' && objectList.indexOf(value) === -1) {
      objectList.push(value);
      if (typeof value.byteLength === 'number') bytes[0] += value.byteLength;
      else if (value[Symbol.iterator]) {
        // eslint-disable-next-line no-restricted-syntax
        for (const v of value) stack.push(v);
      } else {
        Object.keys(value).forEach(k => {
          bytes[0] += k.length * 2; stack.push(value[k]);
        });
      }
    }
  }
  return bytes[0];
}