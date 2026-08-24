import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function AddProduct() {
  const queryClient = useQueryClient();

  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type == "number"
        ? event.target.valueAsNumber
        : event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post("http://localhost:8000/products", newProduct),
    onSuccess: (data, variables, context) => {
      queryClient.setQueriesData(["random", { value: "Some random data" }]);
      queryClient.invalidateQueries("products");
    },
    onMutate: (variables) => {
      return { greetings: "Say Hello" };
    },
  });

  const submitData = (event) => {
    event.preventDefault();
    const newData = { ...state, id: crypto.randomUUID().toString() };

    mutation.mutate(newData);
  };

  if (mutation.isLoading) return <diV>Fetching Products...</diV>;

  if (mutation.isError) return <div> "An error has occurred"</div>;

  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2">Add a Product</h2>

      <form className="flex flex-col" onSubmit={submitData}>
        <input
          type="text"
          value={state.title}
          onChange={handleChange}
          name="title"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product title"
        />
        <textarea
          value={state.description}
          onChange={handleChange}
          name="description"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product description"
        />

        <input
          type="number"
          value={state.price}
          onChange={handleChange}
          name="price"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product price"
        />
        <input
          type="text"
          value={state.thumbnail}
          onChange={handleChange}
          name="thumbnail"
          className="my-2 border p-2 rounded"
          placeholder="Enter a product thumbnail URL"
        />

        <button
          type="submit"
          className="bg-black m-auto text-white text-xl p-1 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
}
