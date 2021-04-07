import * as ros from '@alicloud/ros-cdk-core';
import { RosCloudConnectNetwork } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCloudConnectNetwork as CloudConnectNetworkProperty };

/**
 * Properties for defining a `ALIYUN::SAG::CloudConnectNetwork`
 */
export interface CloudConnectNetworkProps {

    /**
     * Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloudConnectNetwork.TagsProperty[];
}

/**
 * A ROS resource type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
export class CloudConnectNetwork extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CcnId: The ID of the CCN instance.
     */
    public readonly attrCcnId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CloudConnectNetworkProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCloudConnectNetwork = new RosCloudConnectNetwork(this, id,  {
            isDefault: props.isDefault ? props.isDefault : false,
            description: props.description,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCloudConnectNetwork;
        this.attrCcnId = rosCloudConnectNetwork.attrCcnId;
    }
}
