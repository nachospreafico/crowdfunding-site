import ProjectHead from "./ProjectHead";
import ProjectStats from "./ProjectStats";

const ProjectContainer = ({ setModal }) => {
  return (
    <main className="pt-20 md:p-0 mb-4 md:pt-20 lg:pt-36">
      <ProjectHead setModal={setModal} />
      <ProjectStats />
    </main>
  );
};

export default ProjectContainer;
