import * as ros from '@alicloud/ros-cdk-core';
import { RosAlias } from './fc.generated';
export { RosAlias as AliasProperty };
/**
 * Properties for defining a `ALIYUN::FC::Alias`
 */
export interface AliasProps {
    /**
     * @Property aliasName: Alias name
     */
    readonly aliasName: string;
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string;
    /**
     * @Property additionalVersion: Additional version
     */
    readonly additionalVersion?: string;
    /**
     * @Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    readonly additionalWeight?: number;
    /**
     * @Property description: Version description
     */
    readonly description?: string;
    /**
     * @Property versionId: Version ID
     */
    readonly versionId?: string;
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
     * @Attribute AliasName: The alias name
     */
    readonly attrAliasName: any;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: any;
    /**
     * @Attribute VersionId: The version ID
     */
    readonly attrVersionId: any;
    /**
     * Create a new `ALIYUN::FC::Alias`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasProps, enableResourcePropertyConstraint?: boolean);
}
