// import { FlexboxGrid } from "rsuite";
import { FlexboxGrid } from "rsuite";
import HomeDescr from "./HomeDescr";
import HomeImg from "./HomeImg";
import Container from "rsuite/Container";

const HomeMenu = () => (
  <div className="show-grid">
    <Container>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={12}>
          <HomeDescr />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <HomeImg />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Container>
  </div>
);

// const HomeMenu = () => (
//   <div className="show-grid">
//     {/* <Container> */}
//     <FlexboxGrid justify="center">
//       <FlexboxGrid.Item as={Col} colspan={24} md={6}>
//         <HomeImg />
//       </FlexboxGrid.Item>
//       {/* <FlexboxGrid.Item as={Col} colspan={24} md={6}>
//         <ContactForm />
//       </FlexboxGrid.Item> */}
//       <FlexboxGrid.Item as={Col} colspan={24} md={6} smHidden>
//         <HomeDescr />
//       </FlexboxGrid.Item>
//     </FlexboxGrid>
//     {/* </Container> */}
//   </div>
// );

export default HomeMenu;
