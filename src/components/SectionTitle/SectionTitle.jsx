const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mb-8 mt-10">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h3 className="text-3xl border-y-4 p-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;