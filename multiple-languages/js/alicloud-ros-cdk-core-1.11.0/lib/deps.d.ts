import { RosResource } from "./ros-resource";
import { Stack } from "./stack";
type Element = RosResource | Stack;
/**
 * Adds a dependency between two resources or stacks, across stack and nested
 * stack boundaries.
 *
 * The algorithm consists of:
 * - Try to find the deepest common stack between the two elements
 * - If there isn't a common stack, it means the elements belong to two
 *   disjoined stack-trees and therefore we apply the dependency at the
 *   assembly/app level between the two topl-level stacks.
 * - If we did find a common stack, we apply the dependency as a template
 *   "DependsOn" between the resources that "represent" our source and target
 *   either directly or through the Stack resources that
 *   "lead" to them.
 *
 * @param source The source resource/stack (the depedent)
 * @param target The target resource/stack (the dependency)
 * @param reason Optional resource to associate with the dependency for
 * diagnostics
 */
export declare function addDependency<T extends Element>(source: T, target: T, reason?: string): void;
export {};
