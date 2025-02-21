import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosStorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
export interface RosStorageBundleProps {
    /**
     * @Property storageBundleId: The ID of the gateway cluster.
     */
    readonly storageBundleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundle`, which is used to query the information about a gateway cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
 */
export declare class RosStorageBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudStorageGateway::StorageBundle";
    /**
     * @Attribute CreateTime: The timestamp when the gateway cluster was created. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the gateway cluster.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable;
    /**
     * @Attribute StorageBundleName: The name of the gateway cluster.
     */
    readonly attrStorageBundleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property storageBundleId: The ID of the gateway cluster.
     */
    storageBundleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosStorageBundles`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export interface RosStorageBundlesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundles`, which is used to query the information about gateway clusters in a region.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundles` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export declare class RosStorageBundles extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CloudStorageGateway::StorageBundles";
    /**
     * @Attribute StorageBundleIds: The list of storage bundle IDs.
     */
    readonly attrStorageBundleIds: ros.IResolvable;
    /**
     * @Attribute StorageBundles: The list of storage bundles.
     */
    readonly attrStorageBundles: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageBundlesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
