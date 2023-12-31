
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { puclicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {puclicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout;
            if (route.Layout) {
              Layout = route.Layout
            }
            else if (route.Layout === null) {
              route.Layout = Fragment
            }

            return <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
