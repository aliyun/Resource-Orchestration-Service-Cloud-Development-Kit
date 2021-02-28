import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcAccessConfig } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcAccessConfig as VpcAccessConfigProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export interface VpcAccessConfigProps {

    /**
     * Property instanceId: The id of the instance (ECS/SLB).
     */
    readonly instanceId: string;

    /**
     * Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
     */
    readonly name: string;

    /**
     * Property port: The port of the VPC.
     */
    readonly port: number;

    /**
     * Property vpcId: The id of the VPC.
     */
    readonly vpcId: string;
}

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::VpcAccessConfig`
 */
export class VpcAccessConfig extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ApiGateway::VpcAccessConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcAccessConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpcAccessConfig = new RosVpcAccessConfig(this, id,  {
            vpcId: props.vpcId,
            instanceId: props.instanceId,
            port: props.port,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcAccessConfig;
    }
}
