// components/TeamSection12.tsx
interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
}

function TeamCard({ img, name, title }: TeamCardPropsType) {
  return (
    <div className="rounded-lg bg-[#FAFAFA] p-6 shadow-none">
      <div className="text-center">
        {/* Avatar */}
        <img
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-6 object-cover object-top"
        />
        
        {/* Name */}
        <h5 className="text-lg font-medium text-blue-gray-900 mb-1">
          {name}
        </h5>
        
        {/* Title */}
        <p className="text-base font-semibold text-gray-600 mb-4">
          {title}
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3">
          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <i className="fab fa-twitter text-lg text-gray-600"></i>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <i className="fab fa-linkedin text-lg text-gray-600"></i>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <i className="fab fa-dribbble text-lg text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const members = [
  {
    img: `https://www.material-tailwind.com/img/avatar1.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar2.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar5.jpg`,
    name: "Nora Hazel",
    title: "UI/UX Designer",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar4.jpg`,
    name: "Otto Gonzalez",
    title: "Marketing Specialist",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar6.jpg`,
    name: "Emma Roberts",
    title: "UI Designer",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar3.jpg`,
    name: "William Pearce",
    title: "Web Developer",
  },
  {
    img: "https://www.material-tailwind.com/image/avatar7.svg",
    name: "Bruce Mars",
    title: "UI/UX Designer",
  },
  {
    img: "https://www.material-tailwind.com/image/avatar8.svg",
    name: "Annie Sprrat",
    title: "Marketing Specialist",
  },
];

export function Mentor() {
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-28">
          <h6 className="text-lg text-blue-gray-900 mb-2">
            Meet the Leaders 
          </h6>
          <h1 className="text-2xl lg:text-4xl font-bold text-blue-gray-900 my-2">
            Behind the Success: Our Dedicated Team
          </h1>
          <p className="mx-auto w-full text-gray-500 max-w-4xl text-lg">
            From visionary leadership to creative talent, and technical wizards, 
            each team member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mentor;