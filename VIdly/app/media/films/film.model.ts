import { Character } from '../shared/character.model';

export class Film {
    public name: string;
    public description: string;
    public imagePath: string;
    public characters: Character[];

    constructor(name: string, description: string, imagePath: string, characters: Character[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.characters = characters;
    }
}