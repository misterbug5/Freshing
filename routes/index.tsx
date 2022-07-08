// support jsx on deno deploy
/** @jsxImportSource https://esm.sh/react@18.2.0 */

export default function Index() {
  return (
    <>
    <h1>Hello World!</h1>
    <p>it's {new Date().toLocaleString()}</p>
    </>
  );
}
