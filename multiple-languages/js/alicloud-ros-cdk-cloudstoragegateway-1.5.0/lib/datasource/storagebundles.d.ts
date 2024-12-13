import * as ros from '@alicloud/ros-cdk-core';
import { RosStorageBundles } from './cloudstoragegateway.generated';
export { RosStorageBundles as StorageBundlesProperty };
/**
 * Properties for defining a `StorageBundles`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export interface StorageBundlesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundles`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundles`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export declare class StorageBundles extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: StorageBundlesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute StorageBundleIds: The list of storage bundle IDs.
     */
    readonly attrStorageBundleIds: ros.IResolvable;
    /**
     * Attribute StorageBundles: The list of storage bundles.
     */
    readonly attrStorageBundles: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: StorageBundlesProps, enableResourcePropertyConstraint?: boolean);
}
