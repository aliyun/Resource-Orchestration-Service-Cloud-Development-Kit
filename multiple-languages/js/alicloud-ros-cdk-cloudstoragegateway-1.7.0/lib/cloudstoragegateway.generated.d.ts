import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosStorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export interface RosStorageBundleProps {
    /**
     * @Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly storageBundleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::StorageBundle`, which is used to create a gateway cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export declare class RosStorageBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::StorageBundle";
    /**
     * @Attribute CreateTime: Create a gateway cluster timestamp.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Gateway cluster description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable;
    /**
     * @Attribute StorageBundleName: Gateway cluster name.
     */
    readonly attrStorageBundleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    storageBundleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageBundleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
