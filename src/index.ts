import { Elysia } from "elysia"
import { cors } from '@elysiajs/cors'
import { prisma } from './prisma' // import จากไฟล์ที่สร้างด้านบน

const app = new Elysia()
.use(cors(
  {
    origin: 'http://localhost:3000', // อนุญาตให้ทุกโดเมนเข้าถึง
    //methods: ['GET', 'POST', 'PUT', 'DELETE'], // กำหนดวิธีการที่อนุญาต
    //allowedHeaders: ['Content-Type', 'Authorization'], // กำหนด header ที่อนุญาต
  }
))
.get("/", () => "Hello Elysia Started")

.get('/onets', async () => {
    return prisma.onet.findMany()
  })

  .get('/onets/:smis_code', async ({params}) => {
    const smis_code = parseInt(params.smis_code)
    return prisma.onet.findMany({
      where: {
        smis_code: smis_code
      }
    })
  })


.listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
