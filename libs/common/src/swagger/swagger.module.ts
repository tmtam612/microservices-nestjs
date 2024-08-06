import { DocumentBuilder } from '@nestjs/swagger';

export const ConfigSwagger = (title: string, type: string, version: string) => {
    return new DocumentBuilder()
    .setTitle(title)
    .setDescription(`The ${type} API description`)
    .setVersion(version)
    .build();
}