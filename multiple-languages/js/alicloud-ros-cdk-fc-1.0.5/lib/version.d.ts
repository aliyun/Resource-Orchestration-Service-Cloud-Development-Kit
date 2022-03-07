import * as ros from '@alicloud/ros-cdk-core';
import { RosVersion } from './fc.generated';
export { RosVersion as VersionProperty };
/**
 * Properties for defining a `ALIYUN::FC::Version`
 */
export interface VersionProps {
    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property description: Version description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::FC::Version`
 */
export declare class Version extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute VersionId: The version ID
     */
    readonly attrVersionId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FC::Version`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VersionProps, enableResourcePropertyConstraint?: boolean);
}
