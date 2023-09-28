import { User } from "../../users/entities/user.entity";
import { Topic } from "../../topic/entities/topic.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
export class Comment {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    text: string

    @ManyToOne(() => User, user => user.comments, { onDelete: 'SET NULL', cascade: true })
    user: User

    @ManyToOne(() => Topic, topic => topic.comments, { onDelete: 'SET NULL', cascade: true })
    topic: Topic

}
