import { RadioCard } from "#/ui/components/RadioCard"

import { RadioGroup } from "./RadioGroup"

const options = [
  {
    id: "one",
    title: "Website",
    description: "A marketing or docs site for presenting information",
  },
  {
    id: "two",
    title: "Application",
    description: "A web application to manage stuff with your account",
  },
  {
    id: "three",
    title: "Ecommerce",
    description: "Buy or sell things",
  },
]

export const ExampleRadioGroup = () => (
  <RadioGroup defaultChecked={options[1].id}>
    {({ checked, setChecked }) => (
      <div className="flex gap-4">
        {options.map(({ id, title, description }, index) => (
          <RadioCard
            key={id}
            id={id}
            name="example"
            showRadio
            className="flex items-start flex-1"
            checked={checked === id}
            onChange={() => setChecked(id)}
          >
            <div className="text-left flex-1">
              <label htmlFor="custom-Radio" className="font-bold">
                {title}
              </label>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </RadioCard>
        ))}
      </div>
    )}
  </RadioGroup>
)
