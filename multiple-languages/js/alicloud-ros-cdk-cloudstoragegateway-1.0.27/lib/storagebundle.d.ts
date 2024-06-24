import * as ros from '@alicloud/ros-cdk-core';
import { RosStorageBundle } from './cloudstoragegateway.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::StorageBundle`, which is used to create a gateway cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export declare class StorageBundle extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: StorageBundleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Create a gateway cluster timestamp.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Gateway cluster description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable;
    /**
     * Attribute StorageBundleName: Gateway cluster name.
     */
    readonly attrStorageBundleName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageBundleProps, enableResourcePropertyConstraint?: boolean);
}
