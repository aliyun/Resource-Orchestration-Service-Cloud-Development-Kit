import * as ros from '@alicloud/ros-cdk-core';
import { RosAttackPathSensitiveAssetConfig } from './threatdetection.generated';
export { RosAttackPathSensitiveAssetConfig as AttackPathSensitiveAssetConfigProperty };
/**
 * Properties for defining a `AttackPathSensitiveAssetConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
export interface AttackPathSensitiveAssetConfigProps {
    /**
     * Property attackPathAssetList: The attack path sensitive asset configuration list.
     */
    readonly attackPathAssetList: Array<RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `AttackPathSensitiveAssetConfig`.
 */
export interface IAttackPathSensitiveAssetConfig extends ros.IResource {
    readonly props: AttackPathSensitiveAssetConfigProps;
    /**
     * Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
     */
    readonly attrAttackPathAssetList: ros.IResolvable | string;
    /**
     * Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
     */
    readonly attrAttackPathSensitiveAssetConfigId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::AttackPathSensitiveAssetConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAttackPathSensitiveAssetConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
export declare class AttackPathSensitiveAssetConfig extends ros.Resource implements IAttackPathSensitiveAssetConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AttackPathSensitiveAssetConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
     */
    readonly attrAttackPathAssetList: ros.IResolvable | string;
    /**
     * Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
     */
    readonly attrAttackPathSensitiveAssetConfigId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttackPathSensitiveAssetConfigProps, enableResourcePropertyConstraint?: boolean);
}
