type SocialMediaBoxProps = {
  icon: React.ReactElement;
  href: string;
};
export const SocialMediaBox = (props: SocialMediaBoxProps) => {
  const Icon = props.icon;
  return (
    <a href={props.href}>
      <div className="h-8 w-8 medium:h-10 medium:w-10 flex hover:scale-110 transition-all duration-400 justify-center items-center bg-[#BA55D3] p-2 rounded-sm cursor-pointer">
        <Icon.type {...Icon.props} />
      </div>
    </a>
  );
};
