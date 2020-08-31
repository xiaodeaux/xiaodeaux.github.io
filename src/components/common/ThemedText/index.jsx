/** @jsx jsx */
import { jsx } from 'theme-ui'

const ThemedText = props => {
    return (
        <div
            sx={{
                color: props.theme === 'light' ? '#000' : '#fff'
            }}
        >
            {props.children}
        </div>
    )
}

export default ThemedText