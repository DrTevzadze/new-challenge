import { useState } from "react";
import Button from "./Button";

function FormList() {
  const [forms, setForms] = useState<number[]>([]);

  const addForm = () => {
    setForms([...forms, forms.length]);
  };

  return (
    <div className="bg-white rounded-md min-h-screen p-4">
      <Button type="button" onClick={addForm} name="New Form" />
    </div>
  );
}

export default FormList;
