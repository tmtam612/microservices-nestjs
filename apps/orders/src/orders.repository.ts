import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { OrderDocument } from '@app/common/models/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

Injectable();
export class OrdersRepository extends AbstractRepository<OrderDocument> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(OrderDocument.name)
    orderModel: Model<OrderDocument>,
  ) {
    super(orderModel);
  }
}
