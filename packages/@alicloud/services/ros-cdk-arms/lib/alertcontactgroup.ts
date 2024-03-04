import * as ros from '@alicloud/ros-cdk-core';
import { RosAlertContactGroup } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlertContactGroup as AlertContactGroupProperty };

/**
 * Properties for defining a `AlertContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::AlertContactGroup`, which is used to create an alert contact group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlertContactGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export class AlertContactGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AlertContactGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    public readonly attrContactGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertContactGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
