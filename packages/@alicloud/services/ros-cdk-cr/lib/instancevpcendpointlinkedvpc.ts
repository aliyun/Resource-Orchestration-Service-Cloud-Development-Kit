import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceVpcEndpointLinkedVpc } from './cr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceVpcEndpointLinkedVpc as InstanceVpcEndpointLinkedVpcProperty };

/**
 * Properties for defining a `InstanceVpcEndpointLinkedVpc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
export interface InstanceVpcEndpointLinkedVpcProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the vpc.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vswitchId: The ID of the vswitch.
     */
    readonly vswitchId: string | ros.IResolvable;

    /**
     * Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records. 
     * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
     * Valid values:
     * - **true**: Automatically creates a Privatezone record.
     * - **false** (default): Do not automatically create Privatezone records.
     */
    readonly enableCreateDnsRecordInPvzt?: boolean | ros.IResolvable;

    /**
     * Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
     * - **Registry** (default): Access the image repository.
     * - **Chart**: Access Helm Chart.
     */
    readonly moduleName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceVpcEndpointLinkedVpc`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
export class InstanceVpcEndpointLinkedVpc extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceVpcEndpointLinkedVpcProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the vpc.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VswitchId: The ID of the vswitch.
     */
    public readonly attrVswitchId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceVpcEndpointLinkedVpcProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstanceVpcEndpointLinkedVpc = new RosInstanceVpcEndpointLinkedVpc(this, id,  {
            enableCreateDnsRecordInPvzt: props.enableCreateDnsRecordInPvzt === undefined || props.enableCreateDnsRecordInPvzt === null ? false : props.enableCreateDnsRecordInPvzt,
            vpcId: props.vpcId,
            instanceId: props.instanceId,
            moduleName: props.moduleName === undefined || props.moduleName === null ? 'Registry' : props.moduleName,
            vswitchId: props.vswitchId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceVpcEndpointLinkedVpc;
        this.attrInstanceId = rosInstanceVpcEndpointLinkedVpc.attrInstanceId;
        this.attrVpcId = rosInstanceVpcEndpointLinkedVpc.attrVpcId;
        this.attrVswitchId = rosInstanceVpcEndpointLinkedVpc.attrVswitchId;
    }
}
