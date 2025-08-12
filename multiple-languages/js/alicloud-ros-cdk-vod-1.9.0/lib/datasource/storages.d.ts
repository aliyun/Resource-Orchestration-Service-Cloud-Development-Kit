import * as ros from '@alicloud/ros-cdk-core';
import { RosStorages } from './vod.generated';
export { RosStorages as StoragesProperty };
/**
 * Properties for defining a `Storages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storages
 */
export interface StoragesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Storages`.
 */
export interface IStorages extends ros.IResource {
    readonly props: StoragesProps;
    /**
     * Attribute StorageLocations: The list of storage locations.
     */
    readonly attrStorageLocations: ros.IResolvable | string;
    /**
     * Attribute Storages: The list of storages.
     */
    readonly attrStorages: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::Storages`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storages
 */
export declare class Storages extends ros.Resource implements IStorages {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StoragesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute StorageLocations: The list of storage locations.
     */
    readonly attrStorageLocations: ros.IResolvable | string;
    /**
     * Attribute Storages: The list of storages.
     */
    readonly attrStorages: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: StoragesProps, enableResourcePropertyConstraint?: boolean);
}
