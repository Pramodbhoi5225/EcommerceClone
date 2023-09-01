import React from "react";

function Cart() {
  return (
    <div>
      <div className="newcart">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Incre</th>
              <th>QTY</th>
              <th>Decre</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tfoot>
            <tr>
              <td>
                <b>Total Price of the cart</b>
              </td>
              <td colSpan={5}>
                <b>Rs. 0</b>
              </td>
              <td>
                <div class="google-pay-button-container">
                  <div>
                    <button
                      type="button"
                      aria-label="Buy with GPay"
                      class=" gpay-card-info-container black long en"
                      fdprocessedid="mkn7mc"
                    >
                      <div class="gpay-card-info-animation-container black gpay-card-info-animation-container-fade-out">
                        <div class="gpay-card-info-placeholder-container">
                          <div
                            class="
    gpay-card-info-animation-gpay-logo black
    "
                          ></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            link="http://www.w3.org/1999/xlink"
                            direction="ltr"
                            height="36px"
                            width="130px"
                          >
                            <style>
                              @import
                              url(//fonts.googleapis.com/css?family=Google+Sans:500)
                            </style>
                            <line
                              x1="2"
                              y1="10.5"
                              x2="2"
                              y2="29.5"
                              style={{stroke: '#5F6368'}}></line>
                            <image
                              x="11"
                              y="6"
                              width="37.5"
                              height="29"
                              preserveAspectRatio="none"
                              // xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png"
                            ></image>
                            <text
                              x="52"
                              y="25.5"
                              class="small"
                             style={{font: '15px'}}
                            >
                              ••••••
                            </text>
                          </svg>
                        </div>
                        <div class="gpay-card-info-animated-progress-bar-container">
                          <div
                            class="
    gpay-card-info-animated-progress-bar
    "
                          >
                            <div
                              class="
    gpay-card-info-animated-progress-bar-indicator
    "
                            ></div>
                          </div>
                        </div>
                      </div>
                      <iframe
                        class="gpay-card-info-iframe gpay-card-info-iframe-fade-in"
                        scrolling="no"
                        src="https://pay.google.com/gp/p/generate_gpay_btn_img?buttonColor=black&amp;browserLocale=en&amp;buttonSizeMode=static&amp;enableGpayNewButtonAsset=false&amp;allowedPaymentMethods=%5B%7B%22type%22%3A%22CARD%22%2C%22parameters%22%3A%7B%22allowedAuthMethods%22%3A%5B%22PAN_ONLY%22%2C%22CRYPTOGRAM_3DS%22%5D%2C%22allowedCardNetworks%22%3A%5B%22MASTERCARD%22%2C%22VISA%22%5D%7D%2C%22tokenizationSpecification%22%3A%7B%22type%22%3A%22PAYMENT_GATEWAY%22%2C%22parameters%22%3A%7B%22gateway%22%3A%22example%22%2C%22gatewayMerchantId%22%3A%22exampleGatewayMerchantId%22%7D%7D%7D%5D"
                      ></iframe>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="footer">
        <div className="inner_footer">
          <span className="span1">Get to Know Us</span>
          <br />
          About us <br />
          Careers <br /> Press Releases <br />
          Amazon Science
        </div>

        <div className="div3">
          <span className="span2">Connect with Us</span>
          <br />
          Facebook
          <br />
          Twitter
          <br />
          Instagram
          <br />
          Instagram
        </div>

        <div className="div4">
          <span className="span3">Make money with Us </span>
          <br />
          Sell on Amazon
          <br />
          Sell under Amazon Accelerator
          <br />
          Amezon Pay on Merchants
          <br />
          Advertise Your Products
        </div>

        <div className="div5">
          <span className="span4">Let Us Help You</span>
          <br />
          COVID-19 and Amezon
          <br />
          Your Account
          <br />
          Returns Center
          <br />
          100% Purchase Protection
        </div>
      </div>
    </div>
  );
}

export default Cart;
