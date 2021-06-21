import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceShare } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceShare as ResourceShareProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceShare`
 */
export interface ResourceShareProps {

    /**
     * Property resourceShareName: The name of the resource share.
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly resourceShareName: string | ros.IResolvable;

    /**
     * Property resources:
     */
    readonly resources?: Array<RosResourceShare.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    readonly targets?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ResourceShare`
 */
export class ResourceShare extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ResourceManager::ResourceShare`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceShareProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosResourceShare = new RosResourceShare(this, id,  {
            resourceShareName: props.resourceShareName,
            targets: props.targets,
            resources: props.resources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceShare;
        this.attrResourceShareId = rosResourceShare.attrResourceShareId;
    }
}
