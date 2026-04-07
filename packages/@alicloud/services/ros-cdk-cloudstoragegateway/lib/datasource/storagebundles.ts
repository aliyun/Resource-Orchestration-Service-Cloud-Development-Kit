import * as ros from '@alicloud/ros-cdk-core';
import { RosStorageBundles } from './cloudstoragegateway.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `StorageBundles`.
 */
export interface IStorageBundles extends ros.IResource {
    readonly props: StorageBundlesProps;

    /**
     * Attribute StorageBundleIds: The list of storage bundle IDs.
     */
    readonly attrStorageBundleIds: ros.IResolvable | string;

    /**
     * Attribute StorageBundles: The list of storage bundles.
     */
    readonly attrStorageBundles: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudStorageGateway::StorageBundles`, which is used to query the information about gateway clusters in a region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundles`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundles
 */
export class StorageBundles extends ros.Resource implements IStorageBundles {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StorageBundlesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute StorageBundleIds: The list of storage bundle IDs.
     */
    public readonly attrStorageBundleIds: ros.IResolvable | string;

    /**
     * Attribute StorageBundles: The list of storage bundles.
     */
    public readonly attrStorageBundles: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageBundlesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStorageBundles = new RosStorageBundles(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStorageBundles;
        this.attrStorageBundleIds = rosStorageBundles.attrStorageBundleIds;
        this.attrStorageBundles = rosStorageBundles.attrStorageBundles;
    }
}
