import * as ros from '@alicloud/ros-cdk-core';
import { RosAlert } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Alert`, which is used to create an alert rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlert`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
 */
export class Alert extends ros.Resource {

    /**
     * Attribute Name: Alert name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAlert = new RosAlert(this, id,  {
            project: props.project,
            detail: props.detail,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlert;
        this.attrName = rosAlert.attrName;
    }
}
