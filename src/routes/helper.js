import Layout from "components/layout";
import ListPage from "pages/List-section";
import LocationPage from "pages/location-section";
import Login from "pages/login";

export const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: (
      <Layout>
        <ListPage />
      </Layout>
    ),
  },
  {
    path: "/location",
    element: (
      <Layout>
        <LocationPage />
      </Layout>
    ),
  },
];
