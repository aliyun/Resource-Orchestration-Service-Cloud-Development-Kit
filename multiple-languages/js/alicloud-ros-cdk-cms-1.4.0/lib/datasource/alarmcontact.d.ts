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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContact`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export declare class AlarmContact extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AlarmContactProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AlarmContactName: AlarmContactName.
     */
    readonly attrAlarmContactName: ros.IResolvable;
    /**
     * Attribute ChannelsAliIm: ChannelsAliIM.
     */
    readonly attrChannelsAliIm: ros.IResolvable;
    /**
     * Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    readonly attrChannelsDingWebHook: ros.IResolvable;
    /**
     * Attribute ChannelsMail: ChannelsMail.
     */
    readonly attrChannelsMail: ros.IResolvable;
    /**
     * Attribute ChannelsSms: ChannelsSMS.
     */
    readonly attrChannelsSms: ros.IResolvable;
    /**
     * Attribute ChannelsStateAliIm: ChannelsStateAliIM.
     */
    readonly attrChannelsStateAliIm: ros.IResolvable;
    /**
     * Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    readonly attrChannelsStateDingWebHook: ros.IResolvable;
    /**
     * Attribute ChannelsStateMail: ChannelsStateMail.
     */
    readonly attrChannelsStateMail: ros.IResolvable;
    /**
     * Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    readonly attrChannelsStateSms: ros.IResolvable;
    /**
     * Attribute ContactGroups: ContactGroups.
     */
    readonly attrContactGroups: ros.IResolvable;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Describe: Describe.
     */
    readonly attrDescribe: ros.IResolvable;
    /**
     * Attribute Lang: The language type of the alarm.
     */
    readonly attrLang: ros.IResolvable;
    /**
     * Attribute UpdateTime: UpdateTime.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmContactProps, enableResourcePropertyConstraint?: boolean);
}
