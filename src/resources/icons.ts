import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { FaEarthAfrica } from "react-icons/fa6";

import { FaMediumM } from "react-icons/fa";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiStarDuotone
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiDocker,
  SiFigma,
  SiSupabase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAngular,
  SiBootstrap,
  SiVuedotjs,
  SiReact,
  SiBehance,
  SiAdobexd,
  SiDribbble
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: FaEarthAfrica,
  feature: PiStarDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  behance: SiBehance,
  dribbble: SiDribbble,
  medium: FaMediumM,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  adobexd: SiAdobexd,
  html5: SiHtml5,
  css3: SiCss3,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  angular: SiAngular,
  vuejs: SiVuedotjs,
  reactjs: SiReact,
  docker: SiDocker
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
