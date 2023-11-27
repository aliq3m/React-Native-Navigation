import { FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
function renderCategoryItem(itemData) {
  return <CategoryGridTile title={itemData.title} color={itemData.color} />;
}
function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item)}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
