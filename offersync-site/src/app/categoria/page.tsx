import { redirect } from "next/navigation";

export default function CategoriaRoot() {
  // Redireciona para a home caso acesse /categoria diretamente
  redirect("/");
  return null;
}
