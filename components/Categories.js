import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg"
        title="Butter Chicken Naan"
      />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />

      <Text></Text>
    </ScrollView>
  );
};
export default Categories;
