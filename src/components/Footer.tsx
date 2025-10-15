import { fetchSetting } from "@/lib/nezha-api"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import { useTranslation } from "react-i18next"

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const { data: settingData } = useQuery({
    queryKey: ["setting"],
    queryFn: () => fetchSetting(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  })

  return (
    <footer className="mx-auto w-full max-w-5xl px-4 lg:px-0 pb-4 server-footer">
      <section className="flex flex-col">
        <section className="mt-1 flex items-center sm:flex-row flex-col justify-between gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50 server-footer-name">
          <div className="flex items-center gap-1">
            &copy;2020-{new Date().getFullYear()}
          </div>
          <div className="server-footer-theme flex flex-col items-center sm:items-end">
            {/* 移除了快捷键提示部分 */}
            <section>
              {t("footer.themeBy")}
              {/* 移除了 nezha-dash 链接和 Git 哈希部分 */}
            </section>
          </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer
