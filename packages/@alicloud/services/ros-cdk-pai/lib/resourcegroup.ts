import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroup as ResourceGroupProperty };

/**
 * Properties for defining a `ResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-resourcegroup
 */
export interface ResourceGroupProps {

    /**
     * Property computingResourceProvider: The computing resource provider of the resource group.
     */
    readonly computingResourceProvider?: string | ros.IResolvable;

    /**
     * Property description: The description of the resource group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the resource group.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property resourceType: The type of the resource group.
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * Property tag: The tags of the resource group.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;

    /**
     * Property userVpc: User VPC configuration containing network settings for the resource group
     */
    readonly userVpc?: RosResourceGroup.UserVpcProperty | ros.IResolvable;

    /**
     * Property version: The version of the resource group.
     */
    readonly version?: string | ros.IResolvable;
}

/**
 * Represents a `ResourceGroup`.
 */
export interface IResourceGroup extends ros.IResource {
    readonly props: ResourceGroupProps;

    /**
     * Attribute ResourceGroupID: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::ResourceGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-resourcegroup
 */
export class ResourceGroup extends ros.Resource implements IResourceGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ResourceGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ResourceGroupID: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceGroup = new RosResourceGroup(this, id,  {
            description: props.description,
            computingResourceProvider: props.computingResourceProvider,
            resourceGroupId: props.resourceGroupId,
            version: props.version,
            resourceType: props.resourceType,
            tag: props.tag,
            userVpc: props.userVpc,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrResourceGroupId = rosResourceGroup.attrResourceGroupId;
    }
}
