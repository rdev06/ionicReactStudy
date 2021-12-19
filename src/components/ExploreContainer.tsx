interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => (
  <p>Hello {name}</p>
);

export default ExploreContainer;
