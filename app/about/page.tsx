export default function AboutPage() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
		<div style={{
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: '90vw',  // <-- use viewport width instead of height
		width: '100%',      // optional: allow it to fill up to maxWidth
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '2rem',
		}}>
        {/* Section 1: Name */}
        <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: 0, backgroundColor: 'white' }}>About</h1>
		
		{/* Section 2: Description with line highlights */}
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
		{[
			"I am a computer science student at Michigan State University.",
			"I am currently working on evolutionary computation and computer vision projects at the ECODE Lab.",
			"In my free time, I like listening to music; my favorite artists are Belle & Sebastian and Jon Brion."
		].map((line, idx) => (
			<span key={idx} style={{ backgroundColor: 'white', display: 'inline' }}>
			{line}
			</span>
		))}
		</div>


        {/* Section 4: Extra space for future content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            "This website is built using React, TypeScript, and Tailwind CSS, with images displayed using Framer Motion.",
            "I chose Vercel for deployment because it provides a simple, cost-effective solution that perfectly fits the scale of this project.",
            "Additionally, Vercel automates CI/CD so I do not have to use tools like Github Actions.",
            "The website's design draws inspiration from art.yale.edu.",
            "In a UX class, a classmate once presented it as an example of poor design, but I loved it.",
            "I like how its eccentric, collage-like layout stands out over the repeated image.",
            "The chair's unusual patterns allow colors to inhabit unexpected shapes, giving the piece a lively, DIY feel.",
            "The bold, puke-like yellows were chosen with the same deliberate care as the subtle eggshell whites found on a sharp tech site.",
            "Since this website doubles as a portfolio for recruiters, I had to tame some elements, like choosing sleeker colors and fonts.",            
            "It taught me that sometimes the effort behind an idea matters more than the idea itself.",
          ].map((line, idx) => (
            <span key={idx} style={{ backgroundColor: 'white', display: 'inline' }}>{line}</span>
          ))}
        </div>
      </div>
    </main>
  );
}

