const getIcon = (name) => `/static/wallet_icons/${name}.svg`;

const ICONS = {
  metamask: getIcon("metamask"),
};

const connectors = [
  {
    title: "Metamask",
    connectorId: "Injected",
    icon: ICONS.metamask,  
  },
];

export default connectors;
