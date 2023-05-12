import { tours, services } from "../data"

export const TourCards = () => {
    return (
        <div className="section-center featured-center">
            {tours.map((tour) => {
                const { id, image, title, text, footer, date } = tour
                return (
                    <article className="tour-card" key={id}>
                        <div className="tour-img-container">
                            <img src={image} className="tour-img" alt="" />
                            <p className="tour-date">{date}</p>
                        </div>
                        <div className="tour-info">
                            <div className="tour-title">
                                <h4>{title}</h4>
                            </div>
                            <p>
                                {text}
                            </p>
                            <div className="tour-footer">
                                <p>
                                    <span><i className={footer[0]}></i></span> {footer[1]}
                                </p>
                                <p>{footer[2]} days</p>
                                <p>from {footer[3]}</p>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export const ServiceCards = () => {
    return (
        <div className="section-center services-center">
            {services.map((service) => {
                return (
                    <article className="service" key={service.id}>
                        <span className="service-icon"><i className={service.icon}></i></span>
                        <div className="service-info">
                            <h4 className="service-title">{service.title}</h4>
                            <p className="service-text">
                                {service.text}
                            </p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
