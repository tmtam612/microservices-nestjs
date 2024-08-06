import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject('orders') private readonly ordersService: ClientProxy,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create({
      ...createUserDto,
    });
  }

  findAll() {
    return this.usersRepository.find({});
  }

  findOne(_id: string) {
    const test = this.ordersService.send('find_orders_by_userid', {
      _id,
    });
    console.log(test);
    return this.usersRepository.find({ _id });
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.findOneAndUpdate(
      { _id },
      { $set: updateUserDto },
    );
  }

  remove(_id: string) {
    return this.usersRepository.findOneAndDelete({ _id });
  }
}
