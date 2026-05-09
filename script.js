window.onload = () => {
    const year = new Date().getFullYear(); 
    footer.innerHTML = `Delta Corp ${year} &reg; / TM`;
    normal.onclick = () => formsframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLScK5Mi2c93qtxTvovjN5_lrhIpu7k5YoVUaOlmdIligGAd0sg/viewform?embedded=true';
    bug.onclick = () => formsframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLScQ56IP95Y-Inb-gncNPmGilF7_8ROtiXJLeBlqKK4bNiW7CA/viewform?embedded=true';
    idea.onclick = () => formsframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfCm9BvvzeHGcOTyLQt9WCs3wVt8g6hgomKBG-7fEcXtHaK6A/viewform?embedded=true';
    rating.onclick = () => formsframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLSd8WqxCASxsb_FOhaHkhMTXU8M0JralMnJwA2oDNtRGPeS2pQ/viewform?embedded=true';
};