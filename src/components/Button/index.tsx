import { Icon } from '../Icons'
import '../../styles/button.scss'
import { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    selected: boolean;
}

function Button({ iconName, title, selected, ...rest }: ButtonProps) {
    return (
        <button type="button" {...rest}>
            <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
            {title}
        </button>
    )
}

export default Button;