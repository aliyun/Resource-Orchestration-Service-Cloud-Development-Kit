import * as ros from '@alicloud/ros-cdk-core';
import { RosStorageBundle } from './cloudstoragegateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStorageBundle as StorageBundleProperty };

/**
 * Properties for defining a `StorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export interface StorageBundleProps {

    /**
     * Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly storageBundleName: string | ros.IResolvable;

    /**
     * Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `StorageBundle`.
 */
export interface IStorageBundle extends ros.IResource {
    readonly props: StorageBundleProps;

    /**
     * Attribute CreateTime: Create a gateway cluster timestamp.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: Gateway cluster description.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable | string;

    /**
     * Attribute StorageBundleName: Gateway cluster name.
     */
    readonly attrStorageBundleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::StorageBundle`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export class StorageBundle extends ros.Resource implements IStorageBundle {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StorageBundleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Create a gateway cluster timestamp.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: Gateway cluster description.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute StorageBundleId: The ID of the gateway cluster.
     */
    public readonly attrStorageBundleId: ros.IResolvable | string;

    /**
     * Attribute StorageBundleName: Gateway cluster name.
     */
    public readonly attrStorageBundleName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageBundleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStorageBundle = new RosStorageBundle(this, id,  {
            description: props.description,
            storageBundleName: props.storageBundleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStorageBundle;
        this.attrCreateTime = rosStorageBundle.attrCreateTime;
        this.attrDescription = rosStorageBundle.attrDescription;
        this.attrStorageBundleId = rosStorageBundle.attrStorageBundleId;
        this.attrStorageBundleName = rosStorageBundle.attrStorageBundleName;
    }
}
