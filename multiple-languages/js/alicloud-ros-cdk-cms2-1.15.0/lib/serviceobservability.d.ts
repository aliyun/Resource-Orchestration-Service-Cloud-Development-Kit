import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceObservability } from './cms2.generated';
export { RosServiceObservability as ServiceObservabilityProperty };
/**
 * Properties for defining a `ServiceObservability`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
export interface ServiceObservabilityProps {
    /**
     * Property type: The type of the service observability.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property workspace: The workspace of the service observability.
     */
    readonly workspace: string | ros.IResolvable;
}
/**
 * Represents a `ServiceObservability`.
 */
export interface IServiceObservability extends ros.IResource {
    readonly props: ServiceObservabilityProps;
    /**
     * Attribute Workspace: The workspace of the service observability.
     */
    readonly attrWorkspace: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::ServiceObservability`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceObservability`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
export declare class ServiceObservability extends ros.Resource implements IServiceObservability {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceObservabilityProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Workspace: The workspace of the service observability.
     */
    readonly attrWorkspace: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceObservabilityProps, enableResourcePropertyConstraint?: boolean);
}
