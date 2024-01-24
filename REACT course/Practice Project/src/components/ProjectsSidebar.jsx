import Button from './Button.jsx';

export default function ProjectsSidebar({
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId,
}) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 tex-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl test-stone-200">Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>
                + Add Project
            </Button>
        </div>
        <ul className='mt-8'>
            {projects.map(project => {
                let cssCLasses = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"

                if (project.id === selectedProjectId) {
                    cssCLasses += ' bg-stone-800 text-stone-200'
                } else {
                    cssCLasses += ' text-stone-400'
                }

                return (
                    <li key={project.id}>
                        <button className={cssCLasses}
                            onClick={() => onSelectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                );

            })}
        </ul>
    </aside>
}