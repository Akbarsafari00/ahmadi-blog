const {PrismaClient} =require ("@prisma/client");

const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.user.deleteMany();
        console.log("Deleted records in category table");

        await prisma.user.create({
            data: {
                email: 'akbarsafari00@gmail.com',
                password: "Aa@13567975"
            }
        })
        console.log("Sedded");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
    ;
}

load();

