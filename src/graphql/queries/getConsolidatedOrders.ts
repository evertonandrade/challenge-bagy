const GET_CONSOLIDATED_ORDERS = /* GraphQL */ `
  query ($storeCustomerId: Int, $first: Int, $offset: Int) {
    getConsolidatedOrders(
      storeCustomerId: $storeCustomerId
      first: $first
      offset: $offset
    ) {
      consolidatedOrderId
      createdAt
      updatedAt
      deletedAt
      expirationDate
      price
      installments
      status
      expectedDeliveryTerm
      discountCouponText
      discountCouponPercentage
      storeCustomerId
      storeCustomerName
      storeCustomerLastName
      storeCustomerEmail
      deliveryStatus
      storeCustomerMobilePhoneNumber
      storeCustomerDocumentNumber
      storeCustomerBirthDate
      storeCustomerStreet

      storeCustomerNumber
      storeCustomerPostalCode
      storeCustomerDetails
      storeCustomerNeighborhood
      storeCustomerCity
      storeCustomerState
      storeCustomerCountry
      paymentMethod
      products {
        productName
        productCode
        variationName
        variationDescription
        firstPictureUrl
        unitPrice
        quantity
      }
      freight {
        name
        price
        selected
      }
    }
  }
`
export default GET_CONSOLIDATED_ORDERS
