import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards') //경로다.
export class BoardsController {
  constructor(private boardsService: BoardsService) {} //보드서비스 이용하기위해 종속성 주입.

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards(); //핸들러를 만들었다.
  }
}
