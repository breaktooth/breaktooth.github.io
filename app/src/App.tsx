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
  Link,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
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
          {/* <img
            src="/breaktooth_logo.png"
            alt="Breaktooth Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          /> */}
          <BreaktoothLogo />
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
            href="https://drive.google.com/file/d/1BQIA_s9HHm9x4aWMsJUwa2FVgeYWI1f4/view?usp=sharing"
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
        </Box>
        <Box id="demo" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            2. Demo
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Below is a demonstration of the Breaktooth attack:
          </Typography>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
              mb: 3,
            }}
          >
            <iframe
              src="https://drive.google.com/file/d/1PGrLUe9FMlisGQNWek8UYkI2SWOwLU2s/preview"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="autoplay"
              title="breaktooth attack demo"
            />
          </Box>
        </Box>
        <Box id="ethics" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            3. Ethical Guidelines for Breaktooth
          </Typography>
          <Section
            title="3.1. Purpose and Intended Use"
            content="Breaktooth is designed for educational and security research purposes only. It is intended to be used by cybersecurity professionals, penetration testers, and network administrators to assess and improve the security of systems and networks with explicit permission."
          />
          <Section
            title="3.2. Responsible Use"
            content="Users of this tool agree to:"
            bulletPoints={[
              "Only use Breaktooth on systems and networks they own or have explicit written permission to test.",
              "Comply with all applicable local, state, and federal laws and regulations.",
              "Report any vulnerabilities discovered to the appropriate parties responsibly.",
              "Not use this tool for any malicious, harmful, or illegal activities.",
            ]}
          />
          <Section
            title="3.3. Disclaimer"
            content="The creators and distributors of Breaktooth are not responsible for any misuse, damage, or legal consequences resulting from the use of this tool. Users assume all risks and liabilities associated with its use."
          />
          <Section
            title="3.4. Ethical Considerations"
            content="We strongly encourage users to consider the ethical implications of their actions when using Breaktooth. Always prioritize the security and privacy of individuals and organizations, and use this tool to promote better cybersecurity practices."
          />
          <Section
            title="3.5. Feedback and Responsible Disclosure"
            content="If you discover any bugs, vulnerabilities, or potential for misuse in Breaktooth, please report them to k_kimura@stu.kobe-u.ac.jp following responsible disclosure practices. By downloading, installing, or using Breaktooth, you acknowledge that you have read, understood, and agree to abide by these ethical guidelines."
          />
        </Box>
        <Box id="disclosure" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            4. Responsible Disclosure
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This work investigates unknown threats to widespread technologies
            and proposes defenses. All experiments were conducted inhouse; no
            external devices were attacked. We responsibly disclosed our
            findings to the Bluetooth SIG in May 2024. We also proposed the
            patch for the findings
          </Typography>
        </Box>
        <Box id="references" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            5. References
          </Typography>
          <Section
            title="5.1. Journal Paper"
            content=""
            bulletPoints={[
              <React.Fragment key="journal">
                Keiichiro KIMURA, Hiroki KUZUNO, Yoshiaki SHIRAISHI and Masakatu
                MORII. "Breaktooth: Breaking Bluetooth Sessions Abusing
                Power-Saving Mode" Journal of Information Processing, Vol.33, pp.523-536.
                2025.
                <Link
                  href="https://www.jstage.jst.go.jp/article/ipsjjip/33/0/33_523/_article"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#4CAF50", ml: 1 }}
                >
                  ipsjjip/33/0/33_523/_article
                </Link>
              </React.Fragment>,
            ]}
          />
          <Section
            title="5.2. MISC"
            content=""
            bulletPoints={[
              <React.Fragment key="misc">
                Keiichiro KIMURA, Hiroki KUZUNO, Yoshiaki SHIRAISHI and Masakatu
                MORII. "Breaktooth: Breaking Bluetooth Sessions Abusing
                Power-Saving Mode" Cryptology ePrint Archive, Paper 2024/900.
                2024.
                <Link
                  href="https://eprint.iacr.org/2024/900"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#4CAF50", ml: 1 }}
                >
                  eprint.iacr.org/2024/900
                </Link>
              </React.Fragment>,
              <React.Fragment key="misc">
                Keiichiro KIMURA, Hiroki KUZUNO, Yoshiaki SHIRAISHI and Masakatu
                MORII. "Device Hijack Attacks Abusing Bluetooth Power-Saving
                Mode" CSEC. 2024.
                <Link
                  href="http://id.nii.ac.jp/1001/00237168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#4CAF50", ml: 1 }}
                >
                  id.nii.ac.jp/1001/00237168/
                </Link>
              </React.Fragment>,
              <React.Fragment key="misc">
                Keiichiro KIMURA, Hiroki KUZUNO, Yoshiaki SHIRAISHI and Masakatu
                MORII. "A Proposed Link Key Hijacking Attack Using the
                Power-Saving Mode against Bluetooth BR/EDR " ISEC. 2023.
                <Link
                  href="https://ken.ieice.org/ken/paper/20231110nCyv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#4CAF50", ml: 1 }}
                >
                  ken.ieice.org/ken/paper/20231110nCyv/
                </Link>
              </React.Fragment>,
              <React.Fragment key="misc">
                Keiichiro KIMURA, Hiroki KUZUNO, Yoshiaki SHIRAISHI and Masakatu
                MORII. "A New Attack Method on Bluetooth BR/EDR and Its
                Demonstration Vulnerability of Power-Saving Mode and Its Threat"
                CSS2023. 2023.
                <Link
                  href="http://id.nii.ac.jp/1001/00228658/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#4CAF50", ml: 1 }}
                >
                  id.nii.ac.jp/1001/00228658/
                </Link>
              </React.Fragment>,
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}

interface SectionProps {
  title: string;
  content: string;
  bulletPoints?: React.ReactNode[];
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

function BreaktoothLogo() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "#00ff00",
        p: 4,
        borderRadius: 2,
        fontFamily: "monospace",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <TerminalIcon sx={{ mr: 1 }} />
        <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
          [root@breaktooth:~]# ./exploit.sh
        </Typography>
      </Box>

      <pre
        style={{
          fontSize: "1rem",
          lineHeight: "1.2",
          overflow: "auto",
          whiteSpace: "pre",
          margin: 0,
          marginBottom: "24px",
        }}
      >
        {`____                 _    _              _   _     
|  _ \\              | |  | |            | | | |    
| |_) |_ __ ___  ___| | _| |_ ___   ___ | |_| |__  
|  _ <| '__/ _ \\/ __| |/ / __/ _ \\ / _ \\| __| '_ \\ 
| |_) | | |  __/ (__|   <| || (_) | (_) | |_| | | |
|____/|_|  \\___|\\___|_|\\_\\\\__\\___/ \\___/ \\__|_| |_|`}
      </pre>

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Breaking Security & Privacy in Bluetooth Power-Saving Mode
        </Typography>
      </Box>

      <Box
        sx={{
          "& > div": {
            mb: 1.5,
            fontSize: "1.0rem",
            fontFamily: "monospace",
            textAlign: "left",
            pl: 2,
          },
        }}
      >
        <div>[*] Target: Bluetooth Sleep Mode</div>
        <div>[*] Method: Session Hijacking</div>
        <div>
          [*] Impact: All CIA (Confidentiality, Integrity, Availability) Triad
        </div>
        <div>
          [*] Targets: 17 Commercial Bluetooth Devices Successfully Exploited
        </div>
        <div>[*] Disclosure: Reported to Bluetooth SIG (May 2024)</div>
        <div>[+] Attack Tool: Low-Cost and Reproducible Toolkit Ready</div>
      </Box>

      <Divider sx={{ my: 3, borderColor: "#00ff00" }} />

      <Typography
        variant="caption"
        sx={{
          display: "block",
          fontFamily: "monospace",
          color: "#666",
        }}
      >
        {"> "}Disclaimer: Research purposes only. Responsible disclosure in
        progress.
      </Typography>
    </Box>
  );
}
