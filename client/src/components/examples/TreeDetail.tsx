import { TreeDetail } from "../TreeDetail";
import tree1 from "@assets/tree11.jpeg";

export default function TreeDetailExample() {
  const mockTree = {
    id: 1,
    name: "Salkım Söğüt",
    scientificName: "Salix babylonica",
    description: `MERHABA!

Ben SÖĞÜT AĞACI

Nemli alanlara bayılırım.`,
    habitat: "",
    height: "",
    lifespan: "",
    characteristics: [],
    imageUrl: tree1,
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <TreeDetail 
        tree={mockTree} 
        onMarkAsRead={() => console.log("Marked as read")}
        isRead={false}
      />
    </div>
  );
}
