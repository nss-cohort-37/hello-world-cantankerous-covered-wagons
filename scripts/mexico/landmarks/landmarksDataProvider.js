const landmarkCollection = [
    {
        name: "Chichen Itza",
        details: "Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.<br> -Wikipedia"
    },
    {
        name: "National Palace",
        details: "The National Palace is the seat of the federal executive in Mexico. It is located on Mexico City's main square, the Plaza de la Constitución.<br> -Wikipedia"
    },
    {
        name: "Murales de Diego Rivera en la Secretaria de Educacion Publica",
        details: "Three floors of fresco murals by Diego Rivera in a beautifully restored classic building with an amazing courtyard containing blooming Jacarandas.<br> -Trip Advisor"
    }
]   

// This is new code. Add this.
export const useLandmark = () => {
    return landmarkCollection
}