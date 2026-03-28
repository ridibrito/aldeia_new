"use client";

import { useEffect } from "react";

export function FooterConversionTracking() {
  useEffect(() => {
    console.log(
      "%cScript de rastreio 4.0 by Comunidade Nova Ordem do Digital - Dericson Calari e Samuel Choairy",
      "color: yellow; font-size: 20px;"
    );

    function getParameterByName(name: string, url?: string) {
      const sourceUrl = url ?? window.location.href;
      const escapedName = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp(`[?&]${escapedName}(=([^&#]*)|&|#|$)`);
      const results = regex.exec(sourceUrl);

      if (!results) return null;
      if (!results[2]) return "";

      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function setCookie(cookieName: string, cookieValue: string, expirationTime: number) {
      const cookiePath = "/";
      const expirationMs = expirationTime * 1000;
      const date = new Date();
      date.setTime(date.getTime() + expirationMs);

      document.cookie = `${cookieName}=${cookieValue}; expires=${date.toUTCString()}; path=${cookiePath}`;
    }

    function getCookieValue(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);

      if (parts.length === 2) {
        return parts.pop()?.split(";").shift() ?? null;
      }

      return null;
    }

    const adParams = ["fbclid", "gclid"];
    const urlParams = new URLSearchParams(window.location.search);
    let isAdClick = false;

    adParams.forEach((param) => {
      if (urlParams.has(param)) {
        isAdClick = true;
      }
    });

    if (isAdClick) {
      const utmSource = getParameterByName("utm_source");
      const utmMedium = getParameterByName("utm_medium");
      const utmCampaign = getParameterByName("utm_campaign");
      const utmContent = getParameterByName("utm_content");
      const utmTerm = getParameterByName("utm_term");

      if (utmSource) setCookie("cookieUtmSource", utmSource, 63072000);
      if (utmMedium) setCookie("cookieUtmMedium", utmMedium, 63072000);
      if (utmCampaign) setCookie("cookieUtmCampaign", utmCampaign, 63072000);
      if (utmContent) setCookie("cookieUtmContent", utmContent, 63072000);
      if (utmTerm) setCookie("cookieUtmTerm", utmTerm, 63072000);
    }

    const trackedParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ] as const;
    const urlParamsReferrer = new URLSearchParams(document.referrer.split("?")[1] || "");
    const utms: Record<(typeof trackedParams)[number], string> = {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
    };

    const cookieUtmSource = getCookieValue("cookieUtmSource");
    const cookieUtmMedium = getCookieValue("cookieUtmMedium");
    const cookieUtmCampaign = getCookieValue("cookieUtmCampaign");
    const cookieUtmContent = getCookieValue("cookieUtmContent");
    const cookieUtmTerm = getCookieValue("cookieUtmTerm");

    trackedParams.forEach((param) => {
      if (param === "utm_source") {
        utms[param] =
          urlParams.get(param) ??
          (document.referrer
            ? (urlParamsReferrer.get(param) ?? new URL(document.referrer).hostname)
            : "direto");
      } else {
        utms[param] = urlParams.get(param) ?? (urlParamsReferrer.get(param) ?? "");
      }
    });

    let sckValues = Object.values(utms).filter((value) => value !== "");
    const currentSckValues = urlParams.get("sck")?.split("|") ?? [];
    sckValues = sckValues.filter((value) => !currentSckValues.includes(value));

    const srcValues = [
      cookieUtmSource,
      cookieUtmMedium,
      cookieUtmCampaign,
      cookieUtmContent,
      cookieUtmTerm,
    ].filter((value): value is string => value !== null && value !== "");

    const updateLinks = (element: HTMLAnchorElement, elementUrl: URL) => {
      const elementSearchParams = new URLSearchParams(elementUrl.search);
      let modified = false;

      urlParams.forEach((value, key) => {
        if (!elementSearchParams.has(key)) {
          elementSearchParams.append(key, value);
          modified = true;
        }
      });

      Object.entries(utms).forEach(([key, value]) => {
        if (!elementSearchParams.has(key)) {
          elementSearchParams.append(key, value);
          modified = true;
        }
      });

      if (cookieUtmSource && !elementSearchParams.has("cookieUtmSource")) {
        elementSearchParams.append("cookieUtmSource", cookieUtmSource);
        modified = true;
      }

      if (cookieUtmMedium && !elementSearchParams.has("cookieUtmMedium")) {
        elementSearchParams.append("cookieUtmMedium", cookieUtmMedium);
        modified = true;
      }

      if (cookieUtmCampaign && !elementSearchParams.has("cookieUtmCampaign")) {
        elementSearchParams.append("cookieUtmCampaign", cookieUtmCampaign);
        modified = true;
      }

      if (cookieUtmContent && !elementSearchParams.has("cookieUtmContent")) {
        elementSearchParams.append("cookieUtmContent", cookieUtmContent);
        modified = true;
      }

      if (cookieUtmTerm && !elementSearchParams.has("cookieUtmTerm")) {
        elementSearchParams.append("cookieUtmTerm", cookieUtmTerm);
        modified = true;
      }

      if (!elementSearchParams.has("sck") && sckValues.length > 0) {
        elementSearchParams.append("sck", sckValues.join("|"));
        modified = true;
      }

      if (!elementSearchParams.has("src") && srcValues.length > 0) {
        elementSearchParams.append("src", srcValues.join("|"));
        modified = true;
      }

      if (modified) {
        return `${elementUrl.origin}${elementUrl.pathname}?${elementSearchParams.toString()}`;
      }

      return element.href;
    };

    document.querySelectorAll<HTMLAnchorElement>("a").forEach((element) => {
      try {
        const elementUrl = new URL(element.href, window.location.origin);
        if (!elementUrl.hash) {
          element.href = updateLinks(element, elementUrl);
        }
      } catch {
        console.warn("Erro ao processar URL no link:", element.href);
      }
    });
  }, []);

  return null;
}
