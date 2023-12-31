import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export function EcommerceCard(props: { id:number;image: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
    const handleAddToCart = () => {
        const product = {
          id: props.id,
          name: props.name,
          price: props.price,
          description: props.description,
        };
    
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const updatedCart = [...storedCartItems, product];
    
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      };

    return (
        <Card >
            <Link href={`/productdetails/${props.id}`}>
            <CardHeader shadow={false} floated={false} >
                <img
                    src={props.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {props.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        {props.price}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {props.description}
                </Typography>
            </CardBody>
            </Link>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    onClick={handleAddToCart} 
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
    
}