"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIntrinsics = void 0;
/**
 * Turn ROS intrinsics into strings
 *
 * ------
 *
 * This stringification is not intended to be mechanically reversible! It's intended
 * to be understood by humans!
 *
 * ------
 *
 * Turns Fn::GetAtt and Fn::Ref objects into the same strings that can be
 * parsed by Fn::Sub, but without the surrounding intrinsics.
 *
 * Evaluates Fn::Join directly if the second argument is a literal list of strings.
 *
 * For other intrinsics we choose a string representation that ROS
 * cannot actually parse, but is comprehensible to humans.
 */
function renderIntrinsics(x) {
    if (Array.isArray(x)) {
        return x.filter((el) => !isNoValue(el)).map(renderIntrinsics);
    }
    if (isNoValue(x)) {
        return undefined;
    }
    const intrinsic = getIntrinsic(x);
    if (intrinsic) {
        if (intrinsic.fn === 'Ref') {
            return '${' + intrinsic.args + '}';
        }
        if (intrinsic.fn === 'Fn::GetAtt') {
            return '${' + intrinsic.args[0] + '.' + intrinsic.args[1] + '}';
        }
        if (intrinsic.fn === 'Fn::Join') {
            return unRosFnJoin(intrinsic.args[0], intrinsic.args[1]);
        }
        return stringifyIntrinsic(intrinsic.fn, intrinsic.args);
    }
    if (typeof x === 'object' && x !== null) {
        const ret = {};
        for (const [key, value] of Object.entries(x)) {
            if (!isNoValue(value)) {
                ret[key] = renderIntrinsics(value);
            }
        }
        return ret;
    }
    return x;
}
exports.renderIntrinsics = renderIntrinsics;
function unRosFnJoin(separator, args) {
    if (Array.isArray(args)) {
        return args
            .filter((el) => !isNoValue(el))
            .map(renderIntrinsics)
            .join(separator);
    }
    return stringifyIntrinsic('Fn::Join', [separator, args]);
}
function stringifyIntrinsic(fn, args) {
    return JSON.stringify({ [fn]: renderIntrinsics(args) });
}
function getIntrinsic(x) {
    if (x === undefined || x === null || Array.isArray(x)) {
        return undefined;
    }
    if (typeof x !== 'object') {
        return undefined;
    }
    const keys = Object.keys(x);
    return keys.length === 1 && (keys[0] === 'Ref' || keys[0].startsWith('Fn::'))
        ? { fn: keys[0], args: x[keys[0]] }
        : undefined;
}
function isNoValue(x) {
    const int = getIntrinsic(x);
    return int && int.fn === 'Ref' && int.args === 'ALIYUN::NoValue';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLWludHJpbnNpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXItaW50cmluc2ljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBQyxDQUFNO0lBQ3JDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDL0Q7SUFFRCxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoQixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFJLFNBQVMsRUFBRTtRQUNiLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7U0FDcEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssWUFBWSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxTQUFTLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRTtZQUMvQixPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekQ7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFqQ0QsNENBaUNDO0FBRUQsU0FBUyxXQUFXLENBQUMsU0FBaUIsRUFBRSxJQUFTO0lBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QixPQUFPLElBQUk7YUFDUixNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFDRCxPQUFPLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLEVBQVUsRUFBRSxJQUFTO0lBQy9DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxDQUFNO0lBQzFCLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDckQsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsQ0FBTTtJQUN2QixNQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUdXJuIFJPUyBpbnRyaW5zaWNzIGludG8gc3RyaW5nc1xuICpcbiAqIC0tLS0tLVxuICpcbiAqIFRoaXMgc3RyaW5naWZpY2F0aW9uIGlzIG5vdCBpbnRlbmRlZCB0byBiZSBtZWNoYW5pY2FsbHkgcmV2ZXJzaWJsZSEgSXQncyBpbnRlbmRlZFxuICogdG8gYmUgdW5kZXJzdG9vZCBieSBodW1hbnMhXG4gKlxuICogLS0tLS0tXG4gKlxuICogVHVybnMgRm46OkdldEF0dCBhbmQgRm46OlJlZiBvYmplY3RzIGludG8gdGhlIHNhbWUgc3RyaW5ncyB0aGF0IGNhbiBiZVxuICogcGFyc2VkIGJ5IEZuOjpTdWIsIGJ1dCB3aXRob3V0IHRoZSBzdXJyb3VuZGluZyBpbnRyaW5zaWNzLlxuICpcbiAqIEV2YWx1YXRlcyBGbjo6Sm9pbiBkaXJlY3RseSBpZiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgbGl0ZXJhbCBsaXN0IG9mIHN0cmluZ3MuXG4gKlxuICogRm9yIG90aGVyIGludHJpbnNpY3Mgd2UgY2hvb3NlIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIHRoYXQgUk9TXG4gKiBjYW5ub3QgYWN0dWFsbHkgcGFyc2UsIGJ1dCBpcyBjb21wcmVoZW5zaWJsZSB0byBodW1hbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbnRyaW5zaWNzKHg6IGFueSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIHguZmlsdGVyKChlbCkgPT4gIWlzTm9WYWx1ZShlbCkpLm1hcChyZW5kZXJJbnRyaW5zaWNzKTtcbiAgfVxuXG4gIGlmIChpc05vVmFsdWUoeCkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgaW50cmluc2ljID0gZ2V0SW50cmluc2ljKHgpO1xuICBpZiAoaW50cmluc2ljKSB7XG4gICAgaWYgKGludHJpbnNpYy5mbiA9PT0gJ1JlZicpIHtcbiAgICAgIHJldHVybiAnJHsnICsgaW50cmluc2ljLmFyZ3MgKyAnfSc7XG4gICAgfVxuICAgIGlmIChpbnRyaW5zaWMuZm4gPT09ICdGbjo6R2V0QXR0Jykge1xuICAgICAgcmV0dXJuICckeycgKyBpbnRyaW5zaWMuYXJnc1swXSArICcuJyArIGludHJpbnNpYy5hcmdzWzFdICsgJ30nO1xuICAgIH1cbiAgICBpZiAoaW50cmluc2ljLmZuID09PSAnRm46OkpvaW4nKSB7XG4gICAgICByZXR1cm4gdW5Sb3NGbkpvaW4oaW50cmluc2ljLmFyZ3NbMF0sIGludHJpbnNpYy5hcmdzWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ2lmeUludHJpbnNpYyhpbnRyaW5zaWMuZm4sIGludHJpbnNpYy5hcmdzKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJldDogYW55ID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeCkpIHtcbiAgICAgIGlmICghaXNOb1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICByZXRba2V5XSA9IHJlbmRlckludHJpbnNpY3ModmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiB1blJvc0ZuSm9pbihzZXBhcmF0b3I6IHN0cmluZywgYXJnczogYW55KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgcmV0dXJuIGFyZ3NcbiAgICAgIC5maWx0ZXIoKGVsKSA9PiAhaXNOb1ZhbHVlKGVsKSlcbiAgICAgIC5tYXAocmVuZGVySW50cmluc2ljcylcbiAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gIH1cbiAgcmV0dXJuIHN0cmluZ2lmeUludHJpbnNpYygnRm46OkpvaW4nLCBbc2VwYXJhdG9yLCBhcmdzXSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUludHJpbnNpYyhmbjogc3RyaW5nLCBhcmdzOiBhbnkpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgW2ZuXTogcmVuZGVySW50cmluc2ljcyhhcmdzKSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW50cmluc2ljKHg6IGFueSk6IEludHJpbnNpYyB8IHVuZGVmaW5lZCB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQgfHwgeCA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoeCk7XG4gIHJldHVybiBrZXlzLmxlbmd0aCA9PT0gMSAmJiAoa2V5c1swXSA9PT0gJ1JlZicgfHwga2V5c1swXS5zdGFydHNXaXRoKCdGbjo6JykpXG4gICAgPyB7IGZuOiBrZXlzWzBdLCBhcmdzOiB4W2tleXNbMF1dIH1cbiAgICA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNOb1ZhbHVlKHg6IGFueSkge1xuICBjb25zdCBpbnQgPSBnZXRJbnRyaW5zaWMoeCk7XG4gIHJldHVybiBpbnQgJiYgaW50LmZuID09PSAnUmVmJyAmJiBpbnQuYXJncyA9PT0gJ0FMSVlVTjo6Tm9WYWx1ZSc7XG59XG5cbmludGVyZmFjZSBJbnRyaW5zaWMge1xuICBmbjogc3RyaW5nO1xuICBhcmdzOiBhbnk7XG59XG4iXX0=