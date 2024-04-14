CREATE DATABASE foodData;
USE foodData;


CREATE TABLE dishesData (    
    dishId VARCHAR(10) PRIMARY KEY,
    dishType VARCHAR(50),
    dishName VARCHAR(500),
    dishDescription TEXT,
    dishImage VARCHAR(1000),
    recipeIngredients TEXT,
    recipeInstruction TEXT
);

INSERT INTO dishesData (dishId, dishType, dishName, dishDescription, dishImage, recipeIngredients, recipeInstruction)
VALUES (
    'VN-0001',
    'Vietnamese Dish',
    'Banh Canh Cua (Vietnamese Shrimp and Crab Thick Noodle Soup)',
    'Banh Canh Cua is a comforting Vietnamese noodle soup made with thick, chewy noodles, crab meat, shrimp, and a flavorful broth. It is a popular dish enjoyed throughout Vietnam, especially during colder months.',
    'data/images/viD_img/Banh Canh Cua (Vietnames Shrimp n Crab Thick Noodle Soup).jpg',
    '500g crab meat, 300g shrimp (peeled and deveined), 500g banh canh noodles (thick Vietnamese noodles), 1 onion (chopped), 3 cloves garlic (minced), 2 tomatoes (diced), 1.5 liters chicken broth, 2 tablespoons fish sauce, 1 tablespoon sugar, Salt and pepper to taste, Chopped scallions and cilantro for garnish, Lime wedges for serving',
    'In a large pot, heat some oil over medium heat. Add the chopped onion and minced garlic, and sauté until fragrant. Add the diced tomatoes and cook until they begin to soften. Pour in the chicken broth and bring to a simmer. Season the broth with fish sauce, sugar, salt, and pepper to taste. Add the banh canh noodles to the broth and cook according to package instructions, usually about 5-7 minutes. Once the noodles are cooked, add the crab meat and shrimp to the pot. Cook for another 3-5 minutes until the seafood is cooked through. Taste the broth and adjust seasoning if necessary. Serve hot, garnished with chopped scallions and cilantro. Serve lime wedges on the side for squeezing over the soup.'
),
(
    'VN-0002',
    'Vietnamese Dish',
    'Banh Xeo (Vietnamese Crispy Savory Pancake)',
    'Banh Xeo is a popular Vietnamese street food dish consisting of a crispy, savory pancake filled with shrimp, pork, bean sprouts, and herbs. It is often served with lettuce leaves and dipped in a tangy and savory sauce.',
    'data/images/viD_img/Banh Xeo (Vietnamese Crispy Savory Pancake) 1.jpg',
    'For the pancake batter: 1 cup rice flour, 1 cup coconut milk, 1 cup water, 1/2 teaspoon turmeric powder, 1/2 teaspoon sugar, 1/2 teaspoon salt, For the filling: 150 grams pork belly (thinly sliced), 150 grams shrimp (peeled and deveined), 1 cup bean sprouts, 1/2 onion (thinly sliced), 2-3 green onions (sliced), A handful of fresh herbs (cilantro, mint, perilla) (chopped), Lettuce leaves (for serving), For the dipping sauce: 3 tablespoons fish sauce, 3 tablespoons water, 2 tablespoons sugar, 1 tablespoon lime juice, 1-2 Thai chilies (finely chopped), 1 clove garlic (minced)',
    'In a bowl, whisk together the rice flour, coconut milk, water, turmeric powder, sugar, and salt to make the pancake batter. Let the batter rest for 30 minutes. Heat a non-stick skillet over medium-high heat. Add a bit of oil to coat the pan. Add a few slices of pork belly to the pan and cook until slightly crispy. Add a handful of shrimp and cook until they turn pink. Remove the pork and shrimp from the pan and set aside. Add a ladleful of the pancake batter to the skillet, swirling to coat the bottom evenly. Add some sliced onion, bean sprouts, green onions, and a portion of the cooked pork and shrimp to one half of the pancake. Cover the skillet and cook for 2-3 minutes until the edges of the pancake are crispy and golden brown. Fold the other half of the pancake over the filling to create a half-moon shape. Press down gently with a spatula and cook for another minute. Transfer the Banh Xeo to a plate and serve hot with lettuce leaves and fresh herbs. To eat, wrap a piece of Banh Xeo in a lettuce leaf, add some herbs, and dip into the prepared sauce.'
),
(
    'VN-0003',
    'Vietnamese Dish',
    'Bo Bia (Vietnamese Spring Rolls with Jicama n Egg)',
    'Bo Bia is a Vietnamese spring roll filled with jicama, carrots, Chinese sausage, egg, and dried shrimp. It is wrapped in rice paper and served with a sweet and savory dipping sauce. Bo Bia is a popular street food snack in Vietnam.',
    'data/images/viD_img/Bo Bia (Vietnamese Spring Rolls with Jicama n Egg).jpg',
    'Rice paper wrappers, 1 jicama (julienned), 1 carrot (julienned), 2 Chinese sausages (thinly sliced), 2 eggs (beaten), Dried shrimp (soaked in water and drained), Lettuce leaves, Mint leaves, Cilantro, Vietnamese perilla leaves (tia to), For the dipping sauce: 3 tablespoons hoisin sauce, 1 tablespoon peanut butter, 1 tablespoon water, 1 teaspoon soy sauce, 1 teaspoon rice vinegar, Sesame seeds for garnish',
    'Heat a bit of oil in a pan over medium heat. Pour in the beaten eggs and swirl to coat the pan. Cook until set, then flip and cook briefly on the other side. Remove from the pan and slice into thin strips. Soften the rice paper wrappers by dipping them in warm water for a few seconds. Place the softened wrapper on a clean surface. Layer some lettuce leaves, jicama, carrot, Chinese sausage, egg strips, dried shrimp, and herbs on the lower third of the wrapper. Fold the sides of the wrapper over the filling, then roll tightly to enclose the filling. Repeat with the remaining ingredients. To make the dipping sauce, whisk together hoisin sauce, peanut butter, water, soy sauce, and rice vinegar until smooth. Serve the Bo Bia with the dipping sauce on the side, sprinkled with sesame seeds.'
),
(
    'VN-0004',
    'Vietnamese Dish',
    'Bun Bo Hue (Spicy Vietnamese Beef Noodle Soup)',
    'Bun Bo Hue is a popular Vietnamese noodle soup originating from the city of Hue in central Vietnam. It is known for its spicy and robust broth made with beef bones, lemongrass, and shrimp paste, along with tender slices of beef, pork knuckle, and blog of pig. Bun Bo Hue is typically served with round rice noodles and garnished with fresh herbs, lime wedges, and shredded banana blossom.',
    'data/images/viD_img/Bun Bo Hue (Spicy Vietnamese Beef Noodle Soup) 1.jpg',
    '500g beef bones, 500g beef brisket or shank (thinly sliced), 500g pork knuckle, 200g blood of pig (sliced), 1 lemongrass stalk (bruised), 3-4 shallots (peeled), 3-4 garlic cloves (peeled), 1 onion (halved), 1 knob of ginger (sliced), 2-3 tablespoons shrimp paste, 2-3 tablespoons annatto seeds, 1 tablespoon fish sauce, 1 tablespoon sugar, Salt to taste, Round rice noodles (bun), Garnishes: bean sprouts, shredded banana blossom, lime wedges, chopped scallions, chopped cilantro, Thai basil, mint leaves, thinly sliced chili peppers',
    'In a large pot, bring water to a boil. Add beef bones, pork knuckle, lemongrass, shallots, garlic, onion, and ginger. Simmer for at least 2 hours, skimming off any foam that rises to the surface. Remove the pork knuckle and allow it to cool slightly before slicing. Remove the beef bones and strain the broth. Return the broth to the pot and bring to a simmer. Add shrimp paste, annatto seeds, fish sauce, and sugar to the broth. Adjust seasoning with salt as needed. Cook the round rice noodles according to package instructions. Drain and rinse under cold water. To serve, divide the noodles among serving bowls. Top with slices of beef brisket, pork knuckle, blood of pigd, and any other desired garnishes. Ladle the hot broth over the noodles and garnishes. Serve immediately with lime wedges on the side.'
),
(
    'VN-0005',
    'Vietnamese Dish',
    'Bun Moc (Pork and Mushroom Noodle Soup)',
    'Bun Moc is a Vietnamese noodle soup made with ground pork and mushrooms. The broth is flavored with aromatics like ginger and fish sauce, and the soup is typically served with rice vermicelli noodles, fresh herbs, and a side of chili sauce. Bun Moc is a comforting and flavorful dish enjoyed throughout Vietnam.',
    'data/images/viD_img/Bun Moc (Pork n Mushroom Noodle Soup).jpg',
    'For the broth:, 1.5 liters pork broth or chicken broth, 1 onion, halved, 1 knob of ginger, sliced, 3-4 cloves garlic, smashed, 1-2 tablespoons fish sauce, 1 teaspoon sugar, Salt and pepper to taste, For the meatballs:, 300g ground pork, 100g wood ear mushrooms, finely chopped, 2-3 green onions, finely chopped, 1 egg, 1 tablespoon fish sauce, 1 tablespoon cornstarch, 1/2 teaspoon black pepper, To serve:, Rice vermicelli noodles (bun), Fresh herbs (cilantro, mint, Thai basil), Bean sprouts, Lime wedges, Chili sauce or sliced chili peppers',
    'In a large pot, combine the pork broth, onion, ginger, garlic, fish sauce, sugar, salt, and pepper. Bring to a simmer and let it cook for about 30 minutes to develop flavors. Meanwhile, prepare the meatballs. In a bowl, mix together the ground pork, chopped mushrooms, green onions, egg, fish sauce, cornstarch, and black pepper until well combined. Roll the mixture into small meatballs, about 1 inch in diameter. Once the broth is ready, strain it to remove the aromatics. Return the broth to the pot and bring it back to a simmer. Carefully drop the meatballs into the simmering broth and cook for about 10-12 minutes, or until cooked through. While the meatballs are cooking, prepare the rice vermicelli noodles according to package instructions. Drain and rinse under cold water. To serve, divide the cooked noodles among serving bowls. Ladle the hot broth and meatballs over the noodles. Top with fresh herbs, bean sprouts, and a squeeze of lime juice. Serve with chili sauce or sliced chili peppers on the side.'
),
(
    'VN-0006',
    'Vietnamese Dish',
    'Bun Rieu (Vietnamese Crab Noodle Soup)',
    'Bun Rieu is a Vietnamese noodle soup known for its flavorful broth made with crab paste or crab meat, tomatoes, and fermented shrimp paste. The soup is typically served with rice vermicelli noodles, tofu, pork, and fresh herbs. Bun Rieu is a popular street food dish enjoyed throughout Vietnam.',
    'data/images/viD_img/Bun Rieu ((Vietnamese Crab Noodle Soup).jpg',
    'For the broth:, 1.5 liters crab broth or chicken broth, 200g canned crab meat or crab paste, 2 tomatoes, quartered, 1 onion, halved, 2-3 tablespoons shrimp paste, 1-2 tablespoons sugar, 1-2 tablespoons fish sauce, Salt and pepper to taste, For the meatballs:, 200g ground pork, 100g tofu, mashed, 2-3 green onions, finely chopped, 1 egg, 1 tablespoon fish sauce, 1 tablespoon cornstarch, 1/2 teaspoon black pepper, To serve:, Rice vermicelli noodles (bun), Fried tofu cubes, Bean sprouts, Fresh herbs (cilantro, mint, Thai basil), Lime wedges, Sliced chili peppers',
    'In a large pot, combine the crab broth, canned crab meat or crab paste, tomatoes, onion, shrimp paste, sugar, fish sauce, salt, and pepper. Bring to a simmer and let it cook for about 30 minutes to develop flavors. Meanwhile, prepare the meatballs. In a bowl, mix together the ground pork, mashed tofu, green onions, egg, fish sauce, cornstarch, and black pepper until well combined. Roll the mixture into small meatballs, about 1 inch in diameter. Once the broth is ready, strain it to remove the solids. Return the broth to the pot and bring it back to a simmer. Carefully drop the meatballs into the simmering broth and cook for about 10-12 minutes, or until cooked through. While the meatballs are cooking, prepare the rice vermicelli noodles according to package instructions. Drain and rinse under cold water. To serve, divide the cooked noodles among serving bowls. Ladle the hot broth and meatballs over the noodles. Top with fried tofu cubes, bean sprouts, fresh herbs, and a squeeze of lime juice. Serve with sliced chili peppers on the side.'
),
(
    'VN-0007',
    'Vietnamese Dish',
    'Bun Thit Nuong_Ha Noi Version (Vietnamese Grilled Pork Noodle)',
    'Bun Thit Nuong is a Vietnamese dish featuring grilled pork served over vermicelli noodles, topped with fresh herbs, pickled vegetables, and a savory sauce. This version is inspired by the cuisine of Hanoi, known for its subtle flavors and emphasis on freshness. It is a light and refreshing meal commonly enjoyed throughout Vietnam.',
    'data/images/viD_img/Bun Thit Nuong_Ha Noi Version (Vietnamese Grilled Pork Noodle) 1.jpg',
    'For the grilled pork:, 500g pork shoulder or pork belly, thinly sliced, 3 tablespoons fish sauce, 1 tablespoon soy sauce, 2 tablespoons sugar, 3 cloves garlic, minced, 1 shallot, minced, 1 tablespoon oil, For the nuoc cham dipping sauce:, 3 tablespoons fish sauce, 3 tablespoons sugar, 3 tablespoons lime juice, 1 clove garlic, minced, 1 Thai chili, thinly sliced, For the pickled vegetables:, 1 carrot, julienned, 1 daikon radish, julienned, 1/4 cup rice vinegar, 2 tablespoons sugar, 1 teaspoon salt, To serve:, Rice vermicelli noodles (bun), Fresh herbs (cilantro, mint, Thai basil), Lettuce leaves, Bean sprouts, Chopped peanuts, Sliced cucumber, Sliced chili peppers',
    'In a bowl, combine the fish sauce, soy sauce, sugar, garlic, shallot, and oil. Add the thinly sliced pork and marinate for at least 1 hour. Meanwhile, prepare the nuoc cham dipping sauce by whisking together fish sauce, sugar, lime juice, minced garlic, and sliced chili peppers. Set aside. In another bowl, combine julienned carrot and daikon radish with rice vinegar, sugar, and salt. Let it sit for at least 30 minutes to pickle. Cook the rice vermicelli noodles according to package instructions. Drain and rinse under cold water. Heat a grill or grill pan over medium-high heat. Grill the marinated pork slices until cooked through and slightly charred, about 2-3 minutes per side. To serve, divide the cooked noodles among serving bowls. Top with grilled pork slices, pickled vegetables, fresh herbs, lettuce leaves, bean sprouts, chopped peanuts, sliced cucumber, and sliced chili peppers. Serve with nuoc cham dipping sauce on the side. Enjoy!'
),
(
    'VN-0008',
    'Vietnamese Dish',
    'Bun Thit Nuong_Hoi An Version (Vietnamese Grilled Pork Noodle)',
    'Bun Thit Nuong is a Vietnamese dish featuring grilled pork served over vermicelli noodles, topped with fresh herbs, pickled vegetables, and a savory sauce. This version is inspired by the cuisine of Hoi An, known for its vibrant flavors and mix of influences from Chinese, Japanese, and indigenous Vietnamese cuisines. It is a delightful and satisfying dish commonly enjoyed throughout Vietnam.',
    'data/images/viD_img/Bun Thit Nuong_Hoi An Version (Vietnamese Grilled Pork Noodle).jpg',
    'For the grilled pork:, 500g pork shoulder or pork belly, thinly sliced, 3 tablespoons fish sauce, 1 tablespoon soy sauce, 2 tablespoons sugar, 3 cloves garlic, minced, 1 shallot, minced, 1 tablespoon oil, For the nuoc cham dipping sauce:, 3 tablespoons fish sauce, 3 tablespoons sugar, 3 tablespoons lime juice, 1 clove garlic, minced, 1 Thai chili, thinly sliced, For the pickled vegetables:, 1 carrot, julienned, 1 daikon radish, julienned, 1/4 cup rice vinegar, 2 tablespoons sugar, 1 teaspoon salt, To serve:, Rice vermicelli noodles (bun), Fresh herbs (cilantro, mint, Thai basil), Lettuce leaves, Bean sprouts, Chopped peanuts, Sliced cucumber, Sliced chili peppers',
    'In a bowl, combine the fish sauce, soy sauce, sugar, garlic, shallot, and oil. Add the thinly sliced pork and marinate for at least 1 hour. Meanwhile, prepare the nuoc cham dipping sauce by whisking together fish sauce, sugar, lime juice, minced garlic, and sliced chili peppers. Set aside. In another bowl, combine julienned carrot and daikon radish with rice vinegar, sugar, and salt. Let it sit for at least 30 minutes to pickle. Cook the rice vermicelli noodles according to package instructions. Drain and rinse under cold water. Heat a grill or grill pan over medium-high heat. Grill the marinated pork slices until cooked through and slightly charred, about 2-3 minutes per side. To serve, divide the cooked noodles among serving bowls. Top with grilled pork slices, pickled vegetables, fresh herbs, lettuce leaves, bean sprouts, chopped peanuts, sliced cucumber, and sliced chili peppers. Serve with nuoc cham dipping sauce on the side. Enjoy!'
),
(
    'VN-0009',
    'Vietnamese Dish',
    'Ca Kho To (Vietnamese Braised Fish)',
    'Ca Kho To is a traditional Vietnamese dish featuring catfish braised in a caramelized sauce made from fish sauce, sugar, and aromatics. The fish is cooked until tender and flavorful, with a slightly sweet and savory taste. Ca Kho To is often served with steamed rice and garnished with fresh herbs and sliced chili peppers.',
    'data/images/viD_img/Ca Kho To (Vietnamese Braised Fish).jpg',
    '500g catfish fillets (cut into chunks), 3 tablespoons fish sauce, 3 tablespoons sugar, 1 tablespoon caramel sauce (nuoc mau), 3 cloves garlic (minced), 1 shallot (thinly sliced), 2-3 red chili peppers (sliced), 2-3 green onions (cut into 2-inch pieces), 1/2 cup coconut water or water, Freshly ground black pepper, Fresh herbs (cilantro, Thai basil) for garnish',
    'In a bowl, mix together fish sauce, sugar, and caramel sauce until well combined. In a clay pot or deep skillet, heat a bit of oil over medium heat. Add minced garlic and sliced shallots, and sauté until fragrant. Add the fish pieces to the pot and sear on both sides until lightly browned. Pour the fish sauce mixture over the fish, then add sliced chili peppers, green onions, and coconut water or water. Cover and simmer over low heat for about 20-30 minutes, or until the fish is cooked through and the sauce has thickened. Taste and adjust seasoning if needed, adding more fish sauce or sugar as desired. Garnish with freshly ground black pepper and chopped fresh herbs before serving. Enjoy with steamed rice.'
),
(
    'VN-0010',
    'Vietnamese Dish',
    'Canh Chua (Vietnamese Sour Soup)',
    'Canh Chua is a traditional Vietnamese soup known for its sweet, sour, and savory flavors. It features a clear broth made from tamarind, pineapple, tomatoes, and aromatic herbs, along with shrimp, fish, or other proteins. Canh Chua is typically served with steamed rice and garnished with fresh herbs and chili peppers.',
    'data/images/viD_img/Canh Chua (Vietnamese Sour Soup) 1.jpg',
    '500g fish fillets (snakehead fish or catfish) (cut into chunks), 200g shrimp (peeled and deveined), 1 tomato (sliced), 1/2 cup pineapple chunks, 2-3 tablespoons tamarind pulp (dissolved in 1 cup warm water), 2-3 tablespoons sugar, 2-3 tablespoons fish sauce, 1 shallot (thinly sliced), 3-4 cloves garlic (minced), 2-3 red chili peppers (sliced), A handful of fresh herbs (Vietnamese coriander, sawtooth herb), 2-3 sprigs of fresh dill, Water, Salt to taste',
    'In a pot, heat a bit of oil over medium heat. Add sliced shallots and minced garlic, and sauté until fragrant. Add the tamarind water, fish sauce, sugar, and a pinch of salt to the pot. Stir to combine. Add enough water to the pot to make the desired amount of soup. Bring to a simmer. Add the fish fillets to the pot and simmer gently until they are almost cooked through. Add the shrimp, tomato slices, pineapple chunks, and sliced chili peppers to the pot. Simmer for another few minutes until the shrimp turn pink and the fish is fully cooked. Taste the soup and adjust the seasoning if needed, adding more sugar or fish sauce as desired. Add fresh herbs and dill to the pot, then remove from heat. Serve hot with steamed rice. Enjoy the tangy and flavorful soup!'
),
(
    'VN-0011',
    'Vietnamese Dish',
    'Cao Lau Hoi An (Vietnamese Noodle Bowl)',
    'Cao Lau is a specialty noodle dish from Hoi An, a historic town in central Vietnam. It features thick rice noodles, slices of pork, crispy pork rinds, fresh herbs, and a flavorful broth made with secret ingredients like ash water. Cao Lau is topped with bean sprouts, lettuce, and thinly sliced green onions, and it is typically served with a side of chili sauce.',
    'data/images/viD_img/Cao Lau Hoi An (Vietnamese Noodle Bowl) .jpg',
    '250g thick rice noodles, 200g pork loin or pork belly (thinly sliced), 2 cups bean sprouts, 1/2 cup crispy pork rinds, 1/2 cup fresh herbs (cilantro, mint, Thai basil), 1/4 cup sliced green onions, Lettuce leaves, For the broth: 1 liter pork broth or chicken broth, 2-3 shallots (sliced), 3-4 cloves garlic (minced), 2 tablespoons soy sauce, 1 tablespoon fish sauce, 1 tablespoon sugar, 1 teaspoon five-spice powder, 1 teaspoon turmeric powder, Salt and pepper to taste',
    'In a pot, heat a bit of oil over medium heat. Add sliced shallots and minced garlic, and sauté until fragrant. Add pork slices to the pot and cook until browned. Pour in the pork broth or chicken broth and bring to a simmer. Season the broth with soy sauce, fish sauce, sugar, five-spice powder, turmeric powder, salt, and pepper. Cook the thick rice noodles according to package instructions. Drain and rinse under cold water. To serve, divide the cooked noodles among serving bowls. Top with slices of cooked pork, bean sprouts, crispy pork rinds, fresh herbs, and sliced green onions. Pour the hot broth over the noodles and garnishes. Serve with lettuce leaves and chili sauce on the side. Enjoy the unique flavors of Cao Lau!'
),
(
    'VN-0012',
    'Vietnamese Dish',
    'Goi Cuon Tom Thit (Vietnamese Spring Rolls)',
    'Goi Cuon, also known as Vietnamese spring rolls or fresh summer rolls, are a popular Vietnamese appetizer made with shrimp, pork, vermicelli noodles, and fresh herbs wrapped in rice paper. They are light, refreshing, and often served with a peanut dipping sauce. Goi Cuon is a healthy and delicious snack enjoyed throughout Vietnam.',
    'data/images/viD_img/Goi Cuon Tom Thit (Vietnamese Spring Rolls) 1.jpg',
    '12 rice paper wrappers (banh trang), 12 cooked medium shrimp (peeled and halved lengthwise), 200g pork shoulder (thinly sliced and cooked), 1 cup cooked rice vermicelli noodles, 1 cup bean sprouts, 1 cup lettuce leaves, 1 cup fresh herbs (cilantro, mint, Thai basil), 12 pieces of chives or green onions, For the dipping sauce: 3 tablespoons hoisin sauce, 2 tablespoons peanut butter, 1 tablespoon soy sauce, 1 tablespoon lime juice, 1 clove garlic (minced), 1 teaspoon sriracha sauce (optional), Water (as needed)',
    'Fill a large shallow bowl with warm water. Dip one rice paper wrapper into the water for a few seconds until it softens. Carefully transfer the softened rice paper to a clean, flat surface. Place a couple of shrimp halves, slices of cooked pork, a handful of rice vermicelli noodles, bean sprouts, lettuce leaves, and fresh herbs in the center of the rice paper. Fold the bottom edge of the rice paper over the filling, then fold the sides towards the center. Roll tightly to enclose the filling completely. Repeat with the remaining ingredients to make more spring rolls. To make the dipping sauce, whisk together hoisin sauce, peanut butter, soy sauce, lime juice, minced garlic, and sriracha sauce in a small bowl. Add water as needed to achieve desired consistency. Serve the spring rolls with the dipping sauce on the side. Enjoy!'
),
(
    'VN-0013',
    'Vietnamese Dish',
    'Goi Xoai (Vietnamese Mango Salad)',
    'Goi Xoai is a refreshing Vietnamese salad made with green mangoes, shrimp, herbs, and a tangy dressing. It is a perfect balance of sweet, sour, salty, and spicy flavors, and it is often served as a side dish or appetizer. Goi Xoai is a popular dish during the hot summer months in Vietnam.',
    'data/images/viD_img/Goi Xoai (Vietnanese Mango Salad).jpg',
    '2 green mangoes (julienned), 200g cooked shrimp (peeled and deveined), 1 cup bean sprouts, 1/2 cup chopped fresh herbs (cilantro, mint, Thai basil), 1/4 cup chopped roasted peanuts, 1-2 red chili peppers (thinly sliced), For the dressing: 3 tablespoons fish sauce, 2 tablespoons sugar, 2 tablespoons lime juice, 2 cloves garlic (minced), 1 Thai chili (minced), Water (as needed)',
    'In a large bowl, combine julienned green mangoes, cooked shrimp, bean sprouts, chopped fresh herbs, chopped roasted peanuts, and sliced chili peppers. In a small bowl, whisk together fish sauce, sugar, lime juice, minced garlic, and minced Thai chili to make the dressing. Add water as needed to adjust the consistency. Pour the dressing over the salad and toss gently to coat everything evenly. Let the salad sit for a few minutes to allow the flavors to meld together. Serve the Goi Xoai salad as a refreshing appetizer or side dish. Enjoy!'
),
(
    'VN-0014',
    'Vietnamese Dish',
    'Mi Quang (Vietnamese Noodle with Pork n Shrimp)',
    'Mi Quang is a Vietnamese noodle dish originating from the central region of Vietnam. It features wide rice noodles, pork, shrimp, and a flavorful broth made with turmeric and aromatics. Mi Quang is often garnished with peanuts, fresh herbs, and crispy rice crackers, and it is typically served as a light meal or snack.',
    'data/images/viD_img/Mi Quang (Vietnames Noodle with Pork n Shrimp) 1.jpg',
    '300g wide rice noodles (mi quang noodles), 200g pork belly (thinly sliced), 200g shrimp (peeled and deveined), 1 onion (thinly sliced), 2-3 cloves garlic (minced), 1 tablespoon turmeric powder, 1 tablespoon fish sauce, 1 tablespoon sugar, 1 tablespoon cooking oil, 1 liter pork or chicken broth, For the toppings: Bean sprouts, Chopped scallions, Chopped cilantro, Chopped peanuts, Crispy rice crackers, Lime wedges, Sliced chili peppers',
    'In a bowl, marinate the pork slices and shrimp with minced garlic, turmeric powder, fish sauce, and sugar. Let it marinate for about 15-30 minutes. Heat oil in a large pot over medium heat. Add the marinated pork and shrimp, along with sliced onion, and sauté until fragrant. Pour in the pork or chicken broth and bring to a simmer. Let it cook for about 10-15 minutes to develop flavors. While the broth is simmering, cook the rice noodles according to package instructions. Drain and rinse under cold water. To serve, divide the cooked noodles among serving bowls. Ladle the hot broth and meat over the noodles. Top with bean sprouts, chopped scallions, chopped cilantro, chopped peanuts, and crispy rice crackers. Serve with lime wedges and sliced chili peppers on the side. Enjoy the vibrant flavors of Mi Quang!'
),
(
    'VN-0015',
    'Vietnamese Dish',
    'Nem Nuong (Vietnamese Grilled Pork Skewers)',
    'Nem Nuong is a Vietnamese dish consisting of seasoned ground pork grilled on skewers. The pork is flavored with garlic, shallots, fish sauce, and sugar, giving it a savory and slightly sweet taste. Nem Nuong is often served as an appetizer or as part of a larger meal, and it is typically accompanied by lettuce leaves, fresh herbs, and rice paper for wrapping.',
    'data/images/viD_img/Nem Nuong (Vietnamese Grilled Pork Skewers) 1.jpg',
    '500g ground pork, 3 cloves garlic (minced), 1 shallot (minced), 2 tablespoons fish sauce, 1 tablespoon sugar, 1 teaspoon black pepper, Bamboo skewers (soaked in water), Lettuce leaves, Fresh herbs (cilantro, mint, Thai basil), Rice paper, Dipping sauce (nuoc cham) for serving',
    'In a bowl, mix together ground pork, minced garlic, minced shallot, fish sauce, sugar, and black pepper until well combined. Cover the bowl and let the mixture marinate in the refrigerator for at least 1 hour, or overnight for best results. Preheat a grill or grill pan over medium-high heat. Thread the marinated pork onto bamboo skewers, shaping them into sausage-like shapes. Grill the skewers for about 3-4 minutes on each side, or until cooked through and slightly charred. While the pork skewers are grilling, prepare lettuce leaves, fresh herbs, and rice paper for wrapping. To serve, place a lettuce leaf and a few sprigs of fresh herbs on a piece of rice paper. Add a grilled pork skewer and roll it up tightly. Serve the Nem Nuong rolls with dipping sauce (nuoc cham) on the side. Enjoy!'
),
(
    'VN-0016',
    'Vietnamese Dish',
    'Pho Bo (Beef Pho)',
    'Pho Bo is a traditional Vietnamese soup consisting of beef broth, rice noodles, and thinly sliced beef. It is flavored with aromatic spices like star anise, cinnamon, and cloves, and it is typically served with fresh herbs, bean sprouts, lime wedges, and chili peppers on the side. Pho Bo is a popular street food dish enjoyed throughout Vietnam.',
    'data/images/viD_img/Pho Bo (Beef Pho) 1.jpg',
    'For the broth: 3 liters beef broth, 1 onion (halved), 1 knob of ginger (sliced), 3-4 shallots (peeled), 3-4 garlic cloves (peeled), 2-3 star anise, 2-3 cinnamon sticks, 2-3 cloves, 1-2 cardamom pods, 1 tablespoon coriander seeds, 1 tablespoon sugar, 1-2 tablespoons fish sauce, Salt to taste, For the bowls: 500g beef sirloin or flank (thinly sliced), 400g rice noodles (pho noodles), Garnishes: bean sprouts, fresh herbs (cilantro, Thai basil, mint), lime wedges, thinly sliced onion, thinly sliced chili peppers, Optional: hoisin sauce, sriracha sauce',
    'In a large pot, bring beef broth to a boil. Add onion, ginger, shallots, garlic, star anise, cinnamon sticks, cloves, cardamom pods, coriander seeds, sugar, and fish sauce. Reduce heat to low and let the broth simmer for at least 1 hour, skimming off any foam that rises to the surface. While the broth is simmering, prepare the rice noodles according to package instructions. Drain and rinse under cold water. Thinly slice the beef sirloin or flank against the grain. To serve, divide the cooked rice noodles among serving bowls. Top with slices of raw beef. Ladle the hot broth over the beef and noodles, ensuring that the beef slices are submerged in the hot broth to cook them. Serve immediately with garnishes such as bean sprouts, fresh herbs, lime wedges, thinly sliced onion, and chili peppers. Optional: Serve with hoisin sauce and sriracha sauce on the side for dipping or added flavor. Enjoy the comforting flavors of Pho Bo!'
),
(
    'CH-0001',
    'Chinese Dish',
    'Beijing Kaoya',
    'Beijing Kaoya, also known as Peking Duck, is a famous Chinese dish that features crispy duck skin and tender meat wrapped in thin pancakes with hoisin sauce, cucumber, and green onions. The duck is traditionally roasted until the skin is golden and crispy, resulting in a delightful combination of flavors and textures.',
    'data/images/chiD_img/beijing_kaoya.jpg',
    '1 whole duck (about 5-6 pounds), 2 tablespoons honey, 2 tablespoons soy sauce, 1 tablespoon Chinese five-spice powder, Salt, to taste, Thin pancakes (store-bought or homemade), Hoisin sauce, Sliced cucumbers, Sliced green onions',
    'Preheat the oven to 350°F (175°C). Remove any excess fat from the duck and rinse it under cold water. Pat dry with paper towels. In a small bowl, mix together the honey, soy sauce, and Chinese five-spice powder. Brush the duck with the honey mixture, making sure to coat it evenly. Sprinkle salt over the duck, inside and out. Place the duck on a rack in a roasting pan, breast side up. Roast the duck in the preheated oven for 1.5 to 2 hours, or until the skin is golden brown and crispy, and the internal temperature reaches 165°F (75°C). Remove the duck from the oven and let it rest for 10-15 minutes before carving. To serve, carve the duck into thin slices and arrange them on a platter. Serve the sliced duck with thin pancakes, hoisin sauce, sliced cucumbers, and green onions. To eat, spread hoisin sauce on a pancake, add a few slices of duck, some cucumber, and green onions, then roll it up and enjoy!'
),
(
    'CH-0002',
    'Chinese Dish',
    'Crystal Dumplings',
    'Crystal Dumplings, also called Har Gow, are translucent dumplings filled with shrimp and sometimes bamboo shoots. The dumpling wrapper is made from a combination of wheat starch and tapioca flour, giving it a chewy yet delicate texture. These dumplings are typically steamed and served as a delicious appetizer or snack.',
    'data/images/chiD_img/crystal_dumplings.jpg',
    'For the dumpling wrapper: 1 cup wheat starch, ¼ cup tapioca flour, ¾ cup boiling water, For the filling: ½ pound raw shrimp (peeled, deveined, and chopped), 2 tablespoons bamboo shoots (finely chopped), 1 tablespoon soy sauce, 1 teaspoon sesame oil, ½ teaspoon sugar, Pinch of white pepper, For assembling: Cornstarch, for dusting',
    'To make the dumpling wrapper, combine the wheat starch and tapioca flour in a mixing bowl. Gradually add the boiling water to the flour mixture, stirring constantly, until a dough forms. Knead the dough until smooth and elastic. Cover with a damp cloth and let it rest for 20-30 minutes. While the dough is resting, prepare the filling. In a separate bowl, mix together the chopped shrimp, bamboo shoots, soy sauce, sesame oil, sugar, and white pepper. Divide the dough into small pieces and roll each piece into a ball. Keep the dough covered with a damp cloth to prevent it from drying out. On a lightly floured surface, flatten each dough ball into a thin circle, about 3 inches in diameter. Place a spoonful of filling in the center of each dough circle. Fold the edges of the dough over the filling and pinch to seal, forming a pleated edge. Repeat with the remaining dough and filling. Steam the dumplings in a bamboo steamer lined with parchment paper or cabbage leaves, for 8-10 minutes, or until the filling is cooked through and the wrapper is translucent. Serve the crystal dumplings hot with soy sauce or your favorite dipping sauce.'
),
(
    'CH-0003',
    'Chinese Dish',
    'Dapanji',
    'Dapanji, or Big Plate Chicken, is a hearty Xinjiang dish consisting of tender chicken pieces, potatoes, bell peppers, and onions cooked in a rich and spicy tomato-based sauce. This dish is known for its bold flavors and generous portions, making it a favorite among those who enjoy spicy and comforting meals.',
    'data/images/chiD_img/dapanji.jpg',
    '2 pounds chicken thighs (cut into bite-sized pieces), 2 potatoes (peeled and cut into chunks), 2 bell peppers (seeded and sliced), 1 onion (sliced), 4 cloves garlic (minced), 2 tablespoons vegetable oil, 1 can (14 oz) diced tomatoes, 2 tablespoons tomato paste, 2 cups chicken broth, 2 tablespoons soy sauce, 1 tablespoon chili powder, 1 teaspoon ground cumin, 1 teaspoon paprika, Salt and pepper (to taste), Fresh cilantro (for garnish)',
    'In a large skillet or wok, heat the vegetable oil over medium-high heat. Add the chicken pieces to the skillet and cook until browned on all sides, about 5-7 minutes. Remove from the skillet and set aside. In the same skillet, add the potatoes and cook until lightly browned, about 5 minutes. Add the bell peppers, onion, and garlic, and cook for another 3-4 minutes. Stir in the diced tomatoes, tomato paste, chicken broth, soy sauce, chili powder, cumin, paprika, salt, and pepper. Bring to a simmer. Return the chicken pieces to the skillet and stir to combine with the sauce and vegetables. Cover and cook over medium-low heat for 20-25 minutes, or until the chicken is cooked through and the potatoes are tender. Adjust seasoning with salt and pepper, if needed. Garnish with fresh cilantro before serving. Serve hot with steamed rice or crusty bread.'
),
(
    'CH-0004',
    'Chinese Dish',
    'Dao xiao mian',
    'Dao xiao mian, or Big Wok Noodles, is a popular street food dish originating from Lanzhou, China. It features hand-pulled noodles served in a flavorful beef broth topped with sliced beef, green onions, and sometimes cilantro. This dish is beloved for its simplicity and satisfying taste.',
    'data/images/chiD_img/dao_xiao_mian.jpg',
    'For the noodles: 2 cups all-purpose flour, ¾ cup water, Pinch of salt, For the broth: 6 cups beef broth, 2 tablespoons soy sauce, 1 tablespoon dark soy sauce, 1 tablespoon Shaoxing wine, 1 tablespoon sugar, For the toppings: ½ pound beef sirloin (thinly sliced), 2 green onions (chopped), Optional: chopped cilantro, chili oil',
    'To make the noodles, combine the all-purpose flour, water, and salt in a mixing bowl. Knead the dough until smooth and elastic. Cover with a damp cloth and let it rest for 30 minutes. Divide the dough into small balls and roll each ball into a thin rope. Stretch and pull the dough rope into long, thin noodles. Repeat with the remaining dough balls. Bring a pot of water to a boil. Add the noodles and cook for 1-2 minutes, or until they float to the surface. Drain and rinse under cold water. Set aside. In a large pot, combine the beef broth, soy sauce, dark soy sauce, Shaoxing wine, and sugar. Bring to a simmer. Add the sliced beef to the broth and cook for 1-2 minutes, or until just cooked through. Divide the cooked noodles among serving bowls. Ladle the hot broth and beef over the noodles. Top with chopped green onions and optional cilantro. Serve hot with chili oil on the side, if desired.'
),
(
    'CH-0005',
    'Chinese Dish',
    'Fried Rice',
    'Fried Rice is a versatile Chinese dish made by stir-frying cooked rice with various ingredients such as eggs, vegetables, and meat or seafood. It is seasoned with soy sauce, oyster sauce, and other flavorings, giving it a savory and satisfying taste. Fried rice is a popular choice for using up leftover ingredients and is enjoyed as a quick and delicious meal.',
    'data/images/chiD_img/fried_rice.jpg',
    '3 cups cooked rice, preferably chilled, 2 eggs (lightly beaten), 1 cup mixed vegetables (peas, carrots, corn), ½ cup cooked protein (chicken, shrimp, ham, etc.) (diced), 2 tablespoons vegetable oil, 2 cloves garlic (minced), 2 green onions (chopped), 2 tablespoons soy sauce, 1 tablespoon oyster sauce, Salt and pepper, to taste',
    'Heat 1 tablespoon of vegetable oil in a large skillet or wok over medium-high heat. Add the beaten eggs to the skillet and scramble until cooked through. Remove from the skillet and set aside. Add the remaining tablespoon of vegetable oil to the skillet. Add the minced garlic and cook until fragrant, about 30 seconds. Add the mixed vegetables and cooked protein to the skillet. Stir-fry until heated through. Add the cooked rice to the skillet, breaking up any clumps with a spatula. Drizzle the soy sauce and oyster sauce over the rice. Stir-fry until evenly coated. Add the scrambled eggs back to the skillet. Stir-fry until everything is heated through and evenly distributed. Season with salt and pepper, to taste. Garnish with chopped green onions before serving. Serve hot as a main dish or side dish.'
),
(
    'CH-0006',
    'Chinese Dish',
    'Mapo Tofu',
    'Mapo Tofu is a classic Sichuan dish featuring soft tofu cubes and minced meat cooked in a spicy and flavorful sauce made from doubanjiang (broad bean paste), fermented black beans, garlic, ginger, and Sichuan peppercorns. It is typically garnished with chopped green onions and served with steamed rice, providing a satisfyingly spicy and numbing sensation.',
    'data/images/chiD_img/mapo_tofu.jpg',
    '1 block (14 oz) firm tofu (cut into cubes), ½ pound ground pork or beef, 2 tablespoons doubanjiang (Sichuan chili bean paste), 1 tablespoon fermented black beans (rinsed and chopped), 2 cloves garlic (minced), 1 teaspoon ginger (minced), 1 cup chicken or vegetable broth, 2 tablespoons soy sauce, 1 tablespoon Shaoxing wine, 1 teaspoon sugar, 1 teaspoon Sichuan peppercorns (toasted and ground), 2 tablespoons cornstarch mixed with 2 tablespoons water (slurry), 2 green onions (chopped), 2 tablespoons vegetable oil',
    'Heat the vegetable oil in a large skillet or wok over medium heat. Add the minced garlic, ginger, and fermented black beans to the skillet. Stir-fry until fragrant, about 30 seconds. Add the ground pork or beef to the skillet. Cook until browned, breaking it up with a spoon. Stir in the doubanjiang and cook for another minute. Add the chicken or vegetable broth, soy sauce, Shaoxing wine, sugar, and ground Sichuan peppercorns. Bring to a simmer. Gently add the tofu cubes to the skillet. Simmer for 5-7 minutes, allowing the tofu to absorb the flavors of the sauce. Stir in the cornstarch slurry to thicken the sauce. Cook until the sauce has thickened and coats the back of a spoon. Adjust seasoning with salt and pepper, if needed. Garnish with chopped green onions before serving. Serve hot with steamed rice.'
),
(
    'CH-0007',
    'Chinese Dish',
    'Spicy Kung Pao Chicken',
    'Spicy Kung Pao Chicken is a popular Chinese stir-fry dish that features tender chicken pieces, peanuts, and dried chili peppers cooked in a spicy and tangy sauce made from soy sauce, vinegar, sugar, and Sichuan peppercorns. It is often garnished with green onions and served with steamed rice, offering a delightful balance of heat and flavor.',
    'data/images/chiD_img/spicy_kung_pao_chicken.jpg',
    '1 pound boneless, skinless chicken breasts (cut into bite-sized pieces), ½ cup roasted peanuts, 4-6 dried red chili peppers (chopped), 2 cloves garlic (minced), 1-inch piece ginger (minced), 2 green onions (chopped), 2 tablespoons vegetable oil, For the marinade: 1 tablespoon soy sauce, 1 tablespoon Shaoxing wine, 1 teaspoon cornstarch, For the sauce: 2 tablespoons soy sauce, 1 tablespoon rice vinegar, 1 tablespoon hoisin sauce, 1 tablespoon sugar, 1 teaspoon cornstarch dissolved in 2 tablespoons water (slurry)',
    'In a bowl, combine the chicken pieces with the marinade ingredients: soy sauce, Shaoxing wine, and cornstarch. Let marinate for 15-30 minutes. In a separate bowl, mix together the sauce ingredients: soy sauce, rice vinegar, hoisin sauce, sugar, and cornstarch slurry. Set aside. Heat the vegetable oil in a large skillet or wok over high heat. Add the chopped dried red chili peppers to the skillet. Stir-fry for 30 seconds to release the aroma. Add the marinated chicken pieces to the skillet. Stir-fry until cooked through and slightly browned, about 5-7 minutes. Stir in the minced garlic and ginger. Cook for another minute. Pour the sauce mixture into the skillet. Stir well to coat the chicken evenly. Add the roasted peanuts and chopped green onions to the skillet. Stir-fry for another minute, until everything is heated through and the sauce has thickened. Adjust seasoning with soy sauce or sugar, if needed. Garnish with additional chopped green onions before serving. Serve hot with steamed rice.'
),
(
    'CH-0008',
    'Chinese Dish',
    'Stir-fried Beef with Rice Noodles',
    'Stir-fried Beef with Rice Noodles is a popular Cantonese dish consisting of tender beef slices, flat rice noodles, and crisp vegetables stir-fried together in a savory sauce made from oyster sauce, soy sauce, and other seasonings. This dish is quick and easy to prepare, making it a perfect choice for a delicious weeknight meal.',
    'data/images/chiD_img/stir_fried_beef_with_rice_noodles.jpg',
    '8 oz flat rice noodles, 8 oz beef sirloin (thinly sliced), 2 tablespoons vegetable oil, 2 cloves garlic (minced), 1 onion (sliced), 1 bell pepper (sliced), 2 cups broccoli florets, 2 tablespoons oyster sauce, 2 tablespoons soy sauce, 1 tablespoon sugar, 1 teaspoon sesame oil, Salt and pepper to taste, Chopped green onions for garnish',
    'Cook the rice noodles according to the package instructions. Drain and set aside. In a bowl, marinate the sliced beef with soy sauce and sesame oil. Set aside for 10-15 minutes. Heat 1 tablespoon of vegetable oil in a large skillet or wok over high heat. Add the marinated beef to the skillet. Stir-fry until browned and cooked through, about 2-3 minutes. Remove from the skillet and set aside. In the same skillet, heat the remaining tablespoon of vegetable oil. Add the minced garlic and cook until fragrant, about 30 seconds. Add the sliced onion, bell pepper, and broccoli florets to the skillet. Stir-fry until crisp-tender, about 3-4 minutes. Return the cooked beef to the skillet. Add the cooked rice noodles, oyster sauce, soy sauce, and sugar. Stir-fry until everything is heated through and evenly coated with the sauce. Adjust seasoning with salt and pepper, if needed. Garnish with chopped green onions before serving. Serve hot as a main dish.'
),
(
    'CH-0009',
    'Chinese Dish',
    'Sweet and Sour Pork Tenderloin',
    'Sweet and Sour Pork Tenderloin is a classic Chinese dish featuring crispy pork tenderloin pieces coated in a tangy sweet and sour sauce made from vinegar, sugar, ketchup, and soy sauce. It is typically served with bell peppers, onions, and pineapple chunks, creating a colorful and flavorful dish that is sure to satisfy your cravings.',
    'data/images/chiD_img/sweet_and_sour_pork_tenderloin.jpg',
    '1 pound pork tenderloin, cut into bite-sized pieces, ½ cup cornstarch, 2 eggs, beaten, Vegetable oil, for frying, 1 onion, cut into chunks, 1 bell pepper, cut into chunks, 1 cup pineapple chunks, For the sweet and sour sauce: ½ cup ketchup, ¼ cup rice vinegar, ¼ cup brown sugar, 2 tablespoons soy sauce, 1 tablespoon cornstarch dissolved in 2 tablespoons water (slurry)',
    'In a bowl, toss the pork tenderloin pieces with cornstarch until evenly coated. Dip the cornstarch-coated pork pieces into the beaten eggs, shaking off any excess. Heat vegetable oil in a large skillet or wok over medium-high heat. Fry the pork pieces in batches until golden brown and crispy, about 3-4 minutes per side. Remove from the skillet and drain on paper towels. In the same skillet, add a little more oil if needed. Add the onion and bell pepper chunks. Stir-fry until crisp-tender, about 3-4 minutes. Add the pineapple chunks to the skillet and cook for another minute. In a small bowl, whisk together the ketchup, rice vinegar, brown sugar, and soy sauce to make the sweet and sour sauce. Pour the sauce into the skillet with the vegetables. Bring to a simmer. Stir in the cornstarch slurry to thicken the sauce. Cook until the sauce has thickened and coats the back of a spoon. Return the fried pork pieces to the skillet. Stir until evenly coated with the sauce. Adjust seasoning with soy sauce or sugar, if needed. Serve hot with steamed rice.'
);

-- CREATE TABLE comments (
--     comment_id SERIAL PRIMARY KEY,
--     commenter_name VARCHAR(100) NOT NULL,
--     comment_content TEXT NOT NULL,
--     created_at DATE DEFAULT CURRENT_DATE
-- );

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    commenter_name VARCHAR(100) NOT NULL,
    comment_content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);