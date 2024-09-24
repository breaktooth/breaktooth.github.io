import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import { HOME_TITLE } from "./domain/const";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {HOME_TITLE}
      </Typography>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#1A1A1A", color: "white" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#1A1A1A" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {HOME_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A1A1A",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Container component="main" sx={{ mt: 8, mb: 4 }}>
        <Toolbar />
        <Box id="logo" sx={{ mb: 4, textAlign: "center" }}>
          <img
            src="/breaktooth_logo.png"
            alt="Breaktooth Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Box id="poc" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            1. Breaktooth PoC Code
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We have prepared a Proof-of-Concept (PoC) code to demonstrate the
            Breaktooth attack. This code is intended for educational and
            research purposes only.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Please note that the use of this PoC should comply with all ethical
            guidelines outlined below.
          </Typography>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href="https://drive.google.com/file/d/13SPIGO1AuhxTk-s1RFkENd7T5qWp2YbN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#45a049",
              },
            }}
          >
            Download Breaktooth PoC Code
          </Button>
          <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
            This source code is v0.9.0. We plan to extend this tool to also
            apply to audio devices and re-release it.
          </Typography>
        </Box>
        <Box id="ethics" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            2. Ethical Guidelines for Breaktooth
          </Typography>
          <Section
            title="2.1. Purpose and Intended Use"
            content="Breaktooth is designed for educational and security research purposes only. It is intended to be used by cybersecurity professionals, penetration testers, and network administrators to assess and improve the security of systems and networks with explicit permission."
          />
          <Section
            title="2.2. Responsible Use"
            content="Users of this tool agree to:"
            bulletPoints={[
              "Only use Breaktooth on systems and networks they own or have explicit written permission to test.",
              "Comply with all applicable local, state, and federal laws and regulations.",
              "Report any vulnerabilities discovered to the appropriate parties responsibly.",
              "Not use this tool for any malicious, harmful, or illegal activities.",
            ]}
          />
          <Section
            title="2.3. Disclaimer"
            content="The creators and distributors of Breaktooth are not responsible for any misuse, damage, or legal consequences resulting from the use of this tool. Users assume all risks and liabilities associated with its use."
          />
          <Section
            title="2.4. Ethical Considerations"
            content="We strongly encourage users to consider the ethical implications of their actions when using Breaktooth. Always prioritize the security and privacy of individuals and organizations, and use this tool to promote better cybersecurity practices."
          />
          <Section
            title="2.5. Feedback and Responsible Disclosure"
            content="If you discover any bugs, vulnerabilities, or potential for misuse in Breaktooth, please report them to k_kimura@stu.kobe-u.ac.jp following responsible disclosure practices. By downloading, installing, or using Breaktooth, you acknowledge that you have read, understood, and agree to abide by these ethical guidelines."
          />
        </Box>
      </Container>
    </Box>
  );
}

interface SectionProps {
  title: string;
  content: string;
  bulletPoints?: string[];
}

function Section({ title, content, bulletPoints }: SectionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#FFFFFF" }}>
        {title}
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#CCCCCC" }}>
        {content}
      </Typography>
      {bulletPoints && (
        <List>
          {bulletPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={point}
                sx={{ "& .MuiTypography-root": { color: "#CCCCCC" } }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
