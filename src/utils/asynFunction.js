export const asynFunction = async (link) => {
    const res = await fetch(link)
    const data = await res.json();
    return data
  }