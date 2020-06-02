export default class {
  constructor(success, resultOrError) {
    this.success = success;
    if (success) this.result = resultOrError;
    else this.error = resultOrError;
  }
}
