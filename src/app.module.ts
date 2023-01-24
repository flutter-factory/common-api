import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdealTypeWorldCupModule } from './ideal-type-world-cup/ideal-type-world-cup.module';

@Module({
  imports: [IdealTypeWorldCupModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }), TypeOrmModule.forRoot({
    type: 'mysql',
    port: 3306,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    autoLoadEntities: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
