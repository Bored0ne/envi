import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from "ink";

const List = props => {
    const vars = process.env;

    let width = 85;
    return (
        <Box flexDirection={'column'}>
            <Box width={width}
                 flexDirection={'row'}
                 justifyContent={'space-between'}
                 textWrap={'truncate-end'}>
                <Box>Key</Box><Box>Value</Box>
            </Box>
            {Object
                .entries(vars)
                .map((entry, index) => {
                    return <Box key={index}
                                width={width}
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                textWrap={'truncate-end'}>
                        <Box marginRight={8}>{entry[0]}</Box>
                        <Box textWrap={'truncate-end'}>{entry[1].substr(0, 80)}</Box>
                    </Box>
                })}
        </Box>
    );
};

List.propTypes = {};

export default List;
