import { backendAxios } from "../axios";

export const createReviews = async (
    game_id,
    user_id,
    rating,
    comment   
) => {
    return await backendAxios.post('/reviews', {
      game_id,
      user_id,
      rating,
      comment   
    });
};

export const allReviews = async () => {
    return await backendAxios.get('/reviews')
}

export const userReviews = async (user_id) => {
    return await backendAxios.get(`/reviews/${user_id}`)
}