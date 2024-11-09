import Redis from "ioredis"
import dotenv from 'dotenv'

dotenv.config()

// redis is a giant key-value store
export const redis = new Redis(process.env.UPSTASH_REDIS_URL);