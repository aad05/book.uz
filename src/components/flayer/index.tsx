import type { FC } from "react";
import { Button } from "../ui/button";
import { Heart, User, WalletCards } from "lucide-react";
import { toast } from "sonner";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const Flayer: FC = () => {
	return (
		<div className="w-[80%] m-auto mt-4">
			<div className="flex justify-between items-center">
				<div className="flex-1 flex gap-4 items-end">
					<Button variant={"link"}>Kitoblar</Button>
					<Button variant={"link"}>To'plamlar</Button>
					<Button variant={"link"}>Mualliflar</Button>
					<Button variant={"link"}>Chegirmalar</Button>
				</div>
				<div className="flex-1 flex gap-2 items-center justify-end">
					<Button
						onClick={() =>
							toast("Event has been created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							})
						}
						className="flex gap-2"
						variant={"outline"}
					>
						<WalletCards /> Savatcha
					</Button>
					<Button
						onClick={() =>
							toast("Event has been created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							})
						}
						className="flex gap-2"
						variant={"outline"}
					>
						<Heart /> Sevimlilar
					</Button>
					<Button
						onClick={() =>
							toast("Event has been created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							})
						}
						className="flex gap-2"
						variant={"outline"}
					>
						<User /> Profile
					</Button>
				</div>
			</div>
			<div className="flex gap-4 h-[488px] mt-4">
				<div className="w-[287px] bg-[#f5f5f5]  rounded-sm flex flex-col gap-2 items-start">
					<Button variant={"link"}>Badiiy Adabiyot</Button>
					<Button variant={"link"}>Bolalar Adabiyoti</Button>
					<Button variant={"link"}>O'quv Adabiyotlari</Button>
					<Button variant={"link"}>Diniy Adabiyotlar</Button>
					<Button variant={"link"}>Ilmiy ommabop</Button>
					<Button variant={"link"}>Psixologiya</Button>
					<Button variant={"link"}>Biznes adabiyot</Button>
					<Button variant={"link"}>Oila uchun</Button>
					<Button variant={"link"}>She'riy</Button>
					<Button variant={"link"}>Barcha janrlar</Button>
				</div>
				<div className="w-full rounded-sm flex justify-end">
					<Carousel className="w-[95%]">
						<CarouselContent>
							<CarouselItem>
								<img
									alt="random-img"
									src="https://366e203a.rocketcdn.me/wp-content/uploads/2022/10/Top-7-Most-Expensive-Books-In-The-World-e1680118425168.jpg"
									className="w-full h-[62%]"
								/>
							</CarouselItem>
							<CarouselItem>
								<img
									alt="random-img"
									src="https://cdn.pixabay.com/photo/2016/11/29/07/21/book-1868068_640.jpg"
									className="w-full h-[62%]"
								/>
							</CarouselItem>
							<CarouselItem>
								<img
									alt="random-img"
									src="https://media.istockphoto.com/id/1152333283/photo/people-standing-in-circle-and-enjoyed-reading-books-together.jpg?s=170667a&w=0&k=20&c=v3zUj-AtCSNgQLgqYxvtRDjTJK730ravbiYac5RdmZ0="
									className="w-full h-[62%]"
								/>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Flayer;
