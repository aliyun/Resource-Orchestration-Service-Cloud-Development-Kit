import * as ros from '@alicloud/ros-cdk-core';
import { RosStorageDomainRoutingRule } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStorageDomainRoutingRule as StorageDomainRoutingRuleProperty };

/**
 * Properties for defining a `StorageDomainRoutingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
export interface StorageDomainRoutingRuleProps {

    /**
     * Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property routes: Domain name routing entry.
     */
    readonly routes: Array<RosStorageDomainRoutingRule.RoutesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `StorageDomainRoutingRule`.
 */
export interface IStorageDomainRoutingRule extends ros.IResource {
    readonly props: StorageDomainRoutingRuleProps;

    /**
     * Attribute CreateTime: The creation time of the Rule.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: The Modify Time of the Rule.
     */
    readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute Routes: Domain name routing entry.
     */
    readonly attrRoutes: ros.IResolvable | string;

    /**
     * Attribute RuleId: Rule ID.
     */
    readonly attrRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::StorageDomainRoutingRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageDomainRoutingRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
export class StorageDomainRoutingRule extends ros.Resource implements IStorageDomainRoutingRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StorageDomainRoutingRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the Rule.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: The Modify Time of the Rule.
     */
    public readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute Routes: Domain name routing entry.
     */
    public readonly attrRoutes: ros.IResolvable | string;

    /**
     * Attribute RuleId: Rule ID.
     */
    public readonly attrRuleId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageDomainRoutingRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStorageDomainRoutingRule = new RosStorageDomainRoutingRule(this, id,  {
            instanceId: props.instanceId,
            routes: props.routes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStorageDomainRoutingRule;
        this.attrCreateTime = rosStorageDomainRoutingRule.attrCreateTime;
        this.attrModifyTime = rosStorageDomainRoutingRule.attrModifyTime;
        this.attrRoutes = rosStorageDomainRoutingRule.attrRoutes;
        this.attrRuleId = rosStorageDomainRoutingRule.attrRuleId;
    }
}
