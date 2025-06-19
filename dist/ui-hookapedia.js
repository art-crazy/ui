import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import './index.css';const header = "_header_aus27_1";
const logo = "_logo_aus27_15";
const headerRight = "_headerRight_aus27_27";
const desktopNav = "_desktopNav_aus27_35";
const desktopNavItem = "_desktopNavItem_aus27_47";
const styles$5 = {
  header,
  logo,
  headerRight,
  desktopNav,
  desktopNavItem
};
const searchContainer = "_searchContainer_1azyd_1";
const search = "_search_1azyd_1";
const searchIcon = "_searchIcon_1azyd_24";
const searchButton = "_searchButton_1azyd_33";
const styles$4 = {
  searchContainer,
  search,
  searchIcon,
  searchButton
};
const SearchIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19 19L14.65 14.65",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};
const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/recepty?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/recepty");
    }
  };
  return /* @__PURE__ */ jsxs("form", { className: styles$4.searchContainer, onSubmit: handleSubmit, role: "search", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: styles$4.search,
        placeholder: "Поиск по рецептам",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        "aria-label": "Поиск по рецептам"
      }
    ),
    /* @__PURE__ */ jsx(SearchIcon, { className: styles$4.searchIcon, "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: styles$4.searchButton, "aria-label": "Найти рецепт", children: "Найти" })
  ] });
};
const mobileNav = "_mobileNav_1kcfd_1";
const mobileNavItem = "_mobileNavItem_1kcfd_13";
const styles$3 = {
  mobileNav,
  mobileNavItem
};
const navItem = "_navItem_1mikv_1";
const active = "_active_1mikv_12";
const icon = "_icon_1mikv_15";
const styles$2 = {
  navItem,
  active,
  icon
};
const RecipesIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 3H10V10H3V3Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14 3H21V10H14V3Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14 14H21V21H14V14Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 14H10V21H3V14Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};
const CollectionsIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4 19.5V4.5C4 3.67 4.67 3 5.5 3H18.5C19.33 3 20 3.67 20 4.5V19.5C20 20.33 19.33 21 18.5 21H5.5C4.67 21 4 20.33 4 19.5Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4 16H20",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 21V16",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 21V16",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};
const NavItem = ({ type, className, iconClassName }) => {
  const pathname = usePathname();
  const config = {
    recipes: {
      href: "/recepty",
      label: "Все рецепты",
      icon: RecipesIcon,
      activePath: "/recepty"
    },
    collections: {
      href: "/",
      label: "Подборки",
      icon: CollectionsIcon,
      activePath: "/"
    }
  };
  const { href, label, icon: Icon, activePath } = config[type];
  const isActive = pathname === activePath;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      className: `${styles$2.navItem} ${isActive ? styles$2.active : ""} ${className || ""}`,
      "aria-label": label,
      "aria-current": isActive ? "page" : void 0,
      children: [
        /* @__PURE__ */ jsx(Icon, { className: `${styles$2.icon} ${iconClassName || ""}`, "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
};
const MobileNav = () => {
  return /* @__PURE__ */ jsxs("nav", { className: styles$3.mobileNav, children: [
    /* @__PURE__ */ jsx(NavItem, { type: "collections", className: styles$3.mobileNavItem }),
    /* @__PURE__ */ jsx(NavItem, { type: "recipes", className: styles$3.mobileNavItem })
  ] });
};
const Header = () => {
  const pathname = usePathname();
  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: styles$5.header, children: [
      /* @__PURE__ */ jsxs(Link, { href: "/", className: styles$5.logo, onClick: handleLogoClick, children: [
        /* @__PURE__ */ jsx("span", { role: "img", "aria-label": "Логотип", children: "🍴" }),
        " Что приготовить"
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: styles$5.headerRight, "aria-label": "Основная навигация", children: [
        /* @__PURE__ */ jsx(Search, {}),
        /* @__PURE__ */ jsxs("div", { className: styles$5.desktopNav, children: [
          /* @__PURE__ */ jsx(NavItem, { type: "collections", className: styles$5.desktopNavItem }),
          /* @__PURE__ */ jsx(NavItem, { type: "recipes", className: styles$5.desktopNavItem })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(MobileNav, {})
  ] });
};
const footer = "_footer_yxv86_1";
const section = "_section_yxv86_10";
const copyright = "_copyright_yxv86_36";
const styles$1 = {
  footer,
  section,
  copyright
};
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: styles$1.footer, children: [
    /* @__PURE__ */ jsxs("nav", { className: styles$1.section, "aria-label": "О нас", children: [
      /* @__PURE__ */ jsx("b", { children: "О нас" }),
      /* @__PURE__ */ jsx(Link, { href: "/istoriya", children: "Наша история" }),
      /* @__PURE__ */ jsx(Link, { href: "/blog", children: "Блог" }),
      /* @__PURE__ */ jsx(Link, { href: "/faq", children: "Вопросы и ответы" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: styles$1.section, "aria-label": "Помощь", children: [
      /* @__PURE__ */ jsx("b", { children: "Помощь" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: "Контакты" }),
      /* @__PURE__ */ jsx("a", { href: "#", children: "Условия" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$1.copyright, children: "© 2025 «Что приготовить». Все права защищены." })
  ] });
}
const main = "_main_spcme_7";
const styles = {
  main
};
const LayoutWrapper = ({ children }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Header, {}),
  /* @__PURE__ */ jsx("main", { className: styles.main, children }),
  /* @__PURE__ */ jsx(Footer, {})
] });
export {
  LayoutWrapper
};
//# sourceMappingURL=ui-hookapedia.js.map
