import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmContact } from './cms.generated';
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
 * Represents a `AlarmContact`.
 */
export interface IAlarmContact extends ros.IResource {
    readonly props: AlarmContactProps;
    /**
     * Attribute AlarmContactName: AlarmContactName.
     */
    readonly attrAlarmContactName: ros.IResolvable | string;
    /**
     * Attribute ChannelsAliIm: ChannelsAliIm.
     */
    readonly attrChannelsAliIm: ros.IResolvable | string;
    /**
     * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    readonly attrChannelsDingWebHook: ros.IResolvable | string;
    /**
     * Attribute ChannelsMail: ChannelsMail.
     */
    readonly attrChannelsMail: ros.IResolvable | string;
    /**
     * Attribute ChannelsSms: ChannelsSMS.
     */
    readonly attrChannelsSms: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateAliIm: ChannelsStateAliIm.
     */
    readonly attrChannelsStateAliIm: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    readonly attrChannelsStateDingWebHook: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateMail: ChannelsStateMail.
     */
    readonly attrChannelsStateMail: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    readonly attrChannelsStateSms: ros.IResolvable | string;
    /**
     * Attribute ContactGroups: ContactGroups.
     */
    readonly attrContactGroups: ros.IResolvable | string;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Describe: Describe.
     */
    readonly attrDescribe: ros.IResolvable | string;
    /**
     * Attribute Lang: The language type of the alarm.
     */
    readonly attrLang: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: UpdateTime.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContact`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export declare class AlarmContact extends ros.Resource implements IAlarmContact {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AlarmContactProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AlarmContactName: AlarmContactName.
     */
    readonly attrAlarmContactName: ros.IResolvable | string;
    /**
     * Attribute ChannelsAliIm: ChannelsAliIm.
     */
    readonly attrChannelsAliIm: ros.IResolvable | string;
    /**
     * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    readonly attrChannelsDingWebHook: ros.IResolvable | string;
    /**
     * Attribute ChannelsMail: ChannelsMail.
     */
    readonly attrChannelsMail: ros.IResolvable | string;
    /**
     * Attribute ChannelsSms: ChannelsSMS.
     */
    readonly attrChannelsSms: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateAliIm: ChannelsStateAliIm.
     */
    readonly attrChannelsStateAliIm: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    readonly attrChannelsStateDingWebHook: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateMail: ChannelsStateMail.
     */
    readonly attrChannelsStateMail: ros.IResolvable | string;
    /**
     * Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    readonly attrChannelsStateSms: ros.IResolvable | string;
    /**
     * Attribute ContactGroups: ContactGroups.
     */
    readonly attrContactGroups: ros.IResolvable | string;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Describe: Describe.
     */
    readonly attrDescribe: ros.IResolvable | string;
    /**
     * Attribute Lang: The language type of the alarm.
     */
    readonly attrLang: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: UpdateTime.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmContactProps, enableResourcePropertyConstraint?: boolean);
}
