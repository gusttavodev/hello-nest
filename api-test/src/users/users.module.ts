import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])],
  providers: [UsersService],
  controllers: [UsersController],
  // Permite usar este serviço em outra coleção
  exports: [UsersService],
})
export class UsersModule {}
