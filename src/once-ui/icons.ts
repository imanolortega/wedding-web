import { IconType } from 'react-icons';

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineClipboard,
  HiOutlineMagnifyingGlass,
  HiCalendar,
  HiOutlineLink,
  HiExclamationTriangle,
  HiArrowUpRight,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineComputerDesktop,
  HiOutlineEnvelope,
} from 'react-icons/hi2';

import { RiVisaLine } from 'react-icons/ri';

import { FaDiscord, FaGithub, FaGoogle } from 'react-icons/fa6';

import { LuChevronsLeftRight } from 'react-icons/lu';

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  calendar: HiCalendar,
  check: HiCheck,
  checkCircle: HiCheckCircle,
  chevronDown: HiChevronDown,
  chevronLeft: HiChevronLeft,
  chevronRight: HiChevronRight,
  chevronsLeftRight: LuChevronsLeftRight,
  chevronUp: HiChevronUp,
  clipboard: HiOutlineClipboard,
  close: HiMiniXMark,
  computer: HiOutlineComputerDesktop,
  dark: HiOutlineMoon,
  discord: FaDiscord,
  email: HiOutlineEnvelope,
  errorCircle: HiExclamationCircle,
  eye: HiOutlineEye,
  eyeDropper: HiEyeDropper,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  google: FaGoogle,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  light: HiOutlineSun,
  minus: HiMiniMinus,
  openLink: HiOutlineLink,
  person: HiMiniUser,
  plus: HiMiniPlus,
  refresh: HiOutlineArrowPath,
  search: HiOutlineMagnifyingGlass,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  visa: RiVisaLine,
  warningTriangle: HiExclamationTriangle,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
