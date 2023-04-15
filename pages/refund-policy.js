import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function termOfService() {
  return (
    <Container fixed>
      <Box mt={12} />
      <Typography variant="h3" color="text.primary">
        Refund and Cancellation Policy
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        We do not issue refunds once the order is accomplished and the product
        is sent. As a customer you are responsible for understanding this upon
        purchasing any item at our site. Please note that our bonuses are
        offered on behalf us and are not an issue for a refund or chargeback.
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        However, we realize that exceptional circumstance can take place with
        regard to the character of the product we supply.
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        Therefore, we DO honor requests for the refund on the following reasons:
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        - non-delivery of the product: due to some mailing issues of your e-mail
        provider or your own mail server you might not receive a delivery e-mail
        from us. In this case we recommend contacting us for assistance. Claims
        for non-delivery must be submitted to our Billing department in writing
        within 7 days from the order placing date. Otherwise the product will be
        considered received and downloaded;
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        - download and unzipping issues: it may happen so that you are having
        problems while downloading the product or its unzipping. Claims
        regarding such issues must be submitted to our Technical Support
        department. If you do not properly contact us during this period, you
        agree that we may construe silence as a successful download of the
        product with no further right of redress or refund for a "download
        issue" reason. Failure to receive assistance for downloading or
        unzipping within 3 days may result in a refund decline;
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        - major defects: although all the products are thoroughly tested before
        release, unexpected errors may occur. Such issues must be submitted for
        our Bugs Support Team's approval. We keep the right to rectify the error
        or defect within 72 hours. If any deficiency is approved and we fail to
        correct it within 72 hours from the date of the initial complaint letter
        or any other notification provided by a Customer, the refund will be
        issued to the customer in full without any compensations or
        reimbursements. OR, at customer's choice, replacement of the product of
        the same or around the same value can be offered; Please be advised that
        temporary access to your server can be requested by our technicians in
        order to identify and fix the possible issues with our Products. Failure
        to provide such access in a timely manner may result in a delayed
        resolution of the issue. Refusal to provide access to your sever will
        result in your inability to qualify for a refund.
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2}>
        - product not-as-described: such issues should be reported to our
        Technical Support Department within 7 days from the date of the
        purchase. Clear evidence must be provided proving that the purchased
        product is not as it is described on the website. Complaints which are
        based merely on the customer's false expectations or wishes are not
        honored.
      </Typography>
      <Typography variant="body1" color="text.secondary" pt={2} mb={4}>
        Please note that we do not bear any responsibility and therefore we do
        not satisfy any refund/return/exchange requests based on incompatibility
        of our products with some third-party software (plug-ins, add-ons,
        modules, search engines, scripts, extensions etc) other than those which
        are specified as compatible in a description available on the preview
        page of each product. We don't guarantee that our products are fully
        compatible with any third-party programs and we do not provide support
        for third-party applications.Our Technical Support Team is always eager
        to assist you and deliver highly professional support in a timely
        manner. Thank you for purchasing our products.
      </Typography>
    </Container>
  );
}
