import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Topic } from "../../topic/entities/topic.entity";
import { Comment } from "../../comments/entities/comment.entity";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ unique: true, nullable: false })
    email: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: false })
    phone: string

    @OneToMany(() => Topic, topic => topic.user)
    topics: Topic[]

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]

    @BeforeInsert()
    async hashPassword() {

        this.password = await bcrypt.hash(this.password, 10)

    }

}
