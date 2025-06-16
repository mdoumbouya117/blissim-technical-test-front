import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const DEFAULT_FEATURES = [
  {
    title: <>Un accompagnement sur-mesure</>,
    content: (
      <>
        Blissim c&apos;est une box mensuelle sans engagement, mais aussi des
        offres exclusives et un{" "}
        <span style={{ fontWeight: 600 }}>e-shop généreux</span>. Profitez de
        nos conseils personnalisés et de nos vidéos accessibles gratuitement.
      </>
    ),
  },
  {
    title: <>10 ans d&apos;expertise beauté</>,
    content: (
      <>
        N°1 de l&apos;abonnement beauté en Europe, Blissim c&apos;est déjà plus
        de <span style={{ fontWeight: 600 }}>250 000 clients</span> déjà
        conquis.
        <br />
        Label trustpilot
      </>
    ),
  },
  {
    title: <>Nos engagements</>,
    content: (
      <>
        Nous travaillons avec des partenaires beauté et des experts toujours
        plus engagés, pour vous proposer une{" "}
        <span style={{ fontWeight: 600 }}>sélection personnalisée</span> de
        soins de qualité et le plus naturels possibles.
      </>
    ),
  },
];

const OuterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
}));

const StyledImage = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: `${theme.shape.borderRadius * 2}px ${
    theme.shape.borderRadius * 2
  }px 0 0`,
  overflow: "hidden",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.07)",
  [theme.breakpoints.up("md")]: {
    borderRadius: `${theme.shape.borderRadius * 2}px 0 0 ${
      theme.shape.borderRadius * 2
    }px`,
  },
}));

const TextContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(0.5),
  },
}));

const FeatureContent = styled(Box)({
  flexGrow: 1,
});

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 1.25,
  fontSize: "1.25rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.5,
  fontSize: "1rem",
}));

const BlissimBanner = ({
  features = DEFAULT_FEATURES,
  imageUrl = "/static/images/homepage-box-image.jpg",
  imageAlt = "Coffret Blissim",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <OuterContainer maxWidth="lg">
      <ContentWrapper>
        <ImageContainer>
          <StyledImage sx={{ height: isMobile ? "300px" : "100%" }}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={isMobile ? 600 : 400}
              height={isMobile ? 300 : 400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              loading="lazy"
            />
          </StyledImage>
        </ImageContainer>

        <TextContentContainer>
          {features.map((item, i) => (
            <FeatureItem key={i}>
              <IconWrapper aria-hidden="true">
                <svg
                  width="57"
                  height="52"
                  viewBox="0 0 57 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3521 6.15601C30.6508 6.15603 32.8079 7.0504 34.4282 8.67065L36.4321 10.6736L38.437 8.67065L38.7573 8.36597C42.1269 5.32237 47.3388 5.42401 50.5854 8.67065L50.8804 8.9812C52.3137 10.5653 53.1 12.5916 53.1001 14.7468C53.1001 16.9019 52.3136 18.9329 50.8804 20.5134L50.5854 20.824L45.7632 25.6414V40.0183L49.2231 44.8337L49.27 44.9099C49.3667 45.0932 49.3688 45.3105 49.272 45.4988V45.4998C49.1617 45.7081 48.9458 45.8445 48.7046 45.8445H1.53564C1.32576 45.8445 1.13321 45.7453 1.01416 45.5759L0.968262 45.4988C0.857691 45.2837 0.875921 45.0306 1.01709 44.8337L4.47803 40.0173V15.782C4.47805 15.4245 4.76766 15.1414 5.11865 15.1414H19.7778C19.6714 12.8135 20.4972 10.4485 22.2749 8.67065L22.5864 8.37476C24.1706 6.94165 26.1969 6.15601 28.3521 6.15601ZM2.78564 44.5632H47.4644L44.7993 40.8572H5.45068L2.78564 44.5632ZM5.75928 39.5808H44.4868V26.9158L36.9243 34.4744C36.8317 34.5669 36.718 34.6241 36.5972 34.6472L36.4741 34.6589H36.438L36.3696 34.6619C36.2336 34.6606 36.0982 34.6141 35.9849 34.5232L35.9302 34.4744L22.2808 20.824C21.0339 19.5771 20.251 18.0346 19.9351 16.4226H5.75928V39.5808ZM49.6841 9.57593C46.921 6.81324 42.4823 6.72678 39.6147 9.31714L39.3423 9.57593L36.8882 12.031L36.8872 12.032C36.6672 12.2464 36.3293 12.2739 36.0825 12.1121L35.9829 12.031L33.5278 9.57593C32.1479 8.19613 30.3115 7.43726 28.3569 7.43726C26.5245 7.43731 24.7966 8.10463 23.4507 9.32495L23.186 9.57593C20.334 12.428 20.3342 17.0656 23.186 19.9177L36.4321 33.1638L44.6772 24.9255L49.6841 19.9177H49.6851L49.937 19.6541C51.1617 18.3081 51.8286 16.5794 51.8286 14.7468C51.8285 12.9146 51.157 11.1865 49.936 9.84058L49.6841 9.57593Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.2"
                  />
                  <path
                    d="M19.9397 35.8381C19.9397 36.1948 19.6558 36.4795 19.2991 36.4797C18.9417 36.4797 18.6585 36.1891 18.6585 35.8381V32.0061C18.6585 30.8445 17.7146 29.9016 16.553 29.9016H13.0481C11.8867 29.9017 10.9436 30.8446 10.9436 32.0061V35.6672C10.9434 36.0238 10.6596 36.3077 10.303 36.3078C9.9457 36.3078 9.66261 36.018 9.6624 35.6672V32.0061C9.6624 30.1412 11.1784 28.6252 13.0433 28.6252H16.5481C18.4129 28.6253 19.9288 30.141 19.9397 32.0051V35.8381Z"
                    fill="#F6AC33"
                    stroke="#F6AC33"
                    strokeWidth="0.2"
                  />
                  <path
                    d="M14.7954 20.9812C16.8837 20.9812 18.5824 22.679 18.5825 24.7673C18.5825 26.8558 16.8838 28.5544 14.7954 28.5544C12.7071 28.5543 11.0093 26.8557 11.0093 24.7673C11.0094 22.6791 12.7072 20.9814 14.7954 20.9812ZM14.7954 22.2576C13.4104 22.2577 12.2858 23.3824 12.2856 24.7673C12.2856 26.1524 13.4104 27.2779 14.7954 27.2781C16.1806 27.2781 17.3061 26.1525 17.3061 24.7673C17.306 23.3823 16.1805 22.2576 14.7954 22.2576Z"
                    fill="#F6AC33"
                    stroke="#F6AC33"
                    strokeWidth="0.2"
                  />
                </svg>
              </IconWrapper>
              <FeatureContent>
                <FeatureTitle component="h3" gutterBottom>
                  {item.title}
                </FeatureTitle>
                <FeatureText variant="body2">{item.content}</FeatureText>
              </FeatureContent>
            </FeatureItem>
          ))}
        </TextContentContainer>
      </ContentWrapper>
    </OuterContainer>
  );
};

BlissimBanner.propTypes = {
  features: PropTypes.arrayOf({
    tile: PropTypes.string,
    content: PropTypes.string,
  }),
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};
export default BlissimBanner;
