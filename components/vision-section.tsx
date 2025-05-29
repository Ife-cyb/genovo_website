import type React from "react"
import { useIntl } from "umi"
import styles from "./vision-section.less"

const VisionSection: React.FC = () => {
  const intl = useIntl()

  return (
    <div className={styles.visionSection}>
      <h1>{intl.formatMessage({ id: "vision.title" })}</h1>
      <p>{intl.formatMessage({ id: "vision.description" })}</p>

      {/* Key Features Implemented */}
      <div className={styles.features}>
        <h2>{intl.formatMessage({ id: "vision.features.title" })}</h2>
        <ul>
          <li>
            <strong>{intl.formatMessage({ id: "vision.features.modernDarkTheme" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.features.modernDarkTheme.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.features.futuristicTypography" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.features.futuristicTypography.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.features.threeDAnimations" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.features.threeDAnimations.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.features.smoothTransitions" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.features.smoothTransitions.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.features.responsiveDesign" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.features.responsiveDesign.description" })}
          </li>
        </ul>
      </div>

      {/* Current Structure */}
      <div className={styles.structure}>
        <h2>{intl.formatMessage({ id: "vision.structure.title" })}</h2>
        <ul>
          <li>
            <strong>{intl.formatMessage({ id: "vision.structure.header" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.structure.header.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.structure.heroSection" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.structure.heroSection.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.structure.aboutSection" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.structure.aboutSection.description" })}
          </li>
          <li>
            <strong>{intl.formatMessage({ id: "vision.structure.scosSection" })}</strong>:{" "}
            {intl.formatMessage({ id: "vision.structure.scosSection.description" })}
          </li>
        </ul>
      </div>

      {/* Next Steps */}
      <div className={styles.nextSteps}>
        <h2>{intl.formatMessage({ id: "vision.nextSteps.title" })}</h2>
        <p>{intl.formatMessage({ id: "vision.nextSteps.description" })}</p>
      </div>
    </div>
  )
}

export default VisionSection
