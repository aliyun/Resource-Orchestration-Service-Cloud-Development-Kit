import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationGroupDeployment } from './oos.generated';
export { RosApplicationGroupDeployment as ApplicationGroupDeploymentProperty };
/**
 * Properties for defining a `ApplicationGroupDeployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
 */
export interface ApplicationGroupDeploymentProps {
    /**
     * Property applicationName: The name of the application.
     */
    readonly applicationName: string | ros.IResolvable;
    /**
     * Property name: The name of the application group.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property deployParameters: The deploy parameters of the application group to be deployed.
     */
    readonly deployParameters?: string | ros.IResolvable;
    /**
     * Property revisionId: The ID of the revision.
     */
    readonly revisionId?: string | ros.IResolvable;
}
/**
 * Represents a `ApplicationGroupDeployment`.
 */
export interface IApplicationGroupDeployment extends ros.IResource {
    readonly props: ApplicationGroupDeploymentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::ApplicationGroupDeployment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationGroupDeployment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
 */
export declare class ApplicationGroupDeployment extends ros.Resource implements IApplicationGroupDeployment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationGroupDeploymentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationGroupDeploymentProps, enableResourcePropertyConstraint?: boolean);
}
