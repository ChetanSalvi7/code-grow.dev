export const ScrollToView = (href: string) => {
  const scroll = document.querySelector(`#${href}`);
  scroll?.scrollIntoView({ behavior: "smooth" });
};
