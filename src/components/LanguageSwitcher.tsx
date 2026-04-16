import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/i18n/config";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = LANGUAGES.find((l) => l.code === i18n.language.split("-")[0]) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{current.flag} {current.label}</span>
          <span className="sm:hidden">{current.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="gap-2 cursor-pointer"
          >
            <span>{lang.flag}</span>
            <span className="flex-1">{lang.label}</span>
            {current.code === lang.code && <Check className="w-4 h-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
