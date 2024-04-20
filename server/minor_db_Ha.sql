
CREATE TABLE Vietnamese_Recipes (
    dishID VARCHAR(50) PRIMARY KEY,
    dishName VARCHAR(255),
    dishDescription TEXT,
	dishHistory TEXT,
    dishImage VARCHAR(255),
	recipeIngredients TEXT,
	recipeInstruction TEXT,
	dishVideo VARCHAR(255)
    );

INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
	'VN-0001',
    'Banh Canh Cua (Vietnamese Shrimp and Crab Thick Noodle Soup)',
    'Banh Canh Cua is a beloved Vietnamese noodle soup featuring hearty noodles, succulent crab meat, shrimp, and a rich, aromatic broth. A staple of Vietnamese cuisine, it is particularly cherished during chilly weather.',
    'Banh canh originates from the Southeast region of Vietnam and later became popular throughout the country. Banh canh consists of broth made from shrimp, fish, pork knuckles, and the seasoning for banh canh varies depending on the dish and the taste preferences of each region. The noodles are thicker and wider compared to pho noodles in the North. The ingredients for making banh canh noodles are also very diverse. They can be made from rice flour, wheat flour, or cassava flour. Each type of flour used for making the noodles has its own unique flavor, contributing to the distinctiveness of this dish.',
    'data/images/viD_img/VN-0001_Banh Canh Cua.jpg',
    '500 grams crab meat, 300 grams shrimp (peeled and deveined), 500 grams banh canh noodles (thick Vietnamese noodles), 1 onion (chopped), 3 cloves garlic (minced), 2 tomatoes (diced), 1.5 liters chicken broth, 2 tablespoons fish sauce, 1 tablespoon sugar, Salt and pepper to taste, Chopped scallions and cilantro for garnish, Lime wedges for serving',
    'Preparation: Preheat the oven to broil and bake the onion until charred. Soak dried shrimp. Parboil pork shoulder, then clean and add it back to the pot._ Making the Broth: Add broiled onion, soaked shrimp, daikon, and salt to the pot. Cover with water, bring to a boil, and simmer for 45 minutes. Remove impurities._ Prepare toppings: Boil shrimp and banh canh. Remove pork, separate meat from bones, cut meat into pieces, and add bones back to the pot. Add fish sauce and chicken broth powder, simmer for 30 minutes. Make annatto oil by combining annatto seeds and vegetable oil. Simmer and set aside. Mix tapioca starch with water, add to the broth, and simmer to thicken. Add annatto oil to the broth._ Assembling Noodle Bowls: Cook banh canh and place in bowls. Top with pork, crab meat, shrimp, fried shallots, and minced green onions.',
	'https://www.youtube.com/watch?v=kyfz6XwtJqo'
),
(
    'VN-0002',
    'Banh Xeo (Vietnamese Crispy Savory Pancake)',
   	'Banh Xeo is a crispy Vietnamese pancake filled with shrimp, pork, bean sprouts, and herbs, typically served with lettuce leaves and a tangy dipping sauce',
	'Bánh xèo originates from the Khmer people in the Southern region. Different regions in Vietnam have variations in color, size, filling, and dipping sauce for bánh xèo. However, the common feature of all types of bánh xèo in Vietnam is that they are made from diluted rice flour, thinly spread on a pan, and fried until crispy. The name ""bánh xèo"" comes from the sound it makes when poured onto the pan. When the batter is poured into hot oil, it sizzles and continues to sizzle until the pancake is nearly cooked. Hence, this traditional pancake is named bánh xèo.',
    'data/images/viD_img/VN-0002_Banh Xeo.jpg',
    '1 cup rice flour, 1/4 cup corn starch, 1/2 tsp turmeric powder, 1/4 cup coconut milk, 2 tbsp beer, 1 egg, 1 cup water, 1/4 tsp salt, 2 stalks green onions minced, 400 grams pork shoulder thinly sliced, 1/4 cup mung beans optional, 3/4 lb shrimp',
    'Prep Ingredients: Mix batter ingredients and refrigerate for at least 3 hours, preferably overnight. Boil pork and slice thinly. Boil mung beans until soft._ Cooking Banh Xeo: Heat an nonstick pan. Add onion and shrimp, cook until shrimp turns orange. Add pork, separating ingredients down the center of the pan. Spoon in oil, swirl to coat the bottom, then ladle in batter. Tilt pan to spread batter thinly. Add mung beans and bean sprouts, cover, and cook for ~3 minutes until crispy and brown. Fold banh xeo in half and slide onto a plate. Repeat until batter and filling are finished. Clean pan with a paper towel after every 2 banh xeo._ Serving: Wrap a piece of Banh Xeo in a lettuce leaf, add some herbs, and dip into the prepared sauce.',
	'https://www.youtube.com/watch?v=qTy_FF-hEO8'

),
(
     'VN-0003',
    'Bo Bia (Vietnamese Spring Rolls with Jicama n Egg)',
    'Bo Bia is a Vietnamese spring roll filled with jicama, carrots, Chinese sausage, egg, and dried shrimp, wrapped in rice paper and served with a sweet and savory dipping sauce. A beloved street food snack in Vietnam.',
    '"Bò bía" (Hokkien: pȯh-piáⁿ, 薄皮卷, in Sino-Vietnamese is "Bạc bính," meaning "thin pastry roll") is a dish originating from the culinary styles of Chaozhou (Teochew) and Fujian, China, now popular in Taiwan, Singapore, and Malaysia. In Fujian, it is often consumed in Haixi, while in Chaozhou, it is a common dish in the Chaozhou region in the east of the province during Qingming Festival. In Vietnam, this dish may have been introduced by Chaozhou immigrants or Peranakan people (also known as Baba Nyonya or simply Baba).
    Traditional-style "bò bía" is rare in Vietnam nowadays. The original type of rice paper used for wrapping traditional Fujian-style "bò bía" is a smooth rice paper made from wheat flour (which housewives often use for wrapping spring rolls). The ingredients of "bò bía" rolls are very diverse: lettuce, bean sprouts, eggs, shrimp, dried shrimp, peanuts, chili sauce, black bean sauce alongside the main ingredient of a mixture of jicama and carrot. The original "bò bía" rolls are quite large, three times larger than those in Saigon. Therefore, vendors often cut them into multiple portions for easier consumption.
    In Saigon, savory "bò bía" is made with ingredients such as Chinese sausage, thinly sliced ​​boiled eggs, carrots, lettuce, jicama, or turnips, dried shrimp, herbs... all finely chopped and rolled in wheat flour rice paper. The condiments served alongside include black bean sauce with peanuts, fried shallots, and ground chili. The use of wheat flour rice paper instead of smooth rice paper for wrapping "bò bía" in the South can also be explained by the abundant local rice reserves. The Chinese used it to replace wheat flour in smooth rice paper, which in turn changed the way "bò bía" is wrapped.',
    'data/images/viD_img/VN-0003_Bo Bia.jpg',
    'Rice paper wrappers, 1 jicama (julienned), 1 carrot (julienned), 2 Chinese sausages (thinly sliced), 2 eggs (beaten), Dried shrimp (soaked in water and drained), Lettuce leaves, Mint leaves, Cilantro, Vietnamese perilla leaves (tia to), The dipping sauce: 3 tablespoons hoisin sauce, 1 tablespoon peanut butter, 1 tablespoon water, 1 teaspoon soy sauce, 1 teaspoon rice vinegar, Sesame seeds for garnish',
    'Preparing the Ingredients: Slice the Chinese sausage. Slice the jicama, carrot, and herbs into thin strips. Beat the eggs and cook them in a pan until set. Then, slice them into thin strips. Soak the dried shrimp in warm water to soften them._ Assembling the Bo Bia: Heat oil in a pan and cook the beaten eggs to make thin omelets. Soften the rice paper wrappers by dipping them in warm water. Lay out the softened wrapper on a clean surface. Layer the lettuce leaves, jicama, carrot, Chinese sausage, egg strips, dried shrimp, and herbs on the lower third of the wrapper. Fold the sides of the wrapper over the filling, then roll tightly to enclose the filling. Repeat the process with the remaining ingredients._ Making the Dipping Sauce: Whisk together hoisin sauce, peanut butter, water, soy sauce, and rice vinegar until smooth to make the dipping sauce._ Serving: Serve the Bo Bia with the dipping sauce on the side, sprinkled with sesame seeds.',
    'https://www.youtube.com/watch?v=Vj1QDAxQRcg'
),
(
    'VN-0004',
    'Bun Bo Hue (Spicy Vietnamese Beef Noodle Soup)',
    'Bun Bo Hue is a popular Vietnamese noodle soup originating from the city of Hue in central Vietnam. It is known for its spicy and robust broth made with beef bones, lemongrass, and shrimp paste, along with tender slices of beef, pork knuckle, and blog of pig. Bun Bo Hue is typically served with round rice noodles and garnished with fresh herbs, lime wedges, and shredded banana blossom.',
    'Bun bo Hue originated during the reign of Lord Nguyen Hoang (around the 16th century). Legend has it that there was a beautiful and skilled woman named Bun, proficient in the art of making noodles. In the village of Van Cu (now part of Huong Tra town, Thua Thien Hue province), Bun innovatively created a new dish: using beef to cook broth for the noodle dish. Thus, bun bo was born, preserved, and developed through many generations. Today, bun bo Hue has been adapted with the presence of various ingredients such as pork hocks, pork blood pudding, and crab cake... What is in bun bo Hue? A standard bowl of bun bo Hue consists of noodles, beef, pork blood pudding, crab cake, and broth. The noodle is made from a mixture of rice flour and sifted flour in a standard ratio to achieve the perfect elasticity. The beef is selected from the front leg muscle, beef shank, or tenderloin, with bright red color and light yellow fat. The eye-catching orange crab cake is made from crabmeat ground with fat, providing a natural rich taste. The "soul" of bun bo Hue lies in the broth. The broth is simmered from beef bones, giving it a rich and sweet flavor. In addition, a bit of shrimp paste and lemongrass are added to the broth to enhance its enticing aroma.',
    'data/images/viD_img/VN-0004_Bun Bo Hue.jpg',
    '1200 grams beef shank with bone, 500 grams beef chuck, 1000 grams pork hocks cut into chunks, 3 cloves garlic, 3 tbsp Bun Bo Hue powder, 1 tbsp shrimp paste, 1 daikon cut into chunks, 1 yellow onion, 2 stalks lemongrass cut into 2 inch pieces, 2 tsp salt, 2 tbsp fish sauce, 1 tbsp granulated sugar, 1 can chicken broth 14.5 oz, 2 tsp annatto seeds, 1/4 cup vegetable oil, 2 tsp chili flakes, 1 shallot minced, 1 stalk lemongrass minced, 2 cloves garlic minced, 1/4 tsp salt, 1 package thick rice noodles, 1 roll cha lua optional (thinly sliced) , 1/4 cup cilantro minced, 2 stalks green onions thinly sliced, 2 limes',
    'Prepare Meat: Clean pork leg, beef shank, and beef chuck. Boil in water until just covered. Remove from heat, discard water, and set meat aside._ Prepare Aromatics: In the same pot, cook garlic, Bun Bo Hue powder, shrimp paste, and oil until fragrant. Add beef shank and chuck, brown on all sides._ Simmer Broth: Add water to cover meat, onion, daikon, and lemongrass. Simmer for 2-3 hours. Remove meat when tender._ Season Broth: Add salt, fish sauce, sugar, and chicken broth. Simmer for 15 minutes._ Prepare Sate Chili: Cook annatto seeds in oil until red. Discard seeds, then cook remaining chili ingredients._ Combine: Add sate chili to broth. Adjust seasoning if needed._ Assemble Bowls: Place cooked noodles in bowls, top with beef slices, pork hock, cilantro, green onions, bean sprouts, cha lua, and shrimp paste. Ladle soup over ingredients and serve.',
    'https://www.youtube.com/watch?v=r3772ptRYs8'
),
(
    'VN-0005', 
    'Bun Moc (Pork and Mushroom Noodle Soup)',
    'Bun Moc: Vietnamese noodle soup with pork, mushrooms, ginger, and fish sauce, served with rice vermicelli and chili sauce, enjoyed across Vietnam.',
	'""Bún mọc,"" a characteristic delicacy of Hanoi, seems to have become a familiar part of Saigon/s culinary scene. It appears in every nook and cranny of this city, from bustling streets to laborious alleyways, with various flavors and variations. There is often debate about the correct term ""mọc."" Some call it ""mọc"" because it is believed to originate from Mọc village (Nhân Mục – Nhân Chính), now in Thanh Xuân district, Hanoi. Others argue it should be ""mộc,"" referring to the distinct round meatballs in this bowl of noodles. Regardless, whether it is called ""mộc"" or ""mọc,"" what matters in Saigon is whether the bowl of noodles is delicious and distinctive. A delicious bowl of bún mọc always requires meticulousness and harmony in combining various spices, as well as the natural combination of noodles, meatballs, young ribs, cinnamon pork sausage, shiitake mushrooms, and onions. The broth is also carefully prepared, simmered from pork bones, skimmed to keep it clear without excessive seasoning. Furthermore, the flavorful broth is thanks to the carefully simmered ribs, providing both sweetness and tenderness so that diners can enjoy without difficulty.',

    'data/images/viD_img/VN-0005_Bun Moc.jpg',
    '1.5 liters pork broth or chicken broth, 1 onion (halved), 1 knob of ginger (sliced), 3-4 cloves garlic (smashed), 1-2 tablespoons fish sauce, 1 teaspoon sugar, Salt and pepper to taste, 300g ground pork, 100g wood ear mushrooms (finely chopped), 2-3 green onions (finely chopped), 1 egg, 1 tablespoon fish sauce, 1 tablespoon cornstarch, 1/2 teaspoon black pepper, Rice vermicelli noodles (bun), Fresh herbs (cilantro & mint & Thai basil), Bean sprouts, Lime wedges, Chili sauce or sliced chili peppers',
    'Preparing the Broth: In a large pot, combine the pork broth, onion, ginger, garlic, fish sauce, sugar, salt, and pepper. Bring the mixture to a simmer and let it cook for about 30 minutes to develop flavors._ Preparing the Meatballs: In a bowl, mix together the ground pork, chopped mushrooms, green onions, egg, fish sauce, cornstarch, and black pepper until well combined. Roll the mixture into small meatballs, about 1 inch in diameter._ Cooking the Meatballs and Noodles: Once the broth is ready, strain it to remove the aromatics. Return the broth to the pot and bring it back to a simmer. Carefully drop the meatballs into the simmering broth and cook for about 10-12 minutes, or until cooked through. While the meatballs are cooking, prepare the rice vermicelli noodles according to package instructions. Drain and rinse under cold water._ Serving: Divide the cooked noodles among serving bowls. Ladle the hot broth and meatballs over the noodles. Top with fresh herbs, bean sprouts, and a squeeze of lime juice. Serve with chili sauce or sliced chili peppers on the side.',
'https://www.youtube.com/watch?v=J_8G-Tigt0I'
),
(
    'VN-0006', 
    'Bun Rieu (Vietnamese Crab Noodle Soup)',

	'Bun Rieu is a beloved Vietnamese noodle soup with crab-based broth, served with rice vermicelli noodles, tofu, pork, and herbs, enjoyed widely as street food in Vietnam.',
	'Bun Rieu Cua is a traditional Vietnamese dish, originating from the Red River Delta region of Vietnam, widely known within the country and internationally. Although both Hanoi-style and Saigon-style Bun Rieu are made with freshwater crab broth, Hanoi-style Bun Rieu is served with rare beef while Saigon-style Bun Rieu is served with pig blood and pork knuckles.

	Compared to the traditional bowl of Bun Rieu, Hanoi-style Bun Rieu now includes additional ingredients such as stir-fried beef shank, pig is ears, cartilage ribs, fried tofu, balut eggs, and snails... The most enjoyable Bun Rieu experience is found at the street vendors along the ancient streets. Diners sit on small stools, holding steaming bowls of Bun, savoring the flavors while admiring the bustling streets.

	This dish is enjoyable both in the summer and winter. The mild sourness of the Bun provides relief during the summer heat. Amidst the chilly winter weather, diners slurping Bun Rieu with extra pickled chilis will relish the warm spiciness.',

    'data/images/viD_img/VN-0006_Bun Rieu.jpeg',
    '1000 grams pork shoulder, 1 yellow onion, 10 dried shrimp, 1 tsp salt, 3 stalks green onions, 1 tsp chili powder, 6 roma tomatoes halved, 1 can chicken broth, 2 tbsp fish sauce, 7 oz crab paste about 1 jar, 3 eggs, 1 lime, 2 packages vermicelli noodles',
    'Prepare Pork: Boil pork in water until covered. Remove pork, discard water, then boil again with fresh water, onion, dried shrimp, and salt. Simmer for an hour._ Prepare Flavor Mixture: Cook green onions, chili powder, and oil briefly. Add this mixture and tomatoes to the soup. Simmer for 30 minutes._ Prepare Egg/Crab Paste Mixture: Combine eggs and crab paste in a bowl._ Finish Soup: After 30 minutes, add egg/crab paste mixture, chicken broth, and fish sauce to the soup. Once the egg and crab mixture floats, soup is done (10-15 minutes). Adjust seasoning with fish sauce if needed._ Assemble Soup: Add cooked vermicelli noodles to bowls. Ladle soup over noodles, add crab egg mixture, tomatoes, and pork pieces. Garnish with green onions and lime before serving.',
	'https://www.youtube.com/watch?v=wRkZ8q1ko-M'
),
(
    'VN-0007',
    'Bun Cha Ha Noi (Vietnamese Grilled Pork with Vermicelli Noodles)',
     'Bún chả is a Vietnamese dish of grilled pork served with rice noodles, herbs, and dipping sauce, originating from Hanoi.',
	'Bún chả is a Vietnamese specialty originating from Northern Vietnam, considered one of Hanoi is enduring culinary treasures. It consists of grilled fatty pork (chả) served alongside white rice noodles (bún) and herbs, accompanied by a dipping sauce. This dish was first documented in 1959 by Vietnamese food writer Vu Bang (1913–1984), who famously depicted Hanoi as a city ""enchanted by bún chả.""

	Despite a common misconception among non-Vietnamese eaters associating bún chả with the Southern Vietnamese dish of vermicelli and grilled skewered pork known as bún thịt nướng, the two dishes have distinct culinary histories and cultural perceptions.

	While bún chả shares similarities with bún thịt nướng from Central and Southern Vietnam, its dipping sauce typically has a lighter, milder taste.',
    'data/images/viD_img/VN-0007_Bun Cha Ha Noi.jpeg',
    'Vietnamese Pork Meatballs:, 800 grams ground pork, 1 tsp pepper, 2 tsp granulated sugar, 1/2 tsp cinnamon, 2 tbsp fish sauce, 1 tsp vegetable oil, 1 stalk lemongrass (minced), 1 shallot (minced), Pickled Vegetables:, 2 carrots (thinly sliced), 1/2 small green papaya (thinly sliced), 1 cup water, 1 cup apple cider vinegar, Vermicelli Bowl Toppings:, 2 cups Vietnamese dipping sauce, 1 package vermicelli noodles, Mint, 1 head lettuce ',
    'Pickling Vegetables: Combine all pickled veggie ingredients in a jar, let sit for 3 hours or overnight._ Marinating Pork: Combine pork meatball ingredients, let marinate for 20-30 minutes. Form into slider-sized patties._ Grilling Meatballs: Grill patties for 2-3 minutes each side until browned. Set aside._ Assembling Dish: Place meatballs and pickled veggies in a bowl, cover with Vietnamese dipping sauce. Serve separately with noodles.',
	'https://www.youtube.com/watch?v=UseREbx9O8A'
),
(
    'VN-0008', 
    'Bun Thit Nuong (Vietnamese Grilled Pork Noodle)',
    'Bun Thit Nuong is a flavorful Vietnamese dish featuring grilled pork and vermicelli, known for its unique essence and rich taste.','Fresh, slender strands of noodles, lightly coated with fragrant scallion oil, make the noodles soft and easy to eat. Seasoned with a cup of sweet and savory fish sauce and spicy ground chili, the dish becomes irresistibly appetizing. Not only aromatic and flavorful but also rich in fats and proteins, this beloved Saigon dish can be found everywhere, from upscale restaurants to street vendors, pleasing the senses with skewers of grilled meat exuding tantalizing aromas that awaken the palate.

	The origin of grilled meat noodles is uncertain, but in every region of the country, it retains its unique flavor. For example, Da Nang is grilled meat noodles are known for their elaborate broth made from soybeans, distinct from the sweet and salty fish sauce of the South, and far removed from the sour and salty fermented fish sauce. 

	Each place has its own unique twist on grilled meat noodles. Sometimes, the bowl of noodles comes with spring rolls, shrimp rolls, or vegetarian spring rolls; other times, it is served with grilled pork skewers. While the main component is undoubtedly the grilled meat skewers, some places use sliced grilled meat instead, as long as it suits the preferences of the diners.',

    'data/images/viD_img/VN-0008_Bun Thit Nuong.jpg',
    '1000 grams pork shoulder cut into 1/8 inch pieces, 2 stalks lemongrass minced, 1 shallot minced, 2 cloves garlic minced, 2 tbsp fish sauce, 1 tbsp soy sauce, 1 tbsp oyster sauce, 2 tbsp vegetable oil, 1 tbsp honey, 1 tbsp light brown sugar, 2 cups lettuce ~8 lettuce leaves, 1/4 cup pickled daikon, 1/4 cup pickled carrots, 1/2 cup cucumbers thinly sliced, 1/4 cup mint, 16 oz vermicelli noodles, 2 tbsp peanuts, 1/2 cup Vietnamese dipping sauce',
    'Marinate Pork: Combine pork marinade ingredients in a bowl. Let pork marinate for at least 30 minutes, preferably longer._ Prep Ingredients: While pork is marinating, prepare Vietnamese dipping sauce, boil vermicelli noodles, pickle daikon and carrots, and cut cucumbers. If using, prepare peanuts._ Prep Grill: Heat indoor grill for 10 minutes. Grill marinated pork pieces for 1-2 minutes on each side until cooked through with grill marks._ Assemble Bowls: Place vermicelli noodles in bowls. Top with lettuce, pickled daikon, pickled carrots, cucumbers, and mint. Sprinkle crushed peanuts over the top and drizzle with Vietnamese dipping sauce.',
	'https://www.youtube.com/watch?v=qY1m5tiFNDM'
),
(
    'VN-0009', 
    'Ca Kho To (Vietnamese Braised Fish)',
   'Ca Kho To is a traditional Vietnamese dish featuring catfish braised in a caramelized sauce made from fish sauce, sugar, and aromatics.',
	'When it comes to the Southern region, people immediately think of the intricate system of canals, streams, and rivers that crisscross the area, providing an abundance of seafood with a wide variety of species. Mentioning the South brings to mind fish, shrimp, crabs... Perhaps originating from the richness of these natural aquatic resources, the culinary culture of the Southern land is diverse, with many cooking methods. With just a simple example like fish, Southern people can create many delicious dishes such as grilled fish, fried fish, sour soup with fish, fish porridge... But perhaps the most representative, the most characteristic dish is probably braised fish in clay pot.

	Braised fish in clay pot, just by its name, evokes a familiar object, the clay pot. The pot is a utensil made from clay and fired. Without the clay pot, the dish would lose some of its characteristic flavors. Braising fish in a clay pot is an image from a time when migrants came to a land abundant in nature, with abundant wildlife, and with limited material resources, so they had to make their own tools to serve their lives.

	Braised fish in clay pot may seem simple as just a braised fish dish, but over time, it can be seen that not every type of fish braised in a clay pot will carry the full flavor of this dish. And to this day, it is believed that only snakehead fish, carp, catfish, climbing perch, or mudfish are the most suitable ingredients for a delicious braised fish in clay pot dish.',
    'data/images/viD_img/VN-0009_Ca Kho To.jpg',
    '500 grams catfish fillets (cut into chunks), 3 tablespoons fish sauce, 3 tablespoons sugar, 1 tablespoon caramel sauce (nuoc mau), 3 cloves garlic (minced), 1 shallot (thinly sliced), 2-3 red chili peppers (sliced), 2-3 green onions (cut into 2-inch pieces), 1/2 cup coconut water or water, Freshly ground black pepper, Fresh herbs (cilantro & Thai basil) for garnish',
    'Prepare the Fish Sauce Mixture: In a bowl, mix together fish sauce, sugar, and caramel sauce until well combined._ Prepare the Ingredients: Mince garlic and slice shallots. Slice chili peppers and green onions. Chop fresh herbs for garnishing. Prepare any additional ingredients for serving, such as steamed rice._ Sear the Fish: In a clay pot or deep skillet, heat a bit of oil over medium heat. Add minced garlic and sliced shallots, and sauté until fragrant. Add the fish pieces to the pot and sear on both sides until lightly browned._ Simmer the Fish: Pour the prepared fish sauce mixture over the fish in the pot. Add sliced chili peppers, green onions, and coconut water or water. Cover the pot and simmer over low heat for about 20-30 minutes, or until the fish is cooked through and the sauce has thickened._ Adjust Seasoning and Garnish: Taste the dish and adjust seasoning if needed, adding more fish sauce or sugar as desired. Garnish with freshly ground black pepper and chopped fresh herbs before serving.Enjoy with steamed rice.',
'https://www.youtube.com/watch?v=pQiyxrYDNpY'
),
(
    'VN-0010',
    'Canh Chua (Vietnamese Sour Soup)',
    'Canh Chua is a traditional Vietnamese soup known for its sweet, sour, and savory flavors.',
	'Canh chua is a dish that is very simple and familiar on the dining table of Vietnamese people. While people in the northern region often enjoy sour fish soup on hot summer days, in the central, western, and southern regions, this soup is a common presence on daily dining tables.

	The ""version"" of sour soup in the northern style often includes some regional specialty fruits such as starfruit, gourd, or sour tamarind. Particularly, housewives never add sugar to the soup to preserve the natural taste of the ingredients. Meanwhile, in the western and southern regions, sour soup always combines a rich sweetness from sugar, accompanied by spicy chili peppers.

	Each region has its own cooking method, but in general, regardless of the recipe, the soup still retains the sweet, sour taste of the ingredients cooked from various fruits or vegetables.',
    'data/images/viD_img/VN-0010_Canh Chua.jpg',
    '500 grams pork, 1 yellow onion, 1 oz fresh tamarind, 1 tsp salt, 1 can pineapple 20 oz, 1 piece ginger 1 inch long, 500 grams catfish cut into 1 inch pieces, 10 oz elephant ear stem cut into chunks, 3 tomatoes quartered, 12 oz bean sprouts, 1 tsp granulated sugar, 1 oz rice paddy herb',
    'Preparation: Place pork in a large soup pot, cover with water, bring to a boil, and simmer for 10 minutes. Discard water, rinse pot, and add pork back with fresh water. Add onion and simmer for 1.5 hours, removing impurities every 30 minutes._ Preparing Tamarind: Combine water and tamarind in a saucepan, simmer until dissolved, then strain through a sieve._ Cooking the Soup: After 1.5 hours, add pineapple and ginger to the soup and simmer for 20 minutes. Add catfish and simmer for another 10 minutes until cooked through. Lastly, add vegetables and strained tamarind. Bring to a boil, taste for seasoning, and add more salt if needed.',
	'https://www.youtube.com/watch?v=KcDTzo8dAq4'
),
(
    'VN-0011',
    'Cao Lau Hoi An (Vietnamese Noodle Bowl)',
	'Cao lầu is a Vietnamese noodle dish from Hoi An, consisting of thick noodles, pork slices, fresh herbs, and crispy rice crackers. Its flavor is enhanced by using water from Ba Le well and ash from Cham Island.',
	'During Tet is chilly days, a stroll through Hoi An is Old Quarter reveals venerable eateries, their waitresses in ao dai, and ""cao lầu"" on the menu. This dish, a local specialty, embodies the town is culinary essence.
	Cao Lau is distinct—a fusion found only in Hoi An, Da Nang, and Hue. It is served with yellow noodles, shrimp, pork, and fresh greens, bearing a yellow hue from ash sourced from Cham Island. Dating back to the 17th century, it is intertwined with Hoi An/s history.
	Despite its Chinese-sounding name, cao lầu is a synthesis of various cultures. Originally dubbed ""going upstairs"" for its luxury, it is evolved into the beloved dish we know today. With crispy noodles achieved through a meticulous process, cao lầu encapsulates the essence of Hoi An/s culinary tradition.',
    'data/images/viD_img/VN-0011_Cao Lau.jpg',
    '250g thick rice noodles, 200g pork loin or pork belly (thinly sliced), 2 cups bean sprouts, 1/2 cup crispy pork rinds, 1/2 cup fresh herbs (cilantro & mint & Thai basil), 1/4 cup sliced green onions, Lettuce leaves, 1 liter pork broth or chicken broth, 2-3 shallots (sliced), 3-4 cloves garlic (minced), 2 tablespoons soy sauce, 1 tablespoon fish sauce, 1 tablespoon sugar, 1 teaspoon five-spice powder, 1 teaspoon turmeric powder, Salt and pepper to taste',
    'Preparing the Aromatics: Heat a bit of oil over medium heat in a pot. Add sliced shallots and minced garlic, and sauté until fragrant._ Cooking the Pork: Add pork slices to the pot with the sautéed shallots and garlic. Cook until the pork is browned._ Making the Broth: Pour in the pork broth or chicken broth into the pot with the cooked pork. Bring the broth to a simmer. Season the broth with soy sauce, fish sauce, sugar, five-spice powder, turmeric powder, salt, and pepper._ Cooking the Rice Noodles: Cook the thick rice noodles according to package instructions. Drain and rinse under cold water._ Assembling and Serving: Divide the cooked noodles among serving bowls. Top the noodles with slices of cooked pork, bean sprouts, crispy pork rinds, fresh herbs, and sliced green onions. Pour the hot broth over the noodles and garnishes. Serve with lettuce leaves and chili sauce on the side.',
'https://www.youtube.com/watch?v=l4DhkuZuNeI'
),
(
    'VN-0012',
    'Goi Cuon Tom Thit (Vietnamese Spring Rolls)',
	'Goi Cuon, also known as Vietnamese spring rolls or fresh summer rolls, are a popular Vietnamese appetizer made with shrimp, pork, vermicelli noodles, and fresh herbs wrapped in rice paper.',
	'Gỏi cuốn is a popular dish in Vietnam. Originating from the southern region of Vietnam, it is known as gỏi cuốn and is made from ingredients such as lettuce, basil, perilla leaves, dried shrimp, herbs, boiled meat, and fresh shrimp—all wrapped in rice paper. The accompanying sauce is made from ground roasted peanuts mixed with oil-fried minced shallots. Everything is finely chopped and wrapped in rice paper made from wheat flour. The accompanying sauce is a mixture of chili sauce and ground roasted peanuts fried with oil-fried minced shallots.

	This dish is widespread in Vietnam, primarily using rice paper rolled with various ingredients depending on the region. It is often served as an appetizer or paired with drinks as a snack, made from rice paper rolled with various herbs, vermicelli, and some types of meat such as beef, pork, duck, shrimp, fish, crab, etc.

	Dishes using rice paper for rolling are generally a prevalent form of cuisine throughout the three regions of North, Central, and South Vietnam. There is almost no fixed recipe for dishes using rice paper rolls, as ingredients and methods of rolling vary greatly depending on locality, region, and available ingredients.',
    'data/images/viD_img/VN-0012_Goi Cuon Tom Thit.jpg',
    'Vietnamese Peanut Sauce:, 2 cloves garlic minced, 1/4 cup hoisin sauce, 1 tbsp peanut butter, 1 cup water, 1 tsp corn starch, 1 tbsp roasted peanuts optional, Chopped into small pieces, Spring Rolls:, 500 grams pork belly thinly sliced, 500 grams shrimp halved, 5 oz vermicelli noodles, 12 pieces rice paper, 1 head lettuce, 1 carrot julienned, 1 cucumber julienned, Mint to taste',
    'Vietnamese Peanut Sauce: Heat oil over medium heat, add garlic, sauté for 30 seconds. Add hoisin sauce and peanut butter, sauté for another 30 seconds. Pour in water, bring to a boil. Mix corn starch with water, add to sauce, simmer until thickened (1-2 minutes). Pour into a bowl, set aside, top with peanuts before serving._ Spring Rolls: Boil pork belly in 8 cups of water for an hour or until internal temperature is 160°F. Boil vermicelli noodles in 6 cups of water for 2-3 minutes, set aside. Boil shrimp in 6 cups of water for 2-3 minutes until orange, set aside to rest for 10 minutes, then slice in half. Slice cucumbers, carrots, and cooked pork belly thinly. Dip rice paper in warm water to hydrate, lay on flat plate. Place lettuce, mint, carrots, cucumbers, noodles, and pork belly on one end of rice paper. Roll halfway tightly, place 3 shrimp in front, roll over tightly, tuck sides before completing roll.',
	'https://www.youtube.com/watch?v=0w-ix8k3lpc'
),
(
    'VN-0013',    
    'Goi Xoai (Vietnamese Mango Salad)',
     'Goi Xoai is a refreshing Vietnamese salad made with green mangoes, shrimp, herbs, and a tangy dressing.',
	'Amidst the myriad of dishes in Southern Vietnamese cuisine, salad is considered a refreshing and universally appealing dish. The combination of crisp vegetables, fragrant herbs, succulent shrimp, tender meat, all mixed with a sweet and tangy dressing, creates an unforgettable flavor. Mentioning salad without referring to mangoes is impossible - a fruit seemingly familiar but remarkably versatile when incorporated into various salads.

	Mangoes are known as tropical fruits, predominantly cultivated in the Mekong Delta provinces such as Tien Giang, Dong Thap, Can Tho, etc. Due to their easy cultivation and care, mango trees bear fruit throughout the year. Thanks to the ingenuity of cooks, from a simple fruit, mangoes have now become the main ingredient in many dishes, including savory ones, among which mango salad stands out - a delightful and refreshing combination, perfect for hot summer days.',
    'data/images/viD_img/VN-0013_Goi Xoai.jpg',
    '2 green mangoes (julienned), 200g cooked shrimp (peeled and deveined), 1 cup bean sprouts, 1/2 cup chopped fresh herbs (cilantro & mint & Thai basil), 1/4 cup chopped roasted peanuts, 1-2 red chili peppers (thinly sliced), 3 tablespoons fish sauce, 2 tablespoons sugar, 2 tablespoons lime juice, 2 cloves garlic (minced), 1 Thai chili (minced), Water (as needed)',
    'Preparing the Salad Ingredients: Julienned green mangoes, cooked shrimp, bean sprouts, chopped fresh herbs, chopped roasted peanuts, sliced chili peppers._ Making the Dressing: In a small bowl, whisk together fish sauce, sugar, lime juice, minced garlic, and minced Thai chili to make the dressing. Adjust the consistency by adding water as needed._ Combining and Tossing: In a large bowl, combine all the prepared salad ingredients. Pour the dressing over the salad. Toss gently to coat everything evenly._ Serving: Let the salad sit for a few minutes to allow the flavors to meld together. Serve the Goi Xoai salad as a refreshing appetizer or side dish.',
	'https://www.youtube.com/watch?v=2GrIBewiHv4'
),
(
    'VN-0014',
    'Mi Quang (Vietnamese Noodle with Pork n Shrimp)',
	'Mi Quang is a Vietnamese noodle dish originating from the central region of Vietnam. It features wide rice noodles, pork, shrimp, and a flavorful broth made with turmeric and aromatics.',
	'""Mì Quảng"" from Quang Nam is nearly the first dish that comes to mind when speaking of the culinary characteristics of the Quang Nam - Da Nang region. Although this dish can be found scattered throughout other provinces and cities of the country, it is only when eaten in Quang Nam that one fully appreciates its rich flavor.

	""Mì Quảng"" appears to be a unique creation of the Quang Nam region, not based on any existing tradition. Firstly, regarding its name, the term ""mì"" (noodles) seems inappropriate but is quite distinctive. Noodles are originally a product of the Chinese, made from wheat flour. Traditional Vietnamese dishes did not include any dishes called ""mì"" (except for ""mì Quảng,"" of course). ""Mì Quảng"" is the only noodle dish in Vietnam, but ironically, it merely borrows the name; in reality, those strands are made from rice flour, without any trace of wheat flour. Its uniqueness lies in this aspect. Not relying on any tradition, even the naming convention is novel. ""Mì Quảng"" deserves to be a subject of cultural research in the history of the Central region.
	Currently, ""mì Quảng"" offers various versions like snakehead fish, chicken, shrimp, and meat, with the latest being frog. Though not complex to cook, it requires meticulous ingredient preparation. A bowl of ""mì Quảng"" boasts colorful natural ingredients, flavorful broth, 9-flavor raw vegetables, sesame rice crackers, peanuts, and more. Its vibrant yellow noodles pair perfectly with green chilies, offering a rich and spicy flavor. Accompanied by black sesame rice crackers and raw vegetables, it epitomizes Central Vietnamese cuisine.',
    'data/images/viD_img/VN-0014_Mi Quang.jpg',
    '300g wide rice noodles (mi quang noodles), 200g pork belly (thinly sliced), 200g shrimp (peeled and deveined), 1 onion (thinly sliced), 2-3 cloves garlic (minced), 1 tablespoon turmeric powder, 1 tablespoon fish sauce, 1 tablespoon sugar, 1 tablespoon cooking oil, 1 liter pork or chicken broth, Bean sprouts, Chopped scallions, Chopped cilantro, Chopped peanuts, Crispy rice crackers, Lime wedges, Sliced chili peppers',
    'Marinating Pork Belly and Shrimp: Cut pork belly into thin slices, marinate with fish sauce, sugar, salt, pepper, paprika, and turmeric. Separate shrimp from heads, marinate shrimp with the same ingredients. Let marinate for 15 minutes._ Preparing Ingredients: Mince shallot and garlic. Sauté shrimp with half of shallots and garlic, set aside. Sauté pork belly with remaining shallots and garlic, set aside. Sauté shrimp heads, then add chicken broth and onion, simmer for 30 minutes._ Assembling Soup: Boil noodles and quail eggs, shred cabbage, toast and crush peanuts, microwave black sesame crackers. Season soup with salt, fish sauce, sugar, paprika, and turmeric. Add pork belly back to soup, simmer for 5 minutes. Assemble bowl with noodles, herbs, bean sprouts, shredded cabbage, shrimp, quail eggs, pork belly. Ladle soup over, top with sesame crackers and crushed peanuts.',
	'https://www.youtube.com/watch?v=hP9Pyi4GUGc'
),
(
    'VN-0015',
    'Nem Nuong (Vietnamese Grilled Pork Skewers)',
	'Nem Nuong: Vietnamese grilled pork skewers, savory-sweet and served as an appetizer or main dish with lettuce, herbs, and rice paper.',
	'Grilled pork skewers, or grilled meatballs, are Vietnamese specialties and are popular dishes in this country, sometimes served as an appetizer or a standalone light dish, or accompanied by noodles (or rice) as a main course. Grilled pork skewers are a specialty of Khanh Hoa province (Nha Trang).
	Grilled pork skewers can be enjoyed as an appetizer or a light dish on their own, served with dipping sauce, or with peanut dipping sauce. The dipping sauce is fish sauce diluted with water and mixed with sugar, lime juice, finely chopped raw garlic, finely chopped hot chili peppers (Thai chili peppers)/cayenne peppers, and sometimes with vinegar. Peanut dipping sauce is made from peanut butter and hoisin sauce, with the flavors of fish sauce and finely mashed garlic, topped with finely crushed peanuts. It is served with fresh vegetables such as lettuce, julienned vegetables such as carrots and radishes, or fresh herbs such as mint and basil. When eating, diners can squeeze lime and add chili paste according to taste.
	Grilled pork skewers can be served as a main dish with noodles, for example: Grilled pork with noodles and rice, for example, broken rice. Grilled pork skewers are also a common filling in spring rolls.',
    'data/images/viD_img/VN-0015_Nem Nuong.jpg',
    '500g ground pork, 3 cloves garlic (minced), 1 shallot (minced), 2 tablespoons fish sauce, 1 tablespoon sugar, 1 teaspoon black pepper, Bamboo skewers (soaked in water), Lettuce leaves, Fresh herbs (cilantro & mint & Thai basil), Rice paper, Dipping sauce (nuoc cham) for serving',
    'Marinating the Pork: In a bowl, mix together ground pork, minced garlic, minced shallot, fish sauce, sugar, and black pepper until well combined. Cover the bowl and let the mixture marinate in the refrigerator for at least 1 hour, or overnight for best results._ Grilling the Pork Skewers: Preheat a grill or grill pan over medium-high heat. Thread the marinated pork onto bamboo skewers, shaping them into sausage-like shapes. Grill the skewers for about 3-4 minutes on each side, or until cooked through and slightly charred._ Preparing the Wrapping Ingredients: While the pork skewers are grilling, prepare lettuce leaves, fresh herbs, and rice paper for wrapping._ Assembling the Nem Nuong Rolls: To serve, place a lettuce leaf and a few sprigs of fresh herbs on a piece of rice paper. Add a grilled pork skewer and roll it up tightly. The dipping sauce (nuoc cham) to serve with the Nem Nuong rolls.',
	'https://www.youtube.com/watch?v=A6jpax8b3Ts'
),
(
    'VN-0016',
    'Pho Bo (Beef Pho)',
	'Pho Bo is a popular Vietnamese beef noodle soup, it is enjoyed nationwide with fragrant spices, fresh herbs, and chili peppers.',
	'Phở is considered one of the quintessential dishes of Vietnamese cuisine.
	The main components of phở are flat rice noodles and a broth accompanied by thinly sliced beef or chicken. The most suitable beef for making phở is meat and bones from native cattle breeds (such as beef from the countryside or yellow cattle). Additionally, it is served with condiments such as hoisin sauce, pepper, lime, fish sauce, chili, etc. These condiments are added according to the taste preferences of the consumer. Phở is typically consumed as a breakfast dish or as a late-night snack; however, in major cities, it can be enjoyed all day long. In the southern provinces of Vietnam and some other regions, phở is served with a plate of fresh herbs such as onions, bean sprouts, and various aromatic herbs, including coriander, mint, among which culantro is a characteristic leaf of phở; however, in Hanoi, this plate of raw herbs is usually not included. Phở is commonly made with beef or chicken, but sometimes there are other variations, especially phở with beef stew, dried phở, stir-fried phở, sour phở, duck phở in Cao Bang, and roasted meat phở in the northern mountainous provinces.',
    'data/images/viD_img/VN-0016_Pho Bo.jpg',
    '700 grams beef chuck, 700 grams oxtail, 700 grams beef shank, 5 grams salt, 10 grams coriander seeds, 10 grams fennel seeds, 5 grams cardamom seeds, 3 pieces star anise, 1 cinnamon stick, 1 daikon (cut into chunks), 1 yellow onion, 1 piece ginger (about 5 cm), 2 packages pho noodles, 15 milliliters fish sauce, Bean sprouts (to taste), 2 stalks green onions (minced), 2 stalks cilantro, Minced Thai basil (to taste), Jalapeno peppers (to taste)',
    'Meats and Broth: Use beef shank, ox tail, and beef chuck with fat and bones for richness. Char onion and ginger for 20 mins for roasted flavor (optional). Spices include cinnamon stick, fennel seeds, coriander seeds, cardamom seeds, and star anise, wrapped in cheesecloth. Add daikon for natural sweetness. Simmer broth for at least 2 hours to extract flavors._ Tips for Clear Broth: Remove impurities by scooping them out during simmering. Avoid prolonged boiling to prevent a murky broth. Optional: Skip charring onion and ginger for a clearer broth._ Noodles and Toppings: Use fresh pho noodles if available; otherwise, use rice noodles. Fresh noodles absorb broth better and cook quickly. Load bowl with toppings like Vietnamese mint, bean sprouts, hoisin sauce, sriracha, fish sauce, pepper, and jalapeno peppers. Optionally add thinly sliced rare steak.',
	'https://www.youtube.com/watch?v=xxM4t8vP-0A'
);


CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    commenter_name VARCHAR(100) NOT NULL,
    comment_content TEXT NOT NULL,
    dishId VARCHAR(10) NOT NULL, -- New field to store dishId
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (dishId) REFERENCES Vietnamese_Recipes(dishId) ON DELETE CASCADE
);




