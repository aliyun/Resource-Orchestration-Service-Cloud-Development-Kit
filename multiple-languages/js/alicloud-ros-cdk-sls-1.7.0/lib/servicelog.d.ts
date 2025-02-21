import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceLog } from './sls.generated';
export { RosServiceLog as ServiceLogProperty };
/**
 * Properties for defining a `ServiceLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
export interface ServiceLogProps {
    /**
     * Property logStorageLocation: The location of the service log.
     */
    readonly logStorageLocation: string | ros.IResolvable;
    /**
     * Property projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property serviceLogTypes: Types of service log that needs to be activated.
     */
    readonly serviceLogTypes: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ServiceLog`.
 */
export interface IServiceLog extends ros.IResource {
    readonly props: ServiceLogProps;
    /**
     * Attribute ProjectName: The name of the project that needs to be activated.
     */
    readonly attrProjectName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::ServiceLog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
export declare class ServiceLog extends ros.Resource implements IServiceLog {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceLogProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ProjectName: The name of the project that needs to be activated.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceLogProps, enableResourcePropertyConstraint?: boolean);
}
