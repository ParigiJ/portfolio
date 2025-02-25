import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Intro", id: "intro" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const NavLink = ({
  id,
  children,
  activeSection,
  onClick,
}: {
  id: string;
  children: React.ReactNode;
  activeSection: string;
  onClick: (id: string) => void;
}) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault(); // Prevent default anchor behavior
        onClick(id);
      }}
      variant={activeSection === id ? "default" : "ghost"}
      className={cn(
        "hover:cursor-pointer transition-all text-white text-lg",
        activeSection === id && "font-bold underline"
      )}
    >
      {children}
    </Button>
  );
};

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!hasScrolled.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${navHeight}px 0px 0px 0px`,
        threshold: 0.3,
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      hasScrolled.current = true;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    const navHeight = navRef.current?.offsetHeight || 0;
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-lg z-50 border-b border-gray-700 flex justify-center text-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              id={item.id}
              activeSection={activeSection}
              onClick={handleClick}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
