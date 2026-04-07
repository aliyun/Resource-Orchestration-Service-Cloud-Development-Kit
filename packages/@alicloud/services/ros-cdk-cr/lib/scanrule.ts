import * as ros from '@alicloud/ros-cdk-core';
import { RosScanRule } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScanRule as ScanRuleProperty };

/**
 * Properties for defining a `ScanRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
export interface ScanRuleProps {

    /**
     * Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    readonly repoTagFilterPattern: string | ros.IResolvable;

    /**
     * Property ruleName: The scan rule name.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * Property scanScope: The scan scope. Valid values:
     * NAMESPACE: namespace.
     * REPO: repository.
     * INSTANCE: CR instance.
     */
    readonly scanScope: string | ros.IResolvable;

    /**
     * Property scanType: The scan type. Valid values: 
     * * VUL: Products Cloud Security Scanner.
     * * SBOM: Product Content Analysis.
     */
    readonly scanType: string | ros.IResolvable;

    /**
     * Property triggerType: Trigger type. Valid values:
     * * AUTO: automatically trigger.
     * * MANUAL: manually trigger.
     */
    readonly triggerType: string | ros.IResolvable;

    /**
     * Property namespaces: The list of namespaces.
     * * When the scan scope is NAMESPACE, this parameter cannot be empty.
     * * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
     */
    readonly namespaces?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
     * * When the scan scope is REPO, this parameter cannot be empty.
     */
    readonly repoNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `ScanRule`.
 */
export interface IScanRule extends ros.IResource {
    readonly props: ScanRuleProps;

    /**
     * Attribute CreateTime: Creation time of the scan rule.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable | string;

    /**
     * Attribute RepoNames: The list of repositories.
     */
    readonly attrRepoNames: ros.IResolvable | string;

    /**
     * Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    readonly attrRepoTagFilterPattern: ros.IResolvable | string;

    /**
     * Attribute RuleName: The scan rule name.
     */
    readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute ScanRuleId: The ID of the scan rule.
     */
    readonly attrScanRuleId: ros.IResolvable | string;

    /**
     * Attribute ScanScope: The scan scope.
     */
    readonly attrScanScope: ros.IResolvable | string;

    /**
     * Attribute ScanType: The scan type.
     */
    readonly attrScanType: ros.IResolvable | string;

    /**
     * Attribute TriggerType: Trigger type.
     */
    readonly attrTriggerType: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Change time of the scan rule.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::ScanRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScanRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
export class ScanRule extends ros.Resource implements IScanRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ScanRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Creation time of the scan rule.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable | string;

    /**
     * Attribute RepoNames: The list of repositories.
     */
    public readonly attrRepoNames: ros.IResolvable | string;

    /**
     * Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    public readonly attrRepoTagFilterPattern: ros.IResolvable | string;

    /**
     * Attribute RuleName: The scan rule name.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute ScanRuleId: The ID of the scan rule.
     */
    public readonly attrScanRuleId: ros.IResolvable | string;

    /**
     * Attribute ScanScope: The scan scope.
     */
    public readonly attrScanScope: ros.IResolvable | string;

    /**
     * Attribute ScanType: The scan type.
     */
    public readonly attrScanType: ros.IResolvable | string;

    /**
     * Attribute TriggerType: Trigger type.
     */
    public readonly attrTriggerType: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Change time of the scan rule.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScanRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosScanRule = new RosScanRule(this, id,  {
            repoTagFilterPattern: props.repoTagFilterPattern,
            scanType: props.scanType,
            triggerType: props.triggerType,
            scanScope: props.scanScope,
            namespaces: props.namespaces,
            instanceId: props.instanceId,
            repoNames: props.repoNames,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScanRule;
        this.attrCreateTime = rosScanRule.attrCreateTime;
        this.attrInstanceId = rosScanRule.attrInstanceId;
        this.attrNamespaces = rosScanRule.attrNamespaces;
        this.attrRepoNames = rosScanRule.attrRepoNames;
        this.attrRepoTagFilterPattern = rosScanRule.attrRepoTagFilterPattern;
        this.attrRuleName = rosScanRule.attrRuleName;
        this.attrScanRuleId = rosScanRule.attrScanRuleId;
        this.attrScanScope = rosScanRule.attrScanScope;
        this.attrScanType = rosScanRule.attrScanType;
        this.attrTriggerType = rosScanRule.attrTriggerType;
        this.attrUpdateTime = rosScanRule.attrUpdateTime;
    }
}
