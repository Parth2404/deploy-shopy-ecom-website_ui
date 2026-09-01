const defaultEvents = ["Lead"];

export const trackViaFbPixel = (event: string, eventID: string, data: any) => {
  if (typeof window !== "undefined" && window.fbq) {
    const type = defaultEvents.includes(event) ? "track" : "trackCustom";
    window.fbq(type, event, data, { eventID });
  }
};
