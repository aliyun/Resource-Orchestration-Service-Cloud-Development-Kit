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
                    if (have_resource_1.isSuperObject(resource.Properties, this.props, [], true)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtcmVzb3VyY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291bnQtcmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUF5QztBQUV6QyxtREFBZ0Q7QUFFaEQ7O0dBRUc7QUFDSCxTQUFnQixjQUFjLENBQUMsWUFBb0IsRUFBRSxLQUFLLEdBQUcsQ0FBQztJQUM1RCxPQUFPLElBQUksdUJBQXVCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCx3Q0FFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsWUFBb0IsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQVU7SUFDNUUsT0FBTyxJQUFJLHVCQUF1QixDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUZELGdEQUVDO0FBRUQsTUFBTSx1QkFBd0IsU0FBUSxxQkFBeUI7SUFJN0QsWUFBNkIsWUFBb0IsRUFBbUIsS0FBYSxFQUFFLFFBQWEsSUFBSTtRQUNsRyxLQUFLLEVBQUUsQ0FBQztRQURtQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUFtQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSHpFLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFLNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxTQUF5QjtRQUMxQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RELElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQzVELE9BQU8sRUFBRSxDQUFDO3dCQUNWLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjtxQkFBTTtvQkFDTCxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztpQkFDckI7YUFDRjtTQUNGO1FBRUQsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sa0JBQWtCLElBQUksQ0FBQyxTQUFTLHFCQUFxQixJQUFJLENBQUMsWUFBWSxHQUMzRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsRUFDOUMsNEJBQTRCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3NlcnRpb24gfSBmcm9tICcuLi9hc3NlcnRpb24nO1xuaW1wb3J0IHsgU3RhY2tJbnNwZWN0b3IgfSBmcm9tICcuLi9pbnNwZWN0b3InO1xuaW1wb3J0IHsgaXNTdXBlck9iamVjdCB9IGZyb20gJy4vaGF2ZS1yZXNvdXJjZSc7XG5cbi8qKlxuICogQW4gYXNzZXJ0aW9uIHRvIGNoZWNrIHdoZXRoZXIgYSByZXNvdXJjZSBvZiBhIGdpdmVuIHR5cGUgYW5kIHdpdGggdGhlIGdpdmVuIHByb3BlcnRpZXMgZXhpc3RzLCBkaXNyZWdhcmRpbmcgcHJvcGVydGllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnRSZXNvdXJjZXMocmVzb3VyY2VUeXBlOiBzdHJpbmcsIGNvdW50ID0gMSk6IEFzc2VydGlvbjxTdGFja0luc3BlY3Rvcj4ge1xuICByZXR1cm4gbmV3IENvdW50UmVzb3VyY2VzQXNzZXJ0aW9uKHJlc291cmNlVHlwZSwgY291bnQpO1xufVxuXG4vKipcbiAqIEFuIGFzc2VydGlvbiB0byBjaGVjayB3aGV0aGVyIGEgcmVzb3VyY2Ugb2YgYSBnaXZlbiB0eXBlIGFuZCB3aXRoIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIGV4aXN0cywgY29uc2lkZXJpbmcgcHJvcGVydGllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnRSZXNvdXJjZXNMaWtlKHJlc291cmNlVHlwZTogc3RyaW5nLCBjb3VudCA9IDEsIHByb3BzOiBhbnkpOiBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgcmV0dXJuIG5ldyBDb3VudFJlc291cmNlc0Fzc2VydGlvbihyZXNvdXJjZVR5cGUsIGNvdW50LCBwcm9wcyk7XG59XG5cbmNsYXNzIENvdW50UmVzb3VyY2VzQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIHByaXZhdGUgaW5zcGVjdGVkOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZXNvdXJjZVR5cGU6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBjb3VudDogbnVtYmVyLCBwcm9wczogYW55ID0gbnVsbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG5cbiAgcHVibGljIGFzc2VydFVzaW5nKGluc3BlY3RvcjogU3RhY2tJbnNwZWN0b3IpOiBib29sZWFuIHtcbiAgICBsZXQgY291bnRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBsb2dpY2FsSWQgb2YgT2JqZWN0LmtleXMoaW5zcGVjdG9yLnZhbHVlLlJlc291cmNlcyB8fCB7fSkpIHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gaW5zcGVjdG9yLnZhbHVlLlJlc291cmNlc1tsb2dpY2FsSWRdO1xuICAgICAgaWYgKHJlc291cmNlLlR5cGUgPT09IHRoaXMucmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzKSB7XG4gICAgICAgICAgaWYgKGlzU3VwZXJPYmplY3QocmVzb3VyY2UuUHJvcGVydGllcywgdGhpcy5wcm9wcywgW10sIHRydWUpKSB7XG4gICAgICAgICAgICBjb3VudGVkKys7XG4gICAgICAgICAgICB0aGlzLmluc3BlY3RlZCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudGVkKys7XG4gICAgICAgICAgdGhpcy5pbnNwZWN0ZWQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudGVkID09PSB0aGlzLmNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgc3RhY2sgb25seSBoYXMgJHt0aGlzLmluc3BlY3RlZH0gcmVzb3VyY2Ugb2YgdHlwZSAke3RoaXMucmVzb3VyY2VUeXBlfSR7XG4gICAgICB0aGlzLnByb3BzID8gJyB3aXRoIHNwZWNpZmllZCBwcm9wZXJ0aWVzJyA6ICcnXG4gICAgfSBidXQgd2UgZXhwZWN0ZWQgdG8gZmluZCAke3RoaXMuY291bnR9YDtcbiAgfVxufVxuIl19