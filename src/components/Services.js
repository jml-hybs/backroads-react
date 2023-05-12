import React from "react";
import { Title } from "./Title";
import { ServiceCards } from "./Cards";

export function Services() {
    return <section className="section services" id="services">
        <Title title='our' subTitle='services' />
        <ServiceCards />

    </section>;
}
