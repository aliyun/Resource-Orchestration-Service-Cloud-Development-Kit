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
     * Property instanceId: The id of the instance (ECS\/SLB).
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::VpcAccessConfig`, which is used to configure the VPC authorization for an instance so that VPC API can provide services externally.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcAccessConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-vpcaccessconfig
 */
export class VpcAccessConfig extends ros.Resource {

    /**
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
