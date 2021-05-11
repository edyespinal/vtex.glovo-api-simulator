import { Request, Response } from 'express'
import { axios } from '../../helpers'

export const searchPodcasts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      query = '',
      mode = 'topics',
      per_page = '50',
      page = '1',
      filters = '',
    } = req.query

    const rephonicResponse = await axios({
      url: `/api/search/podcasts/?query=${query}&mode=${mode}&per_page=${per_page}&page=${page}&filter=${filters}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 400).json({ message: error.message })
  }
}

export const searchAutocomplete = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { mode = 'topics', query = '' } = req.query
    const rephonicResponse = await axios({
      url: `/api/search/autocomplete/?mode=${mode}&query=${query}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const searchEpisodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { query = '', threshold = '' } = req.query
    const rephonicResponse = await axios({
      url: `/api/search/episodes/?query=${query}&threshold=${threshold}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const getPodcast = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id
    const rephonicResponse = await axios({ url: `/api/podcasts/${id}/` })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const getSimilarPodcasts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { podcast_id = '' } = req.query
    const rephonicResponse = await axios({
      url: `/api/similar/graph/?podcast_id=${podcast_id}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const getEpisode = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id
    const rephonicResponse = await axios({ url: `/api/episodes/${id}/` })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const getSocialAccounts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { podcast_id = '' } = req.query
    const rephonicResponse = await axios({
      url: ` /api/social/accounts/?podcast_id=${podcast_id}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const getPodcastRatings = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { podcast_id = '' } = req.query
    const rephonicResponse = await axios({
      url: `/api/feedback/?podcast_id=${podcast_id}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}

export const getPodcastReviews = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { podcast_id = '', platform = 'all' } = req.query
    const rephonicResponse = await axios({
      url: `/api/reviews/?podcast_id=${podcast_id}&platform=${platform}`,
    })

    return res.status(200).json(rephonicResponse.data)
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message })
  }
}
