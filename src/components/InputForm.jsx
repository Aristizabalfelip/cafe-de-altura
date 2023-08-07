import React from 'react'

export const InputForm = ({ type, text, name, value, onChange }) => {

    const placeHolder = (name) => {
        if (name === 'textArea') {
            return '¿En qué podemos ayudarte?'
        } else if (name === 'tel') {
            return '+1 (555) 987-6543'
        }
    }

    const optionSelect = () => {
        if (name === 'tel') {
            return <div className=' self-stretch border rounded'><select name="" id="">  <option value="value1" selected>US</option>
                <option value="value2">SP</option>
                <option value="value3">IT</option>
            </select> <input className={`${name === 'textArea' ? 'h-[122px]' : ''} rounded py-[9px] px-[13px]`}
                type={type} name={name} value={value} onChange={onChange}
                placeholder={placeHolder(name)} /> </div>

        } else {
            return <input className={`${name === 'textArea' ? 'h-[122px]' : ''} ${name === 'check' ? '' : 'w-[470px]'}
            border self-stretch  rounded py-[9px] px-[13px] `}
                type={type} name={name} value={value} onChange={onChange}
                placeholder={placeHolder(name)} />
        }
    }

    return (
        <div className={`flex ${type === 'checkbox' ? 'flex-row-reverse justify-end' : 'flex-col'} gap-1 self-stretch`}>
            <label htmlFor={name}>{text}</label>
            <div className={`${name === 'tel' ? 'w-[470px]' : ''}`}>{optionSelect()}
            </div>
        </div>
    )
}
