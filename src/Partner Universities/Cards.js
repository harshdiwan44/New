import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Example() {
  return (
    <Card className="mt-6 w-96 ">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://i.ibb.co/LZw0n6g/demo.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2"></Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small"></Typography>
        <Typography variant="small" color="grey" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
}
