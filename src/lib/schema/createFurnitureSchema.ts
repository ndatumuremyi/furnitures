import { z } from 'zod';

const createFurnitureSchema = z.object({
    name: z.string().min(8).max(100),
    image:  z.array(z.any()),
    category_id: z.string()
});

export default createFurnitureSchema;
