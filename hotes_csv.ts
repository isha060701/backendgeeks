import { BaseEntity, Column, Entity } from "typeorm";

@Entity()
export class hotels_csv extends BaseEntity{
    @Column()
    name:string;
    @Column()
    cuisines:string;
    @Column()
    featured_image:string;
    @PrimaryGeneratedColumn()
    id:string;
}