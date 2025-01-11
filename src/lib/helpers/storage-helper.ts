export default class StorageHelper {
  static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  static getItem(key: string) {
    return localStorage.getItem(key);
  }
  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
