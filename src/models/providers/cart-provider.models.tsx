import { Product } from "..";

/**
 * CartProdivderInterface
 * 
 * Interface to provide the context functions to cart
 *
 * @export
 * @interface CartProdivderInterface
 */
export interface CartProdivderInterface {

    /**
     * getCartProducts
     * 
     * Get the products in the cart
     *
     * @memberof CartProdivderInterface
     */
    getCartProducts: Product[];

    /**
     * getTotal
     *
     * @type {number}
     * @memberof CartProdivderInterface
     */
    getTotal: number;

    /**
     * getQuantityByProduct
     * 
     * get the quantity of a product in the cart
     *
     * @memberof CartProdivderInterface
     */
    getQuantityByProduct: (id: number) => number;

    /**
     * addProduct
     * 
     * Add product to the cart
     *
     * @memberof CartProdivderInterface
     */
    addProduct: (product: Product) => void;

    /**
     * removeProduct
     * 
     * Remove product from the cart
     *
     * @memberof CartProdivderInterface
     */
    removeProduct: (id: number) => void;

    /**
     * getCartItemsLength
     * 
     * get the length of the cart
     *
     * @memberof CartProdivderInterface
     */
    getCartItemsLength: () => number;

}