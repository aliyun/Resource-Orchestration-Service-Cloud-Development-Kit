import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroupAccountBinding } from './adblake.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroupAccountBinding as ResourceGroupAccountBindingProperty };

/**
 * Properties for defining a `ResourceGroupAccountBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
 */
export interface ResourceGroupAccountBindingProps {

    /**
     * Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property dbClusterId: The ID of the database cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property groupName: The name of the resource group.
     */
    readonly groupName: string | ros.IResolvable;
}

/**
 * Represents a `ResourceGroupAccountBinding`.
 */
export interface IResourceGroupAccountBinding extends ros.IResource {
    readonly props: ResourceGroupAccountBindingProps;

    /**
     * Attribute GroupName: The name of the resource group.
     */
    readonly attrGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADBLake::ResourceGroupAccountBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroupAccountBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroupaccountbinding
 */
export class ResourceGroupAccountBinding extends ros.Resource implements IResourceGroupAccountBinding {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ResourceGroupAccountBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupName: The name of the resource group.
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupAccountBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceGroupAccountBinding = new RosResourceGroupAccountBinding(this, id,  {
            groupName: props.groupName,
            dbClusterId: props.dbClusterId,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroupAccountBinding;
        this.attrGroupName = rosResourceGroupAccountBinding.attrGroupName;
    }
}
