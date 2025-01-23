import * as ros from '@alicloud/ros-cdk-core';
import { RosStorageBundle } from './cloudstoragegateway.generated';
export { RosStorageBundle as StorageBundleProperty };
/**
 * Properties for defining a `StorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
export interface StorageBundleProps {
    /**
     * Property storageBundleId: The ID of the gateway cluster.
     */
    readonly storageBundleId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `StorageBundle`.
 */
export interface IStorageBundle extends ros.IResource {
    readonly props: StorageBundleProps;
    /**
     * Attribute CreateTime: The timestamp when the gateway cluster was created. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the gateway cluster.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable | string;
    /**
     * Attribute StorageBundleName: The name of the gateway cluster.
     */
    readonly attrStorageBundleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundle`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
export declare class StorageBundle extends ros.Resource implements IStorageBundle {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StorageBundleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The timestamp when the gateway cluster was created. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the gateway cluster.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable | string;
    /**
     * Attribute StorageBundleName: The name of the gateway cluster.
     */
    readonly attrStorageBundleName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageBundleProps, enableResourcePropertyConstraint?: boolean);
}
