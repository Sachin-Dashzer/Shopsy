export default function AdminLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header>Admin Panel Header</header>
 
          <main>{children}</main>

          <footer>admin footer</footer>
        </body>
      </html>
    );
  }
  