import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import { lazy, useEffect, useState } from "react";

export default function SettingsPages() {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("settings/App")));
    }
  }, []);

  return <DefaultLayout>{Component && <Component />}</DefaultLayout>;
}
