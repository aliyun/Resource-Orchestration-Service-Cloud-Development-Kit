import * as ros from '@alicloud/ros-cdk-core';
import { RosResourcePackage } from './cdt.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourcePackage as ResourcePackageProperty };

/**
 * Properties for defining a `ResourcePackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
export interface ResourcePackageProps {

    /**
     * Property capacity: The capacity of the specified CDT resource package.
     */
    readonly capacity: number | ros.IResolvable;

    /**
     * Property pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
     */
    readonly pack: string | ros.IResolvable;

    /**
     * Property region: The region of the specified CDT resource package.
     */
    readonly region: string | ros.IResolvable;

    /**
     * Property isp: The ISP of the specified CDT resource package.
     */
    readonly isp?: string | ros.IResolvable;
}

/**
 * Represents a `ResourcePackage`.
 */
export interface IResourcePackage extends ros.IResource {
    readonly props: ResourcePackageProps;

    /**
     * Attribute InstanceId: The ID of the specified instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute OrderId: The ID of the specified order.
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDT::ResourcePackage`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourcePackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
export class ResourcePackage extends ros.Resource implements IResourcePackage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ResourcePackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The ID of the specified instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute OrderId: The ID of the specified order.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourcePackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourcePackage = new RosResourcePackage(this, id,  {
            capacity: props.capacity,
            isp: props.isp === undefined || props.isp === null ? 'BGP' : props.isp,
            region: props.region,
            pack: props.pack,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourcePackage;
        this.attrInstanceId = rosResourcePackage.attrInstanceId;
        this.attrOrderId = rosResourcePackage.attrOrderId;
    }
}
