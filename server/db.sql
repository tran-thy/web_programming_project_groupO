drop table if exists login;
CREATE TABLE login (
    ID SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE newrecipes (
    dishID VARCHAR(50) PRIMARY KEY,
    dishName VARCHAR(255),
    dishDescription TEXT,
    dishHistory TEXT,
    dishImage VARCHAR(255),
    recipeIngredients TEXT,
    recipeInstruction TEXT,
    dishVideo VARCHAR(255)
);

CREATE TABLE Chinese_Recipes (
    dishID VARCHAR(50) PRIMARY KEY,
    dishName VARCHAR(255),
    dishDescription TEXT,
	dishHistory TEXT,
    dishImage VARCHAR(255),
	recipeIngredients TEXT,
	recipeInstruction TEXT,
	dishVideo VARCHAR(255)
    );
INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0001', 'Sweet and Sour Pork Tenderloin', 'Classic Chinese dish. Sweet and tangy pork with bell peppers and pineapple.', 'Sweet and sour pork is a traditional Chinese dish that originated in the Guangdong province. It is characterized by its combination of tangy flavors from vinegar and sweetness from sugar, along with the savory taste of pork. The dish typically includes bell peppers, onions, and pineapple, which add color and texture to the dish. It is often served as a main course in Chinese restaurants around the world.', '/css/sweet_and_sour_pork_tenderloin.jpg', '500g pork tenderloin, 1 red bell pepper, 1 green bell pepper, 1 onion, 1 cup pineapple chunks, 2 cloves garlic, 1 tablespoon soy sauce, 3 tablespoons vinegar, 2 tablespoons ketchup, 2 tablespoons sugar, 1 tablespoon cornstarch, Salt and pepper to taste', '1. Cut the pork tenderloin into bite-sized pieces and season with salt and pepper.
2. Heat oil in a large skillet or wok over medium-high heat.
3. Add the pork to the skillet and cook until browned on all sides, then remove from the skillet and set aside.
4. In the same skillet, add more oil if needed and sauté minced garlic until fragrant.
5. Add sliced onions and bell peppers to the skillet and cook until slightly softened.
6. Return the pork to the skillet and add pineapple chunks.
7. In a small bowl, mix together soy sauce, vinegar, ketchup, sugar, and cornstarch to make the sauce.
8. Pour the sauce over the pork and vegetables in the skillet.
9. Cook, stirring constantly, until the sauce has thickened and coats the pork and vegetables.
10. Serve hot over steamed rice as a delicious and satisfying meal.', 'https://www.youtube.com/embed/T3WYy55clgs');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0002', 'Mapo Tofu', 'Popular Chinese dish. Spicy tofu and pork with black beans.', 'Mapo tofu is a famous Sichuan dish known for its bold and spicy flavors. It originated in the Sichuan province of China and has become popular worldwide for its combination of soft tofu, ground pork, and fermented black beans cooked in a spicy chili and bean-based sauce. The dish is often garnished with chopped scallions and served with steamed rice, making it a favorite comfort food for many.', './css/mapo_tofu.jpg', '300g soft tofu, 150g ground pork, 2 cloves garlic, 1 tablespoon ginger, 2 tablespoons chili bean paste, 1 tablespoon fermented black beans, 2 green onions, 1 tablespoon soy sauce, 1 teaspoon sugar, 1 teaspoon sesame oil, 1 tablespoon vegetable oil, Salt to taste', '1. Cut the soft tofu into cubes and set aside.
2. Mince garlic and ginger, and chop green onions.
3. Heat vegetable oil in a wok or skillet over medium heat.
4. Add minced garlic and ginger to the wok and stir-fry until fragrant.
5. Add ground pork to the wok and cook until browned.
6. Add chili bean paste and fermented black beans to the wok and stir-fry for another minute.
7. Carefully add the tofu cubes to the wok and stir gently to combine with the pork mixture.
8. Season with soy sauce, sugar, and sesame oil, and stir gently to coat the tofu evenly.
9. Cook for a few minutes until the tofu is heated through and has absorbed the flavors of the sauce.
10. Garnish with chopped green onions and serve hot with steamed rice.', 'https://www.youtube.com/embed/YYUhtNe8sBg');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0003', 'Crystal Dumplings', 'Translucent dumplings. Savory pork, shrimp, and vegetable filling.', 'Crystal dumplings, also known as har gow, are a classic Cantonese dim sum dish. They are known for their translucent wrappers made from a combination of wheat starch and tapioca starch, giving them a chewy and slightly sticky texture. The filling typically consists of a savory mixture of shrimp, pork, and bamboo shoots, seasoned with soy sauce, sesame oil, and other aromatics. Crystal dumplings are steamed to perfection and served hot with a dipping sauce made from soy sauce and rice vinegar.', './css/crystal_dumplings.jpg', 'For the dough:
150g wheat starch
50g tapioca starch
150ml boiling water
For the filling:
100g shrimp, peeled and deveined
100g ground pork
50g bamboo shoots, finely chopped
2 cloves garlic, minced
1 tablespoon soy sauce
1 teaspoon sesame oil
1/2 teaspoon sugar
Salt and pepper to taste
For the dipping sauce:
2 tablespoons soy sauce
1 tablespoon rice vinegar
1 teaspoon chili oil (optional)', '1. To make the dough, combine wheat starch and tapioca starch in a bowl.
2. Slowly add boiling water to the bowl, stirring continuously until a dough forms.
3. Knead the dough until smooth and elastic, then cover with a damp cloth and let rest for 30 minutes.
4. To make the filling, finely chop the shrimp and mix with ground pork, chopped bamboo shoots, minced garlic, soy sauce, sesame oil, sugar, salt, and pepper.
5. Divide the dough into small balls and roll out each ball into a thin circle.
6. Place a spoonful of filling in the center of each dough circle.
7. Fold the edges of the dough circle up and around the filling, pleating to seal.
8. Place the dumplings in a steamer basket lined with parchment paper.
9. Steam the dumplings for 8-10 minutes until the filling is cooked through and the wrappers are translucent.
10. Serve hot with dipping sauce on the side.', 'https://www.youtube.com/embed/0BqFQQbG8So');

-- Rest of the data
INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0004', 'Stir-Fried Beef with Rice Noodles', 'Cantonese favorite. Tender beef, flat rice noodles, and crunchy bean sprouts.', 'Stir-fried beef with rice noodles, also known as beef chow fun, is a classic Cantonese dish commonly found in Chinese restaurants around the world. It features tender slices of beef stir-fried with flat rice noodles, bean sprouts, and green onions in a savory sauce made from soy sauce, oyster sauce, and other seasonings, creating a flavorful and satisfying meal.', '/css/stir_fried_beef_with_rice_noodles.jpg', '300g flat rice noodles, 200g beef sirloin, 2 cups bean sprouts, 2 green onions, 2 cloves garlic, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 teaspoon sesame oil, 1/2 teaspoon sugar, Salt and pepper to taste', '1. Cook the flat rice noodles according to package instructions, then rinse with cold water and set aside.
2. Slice the beef sirloin thinly against the grain and marinate with soy sauce, sesame oil, sugar, salt, and pepper for 20 minutes.
3. Heat oil in a wok or skillet over high heat.
4. Stir-fry the marinated beef until browned, then remove from the pan and set aside.
5. In the same pan, add more oil if needed and stir-fry minced garlic until fragrant.
6. Add bean sprouts and sliced green onions to the pan and stir-fry briefly.
7. Add the cooked rice noodles and beef back to the pan.
8. Pour in soy sauce and oyster sauce, then toss everything together until well combined.
9. Cook for another minute or until heated through.
10. Serve hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/zi81XhTodc4');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0005', 'Fried Rice', 'Simple and satisfying. Rice, vegetables, and eggs stir-fried to perfection.', 'Fried rice is a popular Chinese dish that has been enjoyed for centuries. It originated as a way to use up leftover rice and has since evolved into a versatile and delicious meal. The dish typically consists of cooked rice stir-fried with various ingredients such as eggs, vegetables, and meat, seasoned with soy sauce and other seasonings. Fried rice is quick and easy to make, making it a favorite choice for busy weeknights or as a side dish to accompany other Chinese dishes.', '/css/fried_rice.jpg', '2 cups cooked rice, 2 eggs, 1 cup mixed vegetables (such as peas, carrots, and corn), 2 cloves garlic, 2 green onions, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon vegetable oil, Salt and pepper to taste', '1. Heat oil in a large skillet or wok over medium heat.
2. Beat the eggs in a bowl and pour into the skillet.
3. Scramble the eggs until cooked through, then remove from the skillet and set aside.
4. In the same skillet, add more oil if needed and stir-fry minced garlic until fragrant.
5. Add mixed vegetables to the skillet and stir-fry until tender.
6. Add cooked rice to the skillet and break up any clumps with a spatula.
7. Pour in soy sauce and oyster sauce, then toss everything together until well combined.
8. Add the scrambled eggs back to the skillet and mix well with the rice.
9. Cook for another minute or until heated through.
10. Serve hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/e_s8xMEfseo');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0006', 'Spicy Kung Pao Chicken', 'Fiery and flavorful. Chicken, peanuts, and chili peppers in a spicy sauce.', 'Kung Pao chicken is a classic Sichuan dish known for its bold and spicy flavors. It originated in the Sichuan province of China and has become popular worldwide for its combination of tender chicken, crunchy peanuts, and fiery chili peppers in a savory and slightly sweet sauce. The dish is typically stir-fried with other ingredients such as bell peppers, onions, and garlic, creating a flavorful and aromatic dish that pairs well with steamed rice.', '/css/spicy_kung_pao_chicken.jpg', '400g chicken breast, 1/2 cup peanuts, 2 bell peppers, 2 green onions, 2 cloves garlic, 2 tablespoons soy sauce, 1 tablespoon rice vinegar, 1 tablespoon hoisin sauce, 1 tablespoon cornstarch, 1 teaspoon sugar, 1 teaspoon Sichuan peppercorns, 2 tablespoons vegetable oil, Salt and pepper to taste', '1. Cut the chicken breast into bite-sized pieces and season with salt and pepper.
2. Heat oil in a wok or skillet over high heat.
3. Stir-fry the chicken until browned and cooked through, then remove from the pan and set aside.
4. In the same pan, add more oil if needed and stir-fry minced garlic until fragrant.
5. Add peanuts, sliced bell peppers, and chopped green onions to the pan and stir-fry until vegetables are tender.
6. In a separate bowl, mix together soy sauce, rice vinegar, hoisin sauce, cornstarch, sugar, and Sichuan peppercorns to make the sauce.
7. Pour the sauce over the vegetables in the pan and cook until thickened.
8. Add the cooked chicken back to the pan and toss everything together until well coated.
9. Cook for another minute or until heated through.
10. Serve hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/BEQCLCLaf7c');
	
INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0007', 'Big Plate Chicken', 'Classic Chinese dish. Sweet and tangy pork with bell peppers and pineapple.', 'Big Plate Chicken, also known as "Da Pan Ji" in Chinese, is a popular dish originating from the Xinjiang region of China. It is characterized by its bold and flavorful sauce made with a combination of chili peppers, garlic, ginger, and various spices. The dish typically includes chicken pieces, potatoes, bell peppers, and onions, all cooked together in a large wok or pan. It is often served with a side of steamed rice or noodles, making it a satisfying and hearty meal.', './css/dapanji.jpg', 'For the sauce:
3 tablespoons soy sauce
2 tablespoons dark soy sauce
2 tablespoons oyster sauce
1 tablespoon hoisin sauce
1 tablespoon rice vinegar
1 tablespoon sugar
1 tablespoon cornstarch
For the chicken:
1 whole chicken, cut into pieces
2 potatoes, peeled and diced
1 onion, sliced
2 bell peppers, sliced
4 cloves garlic, minced
1-inch piece ginger, minced
4-6 dried chili peppers
2 tablespoons vegetable oil
Salt and pepper to taste', '1. In a bowl, mix together soy sauce, dark soy sauce, oyster sauce, hoisin sauce, rice vinegar, sugar, and cornstarch to make the sauce. Set aside.
2. Heat vegetable oil in a large wok or pan over medium-high heat.
3. Add minced garlic, minced ginger, and dried chili peppers to the wok and stir-fry until fragrant.
4. Add chicken pieces to the wok and cook until browned on all sides.
5. Add diced potatoes, sliced onions, and sliced bell peppers to the wok and stir-fry for a few minutes.
6. Pour the prepared sauce over the chicken and vegetables in the wok.
7. Stir everything together until well coated in the sauce.
8. Cover the wok and let simmer for 15-20 minutes, or until the chicken is cooked through and the potatoes are tender.
9. Serve hot as a delicious and satisfying meal, with steamed rice or noodles.','https://www.youtube.com/embed/g3BeIDC3JII');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0008', 'Dao Xiao Mian', 'Popular Chinese dish. Spicy tofu and pork with black beans.', 'Dao Xiao Mian, also known as "knife-cut noodles," is a traditional Chinese noodle dish that originated in the Shanxi province. It is characterized by its hand-cut noodles, which are irregular in shape and thickness, giving them a rustic and chewy texture. The noodles are typically served in a flavorful broth made from pork bones, dried shrimp, and various spices, along with toppings such as sliced pork, vegetables, and black beans. Dao Xiao Mian is a comforting and satisfying dish that is enjoyed by many throughout China.', './css/daxiaomian.jpeg', 'For the noodles:
2 cups all-purpose flour
3/4 cup water
For the broth:
4 cups chicken broth
2 cups water
200g pork belly, sliced
2 tablespoons dried shrimp
2 tablespoons fermented black beans
2 cloves garlic, minced
1-inch piece ginger, sliced
2 green onions, chopped
1 tablespoon soy sauce
1 teaspoon sugar
Salt and pepper to taste
For the toppings:
1/2 cup bamboo shoots, sliced
1/2 cup spinach, chopped
1/4 cup carrots, julienned
1/4 cup black fungus, soaked and sliced
1/4 cup green onions, chopped', '1. To make the noodles, combine all-purpose flour and water in a bowl, then knead into a smooth dough.
2. Divide the dough into small balls and roll out each ball into a thin sheet.
3. Use a knife to cut the dough into thin strips, then toss with a little flour to prevent sticking. Set aside.
4. To make the broth, combine chicken broth, water, sliced pork belly, dried shrimp, fermented black beans, minced garlic, sliced ginger, chopped green onions, soy sauce, sugar, salt, and pepper in a large pot.
5. Bring the broth to a boil, then reduce the heat and let simmer for 1-2 hours to allow the flavors to develop.
6. Strain the broth and discard the solids, then return the broth to the pot and keep warm.
7. Cook the prepared noodles in boiling water for 2-3 minutes, then drain and rinse with cold water.
8. Divide the cooked noodles among serving bowls and top with bamboo shoots, chopped spinach, julienned carrots, sliced black fungus, and chopped green onions.
9. Ladle the hot broth over the noodles and toppings.
10. Serve hot as a comforting and satisfying meal.', 'https://www.youtube.com/embed/kiLh7z7oHS8');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0009', 'Dumplings', 'Translucent dumplings. Savory pork, shrimp, and vegetable filling.', 'Dumplings, also known as "jiaozi" in Chinese, are a traditional Chinese dish that is enjoyed throughout the country, especially during the Chinese New Year celebration. They are made from a simple dough of flour and water, which is filled with a savory mixture of pork, shrimp, vegetables, and aromatics. Dumplings can be boiled, steamed, or pan-fried, and are often served with a dipping sauce made from soy sauce, vinegar, and chili oil. They are a symbol of good luck and prosperity, making them an essential part of any festive meal.', './css/jiaozi.jfif', 'For the dough:
2 cups all-purpose flour
1/2 cup water
For the filling:
200g ground pork
100g shrimp, peeled and deveined
1/2 cup cabbage, finely chopped
2 green onions, chopped
2 cloves garlic, minced
1 tablespoon ginger, minced
1 tablespoon soy sauce
1 teaspoon sesame oil
1/2 teaspoon sugar
1/2 teaspoon salt
1/4 teaspoon pepper
For the dipping sauce:
3 tablespoons soy sauce
1 tablespoon rice vinegar
1 teaspoon chili oil (optional)', '1. To make the dough, combine all-purpose flour and water in a bowl, then knead into a smooth dough.
2. Cover the dough and let rest for 30 minutes.
3. To make the filling, finely chop shrimp and mix with ground pork, chopped cabbage, chopped green onions, minced garlic, minced ginger, soy sauce, sesame oil, sugar, salt, and pepper.
4. Divide the dough into small balls and roll out each ball into a thin circle.
5. Place a spoonful of filling in the center of each dough circle.
6. Fold the edges of the dough circle up and around the filling, pleating to seal.
7. Repeat with the remaining dough and filling.
8. To cook the dumplings, bring a large pot of water to a boil.
9. Carefully add the dumplings to the boiling water and cook until they float to the surface, about 3-4 minutes.
10. Remove the dumplings with a slotted spoon and serve hot with dipping sauce on the side.', 'https://www.youtube.com/embed/yx7EvNwkZqQ');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0010', 'Bei Jing Kao ya', 'Cantonese favorite. Tender beef, flat rice noodles, and crunchy bean sprouts.', 'Beijing Kao Ya, also known as Peking Duck, is a famous Chinese dish that originated in Beijing, China. It is characterized by its crispy skin, tender meat, and rich flavor, which comes from the traditional method of roasting the duck over an open flame. The duck is usually served with thin pancakes, sliced scallions, and hoisin sauce, allowing diners to wrap the duck and condiments in the pancakes for a delicious and satisfying meal. Beijing Kao Ya is often enjoyed during special occasions and celebrations, making it a beloved dish in Chinese cuisine.', './css/beijingkaoya.jpeg', '1 whole duck
1/4 cup honey
1/4 cup soy sauce
1/4 cup hoisin sauce
1 tablespoon rice vinegar
1 teaspoon five-spice powder
1 teaspoon ginger, minced
1 teaspoon garlic, minced
1/2 teaspoon salt
1/4 teaspoon pepper
For serving:
Thin pancakes
Sliced scallions
Hoisin sauce', '1. Rinse the duck inside and out, then pat dry with paper towels.
2. In a small bowl, mix together honey, soy sauce, hoisin sauce, rice vinegar, five-spice powder, minced ginger, minced garlic, salt, and pepper to make the marinade.
3. Rub the marinade all over the duck, making sure to coat it evenly.
4. Place the duck on a rack set over a roasting pan, breast side up.
5. Roast the duck in a preheated oven at 375°F (190°C) for 1 hour, basting with the marinade every 20 minutes.
6. Increase the oven temperature to 425°F (220°C) and continue roasting for another 20-30 minutes, or until the skin is golden brown and crispy.
7. Remove the duck from the oven and let rest for 10 minutes before carving.
8. Carve the duck into thin slices and serve with thin pancakes, sliced scallions, and hoisin sauce.
9. To serve, spread hoisin sauce on a pancake, add slices of duck and scallions, then roll up and enjoy!
10. Serve hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/2g4awAy5VGo');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0011', 'Yang Rou Pao Mo', 'Lamb with sliced Chinese bread and rice noodles.', 'Yang Rou Pao Mo is a traditional dish originating from the Shaanxi province of China. It is made with tender lamb cooked in a flavorful broth, along with pieces of Chinese bread soaked in the broth until soft. The dish is often served with rice noodles and garnished with chopped green onions and cilantro, creating a hearty and satisfying meal that is perfect for cold weather.', './css/yangroupaomo.jpeg', 'For the lamb:
500g lamb shoulder, diced
2 slices ginger
2 green onions
2 cloves garlic
1 tablespoon Shaoxing wine
1 teaspoon soy sauce
1/2 teaspoon salt
For the broth:
4 cups chicken broth
2 cups water
2 slices ginger
2 green onions
2 cloves garlic
1 cinnamon stick
2 star anise
2 bay leaves
For serving:
Chinese bread (mantou)
Rice noodles
Chopped green onions
Chopped cilantro', '1. To prepare the lamb, place diced lamb shoulder in a pot and cover with cold water.
2. Add ginger slices, green onions, garlic cloves, Shaoxing wine, soy sauce, and salt to the pot.
3. Bring the water to a boil, then reduce the heat and simmer for 1-2 hours, or until the lamb is tender.
4. Meanwhile, prepare the broth by combining chicken broth, water, ginger slices, green onions, garlic cloves, cinnamon stick, star anise, and bay leaves in a separate pot.
5. Bring the broth to a boil, then reduce the heat and let simmer for 1 hour to allow the flavors to develop.
6. Strain the broth and discard the solids, then return the broth to the pot and keep warm.
7. To serve, tear Chinese bread into bite-sized pieces and place in individual serving bowls.
8. Ladle hot broth over the bread, then add cooked lamb and rice noodles to each bowl.
9. Garnish with chopped green onions and cilantro.
10. Serve hot as a hearty and satisfying meal.', 'https://www.youtube.com/embed/lxcHCgObobg');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0012', 'Crispy Sweet & Sour Pork', 'Fiery and flavorful. Chicken, peanuts, and chili peppers in a spicy sauce.', 'Crispy Sweet & Sour Pork, also known as "Guo Bao Rou" in Chinese, is a popular dish originating from the northeastern region of China. It is characterized by its crispy and tangy pork pieces, which are coated in a sweet and sour sauce made from vinegar, sugar, and ketchup. The dish often includes bell peppers, onions, and pineapple, adding a colorful and flavorful twist to the classic recipe. Crispy Sweet & Sour Pork is a favorite choice for many diners, thanks to its irresistible combination of flavors and textures.', './css/Crispy_Sweet_Sour_Pork.jpg', 'For the pork:
500g pork loin, sliced
1 egg
1/2 cup cornstarch
1/4 cup all-purpose flour
1/2 teaspoon salt
1/4 teaspoon pepper
For the sauce:
1/2 cup ketchup
1/4 cup rice vinegar
1/4 cup sugar
1/4 cup water
2 tablespoons soy sauce
1 tablespoon cornstarch
For frying:
Vegetable oil
For serving:
Sliced bell peppers
Sliced onions
Pineapple chunks', '1. To prepare the pork, season sliced pork loin with salt and pepper.
2. In a bowl, beat an egg and dip each pork slice into the beaten egg.
3. In another bowl, mix together cornstarch, all-purpose flour, salt, and pepper.
4. Coat each pork slice in the cornstarch mixture, shaking off any excess.
5. Heat vegetable oil in a deep fryer or large skillet over medium-high heat.
6. Fry the coated pork slices in batches until golden brown and crispy, about 3-4 minutes per side.
7. Remove the pork from the oil and drain on paper towels.
8. In a saucepan, combine ketchup, rice vinegar, sugar, water, soy sauce, and cornstarch to make the sauce.
9. Cook the sauce over medium heat, stirring constantly, until thickened.
10. Add sliced bell peppers, onions, and pineapple chunks to the sauce, then toss to coat.
11. Serve the crispy pork with the sweet and sour sauce and vegetables.
12. Enjoy hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/gFXq8iIjgQ8');

-- 18 more items
INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0013', 'Gong Bao Chicken', 'Traditional Chinese dish with chicken, peanuts, and vegetables in a spicy sauce.', 'Gong Bao Chicken, also known as "Kung Pao Chicken" in some regions, is a classic Chinese dish that originated in the Sichuan province. It is named after Ding Baozhen, a Qing dynasty official known as "Gong Bao," who is said to have enjoyed the dish. Gong Bao Chicken features tender chicken pieces stir-fried with peanuts, vegetables, and chili peppers in a spicy and flavorful sauce made from soy sauce, hoisin sauce, and other seasonings. It is a popular choice for many diners, thanks to its bold flavors and satisfying texture.', './css/Gong_Bao_Chicken.jpg', '400g chicken breast, 1/2 cup peanuts, 2 bell peppers, 2 green onions, 2 cloves garlic, 2 tablespoons soy sauce, 1 tablespoon rice vinegar, 1 tablespoon hoisin sauce, 1 tablespoon cornstarch, 1 teaspoon sugar, 1 teaspoon Sichuan peppercorns, 2 tablespoons vegetable oil, Salt and pepper to taste', '1. Cut the chicken breast into bite-sized pieces and season with salt and pepper.
2. Heat oil in a wok or skillet over high heat.
3. Stir-fry the chicken until browned and cooked through, then remove from the pan and set aside.
4. In the same pan, add more oil if needed and stir-fry minced garlic until fragrant.
5. Add peanuts, sliced bell peppers, and chopped green onions to the pan and stir-fry until vegetables are tender.
6. In a separate bowl, mix together soy sauce, rice vinegar, hoisin sauce, cornstarch, sugar, and Sichuan peppercorns to make the sauce.
7. Pour the sauce over the vegetables in the pan and cook until thickened.
8. Add the cooked chicken back to the pan and toss everything together until well coated.
9. Cook for another minute or until heated through.
10. Serve hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/-qwUsa9tGrU');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0014', 'Hot and Sour Soup', 'Classic Chinese soup with tofu, mushrooms, and bamboo shoots in a tangy broth.', 'Hot and Sour Soup is a classic Chinese soup that originated in the Sichuan province. It is known for its bold and contrasting flavors, with a tangy and slightly spicy broth made from vinegar, soy sauce, and chili oil, along with savory ingredients such as tofu, mushrooms, bamboo shoots, and eggs. Hot and Sour Soup is often enjoyed as a starter or appetizer at Chinese restaurants, thanks to its warming and comforting properties that are believed to aid digestion and stimulate the appetite.', './css/hot_and_sour_soup.jpg', '4 cups chicken broth, 2 cups water, 200g firm tofu, 100g bamboo shoots, 100g shiitake mushrooms, 2 eggs, 2 tablespoons soy sauce, 2 tablespoons rice vinegar, 1 tablespoon chili oil, 1 tablespoon cornstarch, 1 tablespoon water, 2 green onions, chopped, Salt and pepper to taste', '1. In a pot, combine chicken broth, water, diced tofu, sliced bamboo shoots, and sliced shiitake mushrooms.
2. Bring the soup to a boil, then reduce the heat and let simmer for 10 minutes.
3. In a bowl, beat eggs with a fork until well mixed.
4. Slowly pour the beaten eggs into the simmering soup while stirring gently to create egg ribbons.
5. In a small bowl, mix together soy sauce, rice vinegar, chili oil, cornstarch, and water to make a slurry.
6. Stir the slurry into the soup and cook until thickened.
7. Season the soup with salt and pepper to taste.
8. Garnish with chopped green onions before serving.
9. Serve hot as a comforting and satisfying soup.', 'https://www.youtube.com/embed/f9vFj7vwGTE');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0015', 'Egg Foo Young', 'Chinese-style omelette with vegetables, shrimp, and pork, served with gravy.', 'Egg Foo Young is a Chinese-style omelette that originated in the Guangdong province of China. It is made with beaten eggs mixed with various ingredients such as shrimp, pork, vegetables, and bean sprouts, then pan-fried until golden brown and crispy. Egg Foo Young is often served with a savory gravy made from chicken broth, soy sauce, and other seasonings, adding a rich and flavorful touch to the dish. It is a popular choice for many diners, thanks to its versatility and satisfying flavors.', './css/Egg_Foo_Young.jpg', 'For the omelette:
4 eggs, 1/2 cup cooked shrimp, 1/2 cup cooked pork, 1/2 cup bean sprouts, 1/4 cup sliced mushrooms, 2 green onions, chopped, Salt and pepper to taste, Vegetable oil for frying
For the gravy:
2 cups chicken broth, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon cornstarch, 1 tablespoon water, 1 clove garlic, minced, 1 teaspoon ginger, minced, 1 green onion, chopped', '1. In a bowl, beat eggs and season with salt and pepper.
2. Add cooked shrimp, cooked pork, bean sprouts, sliced mushrooms, and chopped green onions to the beaten eggs and mix well.
3. Heat vegetable oil in a skillet over medium heat.
4. Pour a portion of the egg mixture into the skillet to make an omelette.
5. Cook until the bottom is set and golden brown, then flip and cook the other side until cooked through.
6. Remove the omelette from the skillet and repeat with the remaining egg mixture.
7. To make the gravy, combine chicken broth, soy sauce, oyster sauce, cornstarch, water, minced garlic, and minced ginger in a saucepan.
8. Bring the mixture to a boil, then reduce the heat and let simmer until thickened.
9. Stir in chopped green onions before serving.
10. Serve the omelettes hot with the savory gravy on top.
11. Enjoy as a satisfying and delicious meal.', 'https://www.youtube.com/embed/LPHKrh0FbZQ');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0016', 'Kung Pao Shrimp', 'Stir-fried shrimp with peanuts, vegetables, and chili peppers in a spicy sauce.', 'Kung Pao Shrimp is a Chinese stir-fry dish that originated in the Sichuan province. It is named after Ding Baozhen, a Qing dynasty official known as "Gong Bao," who is said to have enjoyed the dish. Kung Pao Shrimp features tender shrimp stir-fried with peanuts, vegetables, and chili peppers in a spicy and flavorful sauce made from soy sauce, hoisin sauce, and other seasonings. It is a popular choice for many diners, thanks to its bold flavors and satisfying texture.', './css/kung_pao_shrimp.jpg', '400g shrimp, 1/2 cup peanuts, 2 bell peppers, 2 green onions, 2 cloves garlic, 2 tablespoons soy sauce, 1 tablespoon rice vinegar, 1 tablespoon hoisin sauce, 1 tablespoon cornstarch, 1 teaspoon sugar, 1 teaspoon Sichuan peppercorns, 2 tablespoons vegetable oil, Salt and pepper to taste', '1. Peel and devein shrimp, then season with salt and pepper.
2. Heat oil in a wok or skillet over high heat.
3. Stir-fry the shrimp until pink and cooked through, then remove from the pan and set aside.
4. In the same pan, add more oil if needed and stir-fry minced garlic until fragrant.
5. Add peanuts, sliced bell peppers, and chopped green onions to the pan and stir-fry until vegetables are tender.
6. In a separate bowl, mix together soy sauce, rice vinegar, hoisin sauce, cornstarch, sugar, and Sichuan peppercorns to make the sauce.
7. Pour the sauce over the vegetables in the pan and cook until thickened.
8. Add the cooked shrimp back to the pan and toss everything together until well coated.
9. Cook for another minute or until heated through.
10. Serve hot as a delicious and satisfying meal.', 'https://www.youtube.com/embed/RQWCCT43ofQ');

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0017', 'Ma Po Eggplant', 'Sichuan-style dish with eggplant cooked in a spicy, flavorful sauce with tofu.', 'Ma Po Eggplant is a classic Sichuan dish that is loved for its bold flavors and spicy kick. It features tender eggplant cooked in a flavorful sauce made from chili bean paste, fermented black beans, garlic, ginger, and other aromatic spices. The dish is often served with tofu and minced pork, adding protein and texture to the meal. Ma Po Eggplant is a popular choice for many diners, thanks to its satisfying flavors and comforting qualities.', './css/Ma_Po_Eggplant.jpg', '2 Japanese eggplants, 200g tofu, 100g ground pork, 2 cloves garlic, minced, 1 tablespoon ginger, minced, 2 green onions, chopped, 2 tablespoons chili bean paste, 1 tablespoon fermented black beans, 1 tablespoon soy sauce, 1 teaspoon sugar, 1/2 cup chicken broth, 2 tablespoons vegetable oil, Salt and pepper to taste', '1. Cut eggplants into bite-sized pieces and soak in salted water for 10 minutes.
2. Drain the eggplants and pat dry with paper towels.
3. Cut tofu into cubes and set aside.
4. Heat oil in a wok or skillet over medium-high heat.
5. Stir-fry minced garlic and minced ginger until fragrant.
6. Add ground pork to the pan and cook until browned.
7. Add chili bean paste and fermented black beans to the pan and stir-fry for a few minutes.
8. Add eggplant pieces to the pan and stir-fry until slightly softened.
9. Stir in soy sauce, sugar, and chicken broth, then bring to a simmer.
10. Add tofu cubes to the pan and gently stir to combine.
11. Cover the pan and let simmer for 5-7 minutes, or until eggplant is tender.
12. Season with salt and pepper to taste.
13. Garnish with chopped green onions before serving.
14. Serve hot as a satisfying and flavorful dish.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0018', 'General Tso Chicken', 'Popular Chinese-American dish with crispy chicken in a sweet and spicy sauce.', 'General Tso Chicken is a popular Chinese-American dish that originated in the Hunan province of China. It is named after General Tso Tsung-tang, a Qing dynasty military leader, although it is not clear whether he had any connection to the dish. General Tso Chicken features crispy chicken pieces coated in a sweet and spicy sauce made from soy sauce, hoisin sauce, and other seasonings. It is often served with steamed rice or noodles, making it a satisfying and flavorful meal that is enjoyed by many.', './css/General_Tso_Chicken.jpg', 'For the chicken:
500g chicken breast, 1 egg, 1/2 cup cornstarch, 1/4 cup all-purpose flour, 1/2 teaspoon salt, 1/4 teaspoon pepper, Vegetable oil for frying
For the sauce:
1/2 cup chicken broth, 2 tablespoons soy sauce, 2 tablespoons hoisin sauce, 2 tablespoons rice vinegar, 2 tablespoons sugar, 1 tablespoon cornstarch, 1 tablespoon water, 2 cloves garlic, minced, 1 teaspoon ginger, minced, 1 teaspoon chili flakes, 2 green onions, chopped', '1. Cut chicken breast into bite-sized pieces and season with salt and pepper.
2. In a bowl, beat an egg and dip each chicken piece into the beaten egg.
3. In another bowl, mix together cornstarch, all-purpose flour, salt, and pepper.
4. Coat each chicken piece in the cornstarch mixture, shaking off any excess.
5. Heat vegetable oil in a deep fryer or large skillet over medium-high heat.
6. Fry the coated chicken pieces in batches until golden brown and crispy, about 3-4 minutes per side.
7. Remove the chicken from the oil and drain on paper towels.
8. In a saucepan, combine chicken broth, soy sauce, hoisin sauce, rice vinegar, sugar, cornstarch, water, minced garlic, minced ginger, and chili flakes to make the sauce.
9. Cook the sauce over medium heat, stirring constantly, until thickened.
10. Add chopped green onions to the sauce and cook for another minute.
11. Add the cooked chicken to the sauce and toss to coat.
12. Serve hot as a delicious and satisfying meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0019', 'Steamed Fish with Ginger and Scallions', 'Delicate fish steamed with fresh ginger and scallions, served with soy sauce.', 'Steamed Fish with Ginger and Scallions is a classic Chinese dish that is loved for its delicate flavors and healthy preparation. It features a whole fish steamed with fresh ginger, scallions, and soy sauce, which infuse the fish with fragrant and aromatic flavors. The dish is often served as part of a Chinese banquet or family meal, alongside other dishes such as stir-fried vegetables and rice. Steamed Fish with Ginger and Scallions is a popular choice for many diners, thanks to its simplicity and delicious taste.', './css/Steamed_Fish_with_Ginger_and_Scallions.jpg', '1 whole fish (such as sea bass or tilapia), 2 inches ginger, sliced, 2 green onions, chopped, 2 tablespoons soy sauce, 1 tablespoon sesame oil, 1 tablespoon vegetable oil, 1 teaspoon sugar, Salt and pepper to taste', '1. Clean the fish and pat dry with paper towels.
2. Score the fish on both sides with shallow cuts.
3. Season the fish with salt and pepper, then place ginger slices on top.
4. Heat vegetable oil in a wok or steamer rack over high heat.
5. Place the fish on a heatproof plate and steam over boiling water for 8-10 minutes, or until cooked through.
6. Meanwhile, in a small saucepan, heat soy sauce, sesame oil, sugar, and chopped green onions until hot.
7. Remove the fish from the steamer and pour the hot sauce over the top.
8. Garnish with additional chopped green onions before serving.
9. Serve hot as a light and flavorful meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0020', 'Sichuan Hot Pot', 'Spicy and aromatic soup with a variety of meats, seafood, and vegetables, cooked at the table.', 'Sichuan Hot Pot is a popular Chinese dish that originated in the Sichuan province. It is known for its spicy and aromatic broth, which is made with a variety of spices such as Sichuan peppercorns, dried chili peppers, and garlic. The broth is usually divided into two sections: one spicy and one mild, allowing diners to customize the level of heat to their liking. Sichuan Hot Pot is often enjoyed as a social meal, with friends and family gathering around the table to cook and share a variety of meats, seafood, and vegetables in the flavorful broth.', './css/Sichuan_Hot_Pot.jpg', 'For the broth:
8 cups chicken broth, 2 cups water, 2 slices ginger, 2 cloves garlic, 2 green onions, 2 star anise, 2 bay leaves, 2 cinnamon sticks, 1 tablespoon Sichuan peppercorns, 1 tablespoon dried chili peppers, Salt to taste
For the hot pot:
Assorted meats (such as thinly sliced beef, lamb, pork, and chicken)
Assorted seafood (such as shrimp, fish balls, and squid)
Assorted vegetables (such as Napa cabbage, spinach, and mushrooms)
Dipping sauces (such as sesame sauce, soy sauce, and chili oil)', '1. In a large pot, combine chicken broth, water, ginger slices, garlic cloves, green onions, star anise, bay leaves, cinnamon sticks, Sichuan peppercorns, dried chili peppers, and salt.
2. Bring the broth to a boil, then reduce the heat and let simmer for 30 minutes to allow the flavors to develop.
3. Strain the broth and discard the solids, then transfer the broth to a hot pot or electric fondue pot.
4. Arrange assorted meats, seafood, and vegetables on plates for easy access.
5. Place the hot pot in the center of the table and turn on the heat.
6. Once the broth is simmering, guests can start cooking their desired ingredients in the broth.
7. Use chopsticks or a slotted spoon to remove cooked ingredients from the broth and transfer them to individual bowls.
8. Serve with dipping sauces on the side.
9. Enjoy hot as a social and interactive meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0021', 'Braised Pork Belly', 'Tender pork belly braised in a flavorful mixture of soy sauce, ginger, and spices.', 'Braised Pork Belly is a classic Chinese dish that is loved for its melt-in-your-mouth texture and rich flavor. It features thick slices of pork belly that are braised in a mixture of soy sauce, ginger, garlic, star anise, and other aromatic spices until tender and succulent. The dish is often served with steamed rice or noodles, allowing diners to enjoy the savory sauce alongside the tender pork. Braised Pork Belly is a popular choice for many diners, thanks to its comforting and satisfying qualities.', './css/Braised_Pork_Belly.jpg', '500g pork belly, 2 slices ginger, 2 cloves garlic, 2 green onions, 2 star anise, 2 tablespoons soy sauce, 1 tablespoon dark soy sauce, 1 tablespoon Shaoxing wine, 1 tablespoon sugar, 1 teaspoon salt, 1/2 teaspoon five-spice powder, 2 cups water', '1. Cut pork belly into thick slices and blanch in boiling water for 5 minutes to remove impurities.
2. Drain the pork belly and rinse under cold water, then pat dry with paper towels.
3. Heat oil in a wok or skillet over medium-high heat.
4. Add ginger slices, crushed garlic cloves, and chopped green onions to the pan and stir-fry until fragrant.
5. Add pork belly slices to the pan and cook until browned on both sides.
6. Add star anise, soy sauce, dark soy sauce, Shaoxing wine, sugar, salt, and five-spice powder to the pan.
7. Pour water into the pan until the pork belly slices are submerged.
8. Bring the mixture to a boil, then reduce the heat and let simmer for 1-2 hours, or until the pork belly is tender and the sauce has thickened.
9. Remove the pork belly from the pan and slice into bite-sized pieces.
10. Serve hot with steamed rice or noodles.
11. Enjoy as a comforting and satisfying meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0022', 'Scallion Pancakes', 'Flaky and savory pancakes made with flour and scallions, pan-fried until crispy.', 'Scallion Pancakes, also known as Cong You Bing in Chinese, are a popular street food snack in China. They are made from a simple dough of flour, water, and salt, which is rolled out into a thin sheet and sprinkled with chopped scallions. The dough is then rolled up like a jelly roll, flattened into a pancake, and pan-fried until golden brown and crispy. Scallion Pancakes are often served with a dipping sauce made from soy sauce, vinegar, and sesame oil, adding a savory and aromatic touch to the crispy pancakes.', './css/Scallion_Pancakes.jpg', '2 cups all-purpose flour, 1 cup boiling water, 1/2 teaspoon salt, 1 cup chopped scallions, Vegetable oil for frying
For the dipping sauce:
3 tablespoons soy sauce, 1 tablespoon rice vinegar, 1 teaspoon sesame oil, 1 teaspoon sugar', '1. In a large bowl, combine all-purpose flour, boiling water, and salt to make the dough.
2. Knead the dough until smooth, then cover and let rest for 30 minutes.
3. Divide the dough into 4 equal pieces and roll each piece into a thin circle.
4. Sprinkle chopped scallions evenly over each dough circle.
5. Roll up each dough circle like a jelly roll, then coil it into a spiral and flatten into a pancake.
6. Heat vegetable oil in a skillet over medium heat.
7. Fry the pancakes until golden brown and crispy on both sides, about 2-3 minutes per side.
8. Remove the pancakes from the skillet and drain on paper towels.
9. Meanwhile, prepare the dipping sauce by combining soy sauce, rice vinegar, sesame oil, and sugar in a small bowl.
10. Serve the scallion pancakes hot with the dipping sauce on the side.
11. Enjoy as a tasty and satisfying snack or appetizer.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0023', 'Beef and Broccoli', 'Stir-fried beef and broccoli in a savory sauce made with garlic, soy sauce, and oyster sauce.', 'Beef and Broccoli is a classic Chinese stir-fry dish that is loved for its tender beef and crisp-tender broccoli in a flavorful sauce. It is believed to have originated in Chinese-American cuisine and has since become a popular choice at Chinese restaurants worldwide. Beef and Broccoli features thinly sliced beef stir-fried with broccoli florets in a savory sauce made from garlic, soy sauce, oyster sauce, and other seasonings. It is often served with steamed rice or noodles, making it a satisfying and delicious meal.', './css/Beef_and_Broccoli.jpg', 'For the beef:
400g beef sirloin, thinly sliced, 2 cloves garlic, minced, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon cornstarch, 1 teaspoon sugar, 1/2 teaspoon black pepper
For the broccoli:
2 cups broccoli florets, blanched, 1 tablespoon vegetable oil
For the sauce:
2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon hoisin sauce, 1 tablespoon cornstarch, 1 tablespoon water, 1 teaspoon sesame oil', '1. In a bowl, marinate thinly sliced beef with minced garlic, soy sauce, oyster sauce, cornstarch, sugar, and black pepper.
2. In a separate bowl, mix together soy sauce, oyster sauce, hoisin sauce, cornstarch, water, and sesame oil to make the sauce.
3. Heat vegetable oil in a wok or skillet over high heat.
4. Stir-fry marinated beef until browned and cooked through, then remove from the pan and set aside.
5. In the same pan, stir-fry blanched broccoli florets until crisp-tender.
6. Return the cooked beef to the pan and pour the sauce over the top.
7. Stir-fry everything together until well coated and the sauce has thickened.
8. Serve hot with steamed rice or noodles.
9. Enjoy as a flavorful and satisfying meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0024', 'Szechuan Beef', 'Spicy and flavorful beef stir-fried with vegetables and Szechuan peppercorns.', 'Szechuan Beef is a classic Chinese stir-fry dish that originated in the Sichuan province. It is known for its bold flavors and spicy kick, thanks to the use of Szechuan peppercorns and dried chili peppers. Szechuan Beef features thinly sliced beef stir-fried with vegetables such as bell peppers, onions, and carrots in a savory sauce made from garlic, ginger, soy sauce, and other seasonings. It is often served with steamed rice or noodles, making it a satisfying and flavorful meal that is enjoyed by many.', './css/Szechuan_Beef.jpg', '400g beef sirloin, thinly sliced, 1 bell pepper, sliced, 1 onion, sliced, 1 carrot, julienned, 2 cloves garlic, minced, 1 tablespoon ginger, minced, 2 green onions, chopped, 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 tablespoon oyster sauce, 1 tablespoon cornstarch, 1 tablespoon water, 1 teaspoon sugar, 1 teaspoon Szechuan peppercorns, Vegetable oil for frying', '1. In a bowl, marinate thinly sliced beef with minced garlic, minced ginger, soy sauce, hoisin sauce, oyster sauce, cornstarch, sugar, and Szechuan peppercorns.
2. In a separate bowl, mix together cornstarch and water to make a slurry for thickening the sauce.
3. Heat vegetable oil in a wok or skillet over high heat.
4. Stir-fry marinated beef until browned and cooked through, then remove from the pan and set aside.
5. In the same pan, stir-fry sliced bell pepper, sliced onion, and julienned carrot until crisp-tender.
6. Return the cooked beef to the pan and pour the sauce over the top.
7. Stir-fry everything together until well coated and the sauce has thickened.
8. Serve hot with steamed rice or noodles.
9. Enjoy as a spicy and flavorful meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0025', 'Spring Rolls', 'Crispy fried rolls filled with vegetables, shrimp, and sometimes pork, served with dipping sauce.', 'Spring Rolls are a popular Chinese appetizer that is loved for its crispy texture and flavorful filling. They are believed to have originated in China, where they were traditionally eaten during the Spring Festival to celebrate the arrival of spring. Spring Rolls are made from a thin wrapper filled with a mixture of shredded vegetables, cooked shrimp, and sometimes pork, which is then rolled up and deep-fried until golden brown and crispy. They are often served with a dipping sauce made from soy sauce, vinegar, and sesame oil, adding a savory and aromatic touch to the crispy rolls.', './css/Spring_Rolls.jpg', 'For the filling:
1 cup shredded cabbage, 1 cup shredded carrots, 1 cup bean sprouts, 1/2 cup cooked shrimp, chopped, 2 green onions, chopped, 2 cloves garlic, minced, 1 tablespoon soy sauce, 1 tablespoon oyster sauce, 1 teaspoon sesame oil, Salt and pepper to taste
For the wrappers:
12 spring roll wrappers, Vegetable oil for frying
For the dipping sauce:
3 tablespoons soy sauce, 1 tablespoon rice vinegar, 1 teaspoon sesame oil, 1 teaspoon sugar', '1. In a bowl, mix together shredded cabbage, shredded carrots, bean sprouts, chopped shrimp, chopped green onions, minced garlic, soy sauce, oyster sauce, sesame oil, salt, and pepper to make the filling.
2. Place a spring roll wrapper on a clean surface with one corner pointing towards you.
3. Spoon a portion of the filling onto the bottom third of the wrapper.
4. Fold the bottom corner of the wrapper over the filling, then fold in the side corners and roll up tightly into a cylinder.
5. Seal the edge of the wrapper with water to secure the spring roll.
6. Repeat with the remaining wrappers and filling.
7. Heat vegetable oil in a deep fryer or large skillet over medium heat.
8. Fry the spring rolls in batches until golden brown and crispy, about 3-4 minutes per side.
9. Remove the spring rolls from the oil and drain on paper towels.
10. Meanwhile, prepare the dipping sauce by combining soy sauce, rice vinegar, sesame oil, and sugar in a small bowl.
11. Serve the spring rolls hot with the dipping sauce on the side.
12. Enjoy as a tasty and satisfying appetizer or snack.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0026', 'Chinese BBQ Pork (Char Siu)', 'Sweet and savory roasted pork with a shiny glaze made from hoisin sauce, honey, and spices.', 'Chinese BBQ Pork, also known as Char Siu in Chinese, is a popular Cantonese dish that is loved for its sweet and savory flavors and tender texture. It features slices of roasted pork that are marinated in a mixture of hoisin sauce, honey, soy sauce, and other seasonings, then roasted until caramelized and charred on the edges. Chinese BBQ Pork is often served as a main dish with steamed rice or noodles, making it a satisfying and flavorful meal that is enjoyed by many.', './css/Char_Siu.jpg', '500g pork shoulder or pork belly, 2 cloves garlic, minced, 2 tablespoons hoisin sauce, 2 tablespoons soy sauce, 2 tablespoons honey, 1 tablespoon oyster sauce, 1 tablespoon Shaoxing wine, 1 teaspoon five-spice powder, 1/2 teaspoon sesame oil, Red food coloring (optional)', '1. In a bowl, mix together minced garlic, hoisin sauce, soy sauce, honey, oyster sauce, Shaoxing wine, five-spice powder, sesame oil, and red food coloring (if using) to make the marinade.
2. Cut pork shoulder or pork belly into long strips, about 2 inches wide.
3. Place the pork strips in a resealable plastic bag or shallow dish, then pour the marinade over the top.
4. Seal the bag or cover the dish and refrigerate for at least 4 hours or overnight to marinate.
5. Preheat the oven to 375°F (190°C).
6. Remove the pork from the marinade and transfer to a baking dish lined with aluminum foil.
7. Roast the pork in the preheated oven for 25-30 minutes, or until cooked through and caramelized on the edges.
8. Remove the pork from the oven and let rest for 5 minutes before slicing.
9. Slice the pork into thin strips and serve hot with steamed rice or noodles.
10. Enjoy as a delicious and satisfying meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0027', 'Dan Dan Noodles', 'Spicy Sichuan-style noodles topped with minced pork and preserved vegetables.', 'Dan Dan Noodles is a classic Sichuan dish that is loved for its bold flavors and spicy kick. It features thin noodles topped with a spicy sauce made from chili oil, Sichuan peppercorns, garlic, and soy sauce, as well as minced pork and preserved vegetables. The dish is often garnished with chopped green onions and crushed peanuts for added texture and flavor. Dan Dan Noodles are a popular street food snack in China and are enjoyed by many for their satisfying taste and comforting qualities.', './css/Dan_Dan_Noodles.jpg', 'For the noodles:
200g thin wheat noodles, 1 tablespoon vegetable oil, 1 tablespoon soy sauce
For the sauce:
2 tablespoons chili oil, 2 tablespoons soy sauce, 1 tablespoon black vinegar, 1 tablespoon sugar, 1 teaspoon Sichuan peppercorns, crushed, 2 cloves garlic, minced, 1 teaspoon ginger, minced
For the topping:
200g ground pork, 1/2 cup preserved vegetables, chopped, 2 green onions, chopped, 1/4 cup crushed peanuts', '1. Cook thin wheat noodles according to package instructions, then drain and toss with vegetable oil and soy sauce to prevent sticking.
2. In a bowl, mix together chili oil, soy sauce, black vinegar, sugar, crushed Sichuan peppercorns, minced garlic, and minced ginger to make the sauce.
3. In a skillet, brown ground pork over medium heat until cooked through.
4. Add chopped preserved vegetables to the skillet and stir-fry until heated through.
5. To serve, divide cooked noodles into bowls and top with the spicy sauce and the pork mixture.
6. Garnish with chopped green onions and crushed peanuts.
7. Toss everything together before eating to combine the flavors.
8. Enjoy hot as a flavorful and satisfying meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0028', 'Peking Duck', 'Crispy roasted duck served with pancakes, scallions, and hoisin sauce.', 'Peking Duck is a famous Chinese dish that originated in Beijing and is known for its crispy skin and tender meat. It is traditionally served as a whole roasted duck, which is carved tableside and served with thin pancakes, scallions, and hoisin sauce. Peking Duck is enjoyed by many for its rich flavor and succulent texture, making it a popular choice for special occasions and celebrations.', './css/Peking_Duck.jpg', '1 whole duck, 2 tablespoons honey, 2 tablespoons soy sauce, 2 tablespoons hoisin sauce, 1 tablespoon Shaoxing wine, 1 teaspoon five-spice powder, 1 teaspoon salt, 1/2 teaspoon white pepper, 2 inches ginger, sliced, 2 cloves garlic, crushed, 4 green onions, chopped, Thin pancakes, for serving, Scallions, for serving', '1. Clean the duck and pat dry with paper towels.
2. In a small bowl, mix together honey, soy sauce, hoisin sauce, Shaoxing wine, five-spice powder, salt, and white pepper to make the marinade.
3. Rub the marinade all over the duck, including inside the cavity.
4. Place sliced ginger, crushed garlic, and chopped green onions inside the cavity of the duck.
5. Let the duck marinate in the refrigerator for at least 4 hours or overnight.
6. Preheat the oven to 375°F (190°C).
7. Place the duck on a rack in a roasting pan and roast in the preheated oven for 1.5-2 hours, or until the skin is crispy and golden brown.
8. Remove the duck from the oven and let rest for 10 minutes before carving.
9. To serve, carve the duck into thin slices and arrange on a serving platter.
10. Serve with thin pancakes, scallions, and hoisin sauce on the side.
11. To eat, spread hoisin sauce on a pancake, add a few slices of duck and some scallions, then roll up and enjoy.
12. Enjoy as a delicious and memorable meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0029', 'Sesame Chicken', 'Crispy chicken pieces coated in a sweet and savory sesame sauce, garnished with sesame seeds.', 'Sesame Chicken is a popular Chinese-American dish that is loved for its crispy texture and sweet and savory flavors. It features bite-sized pieces of chicken that are coated in a mixture of cornstarch and egg, then deep-fried until golden brown and crispy. The fried chicken is then tossed in a sticky sauce made from soy sauce, honey, vinegar, and other seasonings, and garnished with toasted sesame seeds. Sesame Chicken is often served with steamed rice or noodles, making it a satisfying and delicious meal.', './css/Sesame_Chicken.jpg', 'For the chicken:
500g chicken breast, cut into bite-sized pieces, 1 egg, beaten, 1/2 cup cornstarch, Vegetable oil for frying
For the sauce:
1/4 cup soy sauce, 2 tablespoons honey, 2 tablespoons rice vinegar, 1 tablespoon hoisin sauce, 1 tablespoon sesame oil, 2 cloves garlic, minced, 1 teaspoon ginger, minced, 1 teaspoon cornstarch, 1 teaspoon water
For garnish:
Toasted sesame seeds, Chopped green onions', '1. In a bowl, beat an egg and dip each chicken piece into the beaten egg.
2. In another bowl, coat each chicken piece in cornstarch, shaking off any excess.
3. Heat vegetable oil in a deep fryer or large skillet over medium-high heat.
4. Fry the coated chicken pieces in batches until golden brown and crispy, about 3-4 minutes per side.
5. Remove the chicken from the oil and drain on paper towels.
6. In a saucepan, combine soy sauce, honey, rice vinegar, hoisin sauce, sesame oil, minced garlic, and minced ginger to make the sauce.
7. In a small bowl, mix together cornstarch and water to make a slurry for thickening the sauce.
8. Cook the sauce over medium heat, stirring constantly, until thickened.
9. Add the cooked chicken to the sauce and toss to coat.
10. Garnish with toasted sesame seeds and chopped green onions before serving.
11. Enjoy hot as a delicious and satisfying meal.', NULL);

INSERT INTO Chinese_Recipes (dishID, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES ('CH-0030', 'Shrimp Fried Rice', 'Flavorful fried rice cooked with shrimp, eggs, vegetables, and soy sauce.', 'Shrimp Fried Rice is a classic Chinese dish that is loved for its flavorful taste and satisfying texture. It features cooked rice stir-fried with shrimp, eggs, vegetables, and aromatics such as garlic, ginger, and green onions, then seasoned with soy sauce and other seasonings. Shrimp Fried Rice is often served as a main course or side dish at Chinese restaurants and is enjoyed by many for its simplicity and delicious flavor.', './css/Shrimp_Fried_Rice.jpg', '2 cups cooked rice, chilled, 200g shrimp, peeled and deveined, 2 eggs, beaten, 1 cup mixed vegetables (such as peas, carrots, and corn), 2 cloves garlic, minced, 1 tablespoon ginger, minced, 2 green onions, chopped, 2 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon sesame oil, Vegetable oil for frying', '1. Heat vegetable oil in a wok or large skillet over high heat.
2. Stir-fry shrimp until pink and cooked through, then remove from the pan and set aside.
3. Add beaten eggs to the pan and scramble until cooked through, then remove from the pan and set aside.
4. Add more oil to the pan if needed, then stir-fry minced garlic and minced ginger until fragrant.
5. Add mixed vegetables to the pan and stir-fry until crisp-tender.
6. Add cooked rice to the pan and stir-fry until heated through and slightly crispy.
7. Return cooked shrimp and scrambled eggs to the pan and toss to combine.
8. Drizzle soy sauce, oyster sauce, and sesame oil over the rice mixture and toss to coat.
9. Stir in chopped green onions and cook for another minute.
10. Serve hot as a delicious and satisfying meal.', NULL);


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
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0002',
    'Banh Xeo (Vietnamese Crispy Savory Pancake)',
   	'Banh Xeo is a crispy Vietnamese pancake filled with shrimp, pork, bean sprouts, and herbs, typically served with lettuce leaves and a tangy dipping sauce',
	'Bánh xèo originates from the Khmer people in the Southern region. Different regions in Vietnam have variations in color, size, filling, and dipping sauce for bánh xèo. However, the common feature of all types of bánh xèo in Vietnam is that they are made from diluted rice flour, thinly spread on a pan, and fried until crispy. The name ""bánh xèo"" comes from the sound it makes when poured onto the pan. When the batter is poured into hot oil, it sizzles and continues to sizzle until the pancake is nearly cooked. Hence, this traditional pancake is named bánh xèo.',
    'data/images/viD_img/VN-0002_Banh Xeo.jpg',
    '1 cup rice flour, 1/4 cup corn starch, 1/2 tsp turmeric powder, 1/4 cup coconut milk, 2 tbsp beer, 1 egg, 1 cup water, 1/4 tsp salt, 2 stalks green onions minced, 400 grams pork shoulder thinly sliced, 1/4 cup mung beans optional, 3/4 lb shrimp',
    'Prep Ingredients: Mix batter ingredients and refrigerate for at least 3 hours, preferably overnight. Boil pork and slice thinly. Boil mung beans until soft._ Cooking Banh Xeo: Heat an nonstick pan. Add onion and shrimp, cook until shrimp turns orange. Add pork, separating ingredients down the center of the pan. Spoon in oil, swirl to coat the bottom, then ladle in batter. Tilt pan to spread batter thinly. Add mung beans and bean sprouts, cover, and cook for ~3 minutes until crispy and brown. Fold banh xeo in half and slide onto a plate. Repeat until batter and filling are finished. Clean pan with a paper towel after every 2 banh xeo._ Serving: Wrap a piece of Banh Xeo in a lettuce leaf, add some herbs, and dip into the prepared sauce.',
	'https://www.youtube.com/watch?v=qTy_FF-hEO8'

);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
     'VN-0003',
    'Bo Bia (Vietnamese jicama and carrot spring roll)',
    'Bo Bia is a Vietnamese spring roll filled with jicama, carrots, Chinese sausage, egg, and dried shrimp, wrapped in rice paper and served with a sweet and savory dipping sauce. A beloved street food snack in Vietnam.',
    '"Bò bía" (Hokkien: pȯh-piáⁿ, 薄皮卷, in Sino-Vietnamese is "Bạc bính," meaning "thin pastry roll") is a dish originating from the culinary styles of Chaozhou (Teochew) and Fujian, China, now popular in Taiwan, Singapore, and Malaysia. In Fujian, it is often consumed in Haixi, while in Chaozhou, it is a common dish in the Chaozhou region in the east of the province during Qingming Festival. In Vietnam, this dish may have been introduced by Chaozhou immigrants or Peranakan people (also known as Baba Nyonya or simply Baba).
    Traditional-style "bò bía" is rare in Vietnam nowadays. The original type of rice paper used for wrapping traditional Fujian-style "bò bía" is a smooth rice paper made from wheat flour (which housewives often use for wrapping spring rolls). The ingredients of "bò bía" rolls are very diverse: lettuce, bean sprouts, eggs, shrimp, dried shrimp, peanuts, chili sauce, black bean sauce alongside the main ingredient of a mixture of jicama and carrot. The original "bò bía" rolls are quite large, three times larger than those in Saigon. Therefore, vendors often cut them into multiple portions for easier consumption.
    In Saigon, savory "bò bía" is made with ingredients such as Chinese sausage, thinly sliced ​​boiled eggs, carrots, lettuce, jicama, or turnips, dried shrimp, herbs... all finely chopped and rolled in wheat flour rice paper. The condiments served alongside include black bean sauce with peanuts, fried shallots, and ground chili. The use of wheat flour rice paper instead of smooth rice paper for wrapping "bò bía" in the South can also be explained by the abundant local rice reserves. The Chinese used it to replace wheat flour in smooth rice paper, which in turn changed the way "bò bía" is wrapped.',
    'data/images/viD_img/VN-0003_Bo Bia.jpg',
    'Rice paper wrappers, 1 jicama (julienned), 1 carrot (julienned), 2 Chinese sausages (thinly sliced), 2 eggs (beaten), Dried shrimp (soaked in water and drained), Lettuce leaves, Mint leaves, Cilantro, Vietnamese perilla leaves (tia to), The dipping sauce: 3 tablespoons hoisin sauce, 1 tablespoon peanut butter, 1 tablespoon water, 1 teaspoon soy sauce, 1 teaspoon rice vinegar, Sesame seeds for garnish',
    'Preparing the Ingredients: Slice the Chinese sausage. Slice the jicama, carrot, and herbs into thin strips. Beat the eggs and cook them in a pan until set. Then, slice them into thin strips. Soak the dried shrimp in warm water to soften them._ Assembling the Bo Bia: Heat oil in a pan and cook the beaten eggs to make thin omelets. Soften the rice paper wrappers by dipping them in warm water. Lay out the softened wrapper on a clean surface. Layer the lettuce leaves, jicama, carrot, Chinese sausage, egg strips, dried shrimp, and herbs on the lower third of the wrapper. Fold the sides of the wrapper over the filling, then roll tightly to enclose the filling. Repeat the process with the remaining ingredients._ Making the Dipping Sauce: Whisk together hoisin sauce, peanut butter, water, soy sauce, and rice vinegar until smooth to make the dipping sauce._ Serving: Serve the Bo Bia with the dipping sauce on the side, sprinkled with sesame seeds.',
    'https://www.youtube.com/watch?v=Vj1QDAxQRcg'
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0004',
    'Bun Bo Hue (Spicy Vietnamese Beef Noodle Soup)',
    'Bun Bo Hue is a popular Vietnamese noodle soup originating from the city of Hue in central Vietnam. It is known for its spicy and robust broth made with beef bones, lemongrass, and shrimp paste, along with tender slices of beef, pork knuckle, and blog of pig. Bun Bo Hue is typically served with round rice noodles and garnished with fresh herbs, lime wedges, and shredded banana blossom.',
    'Bun bo Hue originated during the reign of Lord Nguyen Hoang (around the 16th century). Legend has it that there was a beautiful and skilled woman named Bun, proficient in the art of making noodles. In the village of Van Cu (now part of Huong Tra town, Thua Thien Hue province), Bun innovatively created a new dish: using beef to cook broth for the noodle dish. Thus, bun bo was born, preserved, and developed through many generations. Today, bun bo Hue has been adapted with the presence of various ingredients such as pork hocks, pork blood pudding, and crab cake... What is in bun bo Hue? A standard bowl of bun bo Hue consists of noodles, beef, pork blood pudding, crab cake, and broth. The noodle is made from a mixture of rice flour and sifted flour in a standard ratio to achieve the perfect elasticity. The beef is selected from the front leg muscle, beef shank, or tenderloin, with bright red color and light yellow fat. The eye-catching orange crab cake is made from crabmeat ground with fat, providing a natural rich taste. The "soul" of bun bo Hue lies in the broth. The broth is simmered from beef bones, giving it a rich and sweet flavor. In addition, a bit of shrimp paste and lemongrass are added to the broth to enhance its enticing aroma.',
    'data/images/viD_img/VN-0004_Bun Bo Hue.jpg',
    '1200 grams beef shank with bone, 500 grams beef chuck, 1000 grams pork hocks cut into chunks, 3 cloves garlic, 3 tbsp Bun Bo Hue powder, 1 tbsp shrimp paste, 1 daikon cut into chunks, 1 yellow onion, 2 stalks lemongrass cut into 2 inch pieces, 2 tsp salt, 2 tbsp fish sauce, 1 tbsp granulated sugar, 1 can chicken broth 14.5 oz, 2 tsp annatto seeds, 1/4 cup vegetable oil, 2 tsp chili flakes, 1 shallot minced, 1 stalk lemongrass minced, 2 cloves garlic minced, 1/4 tsp salt, 1 package thick rice noodles, 1 roll cha lua optional (thinly sliced) , 1/4 cup cilantro minced, 2 stalks green onions thinly sliced, 2 limes',
    'Prepare Meat: Clean pork leg, beef shank, and beef chuck. Boil in water until just covered. Remove from heat, discard water, and set meat aside._ Prepare Aromatics: In the same pot, cook garlic, Bun Bo Hue powder, shrimp paste, and oil until fragrant. Add beef shank and chuck, brown on all sides._ Simmer Broth: Add water to cover meat, onion, daikon, and lemongrass. Simmer for 2-3 hours. Remove meat when tender._ Season Broth: Add salt, fish sauce, sugar, and chicken broth. Simmer for 15 minutes._ Prepare Sate Chili: Cook annatto seeds in oil until red. Discard seeds, then cook remaining chili ingredients._ Combine: Add sate chili to broth. Adjust seasoning if needed._ Assemble Bowls: Place cooked noodles in bowls, top with beef slices, pork hock, cilantro, green onions, bean sprouts, cha lua, and shrimp paste. Ladle soup over ingredients and serve.',
    'https://www.youtube.com/watch?v=r3772ptRYs8'
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0005', 
    'Bun Moc (Pork and Mushroom Noodle Soup)',
    'Bun Moc: Vietnamese noodle soup with pork, mushrooms, ginger, and fish sauce, served with rice vermicelli and chili sauce, enjoyed across Vietnam.',
	'"Bún mọc," a characteristic delicacy of Hanoi, seems to have become a familiar part of Saigon/s culinary scene. It appears in every nook and cranny of this city, from bustling streets to laborious alleyways, with various flavors and variations. There is often debate about the correct term ""mọc."" Some call it ""mọc"" because it is believed to originate from Mọc village (Nhân Mục – Nhân Chính), now in Thanh Xuân district, Hanoi. Others argue it should be ""mộc,"" referring to the distinct round meatballs in this bowl of noodles. Regardless, whether it is called ""mộc"" or ""mọc,"" what matters in Saigon is whether the bowl of noodles is delicious and distinctive. A delicious bowl of bún mọc always requires meticulousness and harmony in combining various spices, as well as the natural combination of noodles, meatballs, young ribs, cinnamon pork sausage, shiitake mushrooms, and onions. The broth is also carefully prepared, simmered from pork bones, skimmed to keep it clear without excessive seasoning. Furthermore, the flavorful broth is thanks to the carefully simmered ribs, providing both sweetness and tenderness so that diners can enjoy without difficulty.',

    'data/images/viD_img/VN-0005_Bun Moc.jpg',
    '1.5 liters pork broth or chicken broth, 1 onion (halved), 1 knob of ginger (sliced), 3-4 cloves garlic (smashed), 1-2 tablespoons fish sauce, 1 teaspoon sugar, Salt and pepper to taste, 300g ground pork, 100g wood ear mushrooms (finely chopped), 2-3 green onions (finely chopped), 1 egg, 1 tablespoon fish sauce, 1 tablespoon cornstarch, 1/2 teaspoon black pepper, Rice vermicelli noodles (bun), Fresh herbs (cilantro & mint & Thai basil), Bean sprouts, Lime wedges, Chili sauce or sliced chili peppers',
    'Preparing the Broth: In a large pot, combine the pork broth, onion, ginger, garlic, fish sauce, sugar, salt, and pepper. Bring the mixture to a simmer and let it cook for about 30 minutes to develop flavors._ Preparing the Meatballs: In a bowl, mix together the ground pork, chopped mushrooms, green onions, egg, fish sauce, cornstarch, and black pepper until well combined. Roll the mixture into small meatballs, about 1 inch in diameter._ Cooking the Meatballs and Noodles: Once the broth is ready, strain it to remove the aromatics. Return the broth to the pot and bring it back to a simmer. Carefully drop the meatballs into the simmering broth and cook for about 10-12 minutes, or until cooked through. While the meatballs are cooking, prepare the rice vermicelli noodles according to package instructions. Drain and rinse under cold water._ Serving: Divide the cooked noodles among serving bowls. Ladle the hot broth and meatballs over the noodles. Top with fresh herbs, bean sprouts, and a squeeze of lime juice. Serve with chili sauce or sliced chili peppers on the side.',
'https://www.youtube.com/watch?v=J_8G-Tigt0I'
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
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
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
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
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0008', 
    'Bun Thit Nuong (Vietnamese Grilled Pork Noodle)',
    'Bun Thit Nuong is a flavorful Vietnamese dish featuring grilled pork and vermicelli, known for its unique essence and rich taste.','Fresh, slender strands of noodles, lightly coated with fragrant scallion oil, make the noodles soft and easy to eat. Seasoned with a cup of sweet and savory fish sauce and spicy ground chili, the dish becomes irresistibly appetizing. Not only aromatic and flavorful but also rich in fats and proteins, this beloved Saigon dish can be found everywhere, from upscale restaurants to street vendors, pleasing the senses with skewers of grilled meat exuding tantalizing aromas that awaken the palate.

	The origin of grilled meat noodles is uncertain, but in every region of the country, it retains its unique flavor. For example, Da Nang is grilled meat noodles are known for their elaborate broth made from soybeans, distinct from the sweet and salty fish sauce of the South, and far removed from the sour and salty fermented fish sauce. 

	Each place has its own unique twist on grilled meat noodles. Sometimes, the bowl of noodles comes with spring rolls, shrimp rolls, or vegetarian spring rolls; other times, it is served with grilled pork skewers. While the main component is undoubtedly the grilled meat skewers, some places use sliced grilled meat instead, as long as it suits the preferences of the diners.',

    'data/images/viD_img/VN-0008_Bun Thit Nuong.jpg',
    '1000 grams pork shoulder cut into 1/8 inch pieces, 2 stalks lemongrass minced, 1 shallot minced, 2 cloves garlic minced, 2 tbsp fish sauce, 1 tbsp soy sauce, 1 tbsp oyster sauce, 2 tbsp vegetable oil, 1 tbsp honey, 1 tbsp light brown sugar, 2 cups lettuce ~8 lettuce leaves, 1/4 cup pickled daikon, 1/4 cup pickled carrots, 1/2 cup cucumbers thinly sliced, 1/4 cup mint, 16 oz vermicelli noodles, 2 tbsp peanuts, 1/2 cup Vietnamese dipping sauce',
    'Marinate Pork: Combine pork marinade ingredients in a bowl. Let pork marinate for at least 30 minutes, preferably longer._ Prep Ingredients: While pork is marinating, prepare Vietnamese dipping sauce, boil vermicelli noodles, pickle daikon and carrots, and cut cucumbers. If using, prepare peanuts._ Prep Grill: Heat indoor grill for 10 minutes. Grill marinated pork pieces for 1-2 minutes on each side until cooked through with grill marks._ Assemble Bowls: Place vermicelli noodles in bowls. Top with lettuce, pickled daikon, pickled carrots, cucumbers, and mint. Sprinkle crushed peanuts over the top and drizzle with Vietnamese dipping sauce.',
	'https://www.youtube.com/watch?v=qY1m5tiFNDM'
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
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
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0010',
	'Pho Bo (Beef Pho)',
	'Pho Bo is a popular Vietnamese beef noodle soup, it is enjoyed nationwide with fragrant spices, fresh herbs, and chili peppers.',
	'Phở is considered one of the quintessential dishes of Vietnamese cuisine.
	The main components of phở are flat rice noodles and a broth accompanied by thinly sliced beef or chicken. The most suitable beef for making phở is meat and bones from native cattle breeds (such as beef from the countryside or yellow cattle). Additionally, it is served with condiments such as hoisin sauce, pepper, lime, fish sauce, chili, etc. These condiments are added according to the taste preferences of the consumer. Phở is typically consumed as a breakfast dish or as a late-night snack; however, in major cities, it can be enjoyed all day long. In the southern provinces of Vietnam and some other regions, phở is served with a plate of fresh herbs such as onions, bean sprouts, and various aromatic herbs, including coriander, mint, among which culantro is a characteristic leaf of phở; however, in Hanoi, this plate of raw herbs is usually not included. Phở is commonly made with beef or chicken, but sometimes there are other variations, especially phở with beef stew, dried phở, stir-fried phở, sour phở, duck phở in Cao Bang, and roasted meat phở in the northern mountainous provinces.',
    'data/images/viD_img/VN-0016_Pho Bo.jpg',
    '700 grams beef chuck, 700 grams oxtail, 700 grams beef shank, 5 grams salt, 10 grams coriander seeds, 10 grams fennel seeds, 5 grams cardamom seeds, 3 pieces star anise, 1 cinnamon stick, 1 daikon (cut into chunks), 1 yellow onion, 1 piece ginger (about 5 cm), 2 packages pho noodles, 15 milliliters fish sauce, Bean sprouts (to taste), 2 stalks green onions (minced), 2 stalks cilantro, Minced Thai basil (to taste), Jalapeno peppers (to taste)',
    'Meats and Broth: Use beef shank, ox tail, and beef chuck with fat and bones for richness. Char onion and ginger for 20 mins for roasted flavor (optional). Spices include cinnamon stick, fennel seeds, coriander seeds, cardamom seeds, and star anise, wrapped in cheesecloth. Add daikon for natural sweetness. Simmer broth for at least 2 hours to extract flavors._ Tips for Clear Broth: Remove impurities by scooping them out during simmering. Avoid prolonged boiling to prevent a murky broth. Optional: Skip charring onion and ginger for a clearer broth._ Noodles and Toppings: Use fresh pho noodles if available; otherwise, use rice noodles. Fresh noodles absorb broth better and cook quickly. Load bowl with toppings like Vietnamese mint, bean sprouts, hoisin sauce, sriracha, fish sauce, pepper, and jalapeno peppers. Optionally add thinly sliced rare steak.',
	'https://www.youtube.com/watch?v=xxM4t8vP-0A'
    
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
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
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
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
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0013',    
    'Goi Xoai (Vietnamese Mango Salad)',
     'Goi Xoai is a refreshing Vietnamese salad made with green mangoes, shrimp, herbs, and a tangy dressing.',
	'Amidst the myriad of dishes in Southern Vietnamese cuisine, salad is considered a refreshing and universally appealing dish. The combination of crisp vegetables, fragrant herbs, succulent shrimp, tender meat, all mixed with a sweet and tangy dressing, creates an unforgettable flavor. Mentioning salad without referring to mangoes is impossible - a fruit seemingly familiar but remarkably versatile when incorporated into various salads.

	Mangoes are known as tropical fruits, predominantly cultivated in the Mekong Delta provinces such as Tien Giang, Dong Thap, Can Tho, etc. Due to their easy cultivation and care, mango trees bear fruit throughout the year. Thanks to the ingenuity of cooks, from a simple fruit, mangoes have now become the main ingredient in many dishes, including savory ones, among which mango salad stands out - a delightful and refreshing combination, perfect for hot summer days.',
    'data/images/viD_img/VN-0013_Goi Xoai.jpg',
    '2 green mangoes (julienned), 200g cooked shrimp (peeled and deveined), 1 cup bean sprouts, 1/2 cup chopped fresh herbs (cilantro & mint & Thai basil), 1/4 cup chopped roasted peanuts, 1-2 red chili peppers (thinly sliced), 3 tablespoons fish sauce, 2 tablespoons sugar, 2 tablespoons lime juice, 2 cloves garlic (minced), 1 Thai chili (minced), Water (as needed)',
    'Preparing the Salad Ingredients: Julienned green mangoes, cooked shrimp, bean sprouts, chopped fresh herbs, chopped roasted peanuts, sliced chili peppers._ Making the Dressing: In a small bowl, whisk together fish sauce, sugar, lime juice, minced garlic, and minced Thai chili to make the dressing. Adjust the consistency by adding water as needed._ Combining and Tossing: In a large bowl, combine all the prepared salad ingredients. Pour the dressing over the salad. Toss gently to coat everything evenly._ Serving: Let the salad sit for a few minutes to allow the flavors to meld together. Serve the Goi Xoai salad as a refreshing appetizer or side dish.',
	'https://www.youtube.com/watch?v=2GrIBewiHv4'
);

INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0014',
    'Nem Nuong (Vietnamese Grilled Pork Skewers)',
	'Nem Nuong: Vietnamese grilled pork skewers, savory-sweet and served as an appetizer or main dish with lettuce, herbs, and rice paper.',
	'Grilled pork skewers, or grilled meatballs, are Vietnamese specialties and are popular dishes in this country, sometimes served as an appetizer or a standalone light dish, or accompanied by noodles (or rice) as a main course. Grilled pork skewers are a specialty of Khanh Hoa province (Nha Trang).
	Grilled pork skewers can be enjoyed as an appetizer or a light dish on their own, served with dipping sauce, or with peanut dipping sauce. The dipping sauce is fish sauce diluted with water and mixed with sugar, lime juice, finely chopped raw garlic, finely chopped hot chili peppers (Thai chili peppers)/cayenne peppers, and sometimes with vinegar. Peanut dipping sauce is made from peanut butter and hoisin sauce, with the flavors of fish sauce and finely mashed garlic, topped with finely crushed peanuts. It is served with fresh vegetables such as lettuce, julienned vegetables such as carrots and radishes, or fresh herbs such as mint and basil. When eating, diners can squeeze lime and add chili paste according to taste.
	Grilled pork skewers can be served as a main dish with noodles, for example: Grilled pork with noodles and rice, for example, broken rice. Grilled pork skewers are also a common filling in spring rolls.',
    'data/images/viD_img/VN-0015_Nem Nuong.jpg',
    '500g ground pork, 3 cloves garlic (minced), 1 shallot (minced), 2 tablespoons fish sauce, 1 tablespoon sugar, 1 teaspoon black pepper, Bamboo skewers (soaked in water), Lettuce leaves, Fresh herbs (cilantro & mint & Thai basil), Rice paper, Dipping sauce (nuoc cham) for serving',
    'Marinating the Pork: In a bowl, mix together ground pork, minced garlic, minced shallot, fish sauce, sugar, and black pepper until well combined. Cover the bowl and let the mixture marinate in the refrigerator for at least 1 hour, or overnight for best results._ Grilling the Pork Skewers: Preheat a grill or grill pan over medium-high heat. Thread the marinated pork onto bamboo skewers, shaping them into sausage-like shapes. Grill the skewers for about 3-4 minutes on each side, or until cooked through and slightly charred._ Preparing the Wrapping Ingredients: While the pork skewers are grilling, prepare lettuce leaves, fresh herbs, and rice paper for wrapping._ Assembling the Nem Nuong Rolls: To serve, place a lettuce leaf and a few sprigs of fresh herbs on a piece of rice paper. Add a grilled pork skewer and roll it up tightly. The dipping sauce (nuoc cham) to serve with the Nem Nuong rolls.',
	'https://www.youtube.com/watch?v=A6jpax8b3Ts'
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0015',
    'Canh Chua (Vietnamese Sour Soup)',
    'Canh Chua is a traditional Vietnamese soup known for its sweet, sour, and savory flavors.',
	'Canh chua is a dish that is very simple and familiar on the dining table of Vietnamese people. While people in the northern region often enjoy sour fish soup on hot summer days, in the central, western, and southern regions, this soup is a common presence on daily dining tables.

	The ""version"" of sour soup in the northern style often includes some regional specialty fruits such as starfruit, gourd, or sour tamarind. Particularly, housewives never add sugar to the soup to preserve the natural taste of the ingredients. Meanwhile, in the western and southern regions, sour soup always combines a rich sweetness from sugar, accompanied by spicy chili peppers.

	Each region has its own cooking method, but in general, regardless of the recipe, the soup still retains the sweet, sour taste of the ingredients cooked from various fruits or vegetables.',
    'data/images/viD_img/VN-0010_Canh Chua.jpg',
    '500 grams pork, 1 yellow onion, 1 oz fresh tamarind, 1 tsp salt, 1 can pineapple 20 oz, 1 piece ginger 1 inch long, 500 grams catfish cut into 1 inch pieces, 10 oz elephant ear stem cut into chunks, 3 tomatoes quartered, 12 oz bean sprouts, 1 tsp granulated sugar, 1 oz rice paddy herb',
    'Preparation: Place pork in a large soup pot, cover with water, bring to a boil, and simmer for 10 minutes. Discard water, rinse pot, and add pork back with fresh water. Add onion and simmer for 1.5 hours, removing impurities every 30 minutes._ Preparing Tamarind: Combine water and tamarind in a saucepan, simmer until dissolved, then strain through a sieve._ Cooking the Soup: After 1.5 hours, add pineapple and ginger to the soup and simmer for 20 minutes. Add catfish and simmer for another 10 minutes until cooked through. Lastly, add vegetables and strained tamarind. Bring to a boil, taste for seasoning, and add more salt if needed.',
	'https://www.youtube.com/watch?v=KcDTzo8dAq4'
);
INSERT INTO Vietnamese_Recipes (dishId, dishName, dishDescription, dishHistory, dishImage, recipeIngredients, recipeInstruction, dishVideo)
VALUES (
    'VN-0016',
    'Mi Quang (Vietnamese Noodle with Pork and Shrimp)',
	'Mi Quang is a Vietnamese noodle dish originating from the central region of Vietnam. It features wide rice noodles, pork, shrimp, and a flavorful broth made with turmeric and aromatics.',
	'"Mì Quảng" from Quang Nam is nearly the first dish that comes to mind when speaking of the culinary characteristics of the Quang Nam - Da Nang region. Although this dish can be found scattered throughout other provinces and cities of the country, it is only when eaten in Quang Nam that one fully appreciates its rich flavor.

	"Mì Quảng" appears to be a unique creation of the Quang Nam region, not based on any existing tradition. Firstly, regarding its name, the term ""mì"" (noodles) seems inappropriate but is quite distinctive. Noodles are originally a product of the Chinese, made from wheat flour. Traditional Vietnamese dishes did not include any dishes called ""mì"" (except for ""mì Quảng,"" of course). ""Mì Quảng"" is the only noodle dish in Vietnam, but ironically, it merely borrows the name; in reality, those strands are made from rice flour, without any trace of wheat flour. Its uniqueness lies in this aspect. Not relying on any tradition, even the naming convention is novel. ""Mì Quảng"" deserves to be a subject of cultural research in the history of the Central region.
	Currently, ""mì Quảng"" offers various versions like snakehead fish, chicken, shrimp, and meat, with the latest being frog. Though not complex to cook, it requires meticulous ingredient preparation. A bowl of ""mì Quảng"" boasts colorful natural ingredients, flavorful broth, 9-flavor raw vegetables, sesame rice crackers, peanuts, and more. Its vibrant yellow noodles pair perfectly with green chilies, offering a rich and spicy flavor. Accompanied by black sesame rice crackers and raw vegetables, it epitomizes Central Vietnamese cuisine.',
    'data/images/viD_img/VN-0014_Mi Quang.jpg',
    '300g wide rice noodles (mi quang noodles), 200g pork belly (thinly sliced), 200g shrimp (peeled and deveined), 1 onion (thinly sliced), 2-3 cloves garlic (minced), 1 tablespoon turmeric powder, 1 tablespoon fish sauce, 1 tablespoon sugar, 1 tablespoon cooking oil, 1 liter pork or chicken broth, Bean sprouts, Chopped scallions, Chopped cilantro, Chopped peanuts, Crispy rice crackers, Lime wedges, Sliced chili peppers',
    'Marinating Pork Belly and Shrimp: Cut pork belly into thin slices, marinate with fish sauce, sugar, salt, pepper, paprika, and turmeric. Separate shrimp from heads, marinate shrimp with the same ingredients. Let marinate for 15 minutes._ Preparing Ingredients: Mince shallot and garlic. Sauté shrimp with half of shallots and garlic, set aside. Sauté pork belly with remaining shallots and garlic, set aside. Sauté shrimp heads, then add chicken broth and onion, simmer for 30 minutes._ Assembling Soup: Boil noodles and quail eggs, shred cabbage, toast and crush peanuts, microwave black sesame crackers. Season soup with salt, fish sauce, sugar, paprika, and turmeric. Add pork belly back to soup, simmer for 5 minutes. Assemble bowl with noodles, herbs, bean sprouts, shredded cabbage, shrimp, quail eggs, pork belly. Ladle soup over, top with sesame crackers and crushed peanuts.',
	'https://www.youtube.com/watch?v=hP9Pyi4GUGc'
);

-- comments table for vietnamese recipes page--

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    dishID VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (dishID) REFERENCES Vietnamese_Recipes(dishid) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES login(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);		







