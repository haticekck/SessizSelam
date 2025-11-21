import { TreeCard } from "../TreeCard";
import oakImage from "@assets/generated_images/Oak_tree_photograph_9da21497.png";

export default function TreeCardExample() {
  const mockTree = {
    id: 1,
    name: "Oak",
    scientificName: "Quercus",
    description: "Oak trees are among the most common trees in forests worldwide. They are known for their strength, longevity, and the acorns they produce.",
    habitat: "Temperate forests",
    height: "50-85 feet",
    lifespan: "200-300 years",
    characteristics: ["Lobed leaves", "Produces acorns"],
    imageUrl: oakImage,
  };

  return (
    <div className="p-8 max-w-sm">
      <TreeCard 
        tree={mockTree} 
        completed={false}
        onSelect={(id) => console.log(`Tree ${id} selected`)} 
      />
    </div>
  );
}
