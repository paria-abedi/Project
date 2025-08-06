/* eslint-disable @typescript-eslint/no-explicit-any */
import useDeviceType from "@/libs/hooks/useDeviceType";
import { Flex } from "@/primitives";
import {
  Drawer,
  Fade,
  IconButton,
  Input,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import SvgClosee from "../../../../public/icon/Closee";
import { colorPalette } from "@/libs/theme";

interface CountryModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (country: string) => void;
}

const ModalOrigin = ({ open, onClose, onSelect }: CountryModalProps) => {
  const { isMobile } = useDeviceType();
  const [countries, setCountries] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!open) return;
   const fetchCountries = async () => {
  try {
    const res = await fetch("https://corsproxy.io/?https://www.apicountries.com/countries");
    if (!res.ok) throw new Error("API failed");

    const data = await res.json();
  
    const countryName = data
      .filter((c: any) => c.name)
      .map((c: any) => c.name)
      .sort();
    setCountries(countryName);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

    fetchCountries();
  }, [open]);

  const filtered = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Flex>
      {isMobile ? (
        <>
          <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            PaperProps={{
              sx: {
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                backgroundColor: "#161616",
                padding: "40px 16px",
                maxHeight: "300px",
              },
            }}
          >
            <Flex gap={"24px"}>
              <Typography>Select Your Country</Typography>
              <Input
                sx={{
                  backgroundColor: "#212121",
                  color: "#888888",
                  padding: "4px 12px",
                  borderRadius: "24px",
                }}
                disableUnderline
                placeholder="Search Country ... "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Flex>
                {filtered.map((country) => (
                  <MenuItem
                    sx={{
                      backgroundColor: "#212121",
                      margin: "12px 0",
                      borderRadius: "24px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    key={country}
                    onClick={() => {
                      onSelect(country);
                      onClose();
                    }}
                  >
                    {country}
                  </MenuItem>
                ))}
              </Flex>
            </Flex>
          </Drawer>
        </>
      ) : (
        <>
          <Modal closeAfterTransition open={open} onClose={onClose}>
            <Fade in={open}>
              <Flex
                gap={"24px"}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  maxHeight: "500px",
                  overflow: "auto",
                  transform: "translate(-50%, -50%)",
                  width: 590,
                  backgroundColor: "#161616",
                  boxShadow: 24,
                  padding: "16px 24px 24px 24px",
                  borderRadius: "24px",
                }}
              >
                <IconButton
                  onClick={() => onClose()}
                  sx={{ position: "absolute", top: "4px", right: "4px" }}
                >
                  <SvgClosee />
                </IconButton>
                <Typography variant="body2" color={colorPalette.gray[1]}>
                  Select Your Country
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Search Country ... "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    backgroundColor: "#212121",
                    color: "#888888",
                    padding: "4px 12px",
                    borderRadius: "24px",
                  }}
                />
                <Flex>
                  {filtered.map((country) => (
                    <MenuItem
                      sx={{
                        backgroundColor: "#212121",
                        margin: "12px 0",
                        borderRadius: "24px",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                      key={country}
                      onClick={() => {
                        onSelect(country);
                        onClose();
                      }}
                    >
                      {country}
                    </MenuItem>
                  ))}
                </Flex>
              </Flex>
            </Fade>
          </Modal>
        </>
      )}
    </Flex>
  );
};

export default ModalOrigin;
