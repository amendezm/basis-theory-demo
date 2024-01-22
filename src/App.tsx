import { CardElement, useBasisTheory } from "@basis-theory/basis-theory-react";

const App = () => {
  // creates a new instance of BasisTheory class
  const { bt, error } = useBasisTheory("<API_KEY>", { elements: true });

  // instance stays undefined during initialization
  if (bt) {
    // able to call BasisTheory methods
  }

  if (error) {
    // initialization error
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-10/12 md:w-3/5 max-w-sm rounded-lg border border-gray-100 shadow-sm p-2">
        <CardElement id="test" bt={bt} />
      </div>
    </main>
  );
};

export default App;
