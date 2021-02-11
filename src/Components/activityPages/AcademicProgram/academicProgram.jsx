import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import './academicProgram.css';
import aepicon from '../../vectors/aep2.svg';

const AcademicProgram = ({ aepView, setView, setBlur }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			style={{ display: aepView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ aepView: false });
					setBlur(false);
				}}
			/>
			<h1 style={{ color: 'var(--orange)' }}>Academic Enabled Program</h1>
			<div className='layout'>
				<div className='images'>
					<img src={aepicon} alt='aep-logo' style={imgStyle} />
				</div>

				<div className='content'>
					<p style={{ color: 'var(--dark-blue)' }}>
						The objective of this program is to guide the student through the process
						of identifying an idea for an entrepreneurial venture, evaluating it and
						different steps required to build a successful venture around it. It is
						designed to be a practical guide to entrepreneurship and not basically
						through theory courses. We also try to collaborate with different
						organizations and colleges to attain the following objective. Previously
						some of the students also participated in a summer course for innovation
						and entrepreneurship by IIT Tirupati, which also enabled the possibility
						of credit transfer. And we have many more such academic enabled programs
						going on. And the key objective to launch such programs under IIC is to
						make the student innovators familiar to:
					</p>

					<p style={{ color: 'var(--dark-blue)', marginLeft: '5rem' }}>
						<ul>
							<li>Provide them entrepreneurial ecosystem</li>
							<li>Ideation process and Idea evaluation</li>
							<li>Product development & IP</li>
							<li>Go-to-market strategy</li>
						</ul>
					</p>

					<p style={{ color: 'var(--dark-blue)', marginTop: '2rem' }}>
						These program and courses may include:
					</p>

					<p style={{ color: 'var(--dark-blue)', marginLeft: '5rem' }}>
						<ul>
							<li>
								<font style={{ color: 'var(--orange' }}>Credit transfer </font>{' '}
								opportunity from other institutions
							</li>
							<li>
								Possibility of an interdisciplinary{' '}
								<font style={{ color: 'var(--orange' }}>
									Minor in Entrepreneurship and Innovation
								</font>
							</li>
							<li>
								Provide suitable short term and long term{' '}
								<font style={{ color: 'var(--orange' }}>internships </font>for students
							</li>
							<li>
								<font style={{ color: 'var(--orange' }}>
									{' '}
									Adapt and develop courses{' '}
								</font>{' '}
								and <font style={{ color: 'var(--orange' }}>programmes </font>with our
								other partners/collaborators
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AcademicProgram;