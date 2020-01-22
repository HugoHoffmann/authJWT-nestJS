import * as fs from 'fs'
import * as dotenv from 'dotenv'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const CONFIG = dotenv.parse(fs.readFileSync(__dirname + '/../../.env'))

export const typeOrmConfiguration = (): PostgresConnectionOptions => {
    return {
        type: 'postgres',
        host: CONFIG.DATABASE_HOST,
        database: CONFIG.DATABASE_NAME,
        port: 5432,
        username: CONFIG.DATABASE_USERNAME,
        password: CONFIG.DATABASE_PASSWORD,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        dropSchema: CONFIG.NODE_ENV === 'test',
        synchronize: CONFIG.NODE_ENV !== 'prod',
    }
}