import * as ros from '@alicloud/ros-cdk-core';
import { RosHoneyPot } from './threatdetection.generated';
export { RosHoneyPot as HoneyPotProperty };
/**
 * Properties for defining a `HoneyPot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
export interface HoneyPotProps {
    /**
     * Property honeypotImageId: The ID of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
     */
    readonly honeypotImageId: string | ros.IResolvable;
    /**
     * Property honeypotImageName: The name of the honeypot image.
     * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
     */
    readonly honeypotImageName: string | ros.IResolvable;
    /**
     * Property honeypotName: The custom name of the honeypot.
     */
    readonly honeypotName: string | ros.IResolvable;
    /**
     * Property nodeId: The ID of the management node.
     * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
     */
    readonly nodeId: string | ros.IResolvable;
    /**
     * Property meta: Honeypot custom configuration. JSON format. Contains the following fields:
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
 * Represents a `HoneyPot`.
 */
export interface IHoneyPot extends ros.IResource {
    readonly props: HoneyPotProps;
    /**
     * Attribute HoneypotId: The ID of the honeypot.
     */
    readonly attrHoneypotId: ros.IResolvable | string;
    /**
     * Attribute HoneypotImageId: The ID of the honeypot image.
     */
    readonly attrHoneypotImageId: ros.IResolvable | string;
    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    readonly attrHoneypotImageName: ros.IResolvable | string;
    /**
     * Attribute HoneypotName: The custom name of the honeypot.
     */
    readonly attrHoneypotName: ros.IResolvable | string;
    /**
     * Attribute NodeId: The ID of the management node.
     */
    readonly attrNodeId: ros.IResolvable | string;
    /**
     * Attribute State: Honeypot status.
     */
    readonly attrState: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::HoneyPot`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHoneyPot`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
 */
export declare class HoneyPot extends ros.Resource implements IHoneyPot {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HoneyPotProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HoneypotId: The ID of the honeypot.
     */
    readonly attrHoneypotId: ros.IResolvable | string;
    /**
     * Attribute HoneypotImageId: The ID of the honeypot image.
     */
    readonly attrHoneypotImageId: ros.IResolvable | string;
    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    readonly attrHoneypotImageName: ros.IResolvable | string;
    /**
     * Attribute HoneypotName: The custom name of the honeypot.
     */
    readonly attrHoneypotName: ros.IResolvable | string;
    /**
     * Attribute NodeId: The ID of the management node.
     */
    readonly attrNodeId: ros.IResolvable | string;
    /**
     * Attribute State: Honeypot status.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HoneyPotProps, enableResourcePropertyConstraint?: boolean);
}
