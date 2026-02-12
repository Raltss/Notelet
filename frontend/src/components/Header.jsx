import React from "react";
import { Settings } from "lucide-react";

function Header() {
  return (
    <div>
      <div className="flex justify-between m-10">
        <div className="flex flex-start">
          <h1>Manwell Notelet</h1>
        </div>
        <div className="flex flex-end">
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Header;
