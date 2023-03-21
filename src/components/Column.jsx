export function Column(props) {
  return <div
    {...props}
    style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center',...props?.style }}/>
}
