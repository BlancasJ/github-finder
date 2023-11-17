export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

export const formatContactData = (data?: string | null) => {
  return data || "Not Available";
};

export const getContactClasses = (contact: string | null) => {
  return `card__content-contact-info ${!contact && 'card__content-contact-text-no-available'}`;
}
