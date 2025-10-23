interface Type {
    title: string,
    sub: string,
}
export default function TextDivider({title, sub}: Type) {
    return (
        <>
            <div className="text-center space-y-5 pt-14">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-600 to-gray-200/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    {title}
                </span>
                <p className="text-white/50 mt-4">{sub}</p>
            </div>
        </>
    )
}