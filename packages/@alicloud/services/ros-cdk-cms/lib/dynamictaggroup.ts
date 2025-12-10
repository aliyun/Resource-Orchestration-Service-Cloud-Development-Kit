import * as ros from '@alicloud/ros-cdk-core';
import { RosDynamicTagGroup } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class DynamicTagGroup extends ros.Resource implements IDynamicTagGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DynamicTagGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    public readonly attrDynamicTagRuleId: ros.IResolvable | string;

    /**
     * Attribute TagKey: Tag key.
     */
    public readonly attrTagKey: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DynamicTagGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDynamicTagGroup = new RosDynamicTagGroup(this, id,  {
            contactGroupList: props.contactGroupList,
            matchExpressFilterRelation: props.matchExpressFilterRelation,
            enableSubscribeEvent: props.enableSubscribeEvent,
            templateIdList: props.templateIdList,
            tagKey: props.tagKey,
            enableInstallAgent: props.enableInstallAgent,
            matchExpress: props.matchExpress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDynamicTagGroup;
        this.attrDynamicTagRuleId = rosDynamicTagGroup.attrDynamicTagRuleId;
        this.attrTagKey = rosDynamicTagGroup.attrTagKey;
    }
}
