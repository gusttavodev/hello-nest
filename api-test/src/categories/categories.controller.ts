import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController { 
    constructor(
        private readonly categoriesService: CategoriesService,
    ) { }

    @Get() // Decorator
    async index() {
                    // Função do service
      return await this.categoriesService.findAll();
    }
}
