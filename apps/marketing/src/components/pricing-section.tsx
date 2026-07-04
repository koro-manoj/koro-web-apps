import { Badge } from "@koro/ui";
import { PORTAL_LOGIN_URL } from "@/lib/constants";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "For small teams getting started with unified ops.",
    features: ["Up to 5 users", "Core dashboard", "Email support", "API access"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 149,
    description: "For growing businesses that need deeper visibility.",
    features: [
      "Up to 25 users",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Activity webhooks",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: null,
    description: "For organizations with complex workflows and compliance needs.",
    features: [
      "Unlimited users",
      "Dedicated success manager",
      "SSO & audit logs",
      "Custom SLA",
      "On-premise option",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-copper mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-brand-navy tracking-tight">
            Plans that scale with you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 duration-300 ${
                plan.highlighted
                  ? "bg-brand-navy text-white ring-2 ring-brand-copper shadow-xl shadow-brand-navy/10"
                  : "bg-white border border-brand-navy/8 hover:shadow-lg hover:shadow-brand-navy/5"
              }`}
            >
              {plan.highlighted && (
                <Badge variant="accent" style={{ alignSelf: "flex-start", marginBottom: 16 }}>
                  Most popular
                </Badge>
              )}
              <h3
                className={`font-display text-2xl ${
                  plan.highlighted ? "text-white" : "text-brand-navy"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlighted ? "text-white/60" : "text-brand-slate"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 mb-8">
                {plan.price !== null ? (
                  <p className="font-display text-4xl">
                    ${plan.price}
                    <span
                      className={`text-base font-sans ${
                        plan.highlighted ? "text-white/50" : "text-brand-slate"
                      }`}
                    >
                      /mo
                    </span>
                  </p>
                ) : (
                  <p className="font-display text-4xl">Custom</p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlighted ? "text-white/80" : "text-brand-slate"
                    }`}
                  >
                    <span className="text-brand-copper mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={PORTAL_LOGIN_URL}
                className={plan.highlighted ? "cta-primary w-full text-center" : "cta-dark w-full text-center"}
              >
                {plan.price !== null ? "Start trial" : "Contact sales"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
