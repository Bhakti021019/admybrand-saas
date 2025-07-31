export default function Button({ children, variant = 'primary', ...props }) {
  const base = 'px-6 py-2 rounded font-medium transition';
  const styles = {
    primary: `${base} bg-purple-600 text-white hover:bg-purple-700`,
    outline: `${base} border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white`,
  };
  return <button className={styles[variant]} {...props}>{children}</button>;
}
