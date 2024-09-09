import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmailVerification } from './messages/EmailVerification';
import { EmailVerificationUseCase } from './use-cases/email-verification.use-case';

@Controller()
export class EmailController {
    constructor(@Inject() private readonly emailVerificationUseCase: EmailVerificationUseCase) {}

    @MessagePattern('email-user-verification-topic')
    sendEmail(@Payload() message: EmailVerification) {
        return this.emailVerificationUseCase.execute(message);
    }
}
