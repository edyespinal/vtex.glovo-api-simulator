import { Document, model, Schema } from "mongoose";

export interface IPodcast extends Document {
    idAsoc: number,
    slug: string,
    link: string,
    title: string
    imageURL: string,
    podcasters: string[],
    description: string,
    periodicity: string,
    duration: string,
    category: string[],
    language: string,
    web: string,
    social: {
        facebook: string,
        twitter: string,
        telegram: string,
        others: []
    },
    episode: string
}

const podcastSchema = new Schema({
    idAsoc: Number,
    slug: String,
    link: String,
    title: String,
    imageURL: String,
    podcasters: [],
    description: String,
    periodicity: String,
    duration: String,
    category: [],
    language: String,
    web: String,
    social: {
        facebook: String,
        twitter: String,
        telegram: String,
        others: []
    },
    episode: String
});

export default model<IPodcast>('Podcast', podcastSchema);