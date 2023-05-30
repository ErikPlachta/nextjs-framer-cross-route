// import React from "react";



/** Array of places containing each pages content.
 * 
 * @typedef {Object} Place
 * @property {string} id        - Page slug.
 * @property {string} name      - Images Alt and Source.
 * @property {string} image     - Path to image in public assets.
 * @property {string} position  - Image objectPosition in parent element.
 * @property {string} blend     - Tailwinds className style for gradient background behind images.
 * @property {string} about     - The about text of the place.
 * 
 */
export default function getPosts() {
  return [
      {
        id: "1",
        name: "Lake Como",
        image: "/assets/images/places/lake-como.jpeg",
        position: "center 56%",
        blend: "from-red-900/20 to-amber-300/20",
        about:
          "Lake Como (Italian: Lago di Como [ˈlaːɡo di ˈkɔːmo], locally [ˈkoːmo]; Western Lombard: Lagh de Còmm [ˈlɑː‿dːe ˈkɔm],[a] Cómm [ˈkom] or Cùmm [ˈkum]), also known as Lario (Italian: [ˈlaːrjo]; after the Latin: Larius Lacus), is a lake of glacial origin in Lombardy, Italy. It has an area of 146 square kilometres (56 sq mi), making it the third-largest lake in Italy, after Lake Garda and Lake Maggiore. At over 400 metres (1,300 ft) deep, it is the fifth deepest lake in Europe, and the deepest outside Norway; the bottom of the lake is more than 200 metres (660 ft) below sea level.",
      },
      {
        id: "2",
        name: "Aspen",
        image: "/assets/images/places/aspen.jpeg",
        position: "58% 50%",
        blend: "from-purple-500/20 to-blue-500/20",
        about:
          'Founded as a mining camp during the Colorado Silver Boom and later named Aspen for the abundance of aspen trees in the area, the city boomed during the 1880s, its first decade. The boom ended when the Panic of 1893 led to a collapse of the silver market. For the next half-century, known as "the quiet years", the population steadily declined, reaching a nadir of fewer than 1000 by 1930.\n Aspen\'s fortunes recovered in the mid-20th century when neighboring Aspen Mountain was developed into a ski resort, and industrialist Walter Paepcke bought many properties in the city in the 1950s and redeveloped them. Today it is home to three institutions, two of which Paepcke helped found, that have international importance: the Aspen Music Festival and School, the Aspen Institute, and the Aspen Center for Physics.',
      },
      {
        id: "3",
        name: "New York City",
        image: "/assets/images/places/nyc.jpeg",
        position: "center 15%",
        blend: "from-slate-800/60 to-slate-100/60",
        about:
          "New York, often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the world by urban landmass.[8] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities, and over 58 million people live within 250 mi (400 km) of the city.[9] New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences,[10] research, technology,[11] education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[12][13] an established safe haven for global investors, and is sometimes described as the capital of the world.",
      },
  ];
}
// export const places = [


// module.exports = places;
