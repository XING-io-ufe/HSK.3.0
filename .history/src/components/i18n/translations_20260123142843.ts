export type Lang = "mn" | "en";

const common = {
  navHome: "Нүүр",
  navAbout: "Бидний тухай",
  navLesson: "Хичээлүүд",
  navContact: "Холбоо барих",
  navStart: "Эхлэх",
  navLogin: "Нэвтрэх",
  langToggleLabel: "Хэл",
};

export const translations: Record<Lang, Record<string, string>> = {
  mn: {
    ...common,
    authWelcomeTitle: "Тавтай морил",
    authWelcomeSubtitle: "Үргэлжлүүлэхийн тулд бүртгэлээрээ нэвтэрнэ үү",
    authEmailPhone: "Имэйл эсвэл Утасны дугаар",
    authPassword: "Нууц үг",
    authForgot: "Нууц үг мартсан?",
    authLoginCta: "НЭВТРЭХ",
    authOr: "эсвэл",
    authGoogle: "Google-ээр нэвтрэх",
    authSignupTitle: "Шинэ бүртгэл",
    authSignupSubtitle: "HSK 3.0 сургалтанд яг одоо нэгдээрэй",
    authPaymentTitle: "Төлбөр төлсөн үү?",
    authPaymentBody:
      "Бүртгүүлсний дараа QPay гүйлгээ автоматаар танигдаж, таны эрх шууд нээгдэнэ.",
    authPasswordConfirm: "Нууц үг давтах",
    authSignupCta: "БҮРТГҮҮЛЭХ",
    authTerms: "Бүртгүүлснээр та манай Үйлчилгээний нөхцөл-ийг зөвшөөрч байна.",
    authSecurity: "Таны мэдээлэл 100% найдвартай хамгаалагдсан.",
    authResetTitle: "Нууц үг сэргээх",
    authResetSubtitle: "Имэйл эсвэл утасны дугаараа оруулаад сэргээх зааврыг илгээнэ үү.",
    authSend: "Илгээх",
    authBack: "Буцах — Нэвтрэх хуудас",
  },
  en: {
    ...common,
    navHome: "Home",
    navAbout: "About",
    navLesson: "Lessons",
    navContact: "Contact",
    navStart: "Get Started",
    navLogin: "Login",
    langToggleLabel: "Language",
    authWelcomeTitle: "Welcome back",
    authWelcomeSubtitle: "Sign in with your account to continue",
    authEmailPhone: "Email or Phone",
    authPassword: "Password",
    authForgot: "Forgot password?",
    authLoginCta: "LOGIN",
    authOr: "or",
    authGoogle: "Continue with Google",
    authSignupTitle: "Create account",
    authSignupSubtitle: "Join the HSK 3.0 course right now",
    authPaymentTitle: "Payment completed?",
    authPaymentBody:
      "After signing up, your QPay payment is detected automatically and access opens instantly.",
    authPasswordConfirm: "Confirm password",
    authSignupCta: "SIGN UP",
    authTerms: "By signing up you agree to our Terms of Service.",
    authSecurity: "Your data is 100% securely protected.",
    authResetTitle: "Reset password",
    authResetSubtitle: "Enter your email or phone and we'll send reset instructions.",
    authSend: "Send",
    authBack: "Back to Login",
  },
};

export function t(lang: Lang, key: string) {
  const entry = translations[lang]?.[key];
  if (entry) return entry;
  return translations.mn[key] ?? key;
}
