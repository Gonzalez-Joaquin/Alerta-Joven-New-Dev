import Text from "../../typography/typography"

interface Props {
    value: string,
}

const header = ({ value }: Props) => {
    return (
        <th style={{ textAlign: 'start', padding: '.5em .7em' }}>
            <Text type='h3' style_type='text-subtitle' content={value} size='text-small' />
        </th>
    )
}

export default header