import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Food } from "@/types/food";

interface FoodCardProps {
  food: Food;
  index: number;
  onMoreDetails: (food: Food) => void;
}

export const FoodCard = ({ food, index, onMoreDetails }: FoodCardProps) => {
  const getPrimaryDosha = () => food.ayurvedicProperties.prakriti[0];
  
  const typeColors = {
    Vata: "bg-gradient-purple",
    Pitta: "bg-gradient-green", 
    Kapha: "bg-gradient-purple-blue"
  };

  return (
    <motion.div
      className="glass-card rounded-2xl p-6 hover:shadow-glow-purple transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <Badge className={`${typeColors[getPrimaryDosha()]} text-white border-0 text-xs`}>
            {food.category}
          </Badge>
        </div>
        {food.nutritionalInfo.cholesterol === 0 && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
              0 Cholesterol
            </Badge>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{food.name}</h3>
      
      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <div className="text-muted-foreground">
          <span className="text-foreground font-medium">{food.nutritionalInfo.calories}</span> cal
        </div>
        <div className="text-muted-foreground">
          <span className="text-foreground font-medium">{food.nutritionalInfo.protein}g</span> protein
        </div>
        <div className="text-muted-foreground">
          <span className="text-foreground font-medium">{food.nutritionalInfo.carbs}g</span> carbs
        </div>
        <div className="text-muted-foreground">
          <span className="text-foreground font-medium">{food.nutritionalInfo.fat}g</span> fat
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Badge className={`${typeColors[getPrimaryDosha()]} text-white border-0`}>
          {getPrimaryDosha()} Dosha
        </Badge>
        <div className="text-xs text-muted-foreground">
          {food.ayurvedicProperties.dominantTaste[0]} Taste
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {food.properties.slice(0, 3).map((property, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs">
            {property}
          </Badge>
        ))}
      </div>

      <Button 
        variant="glass" 
        className="w-full"
        onClick={() => onMoreDetails(food)}
      >
        More Details
      </Button>
    </motion.div>
  );
};