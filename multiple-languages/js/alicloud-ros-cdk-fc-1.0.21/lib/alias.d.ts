import * as ros from '@alicloud/ros-cdk-core';
import { RosAlias } from './fc.generated';
export { RosAlias as AliasProperty };
/**
 * Properties for defining a `ALIYUN::FC::Alias`
 */
export interface AliasProps {
    /**
     * Property aliasName: Alias name
     */
    readonly aliasName: string | ros.IResolvable;
    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property additionalVersion: Additional version
     */
    readonly additionalVersion?: string | ros.IResolvable;
    /**
     * Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    readonly additionalWeight?: number | ros.IResolvable;
    /**
     * Property description: Version description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property versionId: Version ID
     */
    readonly versionId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::FC::Alias`
 */
export declare class Alias extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AliasName: The alias name
     */
    readonly attrAliasName: ros.IResolvable;
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute VersionId: The version ID
     */
    readonly attrVersionId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FC::Alias`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasProps, enableResourcePropertyConstraint?: boolean);
}
