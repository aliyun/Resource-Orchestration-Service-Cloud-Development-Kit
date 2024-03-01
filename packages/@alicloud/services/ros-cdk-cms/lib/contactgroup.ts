import * as ros from '@alicloud/ros-cdk-core';
import { RosContactGroup } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosContactGroup as ContactGroupProperty };

/**
 * Properties for defining a `ContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
 */
export interface ContactGroupProps {

    /**
     * Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string | ros.IResolvable;

    /**
     * Property contactNames: The name of the alert contact.
     */
    readonly contactNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property describe: The description of the alert contact group.
     */
    readonly describe: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::ContactGroup`, which is used to create an alert contact group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosContactGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
 */
export class ContactGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ContactGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ContactGroupName: The name of the alert contact group.
     */
    public readonly attrContactGroupName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosContactGroup = new RosContactGroup(this, id,  {
            describe: props.describe,
            contactGroupName: props.contactGroupName,
            contactNames: props.contactNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosContactGroup;
        this.attrContactGroupName = rosContactGroup.attrContactGroupName;
    }
}
