import { ApiProperty } from '@nestjs/swagger';

export class FindByCardNoDto {
  @ApiProperty({ description: '卡号', type: String })
  readonly card_no: string;
}

export class BindOpenidDto {
  @ApiProperty({ description: '员工id', type: Number })
  readonly employee_id: number;

  @ApiProperty({ description: 'openid', type: String })
  readonly openid: string;
}
