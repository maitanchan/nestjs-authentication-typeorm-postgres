import { Comment } from "../../comments/entities/comment.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('topics')
export class Topic {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    desc: string

    @ManyToOne(() => User, user => user.topics, { onDelete: 'SET NULL', cascade: true })
    user: User

    @OneToMany(() => Comment, comment => comment.topic)
    comments: Comment[]

}
