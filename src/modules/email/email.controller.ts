import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Nodemail } from 'src/shared/services/email/Nodemail';

@Controller()
export class EmailController {
    constructor(@Inject() private readonly mailService: Nodemail) {}

    @MessagePattern('product-topic')
    sendEmail(@Payload() message: any) {
        console.log(message);
        this.mailService.sendEmail('gustavouliano11@gmail.com', 'assunto 1', 'teste conteúdo<br/><h1>teste h1</h1>');
    }
}
