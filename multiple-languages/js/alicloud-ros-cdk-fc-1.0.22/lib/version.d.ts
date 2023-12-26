import * as ros from '@alicloud/ros-cdk-core';
import { RosVersion } from './fc.generated';
export { RosVersion as VersionProperty };
/**
 * Properties for defining a `Version`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Version`, which is used to release a Version.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
 */
export declare class Version extends ros.Resource {
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute VersionId: The version ID
     */
    readonly attrVersionId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VersionProps, enableResourcePropertyConstraint?: boolean);
}
