function ContainerScreen(props) {
    return(
        <div class="container mx-auto overflow-auto h-screen">
            {props.children}
        </div>
    )
}

export default ContainerScreen