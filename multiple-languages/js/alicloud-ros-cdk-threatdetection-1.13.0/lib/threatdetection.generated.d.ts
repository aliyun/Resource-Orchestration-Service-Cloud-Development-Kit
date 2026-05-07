import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAntiBruteForceRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
 */
export interface RosAntiBruteForceRuleProps {
    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    readonly antiBruteForceRuleName: string | ros.IResolvable;
    /**
     * @Property failCount: The maximum number of failed logon attempts from an account.
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    readonly failCount: number | ros.IResolvable;
    /**
     * @Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * Unit: minutes. Valid values:
     * - 5: 5 minutes
     * - 15: 15 minutes
     * - 30: 30 minutes
     * - 60: 1 hour
     * - 120: 2 hours
     * - 360: 6 hours
     * - 720: 12 hours
     * - 1440: 24 hours
     * - 10080: 7 days
     * - 52560000: permanent
     */
    readonly forbiddenTime: number | ros.IResolvable;
    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    readonly span: number | ros.IResolvable;
    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    readonly uuidList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule.
     * Valid values:
     * - true: yes
     * - false: no
     */
    readonly defaultRule?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AntiBruteForceRule`, which is used to create a defense rule against brute-force attacks.
 * @Note This class does not contain additional functions, so it is recommended to use the `AntiBruteForceRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
 */
export declare class RosAntiBruteForceRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AntiBruteForceRule";
    /**
     * @Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    readonly attrAntiBruteForceRuleId: ros.IResolvable;
    /**
     * @Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    readonly attrAntiBruteForceRuleName: ros.IResolvable;
    /**
     * @Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
Valid values:
- true: yes
- false: no
     */
    readonly attrDefaultRule: ros.IResolvable;
    /**
     * @Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    readonly attrFailCount: ros.IResolvable;
    /**
     * @Attribute ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
     */
    readonly attrForbiddenTime: ros.IResolvable;
    /**
     * @Attribute Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    readonly attrSpan: ros.IResolvable;
    /**
     * @Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    readonly attrUuidList: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property antiBruteForceRuleName: The name of the defense rule.
     */
    antiBruteForceRuleName: string | ros.IResolvable;
    /**
     * @Property failCount: The maximum number of failed logon attempts from an account.
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    failCount: number | ros.IResolvable;
    /**
     * @Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * Unit: minutes. Valid values:
     * - 5: 5 minutes
     * - 15: 15 minutes
     * - 30: 30 minutes
     * - 60: 1 hour
     * - 120: 2 hours
     * - 360: 6 hours
     * - 720: 12 hours
     * - 1440: 24 hours
     * - 10080: 7 days
     * - 52560000: permanent
     */
    forbiddenTime: number | ros.IResolvable;
    /**
     * @Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * Unit: minutes. Valid values:
     * - 1
     * - 2
     * - 5
     * - 10
     * - 15
     */
    span: number | ros.IResolvable;
    /**
     * @Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    uuidList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultRule: Specifies whether to set the defense rule as the default rule.
     * Valid values:
     * - true: yes
     * - false: no
     */
    defaultRule: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosAttackPathSensitiveAssetConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
export interface RosAttackPathSensitiveAssetConfigProps {
    /**
     * @Property attackPathAssetList: The attack path sensitive asset configuration list.
     */
    readonly attackPathAssetList: Array<RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttackPathSensitiveAssetConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
export declare class RosAttackPathSensitiveAssetConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig";
    /**
     * @Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
     */
    readonly attrAttackPathAssetList: ros.IResolvable;
    /**
     * @Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
     */
    readonly attrAttackPathSensitiveAssetConfigId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property attackPathAssetList: The attack path sensitive asset configuration list.
     */
    attackPathAssetList: Array<RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttackPathSensitiveAssetConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAttackPathSensitiveAssetConfig {
    /**
     * @stability external
     */
    interface AttackPathAssetListProperty {
        /**
         * @Property instanceName: Instance name of the cloud product asset.
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property assetType: Type of the cloud product asset.
         */
        readonly assetType: number | ros.IResolvable;
        /**
         * @Property instanceId: Cloud product asset instance ID.
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property vendor: Cloud product asset vendor.
         */
        readonly vendor: number | ros.IResolvable;
        /**
         * @Property regionId: Region ID of the cloud product asset instance.
         */
        readonly regionId: string | ros.IResolvable;
        /**
         * @Property assetSubType: Subtype of the cloud product asset.
         */
        readonly assetSubType: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAttackPathWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
export interface RosAttackPathWhitelistProps {
    /**
     * @Property pathName: The whitelist path name.
     */
    readonly pathName: string | ros.IResolvable;
    /**
     * @Property pathType: The whitelist path type.
     */
    readonly pathType: string | ros.IResolvable;
    /**
     * @Property whitelistName: The whitelist name.
     */
    readonly whitelistName: string | ros.IResolvable;
    /**
     * @Property whitelistType: The whitelist type.  Values:
     * * ALL_ASSET: All assets.
     * * PART_ASSET: Partial assets.
     */
    readonly whitelistType: string | ros.IResolvable;
    /**
     * @Property attackPathAssetList: List of attack path assets.
     */
    readonly attackPathAssetList?: Array<RosAttackPathWhitelist.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property remark: Remark information.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::AttackPathWhitelist`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttackPathWhitelist` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
export declare class RosAttackPathWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::AttackPathWhitelist";
    /**
     * @Attribute AttackPathAssetList: List of attack path assets.
     */
    readonly attrAttackPathAssetList: ros.IResolvable;
    /**
     * @Attribute AttackPathWhitelistId: The attack path whitelist ID.
     */
    readonly attrAttackPathWhitelistId: ros.IResolvable;
    /**
     * @Attribute PathName: The whitelist path name.
     */
    readonly attrPathName: ros.IResolvable;
    /**
     * @Attribute PathType: The whitelist path type.
     */
    readonly attrPathType: ros.IResolvable;
    /**
     * @Attribute Remark: Remark information.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute WhitelistName: The whitelist name.
     */
    readonly attrWhitelistName: ros.IResolvable;
    /**
     * @Attribute WhitelistType: The whitelist type.
     */
    readonly attrWhitelistType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property pathName: The whitelist path name.
     */
    pathName: string | ros.IResolvable;
    /**
     * @Property pathType: The whitelist path type.
     */
    pathType: string | ros.IResolvable;
    /**
     * @Property whitelistName: The whitelist name.
     */
    whitelistName: string | ros.IResolvable;
    /**
     * @Property whitelistType: The whitelist type.  Values:
     * * ALL_ASSET: All assets.
     * * PART_ASSET: Partial assets.
     */
    whitelistType: string | ros.IResolvable;
    /**
     * @Property attackPathAssetList: List of attack path assets.
     */
    attackPathAssetList: Array<RosAttackPathWhitelist.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property remark: Remark information.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttackPathWhitelistProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAttackPathWhitelist {
    /**
     * @stability external
     */
    interface AttackPathAssetListProperty {
        /**
         * @Property assetType: The asset type of the cloud product.
         */
        readonly assetType?: number | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the cloud product instance.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property nodeType: The whitelist node type, with values:
     * * start: Start point.
     * * end: End point.
         */
        readonly nodeType?: string | ros.IResolvable;
        /**
         * @Property regionId: The region ID of the cloud product.
         */
        readonly regionId?: string | ros.IResolvable;
        /**
         * @Property vendor: The cloud product cloud vendor ID.
         */
        readonly vendor: number | ros.IResolvable;
        /**
         * @Property assetSubType: Cloud product asset subtype.
         */
        readonly assetSubType?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosBaselineStrategy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
export interface RosBaselineStrategyProps {
    /**
     * @Property baselineStrategyName: The new name of the baseline check policy.
     */
    readonly baselineStrategyName: string | ros.IResolvable;
    /**
     * @Property customType: The type of the baseline check policy. Valid values:
     * *   **custom**: a custom baseline check policy
     * *   **common**: a standard baseline check policy.
     */
    readonly customType: string | ros.IResolvable;
    /**
     * @Property cycleDays: The new interval of the baseline check. Valid values:
     * *   **1**: every 2 days
     * *   **3**: every 4 days
     * *   **7**: every 8 days
     * *   **30**: every 31 days.
     */
    readonly cycleDays: number | ros.IResolvable;
    /**
     * @Property endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    readonly endTime: string | ros.IResolvable;
    /**
     * @Property riskSubTypeName: The subtype of the baselines.
     */
    readonly riskSubTypeName: string | ros.IResolvable;
    /**
     * @Property startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    readonly startTime: string | ros.IResolvable;
    /**
     * @Property targetType: The method that is used to apply the baseline check policy. Valid values:
     * *   **groupId**: asset groups
     * *   **uuid**: assets.
     */
    readonly targetType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::BaselineStrategy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BaselineStrategy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
export declare class RosBaselineStrategy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::BaselineStrategy";
    /**
     * @Attribute BaselineStrategyId: The ID of the baseline check policy.
     */
    readonly attrBaselineStrategyId: ros.IResolvable;
    /**
     * @Attribute BaselineStrategyName: The new name of the baseline check policy.
     */
    readonly attrBaselineStrategyName: ros.IResolvable;
    /**
     * @Attribute CustomType: The type of the baseline check policy.
     */
    readonly attrCustomType: ros.IResolvable;
    /**
     * @Attribute CycleDays: The new interval of the baseline check.
     */
    readonly attrCycleDays: ros.IResolvable;
    /**
     * @Attribute EndTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    readonly attrEndTime: ros.IResolvable;
    /**
     * @Attribute RiskSubTypeName: The subtype of the baselines.
     */
    readonly attrRiskSubTypeName: ros.IResolvable;
    /**
     * @Attribute StartTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    readonly attrStartTime: ros.IResolvable;
    /**
     * @Attribute TargetType: The method that is used to apply the baseline check policy.
     */
    readonly attrTargetType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property baselineStrategyName: The new name of the baseline check policy.
     */
    baselineStrategyName: string | ros.IResolvable;
    /**
     * @Property customType: The type of the baseline check policy. Valid values:
     * *   **custom**: a custom baseline check policy
     * *   **common**: a standard baseline check policy.
     */
    customType: string | ros.IResolvable;
    /**
     * @Property cycleDays: The new interval of the baseline check. Valid values:
     * *   **1**: every 2 days
     * *   **3**: every 4 days
     * *   **7**: every 8 days
     * *   **30**: every 31 days.
     */
    cycleDays: number | ros.IResolvable;
    /**
     * @Property endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    endTime: string | ros.IResolvable;
    /**
     * @Property riskSubTypeName: The subtype of the baselines.
     */
    riskSubTypeName: string | ros.IResolvable;
    /**
     * @Property startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    startTime: string | ros.IResolvable;
    /**
     * @Property targetType: The method that is used to apply the baseline check policy. Valid values:
     * *   **groupId**: asset groups
     * *   **uuid**: assets.
     */
    targetType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBaselineStrategyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosClientFileProtect`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
export interface RosClientFileProtectProps {
    /**
     * @Property fileOps: The operations that you want to perform on the files.
     */
    readonly fileOps: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property filePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    readonly filePaths: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property procPaths: The paths to the monitored processes.
     */
    readonly procPaths: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleAction: The handling method of the rule. Valid values:
     * *   pass: allow
     * *   alert.
     */
    readonly ruleAction: string | ros.IResolvable;
    /**
     * @Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property alertLevel: The severity of alerts. Valid values:
     * *   0: does not generate alerts
     * *   1: sends notifications
     * *   2: suspicious
     * *   3: high-risk.
     */
    readonly alertLevel?: number | ros.IResolvable;
    /**
     * @Property platform: The type of the operating system. Valid values:
     * *   **windows**: Windows
     * *   **linux**: Linux.
     */
    readonly platform?: string | ros.IResolvable;
    /**
     * @Property status: Rule status.
     * 1: Enabled
     * 0: Not enabled
     */
    readonly status?: number | ros.IResolvable;
    /**
     * @Property switchId: The switch ID of the rule.
     */
    readonly switchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::ClientFileProtect`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientFileProtect` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
export declare class RosClientFileProtect extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::ClientFileProtect";
    /**
     * @Attribute AlertLevel: The severity of alerts.
     */
    readonly attrAlertLevel: ros.IResolvable;
    /**
     * @Attribute FileOps: The operations that you want to perform on the files.
     */
    readonly attrFileOps: ros.IResolvable;
    /**
     * @Attribute FilePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    readonly attrFilePaths: ros.IResolvable;
    /**
     * @Attribute Platform: The type of the operating system.
     */
    readonly attrPlatform: ros.IResolvable;
    /**
     * @Attribute ProcPaths: The paths to the monitored processes.
     */
    readonly attrProcPaths: ros.IResolvable;
    /**
     * @Attribute RuleAction: The handling method of the rule.
     */
    readonly attrRuleAction: ros.IResolvable;
    /**
     * @Attribute RuleId: The ID of the rule.
     */
    readonly attrRuleId: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute SwitchId: The switch ID of the rule.
     */
    readonly attrSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileOps: The operations that you want to perform on the files.
     */
    fileOps: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property filePaths: The paths to the monitored files. Wildcard characters are supported.
     */
    filePaths: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property procPaths: The paths to the monitored processes.
     */
    procPaths: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleAction: The handling method of the rule. Valid values:
     * *   pass: allow
     * *   alert.
     */
    ruleAction: string | ros.IResolvable;
    /**
     * @Property ruleName: The name of the rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property alertLevel: The severity of alerts. Valid values:
     * *   0: does not generate alerts
     * *   1: sends notifications
     * *   2: suspicious
     * *   3: high-risk.
     */
    alertLevel: number | ros.IResolvable | undefined;
    /**
     * @Property platform: The type of the operating system. Valid values:
     * *   **windows**: Windows
     * *   **linux**: Linux.
     */
    platform: string | ros.IResolvable | undefined;
    /**
     * @Property status: Rule status.
     * 1: Enabled
     * 0: Not enabled
     */
    status: number | ros.IResolvable | undefined;
    /**
     * @Property switchId: The switch ID of the rule.
     */
    switchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientFileProtectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosContainerDefenseRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
export interface RosContainerDefenseRuleProps {
    /**
     * @Property description: Rule description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ruleAction: The action that is performed when the rule is hit. Valid values:
     * - **1**: alert
     * - **2**: block.
     */
    readonly ruleAction?: number | ros.IResolvable;
    /**
     * @Property ruleId: Rule Id.
     */
    readonly ruleId?: number | ros.IResolvable;
    /**
     * @Property ruleName: The name of the rule.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * @Property ruleSwitch: The switch of the rule. Valid values:
     * * 0: off.
     * * 1: on.
     */
    readonly ruleSwitch?: number | ros.IResolvable;
    /**
     * @Property ruleType: The rule type. Value:
     * * 2: User Rules
     */
    readonly ruleType?: number | ros.IResolvable;
    /**
     * @Property scope: Rule scope.
     */
    readonly scope?: Array<RosContainerDefenseRule.ScopeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property whitelist: The whitelist of rule.
     */
    readonly whitelist?: RosContainerDefenseRule.WhitelistProperty | ros.IResolvable;
    /**
     * @Property whitelistHash: The whitelist Hash.
     */
    readonly whitelistHash?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::ContainerDefenseRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ContainerDefenseRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
export declare class RosContainerDefenseRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::ContainerDefenseRule";
    /**
     * @Attribute Description: Rule description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute RuleAction: The action that is performed when the rule is hit.
     */
    readonly attrRuleAction: ros.IResolvable;
    /**
     * @Attribute RuleId: Rule Id.
     */
    readonly attrRuleId: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute RuleSwitch: The switch of the rule.
     */
    readonly attrRuleSwitch: ros.IResolvable;
    /**
     * @Attribute RuleType: The rule type.
     */
    readonly attrRuleType: ros.IResolvable;
    /**
     * @Attribute Scope: Rule scope.
     */
    readonly attrScope: ros.IResolvable;
    /**
     * @Attribute Whitelist: The whitelist of rule.
     */
    readonly attrWhitelist: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Rule description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ruleAction: The action that is performed when the rule is hit. Valid values:
     * - **1**: alert
     * - **2**: block.
     */
    ruleAction: number | ros.IResolvable | undefined;
    /**
     * @Property ruleId: Rule Id.
     */
    ruleId: number | ros.IResolvable | undefined;
    /**
     * @Property ruleName: The name of the rule.
     */
    ruleName: string | ros.IResolvable | undefined;
    /**
     * @Property ruleSwitch: The switch of the rule. Valid values:
     * * 0: off.
     * * 1: on.
     */
    ruleSwitch: number | ros.IResolvable | undefined;
    /**
     * @Property ruleType: The rule type. Value:
     * * 2: User Rules
     */
    ruleType: number | ros.IResolvable | undefined;
    /**
     * @Property scope: Rule scope.
     */
    scope: Array<RosContainerDefenseRule.ScopeProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property whitelist: The whitelist of rule.
     */
    whitelist: RosContainerDefenseRule.WhitelistProperty | ros.IResolvable | undefined;
    /**
     * @Property whitelistHash: The whitelist Hash.
     */
    whitelistHash: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContainerDefenseRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosContainerDefenseRule {
    /**
     * @stability external
     */
    interface ScopeProperty {
        /**
         * @Property namespaces: The namespaces to include.
         */
        readonly namespaces?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property clusterId: The ID of the cluster.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property allNamespace: Specifies whether to include all namespaces. Valid values:
     * * 0: You can use the Namespaces parameter to specify the namespaces to include.
     * * 1: All namespaces are included.
         */
        readonly allNamespace?: number | ros.IResolvable;
    }
}
export declare namespace RosContainerDefenseRule {
    /**
     * @stability external
     */
    interface WhitelistProperty {
        /**
         * @Property path: The paths to the files that need to be added to the whitelist.
         */
        readonly path?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property image: The images that need to be added to the whitelist.
         */
        readonly image?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCustomCheckItem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
export interface RosCustomCheckItemProps {
    /**
     * @Property checkRule: Check Item Check Rules.
     */
    readonly checkRule: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property checkShowName: Check item display name.
     */
    readonly checkShowName: string | ros.IResolvable;
    /**
     * @Property instanceSubType: Asset subtype to which the check item belongs.
     */
    readonly instanceSubType: string | ros.IResolvable;
    /**
     * @Property instanceType: Asset type to which the check item belongs.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property riskLevel: Risk level of inspection items.
     */
    readonly riskLevel: string | ros.IResolvable;
    /**
     * @Property sectionIds: CHECK SECTION OF INSPECTIONS.
     */
    readonly sectionIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property status: Check item status. Values:
     * EDIT: Editing in progress
     * RELEASE: Published
     */
    readonly status: string | ros.IResolvable;
    /**
     * @Property vendor: Vendor to which the item belongs.
     */
    readonly vendor: string | ros.IResolvable;
    /**
     * @Property assistInfo: Check Item Description Help Information.
     */
    readonly assistInfo?: RosCustomCheckItem.AssistInfoProperty | ros.IResolvable;
    /**
     * @Property description: Check item description information.
     */
    readonly description?: RosCustomCheckItem.DescriptionProperty | ros.IResolvable;
    /**
     * @Property remark: Remarks.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property solution: Check Item Solution.
     */
    readonly solution?: RosCustomCheckItem.SolutionProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::CustomCheckItem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomCheckItem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
export declare class RosCustomCheckItem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::CustomCheckItem";
    /**
     * @Attribute AssistInfo: Check Item Description Help Information.
     */
    readonly attrAssistInfo: ros.IResolvable;
    /**
     * @Attribute CheckId: The first ID of the resource.
     */
    readonly attrCheckId: ros.IResolvable;
    /**
     * @Attribute CheckRule: Check Item Check Rules.
     */
    readonly attrCheckRule: ros.IResolvable;
    /**
     * @Attribute CheckShowName: Check item display name.
     */
    readonly attrCheckShowName: ros.IResolvable;
    /**
     * @Attribute Description: Check item description information.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute InstanceSubType: Asset subtype to which the check item belongs.
     */
    readonly attrInstanceSubType: ros.IResolvable;
    /**
     * @Attribute InstanceType: Asset type to which the check item belongs.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute Remark: Remarks.
     */
    readonly attrRemark: ros.IResolvable;
    /**
     * @Attribute RiskLevel: Risk level of inspection items.
     */
    readonly attrRiskLevel: ros.IResolvable;
    /**
     * @Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
     */
    readonly attrSectionIds: ros.IResolvable;
    /**
     * @Attribute Solution: Check Item Solution.
     */
    readonly attrSolution: ros.IResolvable;
    /**
     * @Attribute Vendor: Vendor to which the item belongs.
     */
    readonly attrVendor: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property checkRule: Check Item Check Rules.
     */
    checkRule: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property checkShowName: Check item display name.
     */
    checkShowName: string | ros.IResolvable;
    /**
     * @Property instanceSubType: Asset subtype to which the check item belongs.
     */
    instanceSubType: string | ros.IResolvable;
    /**
     * @Property instanceType: Asset type to which the check item belongs.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property riskLevel: Risk level of inspection items.
     */
    riskLevel: string | ros.IResolvable;
    /**
     * @Property sectionIds: CHECK SECTION OF INSPECTIONS.
     */
    sectionIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property status: Check item status. Values:
     * EDIT: Editing in progress
     * RELEASE: Published
     */
    status: string | ros.IResolvable;
    /**
     * @Property vendor: Vendor to which the item belongs.
     */
    vendor: string | ros.IResolvable;
    /**
     * @Property assistInfo: Check Item Description Help Information.
     */
    assistInfo: RosCustomCheckItem.AssistInfoProperty | ros.IResolvable | undefined;
    /**
     * @Property description: Check item description information.
     */
    description: RosCustomCheckItem.DescriptionProperty | ros.IResolvable | undefined;
    /**
     * @Property remark: Remarks.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property solution: Check Item Solution.
     */
    solution: RosCustomCheckItem.SolutionProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomCheckItemProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCustomCheckItem {
    /**
     * @stability external
     */
    interface AssistInfoProperty {
        /**
         * @Property type: Check Item Description Help Information Type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Check Item Description Help Information Value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
export declare namespace RosCustomCheckItem {
    /**
     * @stability external
     */
    interface DescriptionProperty {
        /**
         * @Property type: Check Item Description Information Type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Check item description information value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
export declare namespace RosCustomCheckItem {
    /**
     * @stability external
     */
    interface SolutionProperty {
        /**
         * @Property type: Check Item Solution Type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Check Item Solution Value.
         */
        readonly value?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCustomCheckStandardPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
export interface RosCustomCheckStandardPolicyProps {
    /**
     * @Property policyShowName: The name of the custom policy.
     */
    readonly policyShowName: string | ros.IResolvable;
    /**
     * @Property policyType: The category type of the custom check policy:
     * - STANDARD: standard.
     * - REQUIREMENT: requirement.
     * - SECTION: section.
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * @Property dependentPolicyId: The ID of the parent policy.
     * (Dependency order from low to high: Section -> Requirement -> Standard)
     */
    readonly dependentPolicyId?: number | ros.IResolvable;
    /**
     * @Property type: The category name of the associated policy (required when PolicyType is STANDARD):
     * - AISPM: AI Security Posture Management (AISPM).
     * - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
     * - RISK: Security Risk.
     * - COMPLIANCE: Compliance Risk.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::CustomCheckStandardPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomCheckStandardPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
export declare class RosCustomCheckStandardPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::CustomCheckStandardPolicy";
    /**
     * @Attribute PolicyId: The ID of the custom check policy.
     */
    readonly attrPolicyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyShowName: The name of the custom policy.
     */
    policyShowName: string | ros.IResolvable;
    /**
     * @Property policyType: The category type of the custom check policy:
     * - STANDARD: standard.
     * - REQUIREMENT: requirement.
     * - SECTION: section.
     */
    policyType: string | ros.IResolvable;
    /**
     * @Property dependentPolicyId: The ID of the parent policy.
     * (Dependency order from low to high: Section -> Requirement -> Standard)
     */
    dependentPolicyId: number | ros.IResolvable | undefined;
    /**
     * @Property type: The category name of the associated policy (required when PolicyType is STANDARD):
     * - AISPM: AI Security Posture Management (AISPM).
     * - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
     * - RISK: Security Risk.
     * - COMPLIANCE: Compliance Risk.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomCheckStandardPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosCycleTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
export interface RosCycleTaskProps {
    /**
     * @Property enable: Specifies whether to enable the task. Valid values:
     * *   **1**: yes
     * *   **0**: no.
     */
    readonly enable: number | ros.IResolvable;
    /**
     * @Property firstDateStr: The first time when the task is performed.
     */
    readonly firstDateStr: number | ros.IResolvable;
    /**
     * @Property intervalPeriod: The interval at which the task is run.
     */
    readonly intervalPeriod: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the scan interval. Valid values:
     * *   **day**
     * *   **hour**.
     */
    readonly periodUnit: string | ros.IResolvable;
    /**
     * @Property targetEndTime: The time when the task ends. Unit: hours.
     */
    readonly targetEndTime: number | ros.IResolvable;
    /**
     * @Property targetStartTime: The time when the task is started. Unit: hours.
     */
    readonly targetStartTime: number | ros.IResolvable;
    /**
     * @Property taskName: The task name.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * @Property taskType: The type of the task. Valid values:
     * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
     * *   **IMAGE_SCAN**: image scan task
     * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
     */
    readonly taskType: string | ros.IResolvable;
    /**
     * @Property param: The additional information.
     */
    readonly param?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property source: The additional source for the task.
     */
    readonly source?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::CycleTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CycleTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-cycletask
 */
export declare class RosCycleTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::CycleTask";
    /**
     * @Attribute ConfigId: Configuration ID.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute Enable: Specifies whether to enable the task.
     */
    readonly attrEnable: ros.IResolvable;
    /**
     * @Attribute FirstDateStr: The first time when the task is performed.
     */
    readonly attrFirstDateStr: ros.IResolvable;
    /**
     * @Attribute IntervalPeriod: The interval at which the task is run.
     */
    readonly attrIntervalPeriod: ros.IResolvable;
    /**
     * @Attribute Param: The additional information.
     */
    readonly attrParam: ros.IResolvable;
    /**
     * @Attribute PeriodUnit: The unit of the scan interval.
     */
    readonly attrPeriodUnit: ros.IResolvable;
    /**
     * @Attribute TargetEndTime: The time when the task ends. Unit: hours.
     */
    readonly attrTargetEndTime: ros.IResolvable;
    /**
     * @Attribute TargetStartTime: The time when the task is started. Unit: hours.
     */
    readonly attrTargetStartTime: ros.IResolvable;
    /**
     * @Attribute TaskName: The task name.
     */
    readonly attrTaskName: ros.IResolvable;
    /**
     * @Attribute TaskType: The type of the task.
     */
    readonly attrTaskType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property enable: Specifies whether to enable the task. Valid values:
     * *   **1**: yes
     * *   **0**: no.
     */
    enable: number | ros.IResolvable;
    /**
     * @Property firstDateStr: The first time when the task is performed.
     */
    firstDateStr: number | ros.IResolvable;
    /**
     * @Property intervalPeriod: The interval at which the task is run.
     */
    intervalPeriod: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the scan interval. Valid values:
     * *   **day**
     * *   **hour**.
     */
    periodUnit: string | ros.IResolvable;
    /**
     * @Property targetEndTime: The time when the task ends. Unit: hours.
     */
    targetEndTime: number | ros.IResolvable;
    /**
     * @Property targetStartTime: The time when the task is started. Unit: hours.
     */
    targetStartTime: number | ros.IResolvable;
    /**
     * @Property taskName: The task name.
     */
    taskName: string | ros.IResolvable;
    /**
     * @Property taskType: The type of the task. Valid values:
     * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
     * *   **IMAGE_SCAN**: image scan task
     * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task.
     */
    taskType: string | ros.IResolvable;
    /**
     * @Property param: The additional information.
     */
    param: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property source: The additional source for the task.
     */
    source: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCycleTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
export interface RosGroupProps {
    /**
     * @Property groupId: The ID of the server group for which you want to add to or remove servers.
     * >  To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
     */
    readonly groupId?: number | ros.IResolvable;
    /**
     * @Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     * >  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
     */
    readonly groupName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::Group";
    /**
     * @Attribute GroupFlag: The type of the server group.
     */
    readonly attrGroupFlag: ros.IResolvable;
    /**
     * @Attribute GroupId: The ID of the server group for which you want to add to or remove servers.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     */
    readonly attrGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The ID of the server group for which you want to add to or remove servers.
     * >  To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
     */
    groupId: number | ros.IResolvable | undefined;
    /**
     * @Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     * >  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosHoneyPot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
export interface RosHoneyPotProps {
    /**
     * @Property honeypotImageId: The ID of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
     */
    readonly honeypotImageId: string | ros.IResolvable;
    /**
     * @Property honeypotImageName: The name of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
     */
    readonly honeypotImageName: string | ros.IResolvable;
    /**
     * @Property honeypotName: The custom name of the honeypot.
     */
    readonly honeypotName: string | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    readonly nodeId: string | ros.IResolvable;
    /**
     * @Property meta: Honeypot custom configuration. JSON format. Contains the following fields:
     * - **trojan_git**:Git counterplan. Value:
     * - **zip**:Git source package
     * - **web**:.git directory leak
     * - **close**: close
     * - **trojan_git\_addr**:Git anti-control connection address
     * - **Trojan_git.zip**:Git anti-Trojan package
     * - **burp**:Burp counter. Value:
     * - **open**: On
     * - **close**: close
     * - **portrait_option**: traceability configuration. Value:
     * - **false**: Disabled
     * - **true**: Enable.
     */
    readonly meta?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneyPot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneyPot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
export declare class RosHoneyPot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneyPot";
    /**
     * @Attribute HoneypotId: The ID of the honeypot.
     */
    readonly attrHoneypotId: ros.IResolvable;
    /**
     * @Attribute HoneypotImageId: The ID of the honeypot image.
     */
    readonly attrHoneypotImageId: ros.IResolvable;
    /**
     * @Attribute HoneypotImageName: The name of the honeypot image.
     */
    readonly attrHoneypotImageName: ros.IResolvable;
    /**
     * @Attribute HoneypotName: The custom name of the honeypot.
     */
    readonly attrHoneypotName: ros.IResolvable;
    /**
     * @Attribute NodeId: The ID of the management node.
     */
    readonly attrNodeId: ros.IResolvable;
    /**
     * @Attribute State: Honeypot status.
     */
    readonly attrState: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property honeypotImageId: The ID of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
     */
    honeypotImageId: string | ros.IResolvable;
    /**
     * @Property honeypotImageName: The name of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
     */
    honeypotImageName: string | ros.IResolvable;
    /**
     * @Property honeypotName: The custom name of the honeypot.
     */
    honeypotName: string | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    nodeId: string | ros.IResolvable;
    /**
     * @Property meta: Honeypot custom configuration. JSON format. Contains the following fields:
     * - **trojan_git**:Git counterplan. Value:
     * - **zip**:Git source package
     * - **web**:.git directory leak
     * - **close**: close
     * - **trojan_git\_addr**:Git anti-control connection address
     * - **Trojan_git.zip**:Git anti-Trojan package
     * - **burp**:Burp counter. Value:
     * - **open**: On
     * - **close**: close
     * - **portrait_option**: traceability configuration. Value:
     * - **false**: Disabled
     * - **true**: Enable.
     */
    meta: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneyPotProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosHoneypotNode`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
export interface RosHoneypotNodeProps {
    /**
     * @Property nodeName: The name of the management node.
     */
    readonly nodeName: string | ros.IResolvable;
    /**
     * @Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
     * *   **true**: allows honeypots to access the Internet.
     * *   **false**: does not allow honeypots to access the Internet.
     */
    readonly allowHoneypotAccessInternet?: boolean | ros.IResolvable;
    /**
     * @Property availableProbeNum: The number of available probes.
     */
    readonly availableProbeNum?: number | ros.IResolvable;
    /**
     * @Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    readonly securityGroupProbeIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneypotNode`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneypotNode` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
export declare class RosHoneypotNode extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneypotNode";
    /**
     * @Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
     */
    readonly attrAllowHoneypotAccessInternet: ros.IResolvable;
    /**
     * @Attribute AvailableProbeNum: The number of available probes.
     */
    readonly attrAvailableProbeNum: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the management node was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute NodeId: Honeypot management node id.
     */
    readonly attrNodeId: ros.IResolvable;
    /**
     * @Attribute NodeName: The name of the management node.
     */
    readonly attrNodeName: ros.IResolvable;
    /**
     * @Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    readonly attrSecurityGroupProbeIpList: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property nodeName: The name of the management node.
     */
    nodeName: string | ros.IResolvable;
    /**
     * @Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet. Valid values:
     * *   **true**: allows honeypots to access the Internet.
     * *   **false**: does not allow honeypots to access the Internet.
     */
    allowHoneypotAccessInternet: boolean | ros.IResolvable | undefined;
    /**
     * @Property availableProbeNum: The number of available probes.
     */
    availableProbeNum: number | ros.IResolvable | undefined;
    /**
     * @Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
     */
    securityGroupProbeIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneypotNodeProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosHoneypotPreset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
export interface RosHoneypotPresetProps {
    /**
     * @Property honeypotImageName: The name of the honeypot image.
     */
    readonly honeypotImageName: string | ros.IResolvable;
    /**
     * @Property meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
     * *   **PortraitOption**: Social Source Tracing
     * *   **Burp**: Burp-specific Defense
     * *   **TrojanGit**: Git-specific Defense.
     */
    readonly meta: RosHoneypotPreset.MetaProperty | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the management node.
     */
    readonly nodeId: string | ros.IResolvable;
    /**
     * @Property presetName: The custom name of the honeypot template.
     */
    readonly presetName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneypotPreset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneypotPreset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
export declare class RosHoneypotPreset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneypotPreset";
    /**
     * @Attribute HoneypotImageName: The name of the honeypot image.
     */
    readonly attrHoneypotImageName: ros.IResolvable;
    /**
     * @Attribute HoneypotPresetId: The ID of the honeypot template.
     */
    readonly attrHoneypotPresetId: ros.IResolvable;
    /**
     * @Attribute Meta: The custom configurations of the honeypot template.
     */
    readonly attrMeta: ros.IResolvable;
    /**
     * @Attribute NodeId: The ID of the management node.
     */
    readonly attrNodeId: ros.IResolvable;
    /**
     * @Attribute PresetName: The custom name of the honeypot template.
     */
    readonly attrPresetName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property honeypotImageName: The name of the honeypot image.
     */
    honeypotImageName: string | ros.IResolvable;
    /**
     * @Property meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
     * *   **PortraitOption**: Social Source Tracing
     * *   **Burp**: Burp-specific Defense
     * *   **TrojanGit**: Git-specific Defense.
     */
    meta: RosHoneypotPreset.MetaProperty | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the management node.
     */
    nodeId: string | ros.IResolvable;
    /**
     * @Property presetName: The custom name of the honeypot template.
     */
    presetName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneypotPresetProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHoneypotPreset {
    /**
     * @stability external
     */
    interface MetaProperty {
        /**
         * @Property trojanGit: Git-specific Defense.
         */
        readonly trojanGit?: string | ros.IResolvable;
        /**
         * @Property portraitOption: Social Source Tracing.
         */
        readonly portraitOption?: boolean | ros.IResolvable;
        /**
         * @Property burp: Burp-specific Defense.
         */
        readonly burp?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosHoneypotProbe`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
export interface RosHoneypotProbeProps {
    /**
     * @Property controlNodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    readonly controlNodeId: string | ros.IResolvable;
    /**
     * @Property displayName: The name of the probe.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property probeType: The type of the probe. Valid values:
     * *   **host_probe**: host probe
     * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
     */
    readonly probeType: string | ros.IResolvable;
    /**
     * @Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    readonly arp?: boolean | ros.IResolvable;
    /**
     * @Property businessGroupId: Business grouping.
     */
    readonly businessGroupId?: string | ros.IResolvable;
    /**
     * @Property honeypotBindList: The configuration of the probe.
     */
    readonly honeypotBindList?: Array<RosHoneypotProbe.HoneypotBindListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ping: Specifies whether to enable ping scan. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    readonly ping?: boolean | ros.IResolvable;
    /**
     * @Property probeVersion: The version of the probe.
     */
    readonly probeVersion?: string | ros.IResolvable;
    /**
     * @Property proxyIp: The IP address of the proxy.
     */
    readonly proxyIp?: string | ros.IResolvable;
    /**
     * @Property serviceIpList: Listen to the IP address list.
     */
    readonly serviceIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property uuid: The UUID of the instance.
     * > If **ProbeType** is set to **host_probe**, this parameter is required.
     */
    readonly uuid?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     * > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::HoneypotProbe`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HoneypotProbe` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
 */
export declare class RosHoneypotProbe extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::HoneypotProbe";
    /**
     * @Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
     */
    readonly attrArp: ros.IResolvable;
    /**
     * @Attribute ControlNodeId: The ID of the management node.
     */
    readonly attrControlNodeId: ros.IResolvable;
    /**
     * @Attribute DisplayName: The name of the probe.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute HoneypotBindList: The configuration of the probe.
     */
    readonly attrHoneypotBindList: ros.IResolvable;
    /**
     * @Attribute HoneypotProbeId: The ID of the probe.
     */
    readonly attrHoneypotProbeId: ros.IResolvable;
    /**
     * @Attribute Ping: Specifies whether to enable ping scan.
     */
    readonly attrPing: ros.IResolvable;
    /**
     * @Attribute ProbeType: The type of the probe.
     */
    readonly attrProbeType: ros.IResolvable;
    /**
     * @Attribute ProbeVersion: The version of the probe.
     */
    readonly attrProbeVersion: ros.IResolvable;
    /**
     * @Attribute ServiceIpList: Listen to the IP address list.
     */
    readonly attrServiceIpList: ros.IResolvable;
    /**
     * @Attribute Uuid: The UUID of the instance.
     */
    readonly attrUuid: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property controlNodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    controlNodeId: string | ros.IResolvable;
    /**
     * @Property displayName: The name of the probe.
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property probeType: The type of the probe. Valid values:
     * *   **host_probe**: host probe
     * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
     */
    probeType: string | ros.IResolvable;
    /**
     * @Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    arp: boolean | ros.IResolvable | undefined;
    /**
     * @Property businessGroupId: Business grouping.
     */
    businessGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property honeypotBindList: The configuration of the probe.
     */
    honeypotBindList: Array<RosHoneypotProbe.HoneypotBindListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ping: Specifies whether to enable ping scan. Valid values:
     * *   **true**: yes
     * *   **false**: no.
     */
    ping: boolean | ros.IResolvable | undefined;
    /**
     * @Property probeVersion: The version of the probe.
     */
    probeVersion: string | ros.IResolvable | undefined;
    /**
     * @Property proxyIp: The IP address of the proxy.
     */
    proxyIp: string | ros.IResolvable | undefined;
    /**
     * @Property serviceIpList: Listen to the IP address list.
     */
    serviceIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property uuid: The UUID of the instance.
     * > If **ProbeType** is set to **host_probe**, this parameter is required.
     */
    uuid: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC.
     * > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHoneypotProbeProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHoneypotProbe {
    /**
     * @stability external
     */
    interface BindPortListProperty {
        /**
         * @Property targetPort: The destination port.
     * > If **HoneypotId** is specified, this parameter is required.
         */
        readonly targetPort?: number | ros.IResolvable;
        /**
         * @Property bindPort: Specifies whether to bind a port. Valid values:
     * *   **true**: yes
     * *   **false**: no.
         */
        readonly bindPort?: boolean | ros.IResolvable;
        /**
         * @Property startPort: The start of the port range.
         */
        readonly startPort?: number | ros.IResolvable;
        /**
         * @Property endPort: The end of the port range.
         */
        readonly endPort?: number | ros.IResolvable;
        /**
         * @Property fixed: Specifies whether the port is a fixed port. Valid values:
     * *   **false**: no
     * *   **true**: yes.
         */
        readonly fixed?: boolean | ros.IResolvable;
    }
}
export declare namespace RosHoneypotProbe {
    /**
     * @stability external
     */
    interface HoneypotBindListProperty {
        /**
         * @Property honeypotId: The ID of the honeypot.
     * > You can call the [ListHoneypot](~~ListHoneypot~~) operation to query the IDs of honeypots.
         */
        readonly honeypotId?: string | ros.IResolvable;
        /**
         * @Property bindPortList: The listener ports.
         */
        readonly bindPortList?: Array<RosHoneypotProbe.BindPortListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosImageEventOperation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
export interface RosImageEventOperationProps {
    /**
     * @Property conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
     * *   **condition**: the matching condition.
     * *   **type**: the matching type.
     * *   **value**: the matching value.
     */
    readonly conditions: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property eventType: Image Event Type.
     */
    readonly eventType: string | ros.IResolvable;
    /**
     * @Property operationCode: Event Operation Code.
     */
    readonly operationCode: string | ros.IResolvable;
    /**
     * @Property eventKey: The keyword of the alert item.
     */
    readonly eventKey?: string | ros.IResolvable;
    /**
     * @Property eventName: The name of the alert item.
     */
    readonly eventName?: string | ros.IResolvable;
    /**
     * @Property note: The remarks that you want to add.
     */
    readonly note?: string | ros.IResolvable;
    /**
     * @Property scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
     * type
     * value
     * Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
     */
    readonly scenarios?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property source: The source of the whitelist. Valid values:
     * *   **default**: image.
     * *   **agentless**: agentless detection.
     */
    readonly source?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::ImageEventOperation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageEventOperation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
export declare class RosImageEventOperation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::ImageEventOperation";
    /**
     * @Attribute Conditions: The rule conditions. Specify a value in the JSON format.
     */
    readonly attrConditions: ros.IResolvable;
    /**
     * @Attribute EventKey: Image Event Key.
     */
    readonly attrEventKey: ros.IResolvable;
    /**
     * @Attribute EventName: Image Event Name.
     */
    readonly attrEventName: ros.IResolvable;
    /**
     * @Attribute EventType: Image Event Type.
     */
    readonly attrEventType: ros.IResolvable;
    /**
     * @Attribute ImageEventOperationId: The first ID of the resource.
     */
    readonly attrImageEventOperationId: ros.IResolvable;
    /**
     * @Attribute Note: The remarks.
     */
    readonly attrNote: ros.IResolvable;
    /**
     * @Attribute OperationCode: Event Operation Code.
     */
    readonly attrOperationCode: ros.IResolvable;
    /**
     * @Attribute Scenarios: Event Scenarios.
     */
    readonly attrScenarios: ros.IResolvable;
    /**
     * @Attribute Source: The source of the whitelist.
     */
    readonly attrSource: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
     * *   **condition**: the matching condition.
     * *   **type**: the matching type.
     * *   **value**: the matching value.
     */
    conditions: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property eventType: Image Event Type.
     */
    eventType: string | ros.IResolvable;
    /**
     * @Property operationCode: Event Operation Code.
     */
    operationCode: string | ros.IResolvable;
    /**
     * @Property eventKey: The keyword of the alert item.
     */
    eventKey: string | ros.IResolvable | undefined;
    /**
     * @Property eventName: The name of the alert item.
     */
    eventName: string | ros.IResolvable | undefined;
    /**
     * @Property note: The remarks that you want to add.
     */
    note: string | ros.IResolvable | undefined;
    /**
     * @Property scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
     * type
     * value
     * Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
     */
    scenarios: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property source: The source of the whitelist. Valid values:
     * *   **default**: image.
     * *   **agentless**: agentless detection.
     */
    source: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageEventOperationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
export interface RosInstanceProps {
    /**
     * @Property paymentType: The payment type of the resource.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property versionCode: Select the security center version. Value:
     * - level7: Antivirus Edition.
     * - level3: Premium version.
     * - level2: Enterprise Edition.
     * - level8: Ultimate.
     * - level10: Purchase value-added services only.
     */
    readonly versionCode: string | ros.IResolvable;
    /**
     * @Property buyNumber: Number of servers.
     */
    readonly buyNumber?: string | ros.IResolvable;
    /**
     * @Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    readonly containerImageScan?: string | ros.IResolvable;
    /**
     * @Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    readonly containerImageScanNew?: string | ros.IResolvable;
    /**
     * @Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     * > This module can only be purchased when honeypot_switch = 1, starting with 20.
     */
    readonly honeypot?: string | ros.IResolvable;
    /**
     * @Property honeypotSwitch: Cloud honeypot. Value:
     * - 1: Yes.
     * - 2: No.
     */
    readonly honeypotSwitch?: string | ros.IResolvable;
    /**
     * @Property modifyType: Change configuration type, value
     * - Upgrade: Upgrade.
     * - Downgrade: Downgrade.
     */
    readonly modifyType?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
     */
    readonly productType?: string | ros.IResolvable;
    /**
     * @Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    readonly raspCount?: string | ros.IResolvable;
    /**
     * @Property renewalPeriodUnit: Automatic renewal period unit, value:
     * - M: month.
     * - Y: years.
     * > Must be set when RenewalStatus = AutoRenewal.
     */
    readonly renewalPeriodUnit?: string | ros.IResolvable;
    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * @Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasAntiRansomware?: string | ros.IResolvable;
    /**
     * @Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     * > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
     */
    readonly sasCspm?: string | ros.IResolvable;
    /**
     * @Property sasCspmSwitch: Cloud platform configuration check switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly sasCspmSwitch?: string | ros.IResolvable;
    /**
     * @Property sasSc: Security screen. Value:
     * - true: Yes.
     * - false: No.
     */
    readonly sasSc?: string | ros.IResolvable;
    /**
     * @Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     * > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasSdk?: string | ros.IResolvable;
    /**
     * @Property sasSdkSwitch: Malicious file detection SDK.
     */
    readonly sasSdkSwitch?: string | ros.IResolvable;
    /**
     * @Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly sasSlsStorage?: string | ros.IResolvable;
    /**
     * @Property sasWebguardBoolean: Web tamper-proof switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly sasWebguardBoolean?: string | ros.IResolvable;
    /**
     * @Property sasWebguardOrderNum: Tamper-proof authorization number. Value:
     * - 0: No
     * - 1: Yes.
     */
    readonly sasWebguardOrderNum?: string | ros.IResolvable;
    /**
     * @Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     * > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    readonly threatAnalysis?: string | ros.IResolvable;
    /**
     * @Property threatAnalysisSwitch: Threat analysis. Value:
     * - 0: No.
     * - 1: Yes.
     */
    readonly threatAnalysisSwitch?: string | ros.IResolvable;
    /**
     * @Property vCore: Number of cores.
     */
    readonly vCore?: string | ros.IResolvable;
    /**
     * @Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     * > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
     */
    readonly vulCount?: string | ros.IResolvable;
    /**
     * @Property vulSwitch: Vulnerability fix switch. Value:
     * - 0: No.
     * - 1: Yes.
     * > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
     */
    readonly vulSwitch?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::Instance`, which is used to purchase Security Center (SAS).
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::Instance";
    /**
     * @Attribute BuyNumber: Number of servers.
     */
    readonly attrBuyNumber: ros.IResolvable;
    /**
     * @Attribute ContainerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     */
    readonly attrContainerImageScan: ros.IResolvable;
    /**
     * @Attribute ContainerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     */
    readonly attrContainerImageScanNew: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     */
    readonly attrHoneypot: ros.IResolvable;
    /**
     * @Attribute HoneypotSwitch: Cloud honeypot.
     */
    readonly attrHoneypotSwitch: ros.IResolvable;
    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute RaspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    readonly attrRaspCount: ros.IResolvable;
    /**
     * @Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    readonly attrRenewPeriod: ros.IResolvable;
    /**
     * @Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
     */
    readonly attrRenewalPeriodUnit: ros.IResolvable;
    /**
     * @Attribute RenewalStatus: Automatic renewal status, value:.
     */
    readonly attrRenewalStatus: ros.IResolvable;
    /**
     * @Attribute SasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     */
    readonly attrSasAntiRansomware: ros.IResolvable;
    /**
     * @Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     */
    readonly attrSasCspm: ros.IResolvable;
    /**
     * @Attribute SasCspmSwitch: Cloud platform configuration check switch.
     */
    readonly attrSasCspmSwitch: ros.IResolvable;
    /**
     * @Attribute SasSc: Security screen.
     */
    readonly attrSasSc: ros.IResolvable;
    /**
     * @Attribute SasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     */
    readonly attrSasSdk: ros.IResolvable;
    /**
     * @Attribute SasSdkSwitch: Malicious file detection SDK.
     */
    readonly attrSasSdkSwitch: ros.IResolvable;
    /**
     * @Attribute SasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     */
    readonly attrSasSlsStorage: ros.IResolvable;
    /**
     * @Attribute SasWebguardBoolean: Web tamper-proof switch.
     */
    readonly attrSasWebguardBoolean: ros.IResolvable;
    /**
     * @Attribute SasWebguardOrderNum: Tamper-proof authorization number.
     */
    readonly attrSasWebguardOrderNum: ros.IResolvable;
    /**
     * @Attribute ThreatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     */
    readonly attrThreatAnalysis: ros.IResolvable;
    /**
     * @Attribute ThreatAnalysisSwitch: Threat analysis.
     */
    readonly attrThreatAnalysisSwitch: ros.IResolvable;
    /**
     * @Attribute VCore: Number of cores.
     */
    readonly attrVCore: ros.IResolvable;
    /**
     * @Attribute VersionCode: Select the security center version.
     */
    readonly attrVersionCode: ros.IResolvable;
    /**
     * @Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     */
    readonly attrVulCount: ros.IResolvable;
    /**
     * @Attribute VulSwitch: Vulnerability fix switch.
     */
    readonly attrVulSwitch: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property paymentType: The payment type of the resource.
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property versionCode: Select the security center version. Value:
     * - level7: Antivirus Edition.
     * - level3: Premium version.
     * - level2: Enterprise Edition.
     * - level8: Ultimate.
     * - level10: Purchase value-added services only.
     */
    versionCode: string | ros.IResolvable;
    /**
     * @Property buyNumber: Number of servers.
     */
    buyNumber: string | ros.IResolvable | undefined;
    /**
     * @Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    containerImageScan: string | ros.IResolvable | undefined;
    /**
     * @Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
     * > The step size is 20, that is, only multiples of 20 can be filled in.
     */
    containerImageScanNew: string | ros.IResolvable | undefined;
    /**
     * @Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
     * > This module can only be purchased when honeypot_switch = 1, starting with 20.
     */
    honeypot: string | ros.IResolvable | undefined;
    /**
     * @Property honeypotSwitch: Cloud honeypot. Value:
     * - 1: Yes.
     * - 2: No.
     */
    honeypotSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property modifyType: Change configuration type, value
     * - Upgrade: Upgrade.
     * - Downgrade: Downgrade.
     */
    modifyType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     * > must be set when creating a prepaid instance.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
     */
    productType: string | ros.IResolvable | undefined;
    /**
     * @Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
     */
    raspCount: string | ros.IResolvable | undefined;
    /**
     * @Property renewalPeriodUnit: Automatic renewal period unit, value:
     * - M: month.
     * - Y: years.
     * > Must be set when RenewalStatus = AutoRenewal.
     */
    renewalPeriodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    renewalStatus: string | ros.IResolvable | undefined;
    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
     */
    renewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    sasAntiRansomware: string | ros.IResolvable | undefined;
    /**
     * @Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
     * > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
     */
    sasCspm: string | ros.IResolvable | undefined;
    /**
     * @Property sasCspmSwitch: Cloud platform configuration check switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    sasCspmSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property sasSc: Security screen. Value:
     * - true: Yes.
     * - false: No.
     */
    sasSc: string | ros.IResolvable | undefined;
    /**
     * @Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
     * > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    sasSdk: string | ros.IResolvable | undefined;
    /**
     * @Property sasSdkSwitch: Malicious file detection SDK.
     */
    sasSdkSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
     * > The step size is 10, that is, only multiples of 10 can be filled in.
     */
    sasSlsStorage: string | ros.IResolvable | undefined;
    /**
     * @Property sasWebguardBoolean: Web tamper-proof switch. Value:
     * - 0: No.
     * - 1: Yes.
     */
    sasWebguardBoolean: string | ros.IResolvable | undefined;
    /**
     * @Property sasWebguardOrderNum: Tamper-proof authorization number. Value:
     * - 0: No
     * - 1: Yes.
     */
    sasWebguardOrderNum: string | ros.IResolvable | undefined;
    /**
     * @Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
     * > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
     */
    threatAnalysis: string | ros.IResolvable | undefined;
    /**
     * @Property threatAnalysisSwitch: Threat analysis. Value:
     * - 0: No.
     * - 1: Yes.
     */
    threatAnalysisSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property vCore: Number of cores.
     */
    vCore: string | ros.IResolvable | undefined;
    /**
     * @Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
     * > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
     */
    vulCount: string | ros.IResolvable | undefined;
    /**
     * @Property vulSwitch: Vulnerability fix switch. Value:
     * - 0: No.
     * - 1: Yes.
     * > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
     */
    vulSwitch: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosVulWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
export interface RosVulWhitelistProps {
    /**
     * @Property targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
     * *   **type**: the type of the applicable scope. Valid values:
     *     *   **GroupId**: the ID of a server group.
     *     *   **Uuid**: the UUID of a server.
     * *   **uuids**: the UUIDs of servers. This field is of the string type.
     * *   **groupIds**: the IDs of server groups. This field is of the long type.
     * >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
     */
    readonly targetInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
     * *   **Status**: the status of the vulnerability.
     * *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
     * *   **LaterCount**: the number of vulnerabilities that have the medium priority.
     * *   **AsapCount**: the number of vulnerabilities that have the high priority.
     * *   **Name**: the name of the vulnerability.
     * *   **Type**: the type of the vulnerability. Valid values:
     *     *   **cve**: Linux software vulnerability
     *     *   **sys**: Windows system vulnerability
     *     *   **cms**: Web-CMS vulnerability
     *     *   **app**: application vulnerability
     *     *   **emg**: urgent vulnerability
     * *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
     * *   **HandledCount**: the number of handled vulnerabilities.
     * *   **AliasName**: the alias of the vulnerability.
     * *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
     * *   **NntfCount**: the number of vulnerabilities that have the low priority.
     * *   **TotalFixCount**: the total number of fixed vulnerabilities.
     * *   **Tags**: the tag that is added to the vulnerability.
     * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
     */
    readonly whitelist: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property reason: The reason why you add the vulnerability to the whitelist.
     */
    readonly reason?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::VulWhitelist`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VulWhitelist` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
export declare class RosVulWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::VulWhitelist";
    /**
     * @Attribute Reason: The reason why you add the vulnerability to the whitelist.
     */
    readonly attrReason: ros.IResolvable;
    /**
     * @Attribute TargetInfo: The applicable scope of the whitelist.
     */
    readonly attrTargetInfo: ros.IResolvable;
    /**
     * @Attribute VulWhitelistId: The ID of the whitelist.
     */
    readonly attrVulWhitelistId: ros.IResolvable;
    /**
     * @Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
     */
    readonly attrWhitelist: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
     * *   **type**: the type of the applicable scope. Valid values:
     *     *   **GroupId**: the ID of a server group.
     *     *   **Uuid**: the UUID of a server.
     * *   **uuids**: the UUIDs of servers. This field is of the string type.
     * *   **groupIds**: the IDs of server groups. This field is of the long type.
     * >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
     */
    targetInfo: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
     * *   **Status**: the status of the vulnerability.
     * *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
     * *   **LaterCount**: the number of vulnerabilities that have the medium priority.
     * *   **AsapCount**: the number of vulnerabilities that have the high priority.
     * *   **Name**: the name of the vulnerability.
     * *   **Type**: the type of the vulnerability. Valid values:
     *     *   **cve**: Linux software vulnerability
     *     *   **sys**: Windows system vulnerability
     *     *   **cms**: Web-CMS vulnerability
     *     *   **app**: application vulnerability
     *     *   **emg**: urgent vulnerability
     * *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
     * *   **HandledCount**: the number of handled vulnerabilities.
     * *   **AliasName**: the alias of the vulnerability.
     * *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
     * *   **NntfCount**: the number of vulnerabilities that have the low priority.
     * *   **TotalFixCount**: the total number of fixed vulnerabilities.
     * *   **Tags**: the tag that is added to the vulnerability.
     * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
     */
    whitelist: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property reason: The reason why you add the vulnerability to the whitelist.
     */
    reason: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVulWhitelistProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosWebLockConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
export interface RosWebLockConfigProps {
    /**
     * @Property defenceMode: The prevention mode. Valid values:
     * *   **block**: Interception Mode
     * *   **audit**: Alert Mode.
     */
    readonly defenceMode: string | ros.IResolvable;
    /**
     * @Property dir: The directory for which you want to enable web tamper proofing.
     */
    readonly dir: string | ros.IResolvable;
    /**
     * @Property localBackupDir: The local path to the backup files of the protected directory.\
     * The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
     * *   Linux server: \/usr\/local\/aegis\/bak
     * *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
     */
    readonly localBackupDir: string | ros.IResolvable;
    /**
     * @Property uuid: The UUID of the server for which you want to add a directory to protect.
     * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
     */
    readonly uuid: string | ros.IResolvable;
    /**
     * @Property exclusiveDir: The directory for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveDir?: string | ros.IResolvable;
    /**
     * @Property exclusiveFile: The file for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveFile?: string | ros.IResolvable;
    /**
     * @Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveFileType?: string | ros.IResolvable;
    /**
     * @Property inclusiveFile: The file that has web tamper proofing enabled.
     * > If the value of **Mode** is **whitelist**, this parameter is returned.
     */
    readonly inclusiveFile?: string | ros.IResolvable;
    /**
     * @Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **whitelist**, you must specify this parameter.
     */
    readonly inclusiveFileType?: string | ros.IResolvable;
    /**
     * @Property mode: The protection mode of web tamper proofing. Valid values:
     * *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
     * *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
     */
    readonly mode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::WebLockConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WebLockConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
export declare class RosWebLockConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ThreatDetection::WebLockConfig";
    /**
     * @Attribute ConfigId: The configuration ID of the protected directory.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute DefenceMode: The prevention mode.
     */
    readonly attrDefenceMode: ros.IResolvable;
    /**
     * @Attribute Dir: The directory for which you want to enable web tamper proofing.
     */
    readonly attrDir: ros.IResolvable;
    /**
     * @Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
     */
    readonly attrExclusiveDir: ros.IResolvable;
    /**
     * @Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
     */
    readonly attrExclusiveFile: ros.IResolvable;
    /**
     * @Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;).
     */
    readonly attrExclusiveFileType: ros.IResolvable;
    /**
     * @Attribute InclusiveFile: The file that has web tamper proofing enabled.
     */
    readonly attrInclusiveFile: ros.IResolvable;
    /**
     * @Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;).
     */
    readonly attrInclusiveFileType: ros.IResolvable;
    /**
     * @Attribute LocalBackupDir: The local path to the backup files of the protected directory.
     */
    readonly attrLocalBackupDir: ros.IResolvable;
    /**
     * @Attribute Mode: The protection mode of web tamper proofing.
     */
    readonly attrMode: ros.IResolvable;
    /**
     * @Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
     */
    readonly attrUuid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property defenceMode: The prevention mode. Valid values:
     * *   **block**: Interception Mode
     * *   **audit**: Alert Mode.
     */
    defenceMode: string | ros.IResolvable;
    /**
     * @Property dir: The directory for which you want to enable web tamper proofing.
     */
    dir: string | ros.IResolvable;
    /**
     * @Property localBackupDir: The local path to the backup files of the protected directory.\
     * The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
     * *   Linux server: \/usr\/local\/aegis\/bak
     * *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
     */
    localBackupDir: string | ros.IResolvable;
    /**
     * @Property uuid: The UUID of the server for which you want to add a directory to protect.
     * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
     */
    uuid: string | ros.IResolvable;
    /**
     * @Property exclusiveDir: The directory for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    exclusiveDir: string | ros.IResolvable | undefined;
    /**
     * @Property exclusiveFile: The file for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    exclusiveFile: string | ros.IResolvable | undefined;
    /**
     * @Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    exclusiveFileType: string | ros.IResolvable | undefined;
    /**
     * @Property inclusiveFile: The file that has web tamper proofing enabled.
     * > If the value of **Mode** is **whitelist**, this parameter is returned.
     */
    inclusiveFile: string | ros.IResolvable | undefined;
    /**
     * @Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **whitelist**, you must specify this parameter.
     */
    inclusiveFileType: string | ros.IResolvable | undefined;
    /**
     * @Property mode: The protection mode of web tamper proofing. Valid values:
     * *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
     * *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
     */
    mode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWebLockConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
