import * as ros from '@alicloud/ros-cdk-core';
import { RosHoneypotPreset } from './threatdetection.generated';
export { RosHoneypotPreset as HoneypotPresetProperty };
/**
 * Properties for defining a `HoneypotPreset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
export interface HoneypotPresetProps {
    /**
     * Property honeypotImageName: The name of the honeypot image.
     */
    readonly honeypotImageName: string | ros.IResolvable;
    /**
     * Property meta: The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
     * *   **PortraitOption**: Social Source Tracing
     * *   **Burp**: Burp-specific Defense
     * *   **TrojanGit**: Git-specific Defense.
     */
    readonly meta: RosHoneypotPreset.MetaProperty | ros.IResolvable;
    /**
     * Property nodeId: The ID of the management node.
     */
    readonly nodeId: string | ros.IResolvable;
    /**
     * Property presetName: The custom name of the honeypot template.
     */
    readonly presetName: string | ros.IResolvable;
}
/**
 * Represents a `HoneypotPreset`.
 */
export interface IHoneypotPreset extends ros.IResource {
    readonly props: HoneypotPresetProps;
    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    readonly attrHoneypotImageName: ros.IResolvable | string;
    /**
     * Attribute HoneypotPresetId: The ID of the honeypot template.
     */
    readonly attrHoneypotPresetId: ros.IResolvable | string;
    /**
     * Attribute Meta: The custom configurations of the honeypot template.
     */
    readonly attrMeta: ros.IResolvable | string;
    /**
     * Attribute NodeId: The ID of the management node.
     */
    readonly attrNodeId: ros.IResolvable | string;
    /**
     * Attribute PresetName: The custom name of the honeypot template.
     */
    readonly attrPresetName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::HoneypotPreset`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHoneypotPreset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
 */
export declare class HoneypotPreset extends ros.Resource implements IHoneypotPreset {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HoneypotPresetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    readonly attrHoneypotImageName: ros.IResolvable | string;
    /**
     * Attribute HoneypotPresetId: The ID of the honeypot template.
     */
    readonly attrHoneypotPresetId: ros.IResolvable | string;
    /**
     * Attribute Meta: The custom configurations of the honeypot template.
     */
    readonly attrMeta: ros.IResolvable | string;
    /**
     * Attribute NodeId: The ID of the management node.
     */
    readonly attrNodeId: ros.IResolvable | string;
    /**
     * Attribute PresetName: The custom name of the honeypot template.
     */
    readonly attrPresetName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HoneypotPresetProps, enableResourcePropertyConstraint?: boolean);
}
