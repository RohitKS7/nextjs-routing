## About Next JS Routing

1. Next JS uses a “file-based” router system.

2. In React we used to import Navbar(which contains links for every page or route) in every page. But in NextJS we just have to import it in `layout.jsx` and create `about/page.tsx` in `app` folder.

3. Simple Route is `app/about` and `app/contact`.

4. Nested Route is `app/projects/lists`.

5. Dynamic Route is `app/projects/[name]` here square bracket is complusary.

6. Route Groups:
   Helps organize folders and prevent unnecessary naming in url for instance `www.devflow.com/auth/sign-in` but we need `wwww.devflow.com/sign-in`.

   `(auth)/sign-in & sign-up` here auth is route group and the parenthesis is compulsary for creating a route group

   ```bash
          > app
            > auth
              > sign-in
                > page.jsx (url would be => /auth/sign-in)
              > sign-up
                > page.jsx (url => /auth/sign-up)
   ```

7. Now we can transfer about, contact and project folders in dashboard for Group Routing.
   Now the url for project carrnet is
   `http://localhost:3000/projects/lists`
   instead of
   `http://localhost:3000/dashboard/projects/lists` this url is not a proper method to show on applications.
