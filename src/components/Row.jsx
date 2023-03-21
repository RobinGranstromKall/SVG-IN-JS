export function Row(props) {
  return <div
    {...props}
    style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',...props?.style }}/>
}
