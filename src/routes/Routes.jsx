import React, { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { Suspense } from 'react';
const Home =lazy (() => import ('../pages/Home')) ;
const Movies =lazy (() => import ('../pages/Movies')) ;
// const NotFound = lazy(() => import("../pages/NotFound"));


const Routes = () => {
    const router = createBrowserRouter([
        {
          path:paths.home,
          element:(
            <Suspense fallback={<p>Loading...</p>}>
                <Home/>
            </Suspense>
          )
        },
        {
            path:paths.popular_movie,
            element:(
              <Suspense fallback={<p>Loading...</p>}>
                 <Movies/>
              </Suspense>
            )
          },
      ]);
  return (
   <RouterProvider router={router}/>
  )
}

export default Routes