function SingleProduct (onExit: any) {
  // Handle the 'exit' button click
  const handleExitClick = () => {
    // Call the onExit function to close the SingleProduct view
    onExit();
  };

  return (
    <div>
      <h2>THIS IS A SINGLE PRODUCT</h2> 
      <button onClick={handleExitClick}>Exit</button>
    </div>
  );
};

export default SingleProduct;
