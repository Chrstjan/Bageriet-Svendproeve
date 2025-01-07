import s from "./Location.module.scss"

export const Location = () => {
  return (
    <div className={s.locationStyling}>
        <p><strong>adresse</strong>: Øster uttrupvej 1 9200 aalborg</p>
        <p><strong>telefon</strong>: +45 25 26 95 40</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2185.4661205940133!2d8.84399467721489!3d56.78646951190473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4649781fc072eb17%3A0x63ba122b860c692e!2sBageriet!5e0!3m2!1sda!2sdk!4v1736250364540!5m2!1sda!2sdk" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}