import * as ros from '@alicloud/ros-cdk-core';
import { RosAlert } from './sls.generated';
export { RosAlert as AlertProperty };
/**
 * Properties for defining a `Alert`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
 */
export interface AlertProps {
    /**
     * Property detail:
     */
    readonly detail: RosAlert.DetailProperty | ros.IResolvable;
    /**
     * Property project: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly project: string | ros.IResolvable;
}
/**
 * Represents a `Alert`.
 */
export interface IAlert extends ros.IResource {
    readonly props: AlertProps;
    /**
     * Attribute Name: Alert name.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Alert`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlert`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
 */
export declare class Alert extends ros.Resource implements IAlert {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AlertProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Name: Alert name.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertProps, enableResourcePropertyConstraint?: boolean);
}
