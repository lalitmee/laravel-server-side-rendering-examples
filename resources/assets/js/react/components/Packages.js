import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function packageList(packages) {
    return packages.map(p => (
        <li key={p.id}>
            <a
                href={p.url}
                className="block no-underline bg-white p-6 mb-4 rounded-sm shadow border border-grey-lightest hover:border-grey-lighter"
                target="_blank"
            >
                <h2 className="text-base text-gold uppercase mb-1">{p.name}</h2>
                <div
                    className="text-sm text-grey-darker"
                    dangerouslySetInnerHTML={{ __html: p.description }}
                />
            </a>
        </li>
    ));
}

const Packages = ({ match, packages }) => {
    const type = match.params.type;
    const listPackages = packages.filter(p => p.type === type);

    return (
        <div>
            <Link to="/react/" className="text-xs text-grey-light inline-block mb-2">
                ← <span className="underline">Back</span>
            </Link>
            <h1>{type} packages by Spatie</h1>
            <ul className="list-reset">{packageList(listPackages)}</ul>
        </div>
    );
};

// PackagesContainer.js
const mapStateToProps = (state, ownProps) => ({
    packages: state.packages,
});

const PackagesContainer = connect(mapStateToProps)(Packages);

export default PackagesContainer;
