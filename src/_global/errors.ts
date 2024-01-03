export class ApplicationError extends Error {
  code?: number;

  constructor(err: { msg: string; code?: number }) {
    super();
    this.message = err.msg;
    if (err.code) {
      this.code = err.code;
    }
  }
}
