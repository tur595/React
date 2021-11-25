//base url
const base_url = "https://api.rawg.io/api/";

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day month year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?key=fcaeaedb7d584b3fa0e3798a5b7f5a95&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=fcaeaedb7d584b3fa0e3798a5b7f5a95&dates=${currentDate},${nextYear}&ordering=-added&page-size=10`;
const new_games = `games?key=fcaeaedb7d584b3fa0e3798a5b7f5a95&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=fcaeaedb7d584b3fa0e3798a5b7f5a95&`;

//screenshots
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=fcaeaedb7d584b3fa0e3798a5b7f5a95&`;
//searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=fcaeaedb7d584b3fa0e3798a5b7f5a95&search=${game_name}&page_size=9`;

console.log(upcomingGamesURL());
