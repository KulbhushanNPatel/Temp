import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilterX } from "lucide-react";
import { FilterOptions } from "@/types/food";

interface FoodFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export const FoodFilters = ({ filters, onFiltersChange }: FoodFiltersProps) => {
  const normalizeValue = (value: string | boolean) => {
    if (value === "all") return "";
    return value;
  };

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: normalizeValue(value) });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: "",
      mealType: "",
      allergenFree: "",
      taste: "",
      prakriti: "",
      cholesterolFree: false,
      sortBy: "name",
      sortOrder: "asc",
    });
  };

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === "sortBy" || key === "sortOrder") return false;
    return value !== "" && value !== false;
  });

  return (
    <motion.div
      className="glass rounded-2xl p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Filter & Sort</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-neon-purple">
            <FilterX className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <Select value={filters.category || "all"} onValueChange={(value) => updateFilter("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Grains">Grains</SelectItem>
            <SelectItem value="Legumes">Legumes</SelectItem>
            <SelectItem value="Vegetables">Vegetables</SelectItem>
            <SelectItem value="Fruits">Fruits</SelectItem>
            <SelectItem value="Nuts & Seeds">Nuts & Seeds</SelectItem>
            <SelectItem value="Spices">Spices</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.mealType || "all"} onValueChange={(value) => updateFilter("mealType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Meal Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Meals</SelectItem>
            <SelectItem value="Breakfast">Breakfast</SelectItem>
            <SelectItem value="Lunch">Lunch</SelectItem>
            <SelectItem value="Dinner">Dinner</SelectItem>
            <SelectItem value="Snacks">Snacks</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.taste || "all"} onValueChange={(value) => updateFilter("taste", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Taste" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tastes</SelectItem>
            <SelectItem value="Sweet">Sweet</SelectItem>
            <SelectItem value="Sour">Sour</SelectItem>
            <SelectItem value="Salty">Salty</SelectItem>
            <SelectItem value="Bitter">Bitter</SelectItem>
            <SelectItem value="Pungent">Pungent</SelectItem>
            <SelectItem value="Astringent">Astringent</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.prakriti || "all"} onValueChange={(value) => updateFilter("prakriti", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Dosha" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Doshas</SelectItem>
            <SelectItem value="Vata">Vata</SelectItem>
            <SelectItem value="Pitta">Pitta</SelectItem>
            <SelectItem value="Kapha">Kapha</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="calories">Calories</SelectItem>
            <SelectItem value="protein">Protein</SelectItem>
            <SelectItem value="carbs">Carbs</SelectItem>
            <SelectItem value="fat">Fat</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.sortOrder} onValueChange={(value) => updateFilter("sortOrder", value as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Low to High</SelectItem>
            <SelectItem value="desc">High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={filters.cholesterolFree ? "default" : "outline"}
          size="sm"
          onClick={() => updateFilter("cholesterolFree", !filters.cholesterolFree)}
          className="text-xs"
        >
          Zero Cholesterol
        </Button>

        <Select value={filters.allergenFree || "all"} onValueChange={(value) => updateFilter("allergenFree", value)}>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Allergen Free" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Foods</SelectItem>
            <SelectItem value="Tree Nuts">Tree Nut Free</SelectItem>
            <SelectItem value="Dairy">Dairy Free</SelectItem>
            <SelectItem value="Gluten">Gluten Free</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <motion.div
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filters.category && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilter("category", "all")}>
              Category: {filters.category} ×
            </Badge>
          )}
          {filters.mealType && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilter("mealType", "all")}>
              Meal: {filters.mealType} ×
            </Badge>
          )}
          {filters.taste && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilter("taste", "all")}>
              Taste: {filters.taste} ×
            </Badge>
          )}
          {filters.prakriti && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilter("prakriti", "all")}>
              Dosha: {filters.prakriti} ×
            </Badge>
          )}
          {filters.cholesterolFree && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilter("cholesterolFree", false)}>
              Zero Cholesterol ×
            </Badge>
          )}
          {filters.allergenFree && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilter("allergenFree", "all")}>
              {filters.allergenFree} Free ×
            </Badge>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
