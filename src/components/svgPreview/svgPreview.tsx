import globe from '../../assets/globe.svg'
import svg from '../../assets'

interface Props {
    value: string
}

const svgPreview = ({ value }: Props) => {

    const svgKeys = Object.keys(svg)

    const isValidKey = svgKeys.includes(value)

    if (!isValidKey) {
        console.error(`Clave svg no valida ${value}`)
        return <img src={globe} alt='svg not found' />
    }

    const SvgComponent = svg[value]

    return <img src={SvgComponent} alt="" />
}

export default svgPreview