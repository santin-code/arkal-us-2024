import { Bebas_Neue } from "next/font/google"
import Image from "next/image"

const bebas = Bebas_Neue({
	weight: '400',
	subsets: ['latin']
})

export default function Navbar() {

	return (
		<div>
			<div className={`nav-container w-full h-screen justify-center text-white md:w-screen lg:h-screen`}>
				<div className="w-full pb-40 md:pb-0 ">
					<div className="  w-11/12 pt-4 my-auto mx-auto md:w-9/12">
						<h1 className={`text-red-600 font-bold text-4xl  lg:text-6xl ${bebas.className}`}>netflix</h1>
						<h2 className={` text-color font-bold mt-28 text-4xl mt-14 text-center md:text-5xl  lg:text-6xl `}>Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.</h2>
					</div>
				</div>

				<div className="w-10/12 h-28 text-white p-4 rounded  flex items-center justify-center mx-auto  my-auto popcorn-background md:w-6/12 md:h-54 mt-4 lg:w-4/12 lg:mt-16">
					<div className=" sm:ml-4 md:m-10">
						<p className="text-color text-base md:text-xl font-bold">Ver Peliculas</p>
						<p className="text-color text-xs">Click aqui para iniciar</p>
					</div>
				</div>
			</div>

			<div className={`nav-container w-full h-screen justify-center text-white md:w-screen lg:h-screen`}>
				<div className="w-full pb-40 md:pb-0 ">
					<div className="  w-11/12 pt-4 my-auto mx-auto md:w-9/12">
						<h1 className={`text-red-600 font-bold text-4xl  lg:text-6xl ${bebas.className}`}>netflix</h1>
						<h2 className={` text-color font-bold mt-28 text-4xl mt-14 text-center md:text-5xl  lg:text-6xl `}>Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.</h2>
					</div>
				</div>

				<div className="w-10/12 h-28 text-white p-4 rounded  flex items-center justify-center mx-auto  my-auto popcorn-background md:w-6/12 md:h-54 mt-4 lg:w-4/12 lg:mt-16">
					<div className=" sm:ml-4 md:m-10">
						<p className="text-color text-base md:text-xl font-bold">Ver Peliculas</p>
						<p className="text-color text-xs">Click aqui para iniciar</p>
					</div>
				</div>
			</div>


		</div>

	)
}