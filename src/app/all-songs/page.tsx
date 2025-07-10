import { redirect } from "next/navigation";


export default function OldPage() {
  // Redirect to the new All Songs page URL
  redirect("/songs");
}
