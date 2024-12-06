export default function PokeViewer(props = {name: "", height: 0, width:0, spriteUrl: ""}){
    const {name, height, width, spriteUrl} = props
    return(<>
        <dl>
            <dt>Name</dt>
            <dd>{name}</dd>

            <dt>Height</dt>
            <dd>{height}</dd>

            <dt>Width</dt>
            <dd>{width}</dd>

        </dl>

        <img src= {spriteUrl} alt= "Sprite could not be loaded"/>
    </>)
}