import { Button } from "@nx-w/ui";
import { cn } from "@nx-w/utils";
import { ArrowUpIcon } from "lucide-react";


export default function Index() {
  return (
    <div
      className={cn([
        "flex flex-row",
        "items-center justify-center",
        "h-screen w-screen",
        "bg-gray-900",
      ])}
    >
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
