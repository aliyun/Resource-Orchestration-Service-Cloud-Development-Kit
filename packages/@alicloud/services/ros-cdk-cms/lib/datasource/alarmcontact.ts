import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmContact } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlarmContact as AlarmContactProperty };

/**
 * Properties for defining a `AlarmContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export interface AlarmContactProps {

    /**
     * Property alarmContactName: AlarmContactName.
     */
    readonly alarmContactName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContact`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export class AlarmContact extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AlarmContactProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AlarmContactName: AlarmContactName.
     */
    public readonly attrAlarmContactName: ros.IResolvable;

    /**
     * Attribute ChannelsAliIm: ChannelsAliIM.
     */
    public readonly attrChannelsAliIm: ros.IResolvable;

    /**
     * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    public readonly attrChannelsDingWebHook: ros.IResolvable;

    /**
     * Attribute ChannelsMail: ChannelsMail.
     */
    public readonly attrChannelsMail: ros.IResolvable;

    /**
     * Attribute ChannelsSms: ChannelsSMS.
     */
    public readonly attrChannelsSms: ros.IResolvable;

    /**
     * Attribute ChannelsStateAliIm: ChannelsStateAliIM.
     */
    public readonly attrChannelsStateAliIm: ros.IResolvable;

    /**
     * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    public readonly attrChannelsStateDingWebHook: ros.IResolvable;

    /**
     * Attribute ChannelsStateMail: ChannelsStateMail.
     */
    public readonly attrChannelsStateMail: ros.IResolvable;

    /**
     * Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    public readonly attrChannelsStateSms: ros.IResolvable;

    /**
     * Attribute ContactGroups: ContactGroups.
     */
    public readonly attrContactGroups: ros.IResolvable;

    /**
     * Attribute CreateTime: CreateTime.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Describe: Describe.
     */
    public readonly attrDescribe: ros.IResolvable;

    /**
     * Attribute Lang: The language type of the alarm.
     */
    public readonly attrLang: ros.IResolvable;

    /**
     * Attribute UpdateTime: UpdateTime.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmContactProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAlarmContact = new RosAlarmContact(this, id,  {
            alarmContactName: props.alarmContactName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlarmContact;
        this.attrAlarmContactName = rosAlarmContact.attrAlarmContactName;
        this.attrChannelsAliIm = rosAlarmContact.attrChannelsAliIm;
        this.attrChannelsDingWebHook = rosAlarmContact.attrChannelsDingWebHook;
        this.attrChannelsMail = rosAlarmContact.attrChannelsMail;
        this.attrChannelsSms = rosAlarmContact.attrChannelsSms;
        this.attrChannelsStateAliIm = rosAlarmContact.attrChannelsStateAliIm;
        this.attrChannelsStateDingWebHook = rosAlarmContact.attrChannelsStateDingWebHook;
        this.attrChannelsStateMail = rosAlarmContact.attrChannelsStateMail;
        this.attrChannelsStateSms = rosAlarmContact.attrChannelsStateSms;
        this.attrContactGroups = rosAlarmContact.attrContactGroups;
        this.attrCreateTime = rosAlarmContact.attrCreateTime;
        this.attrDescribe = rosAlarmContact.attrDescribe;
        this.attrLang = rosAlarmContact.attrLang;
        this.attrUpdateTime = rosAlarmContact.attrUpdateTime;
    }
}
