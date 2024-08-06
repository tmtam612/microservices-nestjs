import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  create(createOrderDto: CreateOrderDto) {
    return this.ordersRepository.create({
      ...createOrderDto,
    });
  }

  findAll() {
    return this.ordersRepository.find({});
  }

  findOne(_id: string) {
    return this.ordersRepository.find({ _id });
  }

  findByUserID(userID: string) {
    console.log(111111);
    console.log(this.ordersRepository.find({ userID: userID }));
    return this.ordersRepository.find({ userID: userID });
  }

  update(_id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersRepository.findOneAndUpdate(
      { _id },
      { $set: updateOrderDto },
    );
  }

  remove(_id: string) {
    return this.ordersRepository.findOneAndDelete({ _id });
  }
}
