const REST_ADR="http://localhost";
const REST_PORT="5679";
export const REST_RESSOURCES=Object.freeze({
    memes:'/memes',
    images:'/images'
})
export default `${REST_ADR}:${REST_PORT}`;