import * as ros from '@alicloud/ros-cdk-core';
import { RosCloudConnectNetwork } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCloudConnectNetwork as CloudConnectNetworkProperty };

/**
 * Properties for defining a `CloudConnectNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
 */
export interface CloudConnectNetworkProps {

    /**
     * Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloudConnectNetwork.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::CloudConnectNetwork`, which is used to create a Cloud Connect Network (CCN) instance. CNN is a device access matrix composed of Alibaba Cloud distributed Smart Access Gateways (SAGs). You can add multiple SAGs to a CCN instance and then attach the CCN instance to a Cloud Enterprise Network (CEN) instance. In this way, you can connect your local branches to Alibaba Cloud.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCloudConnectNetwork`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
 */
export class CloudConnectNetwork extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CloudConnectNetworkProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CcnId: The ID of the CCN instance.
     */
    public readonly attrCcnId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CloudConnectNetworkProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCloudConnectNetwork = new RosCloudConnectNetwork(this, id,  {
            isDefault: props.isDefault === undefined || props.isDefault === null ? false : props.isDefault,
            description: props.description,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCloudConnectNetwork;
        this.attrCcnId = rosCloudConnectNetwork.attrCcnId;
    }
}
