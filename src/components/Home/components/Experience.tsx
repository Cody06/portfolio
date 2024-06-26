import Card from './Card';
import SectionHeader from './SectionHeader';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            position: 'Software Developer',
            company: 'Freelance',
            companyLogo: null,
            date: 'Oct 2023 - Present',
            description:
                'Design and build web applications using JavaScript, TypeScript, React, HTML, CSS and Tailwind.',
        },
        {
            id: 0,
            position: 'Full-Stack Developer',
            company: 'Moozoom',
            companyLogo: null,
            date: 'Jan 2022 - Sep 2023',
            description:
                'Moozoom is a social emotional learning (SEL) platform that provides interactive videos and activities that allow children to improve their mental and emotional well-being.',
        },
    ];

    return (
        <section id="work-experience" className="pt-16">
            <SectionHeader title="Experience" />

            <div className="flex flex-col gap-y-10">
                {experiences.map((experience) => (
                    <Card key={experience.id}>
                        <h3 className="flex justify-between font-bold mb-2">
                            <span className="text-lg">{experience.position}</span>
                            <span className="text-neutral-500">{experience.date}</span>
                        </h3>
                        <p className="font-medium mb-4">{experience.company}</p>
                        <p>{experience.description}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
}
