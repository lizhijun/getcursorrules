export function WhySection() {
  const reasons = [
    {
      title: "Customized AI Behavior",
      description: "Tailor the AI's responses to your project's specific needs, ensuring more relevant and accurate code suggestions."
    },
    {
      title: "Consistency",
      description: "Define coding standards and best practices to ensure that the AI generates code that aligns with your project's style guidelines."
    },
    {
      title: "Context Awareness",
      description: "Provide the AI with important context about your project, leading to more informed code generation."
    },
    {
      title: "Improved Productivity",
      description: "Generate code that requires less manual editing, speeding up your development process."
    },
    {
      title: "Team Alignment",
      description: "Ensure all team members receive consistent AI assistance, promoting cohesion in coding practices."
    },
    {
      title: "Project-Specific Knowledge",
      description: "Include information about your project's structure and requirements for more accurate suggestions."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why .cursorrules?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 