import './JaxCardPreview.css'

const JAXCARD_URL = 'https://698f3a0bb9fc360ee0db9fe2--chimerical-choux-0d8870.netlify.app/'

function JaxCardPreview() {
  return (
    <div className="jaxcard-preview">
      <iframe
        src={JAXCARD_URL}
        title="JaxCard Website Preview"
        className="jaxcard-preview-iframe"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  )
}

export default JaxCardPreview
