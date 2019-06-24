import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { IUser } from './user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) { }
    @Get()
    async index(@Body() user: IUser) {
        return await this.userService.findByEmail(user.email);
    }

    @Post()
    async create(@Body() user: IUser) {
        return await this.userService.store(user);
    }
}
