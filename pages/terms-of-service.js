import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function termOfService() {
  return (
    // <Container fixed>
    //   <Typography variant="h2" color="text.primary" pt={5} mt={8}>
    //     Terms Of Service
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary">
    //     Please take your time and read our terms before order any package.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={4}>
    //     Welcome! TECHGATER provides its services to you subject to the following
    //     conditions. You accept these conditions, if you visit or shop at this
    //     website. Please read them carefully. In addition, when you use any
    //     current or future TECHGATER service or visit or purchase from any
    //     business affiliated with TECHGATER, whether or not included in this
    //     website, you will also be subject to the guidelines and conditions
    //     applicable to such service or business. If these conditions are
    //     inconsistent with such guidelines and conditions, such guidelines and
    //     conditions will control.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Under this agreement, the payment processing services for goods and/or
    //     services purchased on this website are provided by TECHGATER, depending
    //     on the type of payment method used for the purchase of the goods and/or
    //     services.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     In the event you choose to pay with credit card and the payment will be
    //     processed, these terms are an agreement between you and TECHGATER. For
    //     any other type of purchases, these terms are an agreement between you
    //     and TECHGATER Company Limited and goods and/or services will be
    //     delivered by TECHGATER Company Limited directly.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Privacy
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Please review our <Link href="/privacy">Privacy Policy</Link> (which
    //     also governs your visit to this website) to understand our practices.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Electronic Communications
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     When you visit this website or send e-mails to us, you are communicating
    //     with us electronically. You consent to receive communications from us
    //     electronically. We will communicate with you by e-mail or by posting
    //     notices on this site. You agree that all agreements, notices,
    //     disclosures and other communications that we provide to you
    //     electronically satisfy any legal requirement that such communications be
    //     in writing.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Copyright
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Reselling of our product without our permission is strictly prohibited.
    //     the source code can be used only for business reason internally to
    //     facilitate your clients only. further if we found our code shared or
    //     sold by any of our clients we will have full rights to suspend their
    //     account and block them permanently from our system
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     All content included on this site, such as text, logos, images,
    //     graphics, icons, digital downloads, data compilations, and software, is
    //     the property of TECHGATER or its content suppliers and protected by
    //     international copyright laws. The compilation of all content on this
    //     site is the exclusive property of TECHGATER and protected by
    //     international copyright laws. All software used on this site is the
    //     property of TECHGATER and protected by international copyright laws.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     License and Site Access
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     TECHGATER grants you a limited license to access and make personal use
    //     of this site and not to download (other than page caching) or modify it,
    //     or any portion of it, except with express written consent of TECHGATER.
    //     This license does not include any resale or commercial use of this site
    //     or its contents; any collection and use of any product listings,
    //     descriptions, or prices; any derivative use of this site or its
    //     contents; any downloading or copying of account information for the
    //     benefit of another merchant; or any use of data mining, robots, or
    //     similar data gathering and extraction tools. This site or any portion of
    //     this site may not be reproduced, duplicated, copied, sold, resold,
    //     visited, or otherwise exploited for any commercial purpose without
    //     express written consent of TECHGATER. You may not frame or utilize
    //     framing techniques to enclose any trademark, logo, or other proprietary
    //     information (including images, text, page layout, or form) of this
    //     website without express written consent. You may not use any meta tags
    //     or any other "hidden text" utilizing this site, TECHGATER and it's
    //     partners names or trademarks without the express written consent of
    //     TECHGATER. Any unauthorized use terminates the permission or license
    //     granted by this website. You are granted a limited, revocable, and
    //     nonexclusive right to create a hyperlink to the home page of this
    //     website so long as the link does not portray this website, its
    //     affiliates, or their products or services in a false, misleading,
    //     derogatory, or otherwise offensive matter. You may not use any TECHGATER
    //     and it's partners logos or other proprietary graphic or trademark as
    //     part of the link without express written permission.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Your Account
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     If you use this site, you are responsible for maintaining the
    //     confidentiality of your account and password and for restricting access
    //     to your computer, and you agree to accept responsibility for all
    //     activities that occur under your account or password. TECHGATER does not
    //     sell products to children, but sells them to adults, who can purchase
    //     with a credit card. If you are under 18, you may use this website only
    //     with involvement of a parent or guardian. TECHGATER reserves the right
    //     to refuse service, terminate accounts, remove or edit content, or cancel
    //     orders at their sole discretion.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Reviews, Comments, Communications, and Other Content
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Visitors may post reviews, comments, blog posts, and other content; send
    //     other communications; and submit suggestions, ideas, comments,
    //     questions, or other information, so long as the content is not illegal,
    //     obscene, threatening, defamatory, invasive of privacy, infringing of
    //     intellectual property rights, or otherwise injurious to third parties or
    //     objectionable and does not consist of or contain software viruses,
    //     political campaigning, commercial solicitation, chain letters, mass
    //     mailings, or any form of spam. You may not use a false e-mail address,
    //     impersonate any person or entity, or otherwise mislead as to the origin
    //     of a card or other content. TECHGATER reserves the right (but not the
    //     obligation) to remove or edit such content. If you do post content or
    //     submit material, and unless we indicate otherwise, you grant TECHGATER a
    //     nonexclusive, royalty-free, perpetual, irrevocable, and fully
    //     sub-licensable right to use, reproduce, modify, adapt, publish,
    //     translate, create derivative works from, distribute, and display such
    //     content throughout the world in any media. You grant TECHGATER and its
    //     affiliates and sub-licensees the right to use the name that you submit
    //     in connection with such content, if they choose. You represent and
    //     warrant that you own or otherwise control all of the rights to the
    //     content that you post; that the content is accurate; that use of the
    //     content you supply does not violate this policy and will not cause
    //     injury to any person or entity; and that you will indemnify TECHGATER or
    //     its affiliates for all claims resulting from content you supply.
    //     TECHGATER has the right but not the obligation to monitor and edit or
    //     remove any activity or content. TECHGATER takes no responsibility and
    //     assumes no liability for any content posted by you or any third party.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Copyright Complaints
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     TECHGATER and it's partners respect the intellectual property of others.
    //     If you believe that your work has been copied in a way that constitutes
    //     copyright infringement, please contact us.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Product Descriptions
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Our products which are manufactured or sold by this website. have been
    //     set to a high standard of quality and detail with its products and
    //     attempts to be as accurate as possible. However, TECHGATER does not
    //     warrant that product descriptions or other content of this site is
    //     accurate, complete, reliable, current, error-free and the final product
    //     may vary. If a product offered by TECHGATER itself is not as described.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Pricing
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Except where noted otherwise, the price displayed for products on our
    //     website represents the full retail price listed on the product itself,
    //     suggested by the manufacturer. With respect to items sold through this
    //     website; when you purchase an item that is in stock, your credit card
    //     will be charged when you complete the checkout process. When you place a
    //     preorder, your credit card will be charged. When you place a convention
    //     pre-order, your credit card will be charged when you complete the order
    //     process, and you will be able to pick up your order at the convention
    //     site.
    //   </Typography>

    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Updates and Upgrades
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Updates are free for lifetime to version however you need to buy only if
    //     there is entire new version. for example when you purchase the code and
    //     the current version is v7 you can keep using it for lifetime with it's
    //     fixes updates builts and support until new release but when there is a
    //     new upgrade for example like v7.1 and still you wanted to use this
    //     latest version v7.1 then you have to purchase the code once again.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Disclaimer of Warranties and Limitation of Liability
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     This site is provided by TECHGATER on an "as is" and "as available"
    //     basis. TECHGATER makes no representations or warranties of any kinds
    //     express or implied, as to the operation of this site or the information,
    //     content, materials, or products included on this site. You expressly
    //     agree that your use of this site is at your sole risk. To the full
    //     extent permissible by applicable law, TECHGATER disclaims all
    //     warranties, express or implied, including, but not limited to, implied
    //     warranties of merchantability and fitness for a particular purpose.
    //     TECHGATER does not warrant that this site, its servers, or e-mail sent
    //     from TECHGATER are free of viruses or other harmful components.
    //     TECHGATER will not be liable for any damages of any kind arising from
    //     the use of this site, including, but not limited to direct, indirect,
    //     incidental, punitive, and consequential damages. Certain state laws do
    //     not allow limitations on implied warranties or the exclusion or
    //     limitation of certain damages. If these laws apply to you, some or all
    //     of the above disclaimers, exclusions, or limitations may not apply to
    //     you, and you might have additional rights.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Applicable Law
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     By visiting this website, you agree that the laws of the state of
    //     California, without regard to principles of conflict of laws, will
    //     govern these Conditions of Use and any dispute of any sort that might
    //     arise between you and TECHGATER.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Disputes
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Any dispute relating in any way to your visit to this website or to
    //     products you purchase through this site shall be submitted to
    //     confidential arbitration, except that, to the extent you have in any
    //     manner violated or threatened to violate TECHGATER's intellectual
    //     property rights, TECHGATER may seek injunctive or other appropriate
    //     relief in the federal court, and you consent to exclusive jurisdiction
    //     and venue in such courts. Arbitration under this agreement shall be
    //     conducted under the rules then prevailing of the Pakistan's Arbitration
    //     Association. The arbitrator's award shall be binding and may be entered
    //     as a judgment in any court of competent jurisdiction. To the fullest
    //     extent permitted by applicable law, no arbitration under this Agreement
    //     shall be joined to an arbitration involving any other party subject to
    //     this Agreement, whether through class arbitration proceedings or
    //     otherwise.
    //   </Typography>
    //   <Typography variant="h3" color="text.primary" mt={4}>
    //     Site Policies, Modification, and Severability
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2} id="refund">
    //     Please review our other policies, posted on this site. These policies
    //     also govern your visit to this website. We reserve the right to make
    //     changes to our site, policies, and these Conditions of Use at any time.
    //     If any of these conditions shall be deemed invalid, void, or for any
    //     reason unenforceable, that condition shall be deemed severable and shall
    //     not affect the validity and enforceability of any remaining condition.
    //   </Typography>
    //   <Box mt={4} />
    //   <Typography variant="h3" color="text.primary">
    //     Refund and Cancellation Policy
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     We do not issue refunds once the order is accomplished and the product
    //     is sent. As a customer you are responsible for understanding this upon
    //     purchasing any item at our site. Please note that our bonuses are
    //     offered on behalf us and are not an issue for a refund or chargeback.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     However, we realize that exceptional circumstance can take place with
    //     regard to the character of the product we supply.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     Therefore, we DO honor requests for the refund on the following reasons:
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     - non-delivery of the product: due to some mailing issues of your e-mail
    //     provider or your own mail server you might not receive a delivery e-mail
    //     from us. In this case we recommend contacting us for assistance. Claims
    //     for non-delivery must be submitted to our Billing department in writing
    //     within 7 days from the order placing date. Otherwise the product will be
    //     considered received and downloaded;
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     - download and unzipping issues: it may happen so that you are having
    //     problems while downloading the product or its unzipping. Claims
    //     regarding such issues must be submitted to our Technical Support
    //     department. If you do not properly contact us during this period, you
    //     agree that we may construe silence as a successful download of the
    //     product with no further right of redress or refund for a "download
    //     issue" reason. Failure to receive assistance for downloading or
    //     unzipping within 3 days may result in a refund decline;
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     - major defects: although all the products are thoroughly tested before
    //     release, unexpected errors may occur. Such issues must be submitted for
    //     our Bugs Support Team's approval. We keep the right to rectify the error
    //     or defect within 72 hours. If any deficiency is approved and we fail to
    //     correct it within 72 hours from the date of the initial complaint letter
    //     or any other notification provided by a Customer, the refund will be
    //     issued to the customer in full without any compensations or
    //     reimbursements. OR, at customer's choice, replacement of the product of
    //     the same or around the same value can be offered; Please be advised that
    //     temporary access to your server can be requested by our technicians in
    //     order to identify and fix the possible issues with our Products. Failure
    //     to provide such access in a timely manner may result in a delayed
    //     resolution of the issue. Refusal to provide access to your sever will
    //     result in your inability to qualify for a refund.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2}>
    //     - product not-as-described: such issues should be reported to our
    //     Technical Support Department within 7 days from the date of the
    //     purchase. Clear evidence must be provided proving that the purchased
    //     product is not as it is described on the website. Complaints which are
    //     based merely on the customer's false expectations or wishes are not
    //     honored.
    //   </Typography>
    //   <Typography variant="body1" color="text.secondary" pt={2} mb={4}>
    //     Please note that we do not bear any responsibility and therefore we do
    //     not satisfy any refund/return/exchange requests based on incompatibility
    //     of our products with some third-party software (plug-ins, add-ons,
    //     modules, search engines, scripts, extensions etc) other than those which
    //     are specified as compatible in a description available on the preview
    //     page of each product. We don't guarantee that our products are fully
    //     compatible with any third-party programs and we do not provide support
    //     for third-party applications.Our Technical Support Team is always eager
    //     to assist you and deliver highly professional support in a timely
    //     manner. Thank you for purchasing our products.
    //   </Typography>
    // </Container>
    <></>
  );
}
