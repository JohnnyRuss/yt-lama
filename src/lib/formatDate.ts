interface ConfigsT {
  shortNumeric: Intl.DateTimeFormatOptions;
  verbal: Intl.DateTimeFormatOptions;
  verbalWithHours: Intl.DateTimeFormatOptions;
}

const configs: ConfigsT = {
  shortNumeric: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
  verbal: {
    month: "short",
    year: "numeric",
    day: "numeric",
  },
  verbalWithHours: {
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  },
};

export default function formatDate(
  dateToFormat: Date | string | undefined,
  config: "shortNumeric" | "verbal" | "verbalWithHours"
): string | null {
  if (!dateToFormat) return null;

  const date = new Date(dateToFormat);

  const formattedDate = new Intl.DateTimeFormat(
    "en-us",
    configs[config as keyof typeof configs]
  )?.format(date);

  return formattedDate.split("/").join("-");
}
