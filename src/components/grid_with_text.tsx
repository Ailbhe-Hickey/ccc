// Define the props that the FeatureBox component will accept

type FeatureBoxProps = {
  title: string;         // Required title for the feature box
  description: string;   // Required description text
};

// Define the FeatureBox component using the React.FC (Function Component) type
// It receives props using object destructuring: { title, description }


const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description }) => (


  // Return a styled div container
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);



// Export the component so it can be imported and used in other files
export default FeatureBox;

