import * as ros from '@alicloud/ros-cdk-core';
import { RosStagingConfig } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStagingConfig as StagingConfigProperty };

/**
 * Properties for defining a `StagingConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
export interface StagingConfigProps {

    /**
     * Property domainName: The domain name of the CDN.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property functions: The functions of the staging config.
     */
    readonly functions: Array<{ [key: string]: any }> | ros.IResolvable;
}

/**
 * Represents a `StagingConfig`.
 */
export interface IStagingConfig extends ros.IResource {
    readonly props: StagingConfigProps;

    /**
     * Attribute ConfigId: The config id.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute FunctionName: The function name.
     */
    readonly attrFunctionName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::StagingConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStagingConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
export class StagingConfig extends ros.Resource implements IStagingConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StagingConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigId: The config id.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute FunctionName: The function name.
     */
    public readonly attrFunctionName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StagingConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStagingConfig = new RosStagingConfig(this, id,  {
            domainName: props.domainName,
            functions: props.functions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStagingConfig;
        this.attrConfigId = rosStagingConfig.attrConfigId;
        this.attrFunctionName = rosStagingConfig.attrFunctionName;
    }
}
