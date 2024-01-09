import AboutItem from "./AboutItem";
import { aboutData } from "./details";

const AboutProjectContainer = () => {
  return (
    <section className="bg-white mb-4 rounded-md border-[1px] relative m-auto max-w-[350px] md:max-w-[700px]  flex flex-col gap-4 py-10 px-6">
      <h2 className="font-bold text-lg">About this project</h2>
      <p className="text-gray-500 text-sm">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-gray-500 text-sm leading-6">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="flex flex-col gap-4">
        {aboutData.map((elem, index) => {
          return (
            <AboutItem
              name={elem.name}
              pledge={elem.pledge}
              text={elem.text}
              left={elem.left}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutProjectContainer;
