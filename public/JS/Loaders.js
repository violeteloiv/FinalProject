export function loadData(json, player)
{
  let data = JSON.parse(json);

  console.log(data);
}

export function loadLevel(s, name)
{
  return s.loadJSON(`JS/levels/${name}.json`);
}
