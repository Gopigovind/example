// eslint-disable-next-line no-console
console.log("using host:", process.env.VUE_APP_CT_API_HOST);
let localConfig = {};
if(process.env.VUE_APP_LOCAL_SUNRISE_CONFIG){
  localConfig = require(process.env.VUE_APP_LOCAL_SUNRISE_CONFIG).default;
}

export default {
  ct: {
    auth: {
      host:
        process.env.VUE_APP_CT_AUTH_HOST ||
        "https://auth.europe-west1.gcp.commercetools.com",
      projectKey:
        process.env.VUE_APP_CT_PROJECT_KEY || "sunrise-spa",
      credentials: {
        clientId:
          process.env.VUE_APP_CT_CLIENT_ID ||
          "jFVHj0-tO-THQt9evnGTJ2fD",
        clientSecret:
          process.env.VUE_APP_CT_CLIENT_SECRET ||
          "eUQgmtanysDpYxlOePOhcFklrwa5X8Sj",
      },
      scopes: [
        process.env.VUE_APP_CT_SCOPE ||
          "manage_my_profile:sunrise-spa create_anonymous_token:sunrise-spa" +
            " manage_my_payments:sunrise-spa view_products:sunrise-spa manage_my_orders:sunrise-spa" +
            " manage_my_shopping_lists:sunrise-spa",
      ],
    },
    api:
      process.env.VUE_APP_CT_API_HOST ||
      "https://api.europe-west1.gcp.commercetools.com",
  },
  languages: {
    en: "English",
    de: "Deutsch",
  },
  countries: {
    DE: "Deutschland",
    US: "United States",
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol",
        },
      },
      US: {
        currency: {
          style: "currency",
          currency: "USD",
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
      DE: {
        short: {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      },
    },
  },
  categories: {
    salesExternalId: "6",
  },
  facetSearches: [
    {
      name: "size",
      type: "text",
      label: {
        it: "Size",
        de: "Größe",
        en: "Size",
      },
    },
    {
      name: "masterUnitSize",
      type: "text",
      component: "masterUnitSize",
      label: {
        it: "master Unit Size",
        de: "Designer",
        en: "master Unit Size",
      },
    },
    {
      name: "shelfLife",
      type: "text",
      component: "shelfLife",
      label: {
        it: "shelfLife",
        de: "Designer",
        en: "shelfLife",
      },
    },
  ],
  detailAttributes: [
    {
      name:"gtin",
        label: {
          it: "GTIN",
          de: "GTIN",
          en: "GTIN",
        },
    },
    {
      name:"size",
        label: {
          it: "Serving Size",
          de: "Grösse",
          en: "Serving Size",
        },
    },
    {
      name:"shelfLife",
        label: {
          it: "Shelf Life (Frozen)",
          de: "Grösse",
          en: "Shelf Life (Frozen)",
        },
    },
    {
      name:"masterUnitSize",
      label: {
        it: "Master Unit Size",
        de: "Stil",
        en: "Master Unit Size",
      },
    },
    {
      name:"netCaseWeight",
      label: {
        it: "Net Case Weight",
        de: "Zielgruppe",
        en: "Net Case Weight",
      },
    },
    {
      name:"grossCaseWeight",
      label: {
        it: "Gross Case Weight",
        de: "Herstellernummer",
        en: "Gross Case Weight",
      },
    },
  ],
  variantSelector: ["color", "size"],
  variantInProductName: ["size"],
  ...localConfig
};
