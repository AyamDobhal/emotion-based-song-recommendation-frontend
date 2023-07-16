const fetchSongsAPI = async (text) => {
  const url = `http://localhost:2000/recommend`;

  const formdata = new FormData();
  formdata.append("text", text);

  const APIResponse = await fetch(url, {
    method: "POST",
    body: formdata,
  });

  const results = await APIResponse.json();
  console.log(results);

  const response = results.map(({ artist, url, name, image_url }) => ({
    artist,
    url,
    name,
    image_url,
  }));
  return response;
};

export default fetchSongsAPI;
