"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagFactory = void 0;
function tagFactory(tags) {
    let tagList = [];
    if (!tags)
        return tagList;
    for (let tag of tags) {
        tagList.push({
            key: tag.key,
            value: tag.value,
        });
    }
    return tagList;
}
exports.tagFactory = tagFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXRhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy10YWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsU0FBZ0IsVUFBVSxDQUFDLElBQStCO0lBQ3hELElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUMzQixJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sT0FBTyxDQUFDO0lBQzFCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDWCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBVkQsZ0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJvc1RhZyB7XG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnRmFjdG9yeSh0YWdzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdKTogUm9zVGFnW10ge1xuICBsZXQgdGFnTGlzdDogUm9zVGFnW10gPSBbXTtcbiAgaWYgKCF0YWdzKSByZXR1cm4gdGFnTGlzdDtcbiAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcbiAgICB0YWdMaXN0LnB1c2goe1xuICAgICAga2V5OiB0YWcua2V5LFxuICAgICAgdmFsdWU6IHRhZy52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFnTGlzdDtcbn1cbiJdfQ==