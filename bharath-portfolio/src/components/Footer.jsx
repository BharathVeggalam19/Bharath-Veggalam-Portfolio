import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center">
      © {new Date().getFullYear()} Bharath Veggalam. All rights reserved.
    </footer>
  );
}
