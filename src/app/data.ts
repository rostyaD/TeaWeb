export interface tea {
    id: number,
    name: string,
    info: string,
    recipe: string,
    history: string,
    imgUrl: string
}

export const teaTypes: tea[] = [
    {
        id: 1,
        name: '"English Breakfast"',
        info: 'English breakfast tea or simply breakfast tea is a traditional blend of black teas originating from Assam, Ceylon and Kenya. It is one of the most popular blended teas, common in British and Irish tea culture. English breakfast tea is a black tea blend usually described as full-bodied, robust, rich and blended to go well with milk and sugar, in a style traditionally associated with a hearty English breakfast.',
        recipe: 'HOT: \n1. Heat water between 95-100 celsius degree; \n2. Steep tea for three to five minutes; \n3. Add milk and sugar to taste;',
        history: 'Accounts of its origins vary. Drinking a blend of black teas for breakfast is a longstanding British and Irish custom. The term breakfast tea has been applied by vendors since at least the late 18th century. \nDespite strong evidence for a Scottish origin, the blend became popular as an "English" breakfast tea. The current naming practice is claimed to have originated not in England but America, as far back as Colonial times. \nAn additional account (referencing a period-era Journal of Commerce article) dates the blend to 1843 and a tea merchant named Richard Davies in New York City. Davies, an English immigrant, started with a base of Congou and added a bit of Pekoe and Pouchong. It sold for 50 cents per pound (0.45 kg) (equivalent to $14.54 per pound in 2021), and its success led to imitators, helping to popularize the name. \nAn investigation to find the original Journal of Commerce article failed to locate it but did come upon an earlier reference to the same story in an 1876 edition of the Daily Alta California, citing "a New York commercial journal" and dating the teas origin to 1844. In an 1884 American publication it was noted that "Bohea teas (are) known to trade in this country as English Breakfast tea, from its forming the staple shipment to England".\nIn the UK, the popularisation of breakfast tea has been attributed in part to Queen Victoria. At Balmoral in 1892 she tasted and enjoyed a blend so-named and returned to London with a supply.',
        imgUrl: "assets/image/EnglishBreakfast.jpg"
    },
    {
        id: 2,
        name: 'MILK OOLONG',
        info: 'Milk Oolong is a distinctive type of Taiwanese tea cultivar known for its creamy flavor and texture. Oolong tea comes from the camellia sinensis plant which falls in-between green and black tea in oxidation and may display characteristics of both.\n Milk oolong is typically lightly oxidized and roasted, which helps retain the delicate floral aroma and creamy flavor. When we refer to milk oolong, we’re talking about Taiwanese tea from the Jin Xuan (pronounced jin shuan) cultivar.\n\n It is known for its naturally light and creamy aftertaste with a rich body, hence the name. It is a very popular tea due to the appealing flavor and aroma. It does not, however mean the tea was processed with milk in any way. Dairy should be in the name only, and not in the ingredients. ',
        recipe: 'HOT: \n1. Preheat your teacup or traditional gaiwan by rinsing it with hot water. \n2. Add 1.5 tablespoons of Milk Oolong to a tea strainer or ingenuitea.\n3. Bring water to 88-93 degrees Celsius (190-200 degrees Fahrenheit) using a temperature-controlled teapot or kettle and pour it into your cup.\n4. Add the tea leaves and steep for 3 to 5 minutes. The longer the steeping time, the bolder the flavors will become.\n5. Remove the tea strainer and enjoy! ',
        history: 'When we look at the long history of tea, Jin Xuan, a cultivar of the camellia sinensis plant, is a relative newcomer. The hybrid cultivar was first created in Taiwan during the 1980s at the Taiwanese Tea Research and Extension Station (TRES). \n It is also referred to as TRES #12 and became known as milk oolong due to the creamy flavor and aroma. Quickly becoming popular for its flavor and texture Jin Xuan is one of the most commonly grown cultivars in Taiwan.',
        imgUrl: 'assets/image/milkOolongTea.jpeg'
    }
]