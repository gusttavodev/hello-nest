import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { PostsService } from './posts.service';
import { IPost } from './post.interface';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) { }

    @Get() // Decorator
    async index() {
                    // Função do service
      return await this.postsService.findAll();
    }

    @Post()
    // Body pega dados da requisição
    async create(@Body() post) {
        return await this.postsService.create(post);
    }

    @Put()
    async update(@Body() post: IPost) {
        return await this.postsService.update(post);
    }

    @Delete(':id')
    async delete(@Param() params: IPost) {
        return await this.postsService.delete(params.id);
    }
}
