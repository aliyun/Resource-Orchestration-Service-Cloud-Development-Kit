import * as ros from '@alicloud/ros-cdk-core';
import { RosAliases } from './fc.generated';
export { RosAliases as AliasesProperty };
/**
 * Properties for defining a `DATASOURCE::FC::Aliases`
 */
export interface AliasesProps {
    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::FC::Aliases`
 */
export declare class Aliases extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AliasNames: The list of alias names.
     */
    readonly attrAliasNames: ros.IResolvable;
    /**
     * Attribute Aliases: The list of aliases.
     */
    readonly attrAliases: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::FC::Aliases`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasesProps, enableResourcePropertyConstraint?: boolean);
}
