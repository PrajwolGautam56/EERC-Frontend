import React from "react";

const icons = [
  {
    name: "Disaster Risk Reduction & Management",
    imageUrl: "images/icons/1.png",
  },
  {
    name: "Development Planning & Management",
    imageUrl: "images/icons/2.png",
  },
  {
    name: "Digital Mapping",
    imageUrl: "images/icons/3.png",
  },
  {
    name: "Land Reform & Management",
    imageUrl: "images/icons/4.png",
  },
  {
    name: "Climate Change & Environment",
    imageUrl: "images/icons/5.png",
  },
  {
    name: "Agriculture",
    imageUrl: "images/icons/6.png",
  },
  {
    name: "Geospatial Analysis",
    imageUrl: "images/icons/7.png",
  },
  {
    name: "Heritage Conservation & Promotion",
    imageUrl: "images/icons/8.png",
  },
  {
    name: "Training and Campaign",
    imageUrl: "images/icons/11.jpg",
  },
  {
    name: "Software and IT",
    imageUrl: "images/icons/12.png",
  }

  // More people...
];
function Area() {
  return (
    <div className="p-12 dotted">
      <div className="container mx-auto text-center">
      

        <div className="p-12 dotted">
          <div className="container mx-auto text-center p-5">
            <h2 className="title  font-bold text-2xl  text-amber-500	  mb-8">
              Areas of Work
            </h2>

            <br></br>
          </div>

          <div>
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 lg:ml-48">
              {icons.map((icon) => (
                <li key={icon.imageUrl} className="flex p-4">
                  <img
                    src={icon.imageUrl}
                    alt="Service 1"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <p className="p-2">{icon.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;

{
  /* <li className='flex lg:p-2 '>

<img
    src="public/images/services/1.png"
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Tool for Data Collection & Visualization</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Mapping</p>
</li>
 <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Web GIS</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Drone Consulting Services</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Geospatial Analysis</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Map Literacy Trainings</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Creative Graphic Design</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Participatory Community Mapping (Hybrid Approach)</p>
</li> */
}
