import * as schema from './schema';
export { schema };
/**
 * The complete ROS Resource specification, having any CDK patches and enhancements included in it.
 */
export declare function specification(): schema.Specification;
export declare function allTypes(): string;
/**
 * Return the resource specification for the given typename
 *
 * Validates that the resource exists. If you don't want this validating behavior, read from
 * specification() directly.
 */
export declare function resourceSpecification(typeName: string): schema.ResourceType;
/**
 * Return the property specification for the given resource's property
 */
export declare function propertySpecification(typeName: string, propertyName: string): schema.Property;
/**
 * The list of resource type names defined in the ``specification``.
 */
export declare function resourceTypes(): string[];
/**
 * The list of namespaces defined in the ``specification``, that is resource name prefixes down to the second ``::``.
 */
export declare function namespaces(): string[];
/**
 * Obtain a filtered version of the ROS specification.
 *
 * @param filter the predicate to be used in order to filter which resource types from the ``Specification`` to extract.
 *         When passed as a ``string``, only the specified resource type will be extracted. When passed as a
 *         ``RegExp``, all matching resource types will be extracted. When passed as a ``function``, all resource
 *         types for which the function returned ``true`` will be extracted.
 *
 * @return a coherent sub-set of the ROS Resource specification, including all property types related
 *     to the selected resource types.
 */
export declare function filteredSpecification(filter: string | RegExp | Filter): schema.Specification;
export declare type Filter = (name: string) => boolean;
