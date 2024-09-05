import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class EmailController {
    @MessagePattern('product-topic')
    sendEmail(@Payload() message: any) {
        console.log(message);
    }
}
