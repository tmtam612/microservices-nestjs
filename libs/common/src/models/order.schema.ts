import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ProjectDocument } from './project.schema';
@Schema({ versionKey: false })
export class OrderDocument extends AbstractDocument {
  @Prop()
  userID: String;

  @Prop({ type: Types.ObjectId, ref: ProjectDocument.name })
  projectID: String;
}

export const OrderSchema = SchemaFactory.createForClass(OrderDocument);
