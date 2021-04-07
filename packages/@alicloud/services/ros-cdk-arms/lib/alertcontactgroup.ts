import * as ros from '@alicloud/ros-cdk-core';
import { RosAlertContactGroup } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlertContactGroup as AlertContactGroupProperty };

/**
 * Properties for defining a `ALIYUN::ARMS::AlertContactGroup`
 */
export interface AlertContactGroupProps {

    /**
     * Property contactGroupName: The name of the alert contact group that you want to create.
     */
    readonly contactGroupName: string | ros.IResolvable;

    /**
     * Property contactIds: The list of alert contact ID.
     */
    readonly contactIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;

    /**
     * Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ARMS::AlertContactGroup`
 */
export class AlertContactGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    public readonly attrContactGroupId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ARMS::AlertContactGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertContactGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAlertContactGroup = new RosAlertContactGroup(this, id,  {
            proxyUserId: props.proxyUserId,
            contactGroupName: props.contactGroupName,
            regionId: props.regionId,
            contactIds: props.contactIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlertContactGroup;
        this.attrContactGroupId = rosAlertContactGroup.attrContactGroupId;
    }
}
