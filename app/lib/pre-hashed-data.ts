// This file contains pre-hashed passwords for the seed data to avoid bcrypt compilation issues during deployment
interface PreHashedPasswords {
  [key: string]: string;
}

export const preHashedPasswords: PreHashedPasswords = {
  '410544b2-4001-4271-9855-fec4b6a6442a': '$2b$10$9YVjkzxB3USK3s6I52CR5eF0UGkVG9VHvL9D.2CQg6UwGQqgH8PLi', // hashed version of '123456'
}; 