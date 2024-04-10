import AppBar from '../AppBar/AppBar';

export default function Layout({ children }) {
  return (
    <main>
      <AppBar/>
      {children}
    </main>
  )
}