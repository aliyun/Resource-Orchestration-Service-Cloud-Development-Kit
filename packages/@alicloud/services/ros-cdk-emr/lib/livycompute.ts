import * as ros from '@alicloud/ros-cdk-core';
import { RosLivyCompute } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLivyCompute as LivyComputeProperty };

/**
 * Properties for defining a `LivyCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
 */
export interface LivyComputeProps {

    /**
     * Property authType: The authentication method.
     */
    readonly authType: string | ros.IResolvable;

    /**
     * Property cpuLimit: The number of CPU cores for the Livy server.
     */
    readonly cpuLimit: string | ros.IResolvable;

    /**
     * Property displayReleaseVersion: The version number of the Spark engine.
     */
    readonly displayReleaseVersion: string | ros.IResolvable;

    /**
     * Property livyVersion: The Livy version.
     */
    readonly livyVersion: string | ros.IResolvable;

    /**
     * Property memoryLimit: The memory size of the Livy server.
     */
    readonly memoryLimit: string | ros.IResolvable;

    /**
     * Property name: The name of the Livy Gateway.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property queueName: The name of the submission queue.
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * Property workspaceBizId: The business ID of the workspace.
     */
    readonly workspaceBizId: string | ros.IResolvable;

    /**
     * Property autoStartConfiguration: The automatic startup configuration.
     */
    readonly autoStartConfiguration?: RosLivyCompute.AutoStartConfigurationProperty | ros.IResolvable;

    /**
     * Property autoStopConfiguration: The automatic stop configuration.
     */
    readonly autoStopConfiguration?: RosLivyCompute.AutoStopConfigurationProperty | ros.IResolvable;

    /**
     * Property enablePublic: Whether to enable the public endpoint.
     */
    readonly enablePublic?: boolean | ros.IResolvable;

    /**
     * Property environmentId: The ID of the runtime environment.
     */
    readonly environmentId?: string | ros.IResolvable;

    /**
     * Property fusion: Whether to enable acceleration with the Fusion engine.
     */
    readonly fusion?: boolean | ros.IResolvable;

    /**
     * Property livyServerConf: The Livy Gateway configuration. The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
     */
    readonly livyServerConf?: string | ros.IResolvable;

    /**
     * Property networkName: The name of the network connection.
     */
    readonly networkName?: string | ros.IResolvable;

    /**
     * Property releaseVersion: The deprecated Spark engine version. Use DisplayReleaseVersion instead.
     */
    readonly releaseVersion?: string | ros.IResolvable;
}

/**
 * Represents a `LivyCompute`.
 */
export interface ILivyCompute extends ros.IResource {
    readonly props: LivyComputeProps;

    /**
     * Attribute Endpoint: The public endpoint of the Livy Gateway.
     */
    readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute EndpointInner: The internal endpoint of the Livy Gateway.
     */
    readonly attrEndpointInner: ros.IResolvable | string;

    /**
     * Attribute LivyComputeId: The ID of the Livy Gateway.
     */
    readonly attrLivyComputeId: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the Livy Gateway.
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::LivyCompute`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLivyCompute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
 */
export class LivyCompute extends ros.Resource implements ILivyCompute {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LivyComputeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Endpoint: The public endpoint of the Livy Gateway.
     */
    public readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute EndpointInner: The internal endpoint of the Livy Gateway.
     */
    public readonly attrEndpointInner: ros.IResolvable | string;

    /**
     * Attribute LivyComputeId: The ID of the Livy Gateway.
     */
    public readonly attrLivyComputeId: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the Livy Gateway.
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LivyComputeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLivyCompute = new RosLivyCompute(this, id,  {
            autoStartConfiguration: props.autoStartConfiguration,
            workspaceBizId: props.workspaceBizId,
            networkName: props.networkName,
            livyServerConf: props.livyServerConf,
            cpuLimit: props.cpuLimit,
            autoStopConfiguration: props.autoStopConfiguration,
            name: props.name,
            releaseVersion: props.releaseVersion,
            enablePublic: props.enablePublic,
            memoryLimit: props.memoryLimit,
            displayReleaseVersion: props.displayReleaseVersion,
            environmentId: props.environmentId,
            livyVersion: props.livyVersion,
            authType: props.authType,
            queueName: props.queueName,
            fusion: props.fusion === undefined || props.fusion === null ? false : props.fusion,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLivyCompute;
        this.attrEndpoint = rosLivyCompute.attrEndpoint;
        this.attrEndpointInner = rosLivyCompute.attrEndpointInner;
        this.attrLivyComputeId = rosLivyCompute.attrLivyComputeId;
        this.attrStatus = rosLivyCompute.attrStatus;
    }
}
