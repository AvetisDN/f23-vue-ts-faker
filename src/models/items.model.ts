import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export interface Item {
  id: string;
  name: string;
  description?: string;
  avatar: string;
  quantity: number;
  createdAt: Date;
  deletedAt?: Date;
}

export function generateFakeData(): Item {
  return {
    id: uuidv4(),
    quantity: Math.ceil(Math.random() * 10),
    name: faker.food.ingredient(),
    description: faker.lorem.words({ min: 10, max: 20 }),
    avatar: faker.image.urlLoremFlickr({
      width: 500,
      height: 500,
      category: "groceries",
    }),
    createdAt: new Date(),
  };
}
