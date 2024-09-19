export default function TabButtons({isSelected,children, onSelect}) {
    return(
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    )
}