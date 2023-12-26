import * as ros from '@alicloud/ros-cdk-core';
import { RosAliases } from './fc.generated';
export { RosAliases as AliasesProperty };
/**
 * Properties for defining a `Aliases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Aliases`, which is used to query the aliases of a Function Compute service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAliases`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
 */
export declare class Aliases extends ros.Resource {
    /**
     * Attribute AliasNames: The list of alias names.
     */
    readonly attrAliasNames: ros.IResolvable;
    /**
     * Attribute Aliases: The list of aliases.
     */
    readonly attrAliases: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasesProps, enableResourcePropertyConstraint?: boolean);
}
