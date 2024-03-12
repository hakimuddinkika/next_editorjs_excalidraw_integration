import EditorJs from "react-editor-js";
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import SimpleImage from '@editorjs/simple-image';

const Editor = ({data, handleInstance}) => {
    const EDITOR_JS_TOOLS = {
        embed: Embed,
        list: List,
        marker: Marker,
        header: Header,
        delimiter: Delimiter,
        image: SimpleImage
    }

    // Editor.js This will show block editor in component
    // pass EDITOR_JS_TOOLS in tools props to configure tools with editor.js
    return <EditorJs 
                instanceRef={(instance) => handleInstance(instance)}
                tools={EDITOR_JS_TOOLS} 
                data={data}
                placeholder={`Write from here...`}
            />
}

 // Return the CustomEditor to use by other components.                    
export default Editor
