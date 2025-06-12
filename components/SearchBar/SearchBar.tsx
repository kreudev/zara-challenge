import { Icon } from '@/icons/Icon'
import styles from './SearchBar.module.css'
export const SearchBar = ({
  placeholder = 'Search for a smartphone...',
  results = 20,
  value = '',
  onChange = () => {},
}: {
  placeholder?: string
  results?: number
  value?: string
  onChange?: (value: string) => void
}) => {
  return (
    <div className={styles.searchBar} role='search'>
      <label className='visually-hidden' aria-label='Search field'>
        {!value && <span>{placeholder}</span>}
        <input
          id='search-input'
          type='text'
          value={value}
          autoFocus
          onChange={(e) => onChange(e.target.value)}
          aria-label='search-input'
          aria-describedby='search-results'
          list='search-suggestions'
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label='Clear search'
            className={styles.searchBar__closeButton}
          >
            <Icon
              className={styles.searchBar__close}
              name='close'
              width={8}
              height={9}
            />
          </button>
        )}
      </label>
      <span
        id='searchResults'
        className={styles.searchBar__results}
        aria-live='polite'
      >
        {results} Results
      </span>
    </div>
  )
}
