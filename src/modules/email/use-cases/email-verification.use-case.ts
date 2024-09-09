import { Inject, Injectable } from '@nestjs/common';
import { EmailVerification } from '../messages/EmailVerification';
import { Nodemail } from 'src/shared/services/email/Nodemail';

@Injectable()
export class EmailVerificationUseCase {
    constructor(@Inject() private readonly mailService: Nodemail) {}

    // TODO: use message email
    execute(message: EmailVerification) {
        const html = this.buildHtml(message);
        this.mailService.sendEmail('gustavouliano11@gmail.com', 'Verify Email', html);
    }

    private buildHtml(message: EmailVerification) {
        const html = `<a href='http://localhost:3000/auth/verify/${message.userId}/${message.token}'>Verify e-mail</a>`;
        return html;
    }
}
