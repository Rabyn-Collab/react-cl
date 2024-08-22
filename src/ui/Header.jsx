import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../features/users/userSlice";


const userMenu = [
  {
    label: "Profile",
    icon: UserCircleIcon,
    value: 'profile'
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
    value: 'signout'
  },
];

const adminMenu = [
  {
    label: "Profile",
    icon: UserCircleIcon,
    value: 'profile'
  },

  {
    label: "Products",
    icon: ShoppingBagIcon,
    value: 'product'
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
    value: 'signout'
  },
];





const Header = () => {

  const { user } = useSelector((state) => state.userSlice);
  const menuItems = user?.isAdmin ? adminMenu : userMenu;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const closeMenu = () => setIsMenuOpen(false);
  const nav = useNavigate();

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>



        {user === null ? <Link to={'/login'}> <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> </Link> :

          <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-gray-900 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              {menuItems.map(({ label, icon, value }, key) => {
                const isLastItem = key === menuItems.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={() => {
                      switch (value) {
                        case 'signout':
                          dispatch(removeUser());
                          break;

                        case 'product':
                          nav('/product-admin');
                          break;

                      }
                      closeMenu();
                    }}
                    className={`flex items-center gap-2 rounded ${isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                      }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        }

      </div>

    </Navbar>
  );
}


export default Header