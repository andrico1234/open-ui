import React from 'react'
import { getImagesForComponentConcept } from '../sources'
import Image from './image.jsx'
import './specimens.css'

const Specimens = ({ component, conceptName, showDescriptions }) => {
  const images = getImagesForComponentConcept(component, conceptName)

  return (
    <div className="specimens-wrapper">
      {images.map((image, index) => {
        const hasOverrideName = image.name !== image.openUIName

        return (
          <div key={image.image + index} className="specimen">
            <div className="image-wrapper">
              <Image
                src={'/../images/' + image.image}
                title={image.image}
                alt={`${conceptName} concept on a ${component} component in ${image.sourceName}.`}
              />
            </div>
            <div className="specimens-text-content">
              <label>{image.sourceName}</label>
              {hasOverrideName && ' '}
              {hasOverrideName && <strong>{image.name}</strong>}
              {showDescriptions && <br />}
              {showDescriptions && <div className="description">{image.description || '...'}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Specimens
