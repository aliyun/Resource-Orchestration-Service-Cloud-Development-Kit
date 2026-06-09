import * as ros from '@alicloud/ros-cdk-core';
import { RosClientFileProtect } from './threatdetection.generated';
export { RosClientFileProtect as ClientFileProtectProperty };
/**
 * Properties for defining a `ClientFileProtect`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
export interface ClientFileProtectProps {
    /**
     * Property fileOps: The operations that you want to perform on the files.
     */
    readonly fileOps: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property filePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    readonly filePaths: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property procPaths: The paths to the monitored processes.
     */
    readonly procPaths: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ruleAction: The handling method of the rule. Valid values:
     * *   pass: allow
     * *   alert.
     */
    readonly ruleAction: string | ros.IResolvable;
    /**
     * Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * Property alertLevel: The severity of alerts. Valid values:
     * *   0: does not generate alerts
     * *   1: sends notifications
     * *   2: suspicious
     * *   3: high-risk.
     */
    readonly alertLevel?: number | ros.IResolvable;
    /**
     * Property platform: The type of the operating system. Valid values:
     * *   **windows**: Windows
     * *   **linux**: Linux.
     */
    readonly platform?: string | ros.IResolvable;
    /**
     * Property status: Rule status.
     * 1: Enabled
     * 0: Not enabled
     */
    readonly status?: number | ros.IResolvable;
    /**
     * Property switchId: The switch ID of the rule.
     */
    readonly switchId?: string | ros.IResolvable;
}
/**
 * Represents a `ClientFileProtect`.
 */
export interface IClientFileProtect extends ros.IResource {
    readonly props: ClientFileProtectProps;
    /**
     * Attribute AlertLevel: The severity of alerts.
     */
    readonly attrAlertLevel: ros.IResolvable | string;
    /**
     * Attribute FileOps: The operations that you want to perform on the files.
     */
    readonly attrFileOps: ros.IResolvable | string;
    /**
     * Attribute FilePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    readonly attrFilePaths: ros.IResolvable | string;
    /**
     * Attribute Platform: The type of the operating system.
     */
    readonly attrPlatform: ros.IResolvable | string;
    /**
     * Attribute ProcPaths: The paths to the monitored processes.
     */
    readonly attrProcPaths: ros.IResolvable | string;
    /**
     * Attribute RuleAction: The handling method of the rule.
     */
    readonly attrRuleAction: ros.IResolvable | string;
    /**
     * Attribute RuleId: The ID of the rule.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute SwitchId: The switch ID of the rule.
     */
    readonly attrSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::ClientFileProtect`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClientFileProtect`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
export declare class ClientFileProtect extends ros.Resource implements IClientFileProtect {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClientFileProtectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AlertLevel: The severity of alerts.
     */
    readonly attrAlertLevel: ros.IResolvable | string;
    /**
     * Attribute FileOps: The operations that you want to perform on the files.
     */
    readonly attrFileOps: ros.IResolvable | string;
    /**
     * Attribute FilePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    readonly attrFilePaths: ros.IResolvable | string;
    /**
     * Attribute Platform: The type of the operating system.
     */
    readonly attrPlatform: ros.IResolvable | string;
    /**
     * Attribute ProcPaths: The paths to the monitored processes.
     */
    readonly attrProcPaths: ros.IResolvable | string;
    /**
     * Attribute RuleAction: The handling method of the rule.
     */
    readonly attrRuleAction: ros.IResolvable | string;
    /**
     * Attribute RuleId: The ID of the rule.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute SwitchId: The switch ID of the rule.
     */
    readonly attrSwitchId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClientFileProtectProps, enableResourcePropertyConstraint?: boolean);
}
