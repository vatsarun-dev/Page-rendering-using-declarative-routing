import ScreenTemplate from "../components/ScreenTemplate";

export const createScreen = (title, tag) => {
  const GeneratedScreen = () => <ScreenTemplate title={title} tag={tag} />;

  GeneratedScreen.displayName = `${title.replace(/\s+/g, "")}Screen`;

  return GeneratedScreen;
};
