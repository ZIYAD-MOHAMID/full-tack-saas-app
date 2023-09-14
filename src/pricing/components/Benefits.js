const benefits = [
  {
    title: "One low price",
    subtitle:
      "Save big. Get everything with a super low monthly subscription. ",
  },
  {
    title: "No limits",
    subtitle: "Get complete access to everything on the site. ",
  },
  {
    title: "Cancel anytime",
    subtitle: "Pause or stop your subscription, whenever you like.",
  },
];

export function MainBenefits() {
  return (
    <div className="bg-blue">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map((benefit) => (
            <div className="spacing-base" key={benefit.title}>
              <h3>
                {benefit.title}
                <br />
              </h3>
              <div>{benefit.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
