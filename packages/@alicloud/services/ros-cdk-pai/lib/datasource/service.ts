import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosService as ServiceProperty };

/**
 * Properties for defining a `Service`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export interface ServiceProps {

    /**
     * Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Service`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export class Service extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessToken: The request token of the service.
     */
    public readonly attrAccessToken: ros.IResolvable;

    /**
     * Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    public readonly attrCallerUid: ros.IResolvable;

    /**
     * Attribute Cpu: The CPU that you applied for each instance.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the service was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CurrentVersion: The current version of the model.
     */
    public readonly attrCurrentVersion: ros.IResolvable;

    /**
     * Attribute ExtraData: The additional information about the service.
     */
    public readonly attrExtraData: ros.IResolvable;

    /**
     * Attribute Gpu: The GPU that you applied for each instance.
     */
    public readonly attrGpu: ros.IResolvable;

    /**
     * Attribute Image: The data image of the service.
     */
    public readonly attrImage: ros.IResolvable;

    /**
     * Attribute InternetEndpoint: The public endpoint of the service.
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * Attribute IntranetEndpoint: The private endpoint of the service.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * Attribute Labels: The tags of the service.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    public readonly attrLatestVersion: ros.IResolvable;

    /**
     * Attribute Memory: The memory that you applied for each instance.
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * Attribute Message: The summary of the service.
     */
    public readonly attrMessage: ros.IResolvable;

    /**
     * Attribute Namespace: The namespace of the service.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    public readonly attrParentUid: ros.IResolvable;

    /**
     * Attribute PendingInstance: The number of instances for the suspended service.
     */
    public readonly attrPendingInstance: ros.IResolvable;

    /**
     * Attribute Reason: The reason why the service is in the current state.
     */
    public readonly attrReason: ros.IResolvable;

    /**
     * Attribute Resource: The resource group to which the service belongs.
     */
    public readonly attrResource: ros.IResolvable;

    /**
     * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    public readonly attrResourceAlias: ros.IResolvable;

    /**
     * Attribute Role: The role of the service.
     */
    public readonly attrRole: ros.IResolvable;

    /**
     * Attribute RoleAttrs: The additional attributes of the service role.
     */
    public readonly attrRoleAttrs: ros.IResolvable;

    /**
     * Attribute RunningInstance: The number of instances for the running service.
     */
    public readonly attrRunningInstance: ros.IResolvable;

    /**
     * Attribute SafetyLock: The security lock of the service.
     */
    public readonly attrSafetyLock: ros.IResolvable;

    /**
     * Attribute ServiceConfig: The configurations of the service.
     */
    public readonly attrServiceConfig: ros.IResolvable;

    /**
     * Attribute ServiceGroup: The group to which the service belongs.
     */
    public readonly attrServiceGroup: ros.IResolvable;

    /**
     * Attribute ServiceName: The name of the service.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * Attribute ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
     */
    public readonly attrServiceUid: ros.IResolvable;

    /**
     * Attribute TotalInstance: The total number of instances of the service.
     */
    public readonly attrTotalInstance: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the service was updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Attribute Weight: The weight of the canary release for the service.
     */
    public readonly attrWeight: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosService = new RosService(this, id,  {
            serviceName: props.serviceName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrAccessToken = rosService.attrAccessToken;
        this.attrCallerUid = rosService.attrCallerUid;
        this.attrCpu = rosService.attrCpu;
        this.attrCreateTime = rosService.attrCreateTime;
        this.attrCurrentVersion = rosService.attrCurrentVersion;
        this.attrExtraData = rosService.attrExtraData;
        this.attrGpu = rosService.attrGpu;
        this.attrImage = rosService.attrImage;
        this.attrInternetEndpoint = rosService.attrInternetEndpoint;
        this.attrIntranetEndpoint = rosService.attrIntranetEndpoint;
        this.attrLabels = rosService.attrLabels;
        this.attrLatestVersion = rosService.attrLatestVersion;
        this.attrMemory = rosService.attrMemory;
        this.attrMessage = rosService.attrMessage;
        this.attrNamespace = rosService.attrNamespace;
        this.attrParentUid = rosService.attrParentUid;
        this.attrPendingInstance = rosService.attrPendingInstance;
        this.attrReason = rosService.attrReason;
        this.attrResource = rosService.attrResource;
        this.attrResourceAlias = rosService.attrResourceAlias;
        this.attrRole = rosService.attrRole;
        this.attrRoleAttrs = rosService.attrRoleAttrs;
        this.attrRunningInstance = rosService.attrRunningInstance;
        this.attrSafetyLock = rosService.attrSafetyLock;
        this.attrServiceConfig = rosService.attrServiceConfig;
        this.attrServiceGroup = rosService.attrServiceGroup;
        this.attrServiceName = rosService.attrServiceName;
        this.attrServiceUid = rosService.attrServiceUid;
        this.attrTotalInstance = rosService.attrTotalInstance;
        this.attrUpdateTime = rosService.attrUpdateTime;
        this.attrWeight = rosService.attrWeight;
    }
}
