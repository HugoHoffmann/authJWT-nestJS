import * as crypto from 'crypto'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Audit } from '../../CommonsModule/entity'

@Entity()
export class User extends Audit{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        nullable: false
    })
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({
        default: '',
      })
    salt: string

    validPassword(password: string){
        const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
        /** case password is valid */
        return this.password === hash
    }

}
