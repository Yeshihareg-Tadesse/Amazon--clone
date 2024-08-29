import PropTypes from 'prop-types';
import { useReducer, createContext } from 'react';


export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    );
};


DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
    reducer: PropTypes.func.isRequired,
    initialState: PropTypes.object.isRequired,
};

export default DataProvider;
