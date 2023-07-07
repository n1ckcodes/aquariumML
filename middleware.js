import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({

  publicRoutes: ["/", "/404", "/not-found"]
  

});


export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};