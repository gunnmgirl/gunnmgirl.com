type ProjectBoxProps = {
  icon: React.ReactElement;
  href: string;
  title: string;
  description: string;
};

export const ProjectBox = (props: ProjectBoxProps) => {
  const Icon = props.icon;
  const { href, title, description } = props;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Icon.type {...Icon.props} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Go to website</button>
    </div>
  );
};
