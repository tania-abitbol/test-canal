export type List = {
  results: [];
};

export const getList = async (id: number): Promise<List> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&with_genres=${id}&language=fr-FR`,
    {
      method: "GET",
    }
  );
  return response.json();
};
