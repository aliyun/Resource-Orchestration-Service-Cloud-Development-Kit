import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcBinder } from './ots.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcBinder as VpcBinderProperty };

/**
 * Properties for defining a `ALIYUN::OTS::VpcBinder`
 */
export interface VpcBinderProps {

    /**
     * Property instanceName: Instance name
     */
    readonly instanceName: string;

    /**
     * Property vpcs: Vpc binding configuration.
     */
    readonly vpcs: Array<RosVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::OTS::VpcBinder`
 */
export class VpcBinder extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Domains: The domain names used to access the OTS instance in the VPC.
     */
    public readonly attrDomains: any;

    /**
     * Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
     */
    public readonly attrEndpoints: any;

    /**
     * Create a new `ALIYUN::OTS::VpcBinder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcBinderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpcBinder = new RosVpcBinder(this, id,  {
            instanceName: props.instanceName,
            vpcs: props.vpcs,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcBinder;
        this.attrDomains = rosVpcBinder.attrDomains;
        this.attrEndpoints = rosVpcBinder.attrEndpoints;
    }
}
