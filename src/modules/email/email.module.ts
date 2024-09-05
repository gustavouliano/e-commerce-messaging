import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'product_producer_client',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'client_product_producer',
                        brokers: ['localhost:29092'],
                    },
                    consumer: {
                        groupId: 'group_client_product_producer',
                    },
                    producer: {
                        createPartitioner: Partitioners.LegacyPartitioner,
                    },
                },
            },
        ]),
    ],
    controllers: [EmailController],
    providers: [],
})
export class EmailModule {}
