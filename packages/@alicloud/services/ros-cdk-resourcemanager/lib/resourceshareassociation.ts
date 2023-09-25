import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceShareAssociation } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceShareAssociation as ResourceShareAssociationProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceShareAssociation`
 */
export interface ResourceShareAssociationProps {

    /**
     * Property resourceShareId: The ID of the resource share.
     */
    readonly resourceShareId: string | ros.IResolvable;

    /**
     * Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    readonly permissionNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resources:
     */
    readonly resources?: Array<RosResourceShareAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    readonly targets?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ResourceShareAssociation`
 */
export class ResourceShareAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ResourceManager::ResourceShareAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceShareAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosResourceShareAssociation = new RosResourceShareAssociation(this, id,  {
            resourceShareId: props.resourceShareId,
            targets: props.targets,
            resources: props.resources,
            permissionNames: props.permissionNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceShareAssociation;
        this.attrResourceShareId = rosResourceShareAssociation.attrResourceShareId;
    }
}
