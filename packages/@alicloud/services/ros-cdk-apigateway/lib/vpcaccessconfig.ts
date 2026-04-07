import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcAccessConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcAccessConfig as VpcAccessConfigProperty };

/**
 * Properties for defining a `VpcAccessConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-vpcaccessconfig
 */
export interface VpcAccessConfigProps {

    /**
     * Property instanceId: The id of the instance (ECS\/SLB\/ALB\/NLB).
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property name: The name of one VPC access configuration.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property port: The port of the VPC.
     */
    readonly port: number | ros.IResolvable;

    /**
     * Property vpcId: The id of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
}

/**
 * Represents a `VpcAccessConfig`.
 */
export interface IVpcAccessConfig extends ros.IResource {
    readonly props: VpcAccessConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::VpcAccessConfig`, which is used to configure virtual private cloud (VPC) access authorization for an instance. This helps APIs provide services based on private networks.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcAccessConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-vpcaccessconfig
 */
export class VpcAccessConfig extends ros.Resource implements IVpcAccessConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VpcAccessConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcAccessConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpcAccessConfig = new RosVpcAccessConfig(this, id,  {
            vpcId: props.vpcId,
            instanceId: props.instanceId,
            port: props.port,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcAccessConfig;
    }
}
