type Mods = Record<string, string | boolean>;

export const classNames = (
    cls: string,
    mods?: Mods,
    additional?: string[],
): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([_, value]) => !!value)
        .map(([clss]) => clss),
]
    .join(' ');
