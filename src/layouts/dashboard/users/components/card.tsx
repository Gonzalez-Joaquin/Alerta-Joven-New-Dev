import * as Components from "../../../../components"

import styles from './card.module.css'

interface Props {
    data: { id: number, title: string, desc: string, }
}

const card = ({ data }: Props) => {
    const { desc, title } = data

    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.data}`}>
                <Components.text type="h4" style_type="text-title" content={title} />
                <Components.text type="h6" style_type="text-button" styles_color="text-secundario" content={desc.length > 20 ? desc : desc.slice(0, 20)} />
            </div>
            <div className={`flex ${styles.button}`}>
                <Components.button value="Ver más" />
            </div>
        </div>
    )
}

export default card