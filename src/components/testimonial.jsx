import React from 'react'

const Testimonial = (props) => {
  return (
    <div>
       <section className={`testimonials bg-${props.mode}`}>
  <div className="testimonials-container">
    <h2 className={`bg-${props.mode}`}>What Clients Say</h2>
    <p className={`testimonials-intro bg-${props.mode}`}>Real stories from people we've had the joy of photographing.</p>
 
    <div className="testimonial-grid">
      <div className={`testimonial-card bg-${props.mode}`}>
        <p className="quote">“Light & Lens captured our wedding day so beautifully — every emotion, every little moment. We couldn’t be happier.”</p>
        <div className="client-info">
          <i className="fas fa-user  test-icon"></i>
         
          <div>
            <h4>Ramesh Dahal</h4>
            <span>Wedding Clients</span>
          </div>
        </div>
      </div>

      <div className= {`testimonial-card bg-${props.mode}`}>
        <p className="quote">“Professional, kind, and absolutely talented. The portraits were stunning — I felt completely at ease during the shoot.”</p>
        <div className="client-info">
          <i className="fas fa-user test-icon "></i>
          
          <div>
            <h4>Nabin Devkota</h4>
            <span>Portrait Session</span> 
          </div>
        </div>
      </div>

      <div className= {`testimonial-card bg-${props.mode}`}>
        <p className="quote">“I’ve worked with many photographers, but Light & Lens has a gift for storytelling. Our brand has never looked better.”</p>
        <div className="client-info">
           <i className="fas fa-user test-icon "></i>
          <div>
            <h4>Prabin Dhakal</h4>
            <span>Brand & Lifestyle</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Testimonial;
