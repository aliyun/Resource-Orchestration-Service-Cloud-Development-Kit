"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosDeletionPolicy = void 0;
/**
 * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
 * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
 * attribute, ROS deletes the resource by default.
 */
var RosDeletionPolicy;
(function (RosDeletionPolicy) {
    /**
     * ROS will deletes the resource and all its content if applicable during stack deletion.
     * You can add this deletion policy to any resource type.
     */
    RosDeletionPolicy["DELETE"] = "Delete";
    /**
     * ROS keeps the resource without deleting the resource or its contents when its stack is deleted.
     * You can add this deletion policy to any resource type.
     */
    RosDeletionPolicy["RETAIN"] = "Retain";
})(RosDeletionPolicy = exports.RosDeletionPolicy || (exports.RosDeletionPolicy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXJlc291cmNlLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1yZXNvdXJjZS1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7R0FJRztBQUNILElBQVksaUJBWVg7QUFaRCxXQUFZLGlCQUFpQjtJQUMzQjs7O09BR0c7SUFDSCxzQ0FBaUIsQ0FBQTtJQUVqQjs7O09BR0c7SUFDSCxzQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBWlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFZNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdpdGggdGhlIERlbGV0aW9uUG9saWN5IGF0dHJpYnV0ZSB5b3UgY2FuIHByZXNlcnZlIG9yIChpbiBzb21lIGNhc2VzKSBiYWNrdXAgYSByZXNvdXJjZSB3aGVuIGl0cyBzdGFjayBpcyBkZWxldGVkLlxuICogWW91IHNwZWNpZnkgYSBEZWxldGlvblBvbGljeSBhdHRyaWJ1dGUgZm9yIGVhY2ggcmVzb3VyY2UgdGhhdCB5b3Ugd2FudCB0byBjb250cm9sLiBJZiBhIHJlc291cmNlIGhhcyBubyBEZWxldGlvblBvbGljeVxuICogYXR0cmlidXRlLCBST1MgZGVsZXRlcyB0aGUgcmVzb3VyY2UgYnkgZGVmYXVsdC5cbiAqL1xuZXhwb3J0IGVudW0gUm9zRGVsZXRpb25Qb2xpY3kge1xuICAvKipcbiAgICogUk9TIHdpbGwgZGVsZXRlcyB0aGUgcmVzb3VyY2UgYW5kIGFsbCBpdHMgY29udGVudCBpZiBhcHBsaWNhYmxlIGR1cmluZyBzdGFjayBkZWxldGlvbi5cbiAgICogWW91IGNhbiBhZGQgdGhpcyBkZWxldGlvbiBwb2xpY3kgdG8gYW55IHJlc291cmNlIHR5cGUuXG4gICAqL1xuICBERUxFVEUgPSBcIkRlbGV0ZVwiLFxuXG4gIC8qKlxuICAgKiBST1Mga2VlcHMgdGhlIHJlc291cmNlIHdpdGhvdXQgZGVsZXRpbmcgdGhlIHJlc291cmNlIG9yIGl0cyBjb250ZW50cyB3aGVuIGl0cyBzdGFjayBpcyBkZWxldGVkLlxuICAgKiBZb3UgY2FuIGFkZCB0aGlzIGRlbGV0aW9uIHBvbGljeSB0byBhbnkgcmVzb3VyY2UgdHlwZS5cbiAgICovXG4gIFJFVEFJTiA9IFwiUmV0YWluXCIsXG59XG4iXX0=