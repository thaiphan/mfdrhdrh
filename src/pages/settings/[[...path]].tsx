import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import { ComponentType, lazy, useEffect, useState } from "react";

export default function SettingsPages() {
  const [Component, setComponent] = useState<null | undefined | ComponentType>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      setComponent(lazy(() => import("settings/App")));
    }
  }, []);

  return <DefaultLayout>{Component && <Component />}</DefaultLayout>;
}
