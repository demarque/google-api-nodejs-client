[Original](https://github.com/googleapis/google-api-nodejs-client)

googleapis npm package customized so that we can choose which APIs and add non
public APIs such as the bookspartner one.

To add new APIs, edit the apis.json file, and run

```
npm run generate && npm run compile 
```

You can pack the library (```npm package```) and install it in your project
(i.e. ```npm install --save ./vendors/demarque-googleapis-34.0.0.tgz```)

Example of use:

```
import { google, bookspartner_v1 } from '@demarque/googleapis';
const apis = google.bookspartner('v1');
const partners = apis.partners;
const transactions = apis.partners.transactions;
const paymentProfiles = apis.partners.paymentprofiles;
const invoices = apis.partners.paymentprofiles.invoices;


async function printPartnerInfo(auth: any, partner: bookspartner_v1.Schema$Partner): Promise<void> {
    let partnerId = partner.partnerId;
    let paymentProfilesResult = paymentProfiles.list({ auth, partnerId });
    paymentProfilesResult.then((pps) => {
        if (pps.data.paymentProfiles) {
            console.log(`${partner.name} (${partner.partnerId}): ${pps.data.paymentProfiles.length}`)
            pps.data.paymentProfiles.forEach((paymentProfile) => {
                let paymentProfileId = paymentProfile.paymentProfileId;
                const now = Math.floor(new Date().getTime() / 1000);
                const a_week_ago = now - (24 * 60 * 60 * 7);
                let invoicesResult = invoices.list({ auth, partnerId, paymentProfileId, 'startDate.seconds': a_week_ago.toString(), 'endDate.seconds': now.toString() });
            });
        }
    })
}

async function main() {
    // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
    // environment variables.
    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/bookspartner']
    });

    let partnersResult = partners.list({ auth });

    partnersResult.then((ps) => {

        if (ps.data.partners) {
            ps.data.partners.forEach(async (partner) => await printPartnerInfo(auth, partner));
        }
    });
}

main().catch(console.error);
```
