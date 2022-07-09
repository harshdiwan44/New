import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Real from "./Real";

export default function Example() {
  return (
    <Card className="mt-6 w-96">
      <Real />
    </Card>
  );
}
