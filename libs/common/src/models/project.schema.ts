import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({versionKey: false})
export class ProjectDocument extends AbstractDocument {
    @Prop()
    name: String;
}
export const ProjectSchema = SchemaFactory.createForClass(ProjectDocument)