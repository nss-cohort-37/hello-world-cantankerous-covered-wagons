const landmarkCollection = [
    {
        name: "Chichen Itza",
        details: "Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.<br> -Wikipedia",
        image: "https://cdn.britannica.com/30/178930-050-A9761BDF/El-Castillo-Chichen-Itza-Yucatan-Mexico.jpg"
    },
    {
        name: "National Palace",
        details: "The National Palace is the seat of the federal executive in Mexico. It is located on Mexico City's main square, the Plaza de la Constitución.<br> -Wikipedia",
        image: "https://hellolittlehome.com/wp-content/uploads/2018/04/national-palace-mexico-city-exterior-NEW.jpg"
    },
    {
        name: "Murales de Diego Rivera en la Secretaria de Educacion Publica",
        details: "Three floors of fresco murals by Diego Rivera in a beautifully restored classic building with an amazing courtyard containing blooming Jacarandas.<br> -Trip Advisor",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/0f/6c/b2/murales-de-diego-rivera.jpg"
    }
]   

// This is new code. Add this.
export const useLandmark = () => {
    return landmarkCollection
}