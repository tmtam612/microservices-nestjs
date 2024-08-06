import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  name: String;

  @Prop()
  email: String;

  @Prop()
  password: string;

  @Prop()
  id: string;
}
export const UserSchema = SchemaFactory.createForClass(UserDocument);
