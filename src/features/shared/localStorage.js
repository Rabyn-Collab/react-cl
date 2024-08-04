


export const setBlogToLocal = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}

export const getBlogsFromLocal = () => {
  const data = localStorage.getItem('blogs');
  return data === null ? [] : JSON.parse(data);
}