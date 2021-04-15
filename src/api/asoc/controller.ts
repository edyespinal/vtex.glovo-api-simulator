import axios from 'axios';
import { Request, Response } from 'express';
import { Podcast } from '.';

export const feedDb = async (req: Request, res: Response,) => {
    try {

        let { data } = await axios.get('https://asociacionpodcast.es/wp-json/wp/v2/podcasts?_fields=id,slug,link,title,toolset-meta&per_page=100&page=2');
        data = data.filter((podcast: { [x: string]: { [x: string]: any; }; }) => {
            const meta = podcast['toolset-meta']['datos-de-los-podcasts'];

            return meta.podder.raw === "1";
        })
        data.forEach(async (el: { [x: string]: { [x: string]: any; }; id: any; slug: any; link: any; title: { rendered: any; }; }) => {
            const meta = el['toolset-meta']['datos-de-los-podcasts'];
            const image = meta['portada-del-podcast'];
            const desc = meta['descripcion-del-podcast'];
            const periodicity = meta['periocidad-del-podcast'];
            const web = meta['web-del-podcast'];
            const episode = meta['episodio-seleccionado'];
            const podcastInst = {
                idAsoc: el.id,
                slug: el.slug,
                link: el.link,
                title: el.title.rendered,
                imageURL: image.raw,
                podcasters: meta.integrantes.raw,
                description: desc.raw,
                periodicity: '',
                duration: '',
                category: [''],
                language: 'Español',
                web: web.raw,
                social: {
                    facebook: meta.facebook.raw,
                    twitter: meta.twitter.raw,
                    telegram: meta.telegram.raw,
                    others: meta.plataformas.raw
                },
                episode: episode.raw
            };
            const podcast = new Podcast(podcastInst);

            await podcast.save();
        });
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}

export const findAll = async (req: Request, res: Response,) => {
    try {
        const allPodcasts = await Podcast.find({});

        return res.json(allPodcasts);
    } catch (error) {
        return res.send(error.message);

    }
}