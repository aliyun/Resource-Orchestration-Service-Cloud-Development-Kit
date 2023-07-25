import * as ros from '@alicloud/ros-cdk-core';
import { RosAlert } from './sls.generated';
export { RosAlert as AlertProperty };
/**
 * Properties for defining a `ALIYUN::SLS::Alert`
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
 * A ROS resource type:  `ALIYUN::SLS::Alert`
 */
export declare class Alert extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Name: Alert name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Alert`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertProps, enableResourcePropertyConstraint?: boolean);
}
