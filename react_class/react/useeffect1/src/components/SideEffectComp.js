function SideEffectComp({message}) {
    const calculated_message = `${message}은 재미있어요.`;
    document.title = message; // sideeffect 예시 - DOM 직접 조작

    return (
        <div className="sideeffect">
            {calculated_message}
        </div>
    )
}

export default SideEffectComp;