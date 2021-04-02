export function refine(class_or_class_object = 1, obj = {}, ...constructor_params_if_needed) {
    
    const cache = !class_or_class_object.apply ? 
        class_or_class_object :
        new class_or_class_object(...constructor_params_if_needed)

    const funcs = Object.getOwnPropertyNames(obj)
        .map(name => [name, obj[name]])

    funcs.forEach(([name, value]) => 
        Object.defineProperty(
            cache.constructor.prototype,
            name,
            {   enumerable: false,
                configurable: true,
                writable: true,
                get() { return value.call(this) } }))

    return () => funcs.forEach(([name]) => 
            Reflect.deleteProperty(cache.constructor.prototype, name))
}
