import { Navbar, Dropdown, Avatar } from "flowbite-react";
import EventSearchBar from "../EventSearchBar/EventSearchBar";

function NewPostPageTopBar() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <Navbar fluid={true} rounded={true} className="w-full mb-3">
        <Navbar.Brand href="/DYScovery-code" className="w-1/3">
          <div className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
              DYScovery.com
            </span>
          </div>
        </Navbar.Brand>
        <div className="w-1/3">
          <EventSearchBar />
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Happy Husky</span>
                <span className="block truncate text-sm font-medium">
                  awesome@dyscovery.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NewPostPageTopBar;
