import './ResearchPaperScroll.css'

function ResearchPaperScroll() {
  return (
    <div className="research-paper-scroll">
      <div className="paper-scroll-viewport">
        <div className="paper-scroll-content">
          <div className="paper-header">
            <span className="paper-badge">IEEE ICCCI 2023</span>
          </div>
          <h2 className="paper-title">A Secure and Proficient Provable Data Possession with Privacy Protection in Cloud Storage</h2>
          <p className="paper-authors">Jagruthi J., et al.</p>
          <div className="paper-section">
            <h3>Abstract</h3>
            <p>Cloud storage enables users to outsource data while retaining accessibility. Verifying data integrity without full retrieval remains challenging. This paper proposes a provable data possession scheme with enhanced privacy protection...</p>
          </div>
          <div className="paper-section">
            <h3>1. Introduction</h3>
            <p>With the proliferation of cloud computing, organizations and individuals increasingly rely on cloud storage for their data. Ensuring the integrity and availability of outsourced data is critical...</p>
          </div>
          <div className="paper-section">
            <h3>2. Related Work</h3>
            <p>Several PDP schemes have been proposed in literature. Ateniese et al. introduced the notion of provable data possession. Our approach extends prior work with stronger privacy guarantees...</p>
          </div>
          <div className="paper-section">
            <h3>3. Proposed Scheme</h3>
            <p>The proposed scheme comprises four phases: Setup, Store, Challenge, and Verify. The privacy protection mechanism ensures that the verifier cannot learn information about the stored data...</p>
          </div>
          <div className="paper-section">
            <h3>4. Conclusion</h3>
            <p>We presented a secure PDP scheme with privacy protection suitable for cloud storage. Experimental results demonstrate its efficiency and security properties...</p>
          </div>
          <div className="paper-footer">
            <span>DOI: 10.1109/ICCCI56745.2023.10128477</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchPaperScroll
