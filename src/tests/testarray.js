const cenas = [
    {
      id: 158,
      user_agent: 'chrome',
      view_date: '2022-03-22T14:54:19.490Z'
    },
    {
      id: 159,
      user_agent: 'chrome',
      view_date: '2022-03-22T14:57:07.495Z'
    },
    {
      id: 160,
      user_agent: 'chrome',
      view_date: '2022-03-22T14:57:35.705Z'
    },
    {
      id: 161,
      user_agent: 'chrome',
      view_date: '2022-03-22T14:59:24.629Z'
    },
    {
      id: 162,
      user_agent: 'chrome',
      view_date: '2022-03-22T15:01:27.629Z'
    },
    {
      id: 163,
      user_agent: 'chrome',
      view_date: '2022-03-22T15:02:45.040Z'
    },
    {
      id: 164,
      user_agent: 'chrome',
      view_date: '2022-03-22T15:03:15.912Z'
    },
    {
      id: 165,
      user_agent: 'chrome',
      view_date: '2022-03-22T15:04:53.571Z'
    },
    {
      id: 166,
      user_agent: 'chrome',
      view_date: '2022-03-22T15:05:20.776Z'
    }
  ]

let empty = []

cenas.forEach( e => {
    let newData = {
        id:e.id,
        user_agent:e.user_agent,
        view_date:e.view_date.slice(0, 10)
    }
    empty.push(newData)
});

console.log(empty)