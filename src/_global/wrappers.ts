import { RESPONSE_CODE } from './enums';

export class WrappedResponse {
  code: number;

  sub_code?: number;

  data?: any;

  msg: string;

  sub_msg?: string;
}

export class WrappedOkResponse extends WrappedResponse {
  constructor(data?: any) {
    super();
    this.code = RESPONSE_CODE.OK;
    this.msg = 'OK';
    this.data = data;
  }
}

export class WrappedErrorResponse extends WrappedResponse {
  constructor(err?: {
    code?: number;
    sub_code?: number;
    msg?: string;
    sub_msg?: string;
  }) {
    super();
    this.code = RESPONSE_CODE.INTERNAL_SERVER_ERROR;
    this.msg = 'ERROR';
    if (err?.code) {
      this.code = err.code;
    }
    if (err?.msg) {
      this.msg = err.msg;
    }
    if (err?.sub_code) {
      this.sub_code = err.sub_code;
    }
    if (err?.sub_msg) {
      this.sub_msg = err.sub_msg;
    }
  }
}
