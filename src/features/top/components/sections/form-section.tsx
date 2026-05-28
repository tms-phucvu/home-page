"use client"
import { Button } from "@/shared/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/shared/components/ui/combobox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field"
import { Input } from "@/shared/components/ui/input"
import { Textarea } from "@/shared/components/ui/textarea"
import { useTranslations } from "next-intl"

export default function FormSection() {
  const t = useTranslations("homePage.formSection")

  const inquiryItems = t.raw("inquiryItems") as string[]

  return (
    <section className="flex min-h-screen w-full items-center justify-center p-8">
      <div className="border-border grid w-full max-w-4xl grid-cols-1 overflow-hidden sm:rounded-2xl sm:border lg:grid-cols-3">
        {/* Gradient panel */}
        <div className="relative flex items-center justify-center p-6 max-lg:hidden lg:col-span-1">
          <div className="h-full w-full rounded-xl bg-linear-to-br from-cyan-100 to-pink-100"></div>
        </div>

        {/* Form panel */}
        <div className="flex flex-col justify-center gap-5 sm:p-7 lg:col-span-2">
          <FieldSet>
            <FieldLegend>{t("legend")}</FieldLegend>
            <FieldDescription>{t("description")}</FieldDescription>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="item">{t("item_label")}</FieldLabel>
                  <Combobox items={inquiryItems}>
                    <ComboboxInput placeholder={t("item_placeholder")} />
                    <ComboboxContent>
                      <ComboboxEmpty>{t("item_empty")}</ComboboxEmpty>
                      <ComboboxList>
                        {inquiryItems.map((item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
                <Field>
                  <FieldLabel htmlFor="companyName">{t("company_label")}</FieldLabel>
                  <Input id="companyName" type="text" placeholder={t("company_placeholder")} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="name">{t("name_label")}</FieldLabel>
                  <Input id="name" type="text" placeholder={t("name_placeholder")} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phonetic">{t("phonetic_label")}</FieldLabel>
                  <Input id="phonetic" type="text" placeholder={t("phonetic_placeholder")} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="email">{t("email_label")}</FieldLabel>
                  <Input id="email" type="text" placeholder={t("email_placeholder")} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">{t("phone_label")}</FieldLabel>
                  <Input id="phone" type="text" placeholder={t("phone_placeholder")} />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="details">{t("details_label")}</FieldLabel>
                <Textarea id="details" placeholder={t("details_placeholder")} />
              </Field>
              <Field orientation="horizontal">
                <Button type="submit" variant={"outline"}>
                  {t("submit")}
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>
    </section>
  )
}
