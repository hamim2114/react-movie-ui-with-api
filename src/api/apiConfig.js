const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c31340161bfd6dafb954be05dda15d6c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;