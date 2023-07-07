import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div class="mx-auto flex justify-center text-center">
      <SignUp />
    </div>
  );
}
