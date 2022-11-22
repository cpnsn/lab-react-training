export function Greetings({ lang, children }) {
  let language = '';
  if (lang === 'de') {
    language = 'Halo';
  } else if (lang === 'en') {
    language = 'Hello';
  } else if (lang === 'es') {
    language = 'Hola';
  } else if (lang === 'fr') {
    language = 'Bonjour';
  }

  return (
    <div>
      <p>{language + ' ' + children}</p>
    </div>
  );
}
