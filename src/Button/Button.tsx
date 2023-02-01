import React from 'react';
import cx from 'clsx'
import './ButtonChristmas.css';

const THEME_TYPE = {
    classic: 'classic',
    christmas: 'christmas',
}

export interface IButtonProps {
    children?: React.ReactNode
    text?: string
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    onClick?: () => void
    white?: boolean
    small?: boolean
    regular?: boolean
    large?: boolean
    giant?: boolean
    type: "button" | "submit" | "reset" | undefined
    className?: string
    loading: boolean
    semiSmall?: boolean
    semiDanger?: boolean
    noBorder?: boolean
    themeType?: string
}

interface ISpinProps {
    className?: string
}

const Spin: React.FC<ISpinProps> = ({className}) => (
    <svg className={cx('animate-spin -ml-1 mr-2 h-4 w-4 text-white', className)} xmlns='http://www.w3.org/2000/svg'
         fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'/>
        <path className='opacity-75' fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'/>
    </svg>
)

export const Button: React.FC<IButtonProps> = ({
                                                   text,
                                                   children,
                                                   primary,
                                                   secondary,
                                                   danger,
                                                   onClick,
                                                   white,
                                                   small,
                                                   regular,
                                                   large,
                                                   giant,
                                                   type,
                                                   className,
                                                   loading,
                                                   semiSmall,
                                                   semiDanger,
                                                   noBorder,
                                                   themeType = THEME_TYPE.classic,
                                               }) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className={cx('relative inline-flex select-none items-center border leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', {
                'shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 border-transparent': primary,
                'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 border-transparent': secondary,
                'text-gray-700 bg-white hover:bg-gray-50 border-transparent': white,
                'text-white bg-red-500 hover:bg-red-600 border-transparent': danger,
                'text-red-500 hover:text-red-600 border-red-600 dark:text-red-300 dark:hover:text-red-400 dark:border-red-500 border-1': semiDanger,
                'focus:border-none border-none text-gray-700 dark:text-white focus:ring-0 focus:ring-offset-0': noBorder,
                'px-2.5 py-1.5 text-xs': small,
                'px-2.5 py-1.5 text-sm': semiSmall,
                'px-4 py-2 text-sm': large,
                'px-6 py-3 text-base': giant,
                'px-3 py-2 text-sm': regular,
                'cursor-not-allowed': loading,
            }, className)}
        >
            {themeType === THEME_TYPE.christmas ? (
                <span className={cx('inline-flex items-center', {
                    button3: text,
                    button2: semiSmall || regular || large || giant,
                })}
                >
          {loading && (
              <Spin/>
          )}
                    {text || children}
        </span>
            ) : (
                <>
                    {loading && (
                        <Spin/>
                    )}
                    {text || children}
                </>
            )}
        </button>
    )
}

