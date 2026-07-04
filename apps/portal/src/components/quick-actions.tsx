import { Button } from "@koro/ui";

const actions = [
  { label: "New order", variant: "primary" as const },
  { label: "Export report", variant: "secondary" as const },
  { label: "Invite member", variant: "ghost" as const },
];

export function QuickActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {actions.map((action) => (
        <Button key={action.label} variant={action.variant} size="sm">
          {action.label}
        </Button>
      ))}
    </div>
  );
}
