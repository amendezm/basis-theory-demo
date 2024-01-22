import { CardElement, useBasisTheory } from "@basis-theory/basis-theory-react";

const App = () => {
  // creates a new instance of BasisTheory class
  const { bt, error } = useBasisTheory("key_us_pub_RZkK7qbfy9nTKZ9m61Y6tD", {
    elements: true,
  });

  // instance stays undefined during initialization
  if (bt) {
    // able to call BasisTheory methods
  }

  if (error) {
    // initialization error
  }

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="w-10/12 md:w-3/5 max-w-lg rounded-lg border bg-gray-950 border-gray-950 shadow-sm p-2 text-gray-300">
        <CardElement
          id="test"
          bt={bt}
          style={{ base: { color: "white" } }}
          onChange={(event) => console.log(event)}
        />
      </div>
    </main>
  );
};

export default App;
