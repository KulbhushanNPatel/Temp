import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Leaf, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Food } from "@/types/food";

interface FoodModalProps {
  food: Food | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FoodModal = ({ food, isOpen, onClose }: FoodModalProps) => {
  if (!food) return null;

  const getPrimaryDosha = () => food.ayurvedicProperties.prakriti[0];
  
  const typeColors = {
    Vata: "bg-gradient-purple",
    Pitta: "bg-gradient-green", 
    Kapha: "bg-gradient-purple-blue"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{food.name}</h2>
                  <div className="flex gap-2">
                    <Badge className="bg-primary/20 text-primary">{food.category}</Badge>
                    <Badge variant="outline">{food.mealType.join(", ")}</Badge>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Nutrition Facts */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-neon-green flex items-center">
                    <Droplets className="h-5 w-5 mr-2" />
                    Nutrition Facts
                  </h3>
                  <div className="space-y-3 bg-card/30 rounded-xl p-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Calories</span>
                      <span className="font-medium">{food.nutritionalInfo.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Protein</span>
                      <span className="font-medium">{food.nutritionalInfo.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Carbohydrates</span>
                      <span className="font-medium">{food.nutritionalInfo.carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fat</span>
                      <span className="font-medium">{food.nutritionalInfo.fat}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fiber</span>
                      <span className="font-medium">{food.nutritionalInfo.fiber}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cholesterol</span>
                      <span className={`font-medium ${food.nutritionalInfo.cholesterol === 0 ? 'text-green-400' : ''}`}>
                        {food.nutritionalInfo.cholesterol}mg
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sodium</span>
                      <span className="font-medium">{food.nutritionalInfo.sodium}mg</span>
                    </div>
                  </div>
                </div>

                {/* Ayurvedic Properties */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-neon-purple flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Ayurvedic Properties
                  </h3>
                  <div className="space-y-4 bg-card/30 rounded-xl p-4">
                    <div>
                      <h4 className="font-medium mb-2">Dosha Constitution:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.ayurvedicProperties.prakriti.map((dosha, idx) => (
                          <Badge key={idx} className={`${typeColors[dosha]} text-white border-0`}>
                            {dosha}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Dominant Taste:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.ayurvedicProperties.dominantTaste.map((taste, idx) => (
                          <Badge key={idx} variant="secondary">
                            {taste}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Qualities (Gunas):</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.ayurvedicProperties.qualities.map((quality, idx) => (
                          <Badge key={idx} variant="outline">
                            {quality}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Digestive Strength:</h4>
                      <Badge variant={food.ayurvedicProperties.digestiveStrength === 'Strong' ? 'default' : 
                                   food.ayurvedicProperties.digestiveStrength === 'Medium' ? 'secondary' : 'destructive'}>
                        {food.ayurvedicProperties.digestiveStrength} Agni Required
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Seasonal & Timing Recommendations */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-neon-green flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Best Consumed
                  </h3>
                  <div className="space-y-4 bg-card/30 rounded-xl p-4">
                    <div>
                      <h4 className="font-medium mb-2">Season:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.ayurvedicProperties.bestSeason.map((season, idx) => (
                          <Badge key={idx} variant="secondary">
                            {season}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Time of Day:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.ayurvedicProperties.timeOfDay.map((time, idx) => (
                          <Badge key={idx} variant="outline">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Properties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {food.properties.map((property, idx) => (
                          <Badge key={idx} variant="secondary">
                            {property}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {food.allergens.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2 text-orange-400">Allergens:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.allergens.map((allergen, idx) => (
                            <Badge key={idx} variant="destructive">
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};