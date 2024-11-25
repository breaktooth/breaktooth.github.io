import { Box, Typography } from "@mui/material";

const sleepModeData = [
  {
    id: 1,
    title: "EW-B009 (Ewin)",
    imagePath: "/appendix/Ewin_EW-B009.drawio.png",
    alt: "The Sleep Mode Packets of EW-B009 (Ewin)",
  },
  {
    id: 2,
    title: "JP-B087-BK (Earto)",
    imagePath: "/appendix/Earto_JP-B087-BK.drawio.png",
    alt: "The Sleep Mode Packets of JP-B087-BK (Earto)",
  },
  {
    id: 3,
    title: "BSKBB315BK (Buffalo)",
    imagePath: "/appendix/Buffalo_BSKBB315BK.drawio.png",
    alt: "The Sleep Mode Packets of BSKBB315BK (Buffalo)",
  },
  {
    id: 4,
    title: "400-SKB602 (SANWA SUPPLY)",
    imagePath: "/appendix/SANWA_SUPPLY_400-SKB602.drawio.png",
    alt: "The Sleep Mode Packets of 400-SKB602 (SANWA SUPPLY)",
  },
  {
    id: 5,
    title: "308i (Ajazz)",
    imagePath: "/appendix/Ajazz_308i.drawio.png",
    alt: "The Sleep Mode Packets of 308i (Ajazz)",
  },
  {
    id: 6,
    title: "IC-BK22 (iClever)",
    imagePath: "/appendix/iClever_BK22.drawio.png",
    alt: "The Sleep Mode Packets of IC-BK22 (iClever)",
  },
  {
    id: 7,
    title: "A7726 (Anker)",
    imagePath: "/appendix/Anker_A7726.drawio.png",
    alt: "The Sleep Mode Packets of A7726 (Anker)",
  },
  {
    id: 8,
    title: "TK-FBP101WH (ELECOM)",
    imagePath: "/appendix/ELECOM_TK-FBP101WH.drawio.png",
    alt: "The Sleep Mode Packets of TK-FBP101WH (ELECOM)",
  },
  {
    id: 9,
    title: "K380BK (Logicool)",
    imagePath: "/appendix/Logicool_K380BK.drawio.png",
    alt: "The Sleep Mode Packets of K380BK (Logicool)",
  },
  {
    id: 10,
    title: "BSMBB105BK (Buffalo)",
    imagePath: "/appendix/Buffalo_BSMBB105BK.drawio.png",
    alt: "The Sleep Mode Packets of BSMBB105BK (Buffalo)",
  },
  {
    id: 11,
    title: "WM1 (EX-DASH)",
    imagePath: "/appendix/EX-DASH_WM1.drawio.png",
    alt: "The Sleep Mode Packets of WM1 (EX-DASH)",
  },
  {
    id: 12,
    title: "SAMDVM-13 (SAMDVM)",
    imagePath: "/appendix/SAMDVM_SAMDVM_13.drawio.png",
    alt: "The Sleep Mode Packets of SAMDVM-13 (SAMDVM)",
  },
  {
    id: 13,
    title: "Em23-S1 (BUSINESS HARMONY)",
    imagePath: "/appendix/Egret_Em23_S1.drawio.png",
    alt: "The Sleep Mode Packets of Em23-S1 (BUSINESS HARMONY)",
  },
  {
    id: 14,
    title: "Soundfree S10 (Lypertek)",
    imagePath: "/appendix/Lypertek_Soundfree_S10.drawio.png",
    alt: "The Sleep Mode Packets of Soundfree S10 (Lypertek)",
  },
  {
    id: 15,
    title: "Elite 7 Active (Jabra)",
    imagePath: "/appendix/Jabra_Elite_7_Active.drawio.png",
    alt: "The Sleep Mode Packets of Elite 7 Active (Jabra)",
  },
  {
    id: 16,
    title: "M3IETM (Sennheiser)",
    imagePath: "/appendix/Sennheiser_M3IETTM.drawio.png",
    alt: "The Sleep Mode Packets of M3IETM (Sennheiser)",
  },
  {
    id: 17,
    title: "AIR+(2nd) (LIBRATONE)",
    imagePath: "/appendix/Libratone_AIR_plus.drawio.png",
    alt: "The Sleep Mode Packets of AIR+(2nd) (LIBRATONE)",
  },
];

const SleepModePackets = () => {
  return (
    <Box>
      {sleepModeData.map((device) => (
        <Box key={device.id} sx={{ mb: 4 }}>
          <Typography className="text-xl font-semibold text-white mb-4">
            {device.id}. {device.title}
          </Typography>
          <Box
            component={"img"}
            sx={{
              width: "100%",
              maxWidth: "600px",
            }}
            alt={device.alt}
            src={device.imagePath}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SleepModePackets;
