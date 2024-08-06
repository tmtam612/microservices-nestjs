import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({versionKey: false})
export class OrderDocument extends AbstractDocument {
    @Prop()
    userID: String;
  
    @Prop()
    projectID: String;
}
export const OrderSchema = SchemaFactory.createForClass(OrderDocument)