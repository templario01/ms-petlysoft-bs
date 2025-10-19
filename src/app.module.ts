import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlOptions } from './settings/graphql/graphql-options.factory';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VeterinaryCenterModule } from './veterinary-center/veterinary-center.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: GraphqlOptions,
    }),
    VeterinaryCenterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
