function Container(props) {
    return(
        <div class="container mx-auto flex justify-between items-center">
            {props.children}
        </div>
    )
}

export default Container