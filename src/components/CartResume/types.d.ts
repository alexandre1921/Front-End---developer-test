export interface Props {
  /**
   * If aplicable show discount
   */
  discount?: string;
  /**
   * Subtotal from all cart items
   */
  subtotal: string;
  /**
   * Calculated value with discount
   */
  total: string;
  /**
   * Checkout click handler
   */
  handleOnClickCheckout?(): void;
  /**
   * Keep buying click handler
   */
  handleOnClickKeepBuying?(): void;
}
