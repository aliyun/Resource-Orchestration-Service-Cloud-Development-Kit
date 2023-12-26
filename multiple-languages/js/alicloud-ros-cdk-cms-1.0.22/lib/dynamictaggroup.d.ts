import * as ros from '@alicloud/ros-cdk-core';
import { RosDynamicTagGroup } from './cms.generated';
export { RosDynamicTagGroup as DynamicTagGroupProperty };
/**
 * Properties for defining a `DynamicTagGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
export interface DynamicTagGroupProps {
    /**
     * Property contactGroupList: Alarm contacts.
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
     * Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    readonly enableSubscribeEvent?: boolean | ros.IResolvable;
    /**
     * Property matchExpress: Matching list. Only supports one currently.
     */
    readonly matchExpress?: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    readonly matchExpressFilterRelation?: string | ros.IResolvable;
    /**
     * Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    readonly templateIdList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::DynamicTagGroup`, which is used to create a tag rule based on which cloud resources can be automatically added to an application group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDynamicTagGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
export declare class DynamicTagGroup extends ros.Resource {
    /**
     * Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable;
    /**
     * Attribute TagKey: Tag key.
     */
    readonly attrTagKey: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DynamicTagGroupProps, enableResourcePropertyConstraint?: boolean);
}
