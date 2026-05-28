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
const inquiryItems = ["Your opinion", "Consultation", "Estimate"] as const

export default function FormSection() {
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
            <FieldLegend>Inquiry</FieldLegend>
            <FieldDescription>
              Please feel free to contact us with any questions, inquiries, or requests for quotes.
              We will get back to you after reviewing your message
            </FieldDescription>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="item">Inquiry Items</FieldLabel>
                  <Combobox items={inquiryItems}>
                    <ComboboxInput placeholder="Choose inquiry items" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
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
                  <FieldLabel htmlFor="companyName">Company/Organization Name</FieldLabel>
                  <Input id="companyName" type="text" placeholder="Example: TOMOSIA Co., Ltd." />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="name">Your name (in Kanji)</FieldLabel>
                  <Input id="name" type="text" placeholder="Please enter your name correctly." />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phonetic">Phonetic spelling</FieldLabel>
                  <Input id="phonetic" type="text" placeholder="Please enter your information." />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="email">Email address</FieldLabel>
                  <Input id="email" type="text" placeholder="Please enter your information." />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Telephone number</FieldLabel>
                  <Input id="phone" type="text" placeholder="Please enter your information." />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="details">Inquiry details</FieldLabel>
                <Textarea id="details" placeholder="Please enter your inquiry details." />
              </Field>
              <Field orientation="horizontal">
                <Button type="submit" variant={"outline"}>
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>
    </section>
  )
}
