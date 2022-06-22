import { supabase } from "../../utils/supabaseClient";

export default function handler() {
  const onClick = async (event) => {
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ firstname: "Dan" }]);
  };

  return (
    <>
      <button onClick={onClick}>Click here</button>
    </>
  );
}
