"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countResourcesLike = exports.countResources = void 0;
const assertion_1 = require("../assertion");
const have_resource_1 = require("./have-resource");
/**
 * An assertion to check whether a resource of a given type and with the given properties exists, disregarding properties
 */
function countResources(resourceType, count = 1) {
    return new CountResourcesAssertion(resourceType, count);
}
exports.countResources = countResources;
/**
 * An assertion to check whether a resource of a given type and with the given properties exists, considering properties
 */
function countResourcesLike(resourceType, count = 1, props) {
    return new CountResourcesAssertion(resourceType, count, props);
}
exports.countResourcesLike = countResourcesLike;
class CountResourcesAssertion extends assertion_1.Assertion {
    constructor(resourceType, count, props = null) {
        super();
        this.resourceType = resourceType;
        this.count = count;
        this.inspected = 0;
        this.props = props;
    }
    assertUsing(inspector) {
        let counted = 0;
        for (const logicalId of Object.keys(inspector.value.Resources || {})) {
            const resource = inspector.value.Resources[logicalId];
            if (resource.Type === this.resourceType) {
                if (this.props) {
                    if ((0, have_resource_1.isSuperObject)(resource.Properties, this.props, [], true)) {
                        counted++;
                        this.inspected += 1;
                    }
                }
                else {
                    counted++;
                    this.inspected += 1;
                }
            }
        }
        return counted === this.count;
    }
    get description() {
        return `stack only has ${this.inspected} resource of type ${this.resourceType}${this.props ? ' with specified properties' : ''} but we expected to find ${this.count}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtcmVzb3VyY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291bnQtcmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUF5QztBQUV6QyxtREFBZ0Q7QUFFaEQ7O0dBRUc7QUFDSCxTQUFnQixjQUFjLENBQUMsWUFBb0IsRUFBRSxLQUFLLEdBQUcsQ0FBQztJQUM1RCxPQUFPLElBQUksdUJBQXVCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCx3Q0FFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsWUFBb0IsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQVU7SUFDNUUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUZELGdEQUVDO0FBRUQsTUFBTSx1QkFBd0IsU0FBUSxxQkFBeUI7SUFJN0QsWUFBNkIsWUFBb0IsRUFBbUIsS0FBYSxFQUFFLFFBQWEsSUFBSTtRQUNsRyxLQUFLLEVBQUUsQ0FBQztRQURtQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUFtQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSHpFLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFLNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxTQUF5QjtRQUMxQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RELElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxJQUFBLDZCQUFhLEVBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDNUQsT0FBTyxFQUFFLENBQUM7d0JBQ1YsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7cUJBQ3JCO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxrQkFBa0IsSUFBSSxDQUFDLFNBQVMscUJBQXFCLElBQUksQ0FBQyxZQUFZLEdBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxFQUM5Qyw0QkFBNEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzc2VydGlvbiB9IGZyb20gJy4uL2Fzc2VydGlvbic7XG5pbXBvcnQgeyBTdGFja0luc3BlY3RvciB9IGZyb20gJy4uL2luc3BlY3Rvcic7XG5pbXBvcnQgeyBpc1N1cGVyT2JqZWN0IH0gZnJvbSAnLi9oYXZlLXJlc291cmNlJztcblxuLyoqXG4gKiBBbiBhc3NlcnRpb24gdG8gY2hlY2sgd2hldGhlciBhIHJlc291cmNlIG9mIGEgZ2l2ZW4gdHlwZSBhbmQgd2l0aCB0aGUgZ2l2ZW4gcHJvcGVydGllcyBleGlzdHMsIGRpc3JlZ2FyZGluZyBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFJlc291cmNlcyhyZXNvdXJjZVR5cGU6IHN0cmluZywgY291bnQgPSAxKTogQXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIHJldHVybiBuZXcgQ291bnRSZXNvdXJjZXNBc3NlcnRpb24ocmVzb3VyY2VUeXBlLCBjb3VudCk7XG59XG5cbi8qKlxuICogQW4gYXNzZXJ0aW9uIHRvIGNoZWNrIHdoZXRoZXIgYSByZXNvdXJjZSBvZiBhIGdpdmVuIHR5cGUgYW5kIHdpdGggdGhlIGdpdmVuIHByb3BlcnRpZXMgZXhpc3RzLCBjb25zaWRlcmluZyBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFJlc291cmNlc0xpa2UocmVzb3VyY2VUeXBlOiBzdHJpbmcsIGNvdW50ID0gMSwgcHJvcHM6IGFueSk6IEFzc2VydGlvbjxTdGFja0luc3BlY3Rvcj4ge1xuICByZXR1cm4gbmV3IENvdW50UmVzb3VyY2VzQXNzZXJ0aW9uKHJlc291cmNlVHlwZSwgY291bnQsIHByb3BzKTtcbn1cblxuY2xhc3MgQ291bnRSZXNvdXJjZXNBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgcHJpdmF0ZSBpbnNwZWN0ZWQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlVHlwZTogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IGNvdW50OiBudW1iZXIsIHByb3BzOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0VXNpbmcoaW5zcGVjdG9yOiBTdGFja0luc3BlY3Rvcik6IGJvb2xlYW4ge1xuICAgIGxldCBjb3VudGVkID0gMDtcbiAgICBmb3IgKGNvbnN0IGxvZ2ljYWxJZCBvZiBPYmplY3Qua2V5cyhpbnNwZWN0b3IudmFsdWUuUmVzb3VyY2VzIHx8IHt9KSkge1xuICAgICAgY29uc3QgcmVzb3VyY2UgPSBpbnNwZWN0b3IudmFsdWUuUmVzb3VyY2VzW2xvZ2ljYWxJZF07XG4gICAgICBpZiAocmVzb3VyY2UuVHlwZSA9PT0gdGhpcy5yZXNvdXJjZVR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMpIHtcbiAgICAgICAgICBpZiAoaXNTdXBlck9iamVjdChyZXNvdXJjZS5Qcm9wZXJ0aWVzLCB0aGlzLnByb3BzLCBbXSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgIGNvdW50ZWQrKztcbiAgICAgICAgICAgIHRoaXMuaW5zcGVjdGVkICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZWQrKztcbiAgICAgICAgICB0aGlzLmluc3BlY3RlZCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50ZWQgPT09IHRoaXMuY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBzdGFjayBvbmx5IGhhcyAke3RoaXMuaW5zcGVjdGVkfSByZXNvdXJjZSBvZiB0eXBlICR7dGhpcy5yZXNvdXJjZVR5cGV9JHtcbiAgICAgIHRoaXMucHJvcHMgPyAnIHdpdGggc3BlY2lmaWVkIHByb3BlcnRpZXMnIDogJydcbiAgICB9IGJ1dCB3ZSBleHBlY3RlZCB0byBmaW5kICR7dGhpcy5jb3VudH1gO1xuICB9XG59XG4iXX0=