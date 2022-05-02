export default class PersistentStorage<T> {
  // TODO: localStorage isn't async
  private localStorage = window.localStorage

  private key

  constructor(key: string, defaultState?: T) {
    this.key = key

    if (defaultState) {
      this.set(defaultState)
    }
  }

  get(): T {
    return this.jsonToObject(this.localStorage.getItem(this.key) || "{}")
  }

  set(object: T) {
    this.localStorage.setItem(this.key, this.objectToJson(object))
  }

  private jsonToObject(json: string): T {
    return JSON.parse(json)
  }

  private objectToJson(object: T): string {
    return JSON.stringify(object)
  }
}
