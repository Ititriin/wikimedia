#### Making angular app locally

- Get the latest version of Node.js (check with: node -v)

- Install node modules: 
  ```bash
  npm install
  ```

- Install Angular CLI:
  ```bash
  npm install -g @angular/cli
  ```

- Be sure you installed angular - can also try sudo for extra power (check with: ng --version)

- Generate new application
  ```bash
  ng new app
  ```

- During the installation choose your preferred options, for example:
  - Would you like to add Angular routing? Yes
  - which stylesheet format would you like to use? CSS
- Start the generated application by:

```bash
cd app
```

```bash
ng serve
```

- It will provide you with an url if everything's okay (http://localhost:4200/)
- Continue working with local angular :)

#### Starting existing angular project locally

```bash
npm install
```

```bash
cd app
```

```bash
ng serve
```

<!-- #### Alternative solution in python until this angular works

import dash
import dash_core_components as dcc
import dash_html_components as html
import dash_table
import requests
import datetime
import aniso8601
import pandas

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

yesterday = datetime.datetime.now() - aniso8601.parse_duration("P1D")
date = yesterday.strftime('%Y/%m/%d')

url = 'https://api.wikimedia.org/feed/v1/wikipedia/en/featured/' + date

response = requests.get(url)
data = response.json()

table_data = pandas.json_normalize([item["pages"][0] for item in data['onthisday']])
table_data = table_data[['displaytitle', 'description', "thumbnail.source"]]

app.layout = html.Div(children=[
    html.H1(children='Wiki Dash'),

    dash_table.DataTable(
        id='table',
        columns=[{"name": i, "id": i} for i in table_data.columns],
        data=table_data.to_dict('records'),
)

])

if __name__ == '__main__':
    app.run_server(debug=True)  -->