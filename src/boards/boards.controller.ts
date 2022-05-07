import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { resourceLimits } from 'worker_threads';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { createBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards') //경로다.
export class BoardsController {
  constructor(private boardsService: BoardsService) {} //보드서비스 이용하기위해 종속성 주입.

  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }
  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards(); //핸들러를 만들었다.
  // }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: createBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }
  // // @Post()
  // // createBoard(
  // //   @Body('title') title: string,
  // //   @Body('description') description: string,
  // // ): Board {
  // //   return this.boardsService.createBoard(title, description);
  // // }
  // // dto 만들기 전
  // // 밑의 모양으로 변형됨.

  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: createBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
