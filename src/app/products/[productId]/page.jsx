const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  // console.log(productId);
  console.log(await searchParams); // query parameter recieve
  return (
    <div>
      <h1>Dynamic Route page {productId} </h1>
    </div>
  );
};

export default DynamicProductPage;
