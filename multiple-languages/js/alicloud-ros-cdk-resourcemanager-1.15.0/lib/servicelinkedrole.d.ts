import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceLinkedRole } from './resourcemanager.generated';
export { RosServiceLinkedRole as ServiceLinkedRoleProperty };
/**
 * Properties for defining a `ServiceLinkedRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
 */
export interface ServiceLinkedRoleProps {
    /**
     * Property serviceName: The service identifier of the service-linked role. For example: cloudmilvus.aliyuncs.com.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property customSuffix: The suffix of the service-linked role name. Specify this property only if the service supports custom suffixes.
     */
    readonly customSuffix?: string | ros.IResolvable;
    /**
     * Property description: The description of the service-linked role. The description must be 1 to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `ServiceLinkedRole`.
 */
export interface IServiceLinkedRole extends ros.IResource {
    readonly props: ServiceLinkedRoleProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ServiceLinkedRole`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceLinkedRole`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
 */
export declare class ServiceLinkedRole extends ros.Resource implements IServiceLinkedRole {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceLinkedRoleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceLinkedRoleProps, enableResourcePropertyConstraint?: boolean);
}
