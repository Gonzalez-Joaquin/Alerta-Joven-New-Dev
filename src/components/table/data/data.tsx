import Text from "../../typography/typography"

interface Props {
    value: string
}

const data = ({ value }: Props) => {

    return (
        <td style={{ textAlign: 'start', padding: '.5em .7em' }}>
            <Text type='h4' style_type='text-p' content={value.length < 15 ? value : value.slice(0, 15) + '...'} styles_color="text-secundario" size="text-extra-small" />
        </td>
    )
}

export default data