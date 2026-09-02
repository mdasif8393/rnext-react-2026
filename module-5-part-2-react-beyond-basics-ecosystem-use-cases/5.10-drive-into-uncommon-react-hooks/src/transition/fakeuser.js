import { faker } from "@faker-js/faker";

const THRESHOLD = 10000;

export const users = Array.from({ length: THRESHOLD }, () => {
  return {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  };
});