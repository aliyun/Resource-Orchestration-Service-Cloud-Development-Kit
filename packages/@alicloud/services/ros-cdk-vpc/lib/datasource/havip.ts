import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVip } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHaVip as HaVipProperty };

/**
 * Properties for defining a `HaVip`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export interface HaVipProps {

    /**
     * Property haVipId: The  ID of the resource.
     */
    readonly haVipId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::HaVip`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVip`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export class HaVip extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HaVipProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    public readonly attrAssociatedEipAddresses: ros.IResolvable;

    /**
     * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    public readonly attrAssociatedInstanceType: ros.IResolvable;

    /**
     * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    public readonly attrAssociatedInstances: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the  resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: Dependence of a HaVip instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute HaVipId: The  ID of the resource.
     */
    public readonly attrHaVipId: ros.IResolvable;

    /**
     * Attribute HaVipName: The name of the HaVip instance.
     */
    public readonly attrHaVipName: ros.IResolvable;

    /**
     * Attribute IpAddress: IP address of private network.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    public readonly attrMasterInstanceId: ros.IResolvable;

    /**
     * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHaVip = new RosHaVip(this, id,  {
            haVipId: props.haVipId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVip;
        this.attrAssociatedEipAddresses = rosHaVip.attrAssociatedEipAddresses;
        this.attrAssociatedInstanceType = rosHaVip.attrAssociatedInstanceType;
        this.attrAssociatedInstances = rosHaVip.attrAssociatedInstances;
        this.attrCreateTime = rosHaVip.attrCreateTime;
        this.attrDescription = rosHaVip.attrDescription;
        this.attrHaVipId = rosHaVip.attrHaVipId;
        this.attrHaVipName = rosHaVip.attrHaVipName;
        this.attrIpAddress = rosHaVip.attrIpAddress;
        this.attrMasterInstanceId = rosHaVip.attrMasterInstanceId;
        this.attrVSwitchId = rosHaVip.attrVSwitchId;
        this.attrVpcId = rosHaVip.attrVpcId;
    }
}
