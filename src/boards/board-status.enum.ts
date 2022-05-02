// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }
//데이터베이스를 사용할때는 모델은 필요없이 entity로 저장할것

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
