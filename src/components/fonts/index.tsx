

const Fonts = (props : {font: string}) => {
    const {font} = props;
    return (
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"  />
            <link rel="preload" as="style" href={`https://fonts.googleapis.com/css2?family=${font}:wght@400;900&display=swap`}/>
        </>
    )
}
export default Fonts;