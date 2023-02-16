export function getEnumKeyByValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string,
): keyof T | null {
  let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue)

  return keys[0]
}
