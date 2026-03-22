export const handleScroll = (href: string) => () => {
  const element = document.getElementById(href.slice(1));

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
