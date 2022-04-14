// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from '@prisma/client';
import {NextApiRequest, NextApiResponse} from 'next'


export default async function  handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const prisma = new PrismaClient();
    var find = await prisma.user.findFirst({
        where: {
            email: req.body.username
        }
    });
    res.status(200).json(find)
}
