import {
  // Accordion,
  // AccordionItem,
  Button,
  // AccordionTrigger,
  // AccordionContent,
  // AlertDialog,
  // AlertDialogAction,
  // AlertDialogCancel,
  // AlertDialogContent,
  // AlertDialogDescription,
  // AlertDialogFooter,
  // AlertDialogHeader,
  // AlertDialogTitle,
  // AlertDialogTrigger,
} from '@nx-w/ui';

import { cn } from '@nx-w/utils';
// import { ArrowUpIcon } from "lucide-react";

export default function Index() {
  return (
    <div
      className={cn([
        'flex flex-row',
        'items-center justify-center',
        'h-screen w-screen',
        'bg-gray-900',
      ])}
    >
      {/* <AlertDialog>
        <AlertDialogTrigger asChild> */}
          <Button variant="outline">Show Dialog</Button>
        {/* </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    </div>
  );
}
