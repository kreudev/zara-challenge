import { Bag, BagActive, Close } from '.'

export const IconSprite = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
      <symbol id='icon-bag'>
        <Bag />
      </symbol>
      <symbol id='icon-bag-active'>
        <BagActive />
      </symbol>
      <symbol id='icon-close'>
        <Close />
      </symbol>
    </svg>
  )
}
