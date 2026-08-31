import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcConfig } from './datalakeformation.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcConfig as VpcConfigProperty };

/**
 * Properties for defining a `VpcConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
export interface VpcConfigProps {

    /**
     * Property vpcId: The VPC ID to be config.
     */
    readonly vpcId: string | ros.IResolvable;
}

/**
 * Represents a `VpcConfig`.
 */
export interface IVpcConfig extends ros.IResource {
    readonly props: VpcConfigProps;

    /**
     * Attribute VpcId: VPC ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataLakeFormation::VpcConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
export class VpcConfig extends ros.Resource implements IVpcConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VpcConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VpcId: VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpcConfig = new RosVpcConfig(this, id,  {
            vpcId: props.vpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcConfig;
        this.attrVpcId = rosVpcConfig.attrVpcId;
    }
}
