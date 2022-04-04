import "./App.css";
import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useStickyValue from "./custom-hooks/useStickyValue";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Rules from "./components/Rules/Rules";
import Teams from "./components/Teams/Teams";
import Fixture from "./components/Fixture/Fixture";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import NewEventCreatorForm from "./components/NewEventCreatorForm/NewEventCreatorForm";
import Profile from "./components/Profile/Profile";
import EditProfilePic from "./components/EditProfile/EditProfilePic";
import EditProfile from "./components/EditProfile/EditProfile";
import Events from "./components/Events/Events";
import EventDetails from "./components/Events/EventDetails";
import EventEdit from "./components/Events/EventEdit";
import AllUsers from "./components/AllUsers/AllUsers";
import EidReg from "./components/EidRegistration/EidReg";
import WhoIsGoingEid from "./components/EidRegistration/WhoIsGoingEid";
import GetEmBack from "./components/EidRegistration/GetEmBack";
import SignInSuccess from "./components/EidRegistration/SignInSuccess";
import EventRegSuccess from "./components/Events/EventRegSuccess";
import EventSignoutSuccess from "./components/Events/EventSignoutSuccess";
import NewCreateEventSuccess from "./components/NewEventCreatorForm/NewCreateEventSuccess";
import EventDeleteSuccess from "./components/Events/EventDeleteSuccess";
import EventEditSuccess from "./components/Events/EventEditSuccess";
import Registration from "./components/Registration/Registration";
import SignUpSuccess from "./components/Registration/SignUpSuccess";
import Participants from "./components/Participants/Participants";
export const AppContext = createContext();

/**
 * app consisting user context and router config
 */
function App() {
  //anything to start loading get it here
  const [user, setUser] = useStickyValue(
    { name: "", email: "", photoURL: "" },
    "user"
  );

  return (
    <AppContext.Provider value={{ userContext: [user, setUser] }}>
      <div className="App d-flex flex-column min-vh-100">
        <Router>
          <Navbar />
          <div className="main-page">
            <Routes>
              <Route
                path="/register"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminPanel />
                  </PrivateRoute>
                }
              />
              <Route
                path="/createnewevent"
                element={
                  <PrivateRoute>
                    <NewEventCreatorForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/editProfilePic"
                element={
                  <PrivateRoute>
                    <EditProfilePic />
                  </PrivateRoute>
                }
              />
              <Route
                path="/editProfile"
                element={
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                }
              />

              <Route
                path="/event/reg/:id"
                element={
                  <PrivateRoute>
                    <EventDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/events/edit/:id"
                element={
                  <PrivateRoute>
                    <EventEdit />
                  </PrivateRoute>
                }
              />
              <Route
                path="/user/all"
                element={
                  <PrivateRoute>
                    <AllUsers />
                  </PrivateRoute>
                }
              />
              <Route
                path="/eid/2022/registration"
                element={
                  <PrivateRoute>
                    <EidReg />
                  </PrivateRoute>
                }
              />

              <Route
                path="/eid/2022/signInSuccess"
                element={
                  <PrivateRoute>
                    <SignInSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/eid/2022/signOutSuccess"
                element={
                  <PrivateRoute>
                    <EventSignoutSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/event/signInSuccess"
                element={
                  <PrivateRoute>
                    <EventRegSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/event/createNewSuccess"
                element={
                  <PrivateRoute>
                    <NewCreateEventSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/event/deleteSuccess"
                element={
                  <PrivateRoute>
                    <EventDeleteSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/event/editSuccess"
                element={
                  <PrivateRoute>
                    <EventEditSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/registration/form"
                element={
                  <PrivateRoute>
                    <Registration />
                  </PrivateRoute>
                }
              />
              <Route
                path="/registration/signUpSuccess"
                element={
                  <PrivateRoute>
                    <SignUpSuccess />
                  </PrivateRoute>
                }
              />
              <Route path="/eid/2022/signedOut" element={<GetEmBack />} />
              <Route path="/eid/2022" element={<EidReg />} />
              <Route path="/eid/2022/whoIsGoing" element={<WhoIsGoingEid />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/signedUp" element={<Participants />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/fixture" element={<Fixture />} />
              <Route path="/events" element={<Events />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
