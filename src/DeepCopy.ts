export namespace DeepCopy {

    /**
     * Create a deep copy of a dictionary such that all of the origina keys are maintained
     * and copied into a new dictionary.
     *
     * This is used when we have to create a copy of a dictionary to prevent concurrent mutation
     * or when we need to copy it and then make changes to the new dictionary.
     *
     * The values in the map could be arrays, other dictionaries, sets, maps, strings, arrays, etc.
     *
     * Make sure to handle all cases.
     *
     * This needs to be fully recursive including dictionaries contain other dictionaries
     * and arrays.
     *
     * HINTS
     *
     * - To test if a variable is an object:
     *
     * typeof val === 'object'
     *
     * - To test if a variable is an array:
     *
     * Array.isArray(object)
     *
     * - To get all the keys of an object you can call Object.keys(dict)
     *
     * - If you are given an array as input it should return an array as output.
     *
     * - If you are given an object as input it should return an object as output.
     *
     */
    export function deepCopy<T extends any>(source: T): T {
        let result

        if (typeof source === 'object' && !Array.isArray(source)) {
            result = Object.assign({}, source)
            for (let key in result) {
                if(result.hasOwnProperty(key)) {
                    if (typeof result[key] === 'object' || Array.isArray(result[key])) {
                        result[key] = deepCopy(result[key])
                    }
                } 
            }
        }

        else if (typeof source === 'object' && Array.isArray(source)) {
            result = source.map(el => {
                if (typeof el === 'object' || Array.isArray(el)) {
                    el = deepCopy(el)
                }
                return el
            })
        }

        else {
            result = source
        }

        return result as T
    }

}