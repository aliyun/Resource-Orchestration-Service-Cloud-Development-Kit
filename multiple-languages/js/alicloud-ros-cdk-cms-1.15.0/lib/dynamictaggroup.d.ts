import * as ros from '@alicloud/ros-cdk-core';
import { RosDynamicTagGroup } from './cms.generated';
export { RosDynamicTagGroup as DynamicTagGroupProperty };
/**
 * Properties for defining a `DynamicTagGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
export interface DynamicTagGroupProps {
    /**
     * Property contactGroupList: The alert contact groups. The value of N can be from 1 to 100. Alert
     * notifications for the application group are sent to the alert contacts in these
     * alert contact groups.
     * An alert contact group can contain one or more alert contacts. For more
     * information about how to create alert contacts and alert contact groups, see
     * PutContact and PutContactGroup. For more information about how to obtain
     * alert contact groups, see DescribeContactGroupList.
     */
    readonly contactGroupList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tagKey: Tag key.
     */
    readonly tagKey: string | ros.IResolvable;
    /**
     * Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    readonly enableInstallAgent?: boolean | ros.IResolvable;
    /**
     * Property enableSubscribeEvent: Specifies whether to automatically subscribe to event notifications for the
     * application group. When a critical or warning event occurs on a resource in the
     * application group, CloudMonitor sends an alert notification. Valid values:
     * - true: enabled.
     * - false (default): disabled.
     */
    readonly enableSubscribeEvent?: boolean | ros.IResolvable;
    /**
     * Property matchExpress: The match expressions that are used to create an application group from tags.
     */
    readonly matchExpress?: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property matchExpressFilterRelation: The relationship between the conditional expressions for the tag values. Valid
     * values:
     * - and (default)
     * - or
     */
    readonly matchExpressFilterRelation?: string | ros.IResolvable;
    /**
     * Property templateIdList: The ID of the alert template.
     * For more information about how to query the IDs of alert templates, see
     * DescribeMetricRuleTemplateList.
     */
    readonly templateIdList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `DynamicTagGroup`.
 */
export interface IDynamicTagGroup extends ros.IResource {
    readonly props: DynamicTagGroupProps;
    /**
     * Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable | string;
    /**
     * Attribute TagKey: Tag key.
     */
    readonly attrTagKey: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::DynamicTagGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDynamicTagGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
export declare class DynamicTagGroup extends ros.Resource implements IDynamicTagGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DynamicTagGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable | string;
    /**
     * Attribute TagKey: Tag key.
     */
    readonly attrTagKey: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DynamicTagGroupProps, enableResourcePropertyConstraint?: boolean);
}
