import { Router } from 'express'
import {
  searchPodcasts,
  searchAutocomplete,
  searchEpisodes,
  getPodcast,
  getSimilarPodcasts,
  getEpisode,
  getSocialAccounts,
  getPodcastRatings,
  getPodcastReviews,
} from './controller'

const router = Router()

router.get('/', (req, res) => res.send('Rephonic integration running'))
router.get('/search/podcasts/', searchPodcasts)
router.get('/search/autocomplete/', searchAutocomplete)
router.get('/search/episodes/', searchEpisodes)
router.get('/podcasts/:id/', getPodcast)
router.get('/similar/graph/', getSimilarPodcasts)
router.get('/episodes/:id/', getEpisode)
router.get('/social/accounts/', getSocialAccounts)
router.get('/feedback/', getPodcastRatings)
router.get('/reviews/', getPodcastReviews)

export default router
