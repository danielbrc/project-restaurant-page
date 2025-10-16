
export const build = (content, elements) => {
  elements.forEach(elem => {
    content.appendChild(elem);
  });
};
