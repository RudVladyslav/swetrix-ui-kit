import React, {memo} from 'react'

import Tooltip from './Tooltip'
import {WarningPin} from './Pin'

export interface IBetaProps {
    className?: string
    t: any
}

export const Beta: React.FC<IBetaProps> = memo(({
                                                    className = '',
                                                    t
                                                }) => {
    return (
        <Tooltip
            className='max-w-content !w-full'
            tooltipNode={(
                <WarningPin className={className} label={t('beta.title')}/>
            )}
            text={t('beta.description')}
        />
    )
})
