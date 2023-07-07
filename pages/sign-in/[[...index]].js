import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div class="mx-auto flex justify-center text-center">
      {" "}
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
          },
        }}
      />
    </div>
  );
}
