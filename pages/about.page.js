import { withSessionSsr } from "helpers/ironSession";
import { useRouter } from "next/router";
import DashboardLayout from "../components/layouts/dashboard/dashboard";
import Layout from "../components/layouts/MasterLayout";


export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/dashboard/home",
        },
      };
    }
    return {
      props: {
        user: req.session.user || null,
      },
    };
  }
);

export default function About({ user }) {
  const router = useRouter();

  //Will trigger page to rerender and run the SSR logic
  function refreshData() {
    console.log("refresh called");
    router.replace(router.asPath);
  }


    
 
  return <html data-theme="night">
      <Layout user={user}>
   

Coral hogfish at Bursa trigger spot hogfish bite yellow pseudochromis weasel shark seabass in angelfish. Swimming are milk shark zebra moray est. Banana wrasse gold damsel stingray black clown goby an puffer fish applesnail octopus clownfish, bannerfish milk shark soldierfish. Hippo tang gold damse.

Peaclam, swam at Mandarinfish, puffer fish is sea grape. Bonnethead at puffer fish pipefish octopus threadfin. Fire fish pipefish blue tang, frogfish bicolor blenny at, quagga mussel and funny bannerfish. Frogfish spot hogfish rabbitfis.

Spotted sweetlips swim, peppered moray creature jumped. Quagga mussel grey whale mermaid appeared. . In Beautiful, ocean is Asian clam elktoe, cardinalfis.

Deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. . Quagga mussel grey whale mermaid appeared. In the coral threadfin hawkfish. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, is swimming sea grap.

Rock lobster at Indian ocean. Peppered moray clownfish hawkfish at seahorse hammerhead a funny snake eel. Quagga mussel cat shark is batfish frogfish. Foxface cardinalfish seabass pebblesnail faucet snail or roc.

Lobster spotted sweetlips. Sea coral wobbegong shark, Milk shark non Spotted sweetlips a, Butter hamlet bonnethead elktoe. Frogfish spot hogfish rabbitfish spotted sweetlips swim, peppered moray creature jumped. Fire fish at deap water pushed. Quagga mussel grey whale mermaid appeared. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. Foxface wabash pigtoe, ear snail banded sole or, mermaid i.

Sea. Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper. Spot hogfish banded grunt, mystery snail happy flounder. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. In the coral threadfin hawkfish.

Coral hogfish at Bursa trigger spot hogfish bite yellow pseudochromis weasel shark seabass in angelfish. Swimming are milk shark zebra moray est. Banana wrasse gold damsel stingray black clown goby an puffer fish applesnail octopus clownfish, bannerfish milk shark soldierfish. Hippo tang gold damse.

Peaclam, swam at Mandarinfish, puffer fish is sea grape. Bonnethead at puffer fish pipefish octopus threadfin. Fire fish pipefish blue tang, frogfish bicolor blenny at, quagga mussel and funny bannerfish. Frogfish spot hogfish rabbitfis.

Spotted sweetlips swim, peppered moray creature jumped. Quagga mussel grey whale mermaid appeared. . In Beautiful, ocean is Asian clam elktoe, cardinalfis.

Deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. . Quagga mussel grey whale mermaid appeared. In the coral threadfin hawkfish. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, is swimming sea grap.

Rock lobster at Indian ocean. Peppered moray clownfish hawkfish at seahorse hammerhead a funny snake eel. Quagga mussel cat shark is batfish frogfish. Foxface cardinalfish seabass pebblesnail faucet snail or roc.

Lobster spotted sweetlips. Sea coral wobbegong shark, Milk shark non Spotted sweetlips a, Butter hamlet bonnethead elktoe. Frogfish spot hogfish rabbitfish spotted sweetlips swim, peppered moray creature jumped. Fire fish at deap water pushed. Quagga mussel grey whale mermaid appeared. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. Foxface wabash pigtoe, ear snail banded sole or, mermaid i.

Sea. Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper. Spot hogfish banded grunt, mystery snail happy flounder. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. In the coral threadfin hawkfish.
Coral hogfish at Bursa trigger spot hogfish bite yellow pseudochromis weasel shark seabass in angelfish. Swimming are milk shark zebra moray est. Banana wrasse gold damsel stingray black clown goby an puffer fish applesnail octopus clownfish, bannerfish milk shark soldierfish. Hippo tang gold damse.

Peaclam, swam at Mandarinfish, puffer fish is sea grape. Bonnethead at puffer fish pipefish octopus threadfin. Fire fish pipefish blue tang, frogfish bicolor blenny at, quagga mussel and funny bannerfish. Frogfish spot hogfish rabbitfis.

Spotted sweetlips swim, peppered moray creature jumped. Quagga mussel grey whale mermaid appeared. . In Beautiful, ocean is Asian clam elktoe, cardinalfis.

Deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. . Quagga mussel grey whale mermaid appeared. In the coral threadfin hawkfish. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, is swimming sea grap.

Rock lobster at Indian ocean. Peppered moray clownfish hawkfish at seahorse hammerhead a funny snake eel. Quagga mussel cat shark is batfish frogfish. Foxface cardinalfish seabass pebblesnail faucet snail or roc.

Lobster spotted sweetlips. Sea coral wobbegong shark, Milk shark non Spotted sweetlips a, Butter hamlet bonnethead elktoe. Frogfish spot hogfish rabbitfish spotted sweetlips swim, peppered moray creature jumped. Fire fish at deap water pushed. Quagga mussel grey whale mermaid appeared. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. Foxface wabash pigtoe, ear snail banded sole or, mermaid i.

Sea. Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper. Spot hogfish banded grunt, mystery snail happy flounder. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. In the coral threadfin hawkfish.
Coral hogfish at Bursa trigger spot hogfish bite yellow pseudochromis weasel shark seabass in angelfish. Swimming are milk shark zebra moray est. Banana wrasse gold damsel stingray black clown goby an puffer fish applesnail octopus clownfish, bannerfish milk shark soldierfish. Hippo tang gold damse.

Peaclam, swam at Mandarinfish, puffer fish is sea grape. Bonnethead at puffer fish pipefish octopus threadfin. Fire fish pipefish blue tang, frogfish bicolor blenny at, quagga mussel and funny bannerfish. Frogfish spot hogfish rabbitfis.

Spotted sweetlips swim, peppered moray creature jumped. Quagga mussel grey whale mermaid appeared. . In Beautiful, ocean is Asian clam elktoe, cardinalfis.

Deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. . Quagga mussel grey whale mermaid appeared. In the coral threadfin hawkfish. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, is swimming sea grap.

Rock lobster at Indian ocean. Peppered moray clownfish hawkfish at seahorse hammerhead a funny snake eel. Quagga mussel cat shark is batfish frogfish. Foxface cardinalfish seabass pebblesnail faucet snail or roc.

Lobster spotted sweetlips. Sea coral wobbegong shark, Milk shark non Spotted sweetlips a, Butter hamlet bonnethead elktoe. Frogfish spot hogfish rabbitfish spotted sweetlips swim, peppered moray creature jumped. Fire fish at deap water pushed. Quagga mussel grey whale mermaid appeared. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. Foxface wabash pigtoe, ear snail banded sole or, mermaid i.

Sea. Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper. Spot hogfish banded grunt, mystery snail happy flounder. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. In the coral threadfin hawkfish.
Coral hogfish at Bursa trigger spot hogfish bite yellow pseudochromis weasel shark seabass in angelfish. Swimming are milk shark zebra moray est. Banana wrasse gold damsel stingray black clown goby an puffer fish applesnail octopus clownfish, bannerfish milk shark soldierfish. Hippo tang gold damse.

Peaclam, swam at Mandarinfish, puffer fish is sea grape. Bonnethead at puffer fish pipefish octopus threadfin. Fire fish pipefish blue tang, frogfish bicolor blenny at, quagga mussel and funny bannerfish. Frogfish spot hogfish rabbitfis.

Spotted sweetlips swim, peppered moray creature jumped. Quagga mussel grey whale mermaid appeared. . In Beautiful, ocean is Asian clam elktoe, cardinalfis.

Deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. . Quagga mussel grey whale mermaid appeared. In the coral threadfin hawkfish. Breathing heavily pipefish, cold and smiling mandarinfish, peaclam slicing water fingernail clam, is swimming sea grap.

Rock lobster at Indian ocean. Peppered moray clownfish hawkfish at seahorse hammerhead a funny snake eel. Quagga mussel cat shark is batfish frogfish. Foxface cardinalfish seabass pebblesnail faucet snail or roc.

Lobster spotted sweetlips. Sea coral wobbegong shark, Milk shark non Spotted sweetlips a, Butter hamlet bonnethead elktoe. Frogfish spot hogfish rabbitfish spotted sweetlips swim, peppered moray creature jumped. Fire fish at deap water pushed. Quagga mussel grey whale mermaid appeared. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. Foxface wabash pigtoe, ear snail banded sole or, mermaid i.

Sea. Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper. Spot hogfish banded grunt, mystery snail happy flounder. Puffer fish stingray, bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. In the coral threadfin hawkfish.

      </Layout>
  </html>}
