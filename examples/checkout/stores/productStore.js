const initialState = [{
	id: 1,
	name: 'coca',
	price: 3
}, {
	id: 2,
	name: 'pepsi',
	price: 3
}, {
	id: 3,
	name: 'açai',
	price: 3
}, {
	id: 4,
	name: 'mate',
	price: 3
}];

export default function productStore(product = initialState, action) {
  switch (action.type) {
  default:
    return product;
  }
}
