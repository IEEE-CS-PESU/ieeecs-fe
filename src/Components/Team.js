import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "../utils/TeamCard";
import EventsBanner from "../utils/EventsBanner";
import Loading from "../utils/Loading";

const Team = React.forwardRef((props, ref) => {
	//Defining the state to Store the result of the below Axios GET request
	const [, setTeam] = useState([]);

	//Hooks to show current / past members

	const [present, setPresent] = useState(true);
	const [currData, setCurrData] = useState([]);
	const [xData, setXData] = useState([]);

	//Axios Get request
	const url = "https://ieeecs-backend.vercel.app";
	useEffect(() => {
		axios
			.get(`${url}/coreteam`)
			.then((res) => {
				
				let data = res.data;
				let temp = [];
				
				const currentMembers = (data) => {
					
					for (let i = 0; i < data.length; i++) {
						if(parseInt(data[i].Id) !== -1)
						{
							temp.push(data[i]);
						}
					};
					//sort according to id
					temp.sort((a, b) => {
						return Number(a.Id) - Number(b.Id);
					});

					setCurrData(temp);

				}

				

				const checkXMembers = (data) => {
					let temp = [];
					for (let i = 0; i < data.length; i++) {
						if(parseInt(data[i].Id) === -1)
						{
							temp.push(data[i]);
						}
					};

					setXData(temp);
				};

				//Sorting Function according to id field
				const sortedObj = temp.sort((a, b) => {
					return Number(a.Id) - Number(b.Id);
				});

				console.log(sortedObj);
				setTeam(sortedObj);

				currentMembers(data)
				checkXMembers(data)

				console.log(currData)
				console.log(xData)
			})
			.catch((err) => {
				console.log("Error");
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//For Loading Symbol
	const loading = [<div></div>, <Loading />, <div></div>];

	//Testing
	/* 
  Team.forEach((item) => {
    console.log((item.id))
  })
  */

	const styles = {
		active: {
			backgroundColor: "#FACC17",
			color: "white",
			fontWeight: "700",
		},

		inActive: {},
	};

	// top-[-115px] md:top-[-150px]

	return (
		<>
			<div ref={ref} className="h-auto bg-slate-100">
				<section className="max-w-6xl text-center mx-auto px-4 sm:px-6 lg:px-4 pb-12 md:pb-24">
					<div data-aos="fade-up" className="flex flex-col items-center">
						<span className="text-gray-200">
							<div className="md:text-[150px] text-[105px] px-3">011001</div>
						</span>
						<p className="text-[#000000] font-sans md:text-7xl text-5xl absolute top-16 md:top-20 ">
							Our Team
						</p>
					</div>

					<div className="mb-10 flex justify-center">
						<button
							style={present ? styles.active : styles.inActive}
							className="p-2 text-[1.2rem] rounded-tl-full rounded-bl-full border-2 border-yellow-400"
							onClick={(prev) => {
								setPresent(true);
							}}
						>
							Current Members
						</button>

						<button
							style={!present ? styles.active : styles.inActive}
							className="p-2 text-[1.2rem] rounded-tr-full rounded-br-full border-2 border-yellow-400 "
							onClick={(prev) => {
								setPresent(false);
							}}
						>
							Ex Members
						</button>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
						{currData.length > 0 || xData.length > 0
							? (present === true ? currData : xData).map((item, ind) => {
									return <TeamCard data={item} key={ind + 1} pres={present} />;
							  })
							: loading.map((item, ind) => {
									return ind % 2 === 0 ? (
										<div />
									) : (
										<div className="text-center mx-auto">
											<Loading />
										</div>
									);
							  })}
					</div>

					{/* <a href="/exmembers" rel="noopener noreferrer" target="_blank" type="button" className="text-white mt-10 bg-[#F8A219] hover:bg-[#F8A219]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-xl animate-bounce px-5 py-4 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
            <FaUniversalAccess className="mr-5" />
            View Past Members
          </a> */}
				</section>
			</div>
			<EventsBanner />
		</>
	);
});

export default Team;

//  {/* finalData && finalData.length === 0
//                 ? loading.map((iii, i) => {
//                   return (
//                     <div className="mx-auto">
//                       {i % 2 === 0 ? <div></div> : <Loading />}
//                     </div>
//                   );
//                 })
//                 : finalData.map((iii, i) => {
//                   return <TeamCard data={iii} key={i} />;
//                 }) */}
