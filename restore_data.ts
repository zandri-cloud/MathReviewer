import * as fs from 'fs';

let content = fs.readFileSync('src/data/calculusData.tsx', 'utf8');

// Find the start of trans-superhard-t1-1
const startIndex = content.indexOf("id: 'trans-superhard-t1-1'");
if (startIndex !== -1) {
  // Find the start of the object containing it
  const objStartIndex = content.lastIndexOf('{', startIndex);
  
  // Cut off everything from objStartIndex
  content = content.substring(0, objStartIndex);
  
  // Restore the end of trans-hard-5
  content += `] \\\\\\\\
y\\'\\' &= x^2 e^{-x} (-2\\\\cos x) + 2x e^{-x} (\\\\cos x - \\\\sin x) - x^2 e^{-x} (\\\\cos x - \\\\sin x) + 2e^{-x} \\\\sin x - 2x e^{-x} \\\\sin x + 2x e^{-x} \\\\cos x \\\\\\\\
y\\'\\' &= e^{-x} \\\\left( x^2(-2\\\\cos x - \\\\cos x + \\\\sin x) + x(2\\\\cos x - 2\\\\sin x - 2\\\\sin x + 2\\\\cos x) + 2\\\\sin x \\\\right)
\\\\end{aligned}',
        finalAnswer: 'y\\'\\' = e^{-x} \\\\left( x^2(\\\\sin x - 3\\\\cos x) + 4x(\\\\cos x - \\\\sin x) + 2\\\\sin x \\\\right)'
      }
    ]
  },
  {
    id: 'parametric-differentiation',
    categoryId: 'differential',
    title: 'Parametric Differentiation',
    icon: 'data_object',
    description: 'Derivatives of parametric equations.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Parametric Derivative</h2>
          <div className="bg-surface-container-low/50 rounded-2xl p-6 mb-4">
            <MathText block math="\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}" />
          </div>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'related-rates',
    categoryId: 'differential',
    title: 'Related Rates',
    icon: 'speed',
    description: 'Finding the rate of change of one quantity based on the rate of change of another.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Concept</h2>
          <p className="text-on-surface-variant mb-4">Use the Chain Rule to relate the rates of change of dependent variables with respect to time.</p>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'linear-approximation',
    categoryId: 'differential',
    title: 'Linear Approximation',
    icon: 'straighten',
    description: 'Linear approximation and differentials.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Linearization</h2>
          <div className="bg-surface-container-low/50 rounded-2xl p-6 mb-4">
            <MathText block math="L(x) = f(a) + f'(a)(x - a)" />
          </div>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'applications-derivatives',
    categoryId: 'differential',
    title: 'Applications of Derivatives',
    icon: 'query_stats',
    description: 'Tangent lines, extrema, concavity, curve sketching, and optimization.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Optimization</h2>
          <p className="text-on-surface-variant mb-4">Finding absolute maximums and minimums of functions in real-world contexts.</p>
        </section>
      </div>
    ),
    problems: []
  }
];
`;
  fs.writeFileSync('src/data/calculusData.tsx', content);
  console.log("Restored calculusData.tsx");
}
