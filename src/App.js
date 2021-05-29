import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import SocialMedia from "./components/common/SocialMedia";
import MailLink from "./components/common/MailLink";
import ScrollToTop from "./components/common/ScrollToTop";
import theme from "./utils/theme";

function App() {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Navbar />
      <SocialMedia />
      <MailLink />
      <Box as="main" px={{ base: "5", lg: "100px", xl: "200px" }}>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </Box>
      <Footer />
      <ScrollToTop />
    </ChakraProvider>
  );
}

export default App;
