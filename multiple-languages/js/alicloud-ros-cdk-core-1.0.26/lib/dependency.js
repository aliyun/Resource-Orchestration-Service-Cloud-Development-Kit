"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependableTrait = exports.ConcreteDependable = void 0;
/**
 * A set of constructs to be used as a dependable
 *
 * This class can be used when a set of constructs which are disjoint in the
 * construct tree needs to be combined to be used as a single dependable.
 *
 * @experimental
 */
class ConcreteDependable {
    constructor() {
        this._dependencyRoots = new Array();
        const self = this;
        DependableTrait.implement(this, {
            get dependencyRoots() {
                return self._dependencyRoots;
            },
        });
    }
    /**
     * Add a construct to the dependency roots
     */
    add(construct) {
        this._dependencyRoots.push(construct);
    }
}
exports.ConcreteDependable = ConcreteDependable;
const DEPENDABLE_SYMBOL = Symbol.for("ros-cdk-core.DependableTrait");
/**
 * Trait for IDependable
 *
 * Traits are interfaces that are privately implemented by objects. Instead of
 * showing up in the public interface of a class, they need to be queried
 * explicitly. This is used to implement certain framework features that are
 * not intended to be used by Construct consumers, and so should be hidden
 * from accidental use.
 *
 * @example
 *
 * // Usage
 * const roots = DependableTrait.get(construct).dependencyRoots;
 *
 * // Definition
 * DependableTrait.implement(construct, {
 *   get dependencyRoots() { return []; }
 * });
 *
 * @experimental
 */
class DependableTrait {
    /**
     * Register `instance` to have the given DependableTrait
     *
     * Should be called in the class constructor.
     */
    static implement(instance, trait) {
        // I would also like to reference classes (to cut down on the list of objects
        // we need to manage), but we can't do that either since jsii doesn't have the
        // concept of a class reference.
        instance[DEPENDABLE_SYMBOL] = trait;
    }
    /**
     * Return the matching DependableTrait for the given class instance.
     */
    static get(instance) {
        const ret = instance[DEPENDABLE_SYMBOL];
        if (!ret) {
            throw new Error(`${instance} does not implement DependableTrait`);
        }
        return ret;
    }
}
exports.DependableTrait = DependableTrait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGVuZGVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBaUJBOzs7Ozs7O0dBT0c7QUFDSCxNQUFhLGtCQUFrQjtJQUc3QjtRQUZpQixxQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO1FBRzFELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUM5QixJQUFJLGVBQWU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQy9CLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHLENBQUMsU0FBcUI7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFsQkQsZ0RBa0JDO0FBRUQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDckU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0gsTUFBc0IsZUFBZTtJQUNuQzs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFxQixFQUFFLEtBQXNCO1FBQ25FLDZFQUE2RTtRQUM3RSw4RUFBOEU7UUFDOUUsZ0NBQWdDO1FBQy9CLFFBQWdCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFxQjtRQUNyQyxNQUFNLEdBQUcsR0FBSSxRQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxRQUFRLHFDQUFxQyxDQUFDLENBQUM7U0FDbkU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FTRjtBQS9CRCwwQ0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuXG4vKipcbiAqIFRyYWl0IG1hcmtlciBmb3IgY2xhc3NlcyB0aGF0IGNhbiBiZSBkZXBlbmRlZCB1cG9uXG4gKlxuICogVGhlIHByZXNlbmNlIG9mIHRoaXMgaW50ZXJmYWNlIGluZGljYXRlcyB0aGF0IGFuIG9iamVjdCBoYXNcbiAqIGFuIGBJRGVwZW5kYWJsZVRyYWl0YCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBjYW4gYmUgdXNlZCB0byB0YWtlIGFuIChvcmRlcmluZykgZGVwZW5kZW5jeSBvbiBhIHNldCBvZlxuICogY29uc3RydWN0cy4gQW4gb3JkZXJpbmcgZGVwZW5kZW5jeSBpbXBsaWVzIHRoYXQgdGhlIHJlc291cmNlcyByZXByZXNlbnRlZCBieVxuICogdGhvc2UgY29uc3RydWN0cyBhcmUgZGVwbG95ZWQgYmVmb3JlIHRoZSByZXNvdXJjZXMgZGVwZW5kaW5nIE9OIHRoZW0gYXJlXG4gKiBkZXBsb3llZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGVwZW5kYWJsZSB7XG4gIC8vIEVtcHR5LCB0aGlzIGludGVyZmFjZSBpcyBhIHRyYWl0IG1hcmtlclxufVxuXG4vKipcbiAqIEEgc2V0IG9mIGNvbnN0cnVjdHMgdG8gYmUgdXNlZCBhcyBhIGRlcGVuZGFibGVcbiAqXG4gKiBUaGlzIGNsYXNzIGNhbiBiZSB1c2VkIHdoZW4gYSBzZXQgb2YgY29uc3RydWN0cyB3aGljaCBhcmUgZGlzam9pbnQgaW4gdGhlXG4gKiBjb25zdHJ1Y3QgdHJlZSBuZWVkcyB0byBiZSBjb21iaW5lZCB0byBiZSB1c2VkIGFzIGEgc2luZ2xlIGRlcGVuZGFibGUuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgQ29uY3JldGVEZXBlbmRhYmxlIGltcGxlbWVudHMgSURlcGVuZGFibGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXBlbmRlbmN5Um9vdHMgPSBuZXcgQXJyYXk8SUNvbnN0cnVjdD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBEZXBlbmRhYmxlVHJhaXQuaW1wbGVtZW50KHRoaXMsIHtcbiAgICAgIGdldCBkZXBlbmRlbmN5Um9vdHMoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9kZXBlbmRlbmN5Um9vdHM7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGNvbnN0cnVjdCB0byB0aGUgZGVwZW5kZW5jeSByb290c1xuICAgKi9cbiAgcHVibGljIGFkZChjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpIHtcbiAgICB0aGlzLl9kZXBlbmRlbmN5Um9vdHMucHVzaChjb25zdHJ1Y3QpO1xuICB9XG59XG5cbmNvbnN0IERFUEVOREFCTEVfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5EZXBlbmRhYmxlVHJhaXRcIik7XG4vKipcbiAqIFRyYWl0IGZvciBJRGVwZW5kYWJsZVxuICpcbiAqIFRyYWl0cyBhcmUgaW50ZXJmYWNlcyB0aGF0IGFyZSBwcml2YXRlbHkgaW1wbGVtZW50ZWQgYnkgb2JqZWN0cy4gSW5zdGVhZCBvZlxuICogc2hvd2luZyB1cCBpbiB0aGUgcHVibGljIGludGVyZmFjZSBvZiBhIGNsYXNzLCB0aGV5IG5lZWQgdG8gYmUgcXVlcmllZFxuICogZXhwbGljaXRseS4gVGhpcyBpcyB1c2VkIHRvIGltcGxlbWVudCBjZXJ0YWluIGZyYW1ld29yayBmZWF0dXJlcyB0aGF0IGFyZVxuICogbm90IGludGVuZGVkIHRvIGJlIHVzZWQgYnkgQ29uc3RydWN0IGNvbnN1bWVycywgYW5kIHNvIHNob3VsZCBiZSBoaWRkZW5cbiAqIGZyb20gYWNjaWRlbnRhbCB1c2UuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBVc2FnZVxuICogY29uc3Qgcm9vdHMgPSBEZXBlbmRhYmxlVHJhaXQuZ2V0KGNvbnN0cnVjdCkuZGVwZW5kZW5jeVJvb3RzO1xuICpcbiAqIC8vIERlZmluaXRpb25cbiAqIERlcGVuZGFibGVUcmFpdC5pbXBsZW1lbnQoY29uc3RydWN0LCB7XG4gKiAgIGdldCBkZXBlbmRlbmN5Um9vdHMoKSB7IHJldHVybiBbXTsgfVxuICogfSk7XG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVwZW5kYWJsZVRyYWl0IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGBpbnN0YW5jZWAgdG8gaGF2ZSB0aGUgZ2l2ZW4gRGVwZW5kYWJsZVRyYWl0XG4gICAqXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgaW4gdGhlIGNsYXNzIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbXBsZW1lbnQoaW5zdGFuY2U6IElEZXBlbmRhYmxlLCB0cmFpdDogRGVwZW5kYWJsZVRyYWl0KSB7XG4gICAgLy8gSSB3b3VsZCBhbHNvIGxpa2UgdG8gcmVmZXJlbmNlIGNsYXNzZXMgKHRvIGN1dCBkb3duIG9uIHRoZSBsaXN0IG9mIG9iamVjdHNcbiAgICAvLyB3ZSBuZWVkIHRvIG1hbmFnZSksIGJ1dCB3ZSBjYW4ndCBkbyB0aGF0IGVpdGhlciBzaW5jZSBqc2lpIGRvZXNuJ3QgaGF2ZSB0aGVcbiAgICAvLyBjb25jZXB0IG9mIGEgY2xhc3MgcmVmZXJlbmNlLlxuICAgIChpbnN0YW5jZSBhcyBhbnkpW0RFUEVOREFCTEVfU1lNQk9MXSA9IHRyYWl0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWF0Y2hpbmcgRGVwZW5kYWJsZVRyYWl0IGZvciB0aGUgZ2l2ZW4gY2xhc3MgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldChpbnN0YW5jZTogSURlcGVuZGFibGUpOiBEZXBlbmRhYmxlVHJhaXQge1xuICAgIGNvbnN0IHJldCA9IChpbnN0YW5jZSBhcyBhbnkpW0RFUEVOREFCTEVfU1lNQk9MXTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luc3RhbmNlfSBkb2VzIG5vdCBpbXBsZW1lbnQgRGVwZW5kYWJsZVRyYWl0YCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNldCBvZiBjb25zdHJ1Y3RzIHRoYXQgZm9ybSB0aGUgcm9vdCBvZiB0aGlzIGRlcGVuZGFibGVcbiAgICpcbiAgICogQWxsIHJlc291cmNlcyB1bmRlciBhbGwgcmV0dXJuZWQgY29uc3RydWN0cyBhcmUgaW5jbHVkZWQgaW4gdGhlIG9yZGVyaW5nXG4gICAqIGRlcGVuZGVuY3kuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgZGVwZW5kZW5jeVJvb3RzOiBJQ29uc3RydWN0W107XG59XG4iXX0=