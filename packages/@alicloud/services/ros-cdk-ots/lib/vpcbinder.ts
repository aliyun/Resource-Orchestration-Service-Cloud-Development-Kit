import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcBinder } from './ots.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcBinder as VpcBinderProperty };

/**
 * Properties for defining a `VpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export interface VpcBinderProps {

    /**
     * Property instanceName: Instance name
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property vpcs: Vpc binding configuration.
     */
    readonly vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::VpcBinder`, which is used to bind a Tablestore instance to a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcBinder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vpcbinder
 */
export class VpcBinder extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpcBinderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    public readonly attrEndpoints: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcBinderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpcBinder = new RosVpcBinder(this, id,  {
            instanceName: props.instanceName,
            vpcs: props.vpcs,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcBinder;
        this.attrDomains = rosVpcBinder.attrDomains;
        this.attrEndpoints = rosVpcBinder.attrEndpoints;
    }
}
