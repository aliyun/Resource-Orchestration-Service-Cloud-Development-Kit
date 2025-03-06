import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosService as ServiceProperty };

/**
 * Properties for defining a `Service`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
export interface ServiceProps {

    /**
     * Property serviceConfig: Service configuration information.
     */
    readonly serviceConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property develop: Whether to enter the development mode.
     */
    readonly develop?: string | ros.IResolvable;

    /**
     * Property labels: Service Tag.
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `Service`.
 */
export interface IService extends ros.IResource {
    readonly props: ServiceProps;

    /**
     * Attribute AccessToken: Service Request authentication token.
     */
    readonly attrAccessToken: ros.IResolvable | string;

    /**
     * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    readonly attrCallerUid: ros.IResolvable | string;

    /**
     * Attribute Cpu: Number of service CPU cores.
     */
    readonly attrCpu: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time of the service.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CurrentVersion: Current running version of the service.
     */
    readonly attrCurrentVersion: ros.IResolvable | string;

    /**
     * Attribute ExtraData: Service Extra Information.
     */
    readonly attrExtraData: ros.IResolvable | string;

    /**
     * Attribute Gpu: Number of service GPU cards.
     */
    readonly attrGpu: ros.IResolvable | string;

    /**
     * Attribute Image: Service Deployment Mirroring.
     */
    readonly attrImage: ros.IResolvable | string;

    /**
     * Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable | string;

    /**
     * Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;

    /**
     * Attribute Labels: Service Tag.
     */
    readonly attrLabels: ros.IResolvable | string;

    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable | string;

    /**
     * Attribute Memory: Memory of service (MB).
     */
    readonly attrMemory: ros.IResolvable | string;

    /**
     * Attribute Message: Latest information on services.
     */
    readonly attrMessage: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace to which the service belongs.
     */
    readonly attrNamespace: ros.IResolvable | string;

    /**
     * Attribute ParentUid: Primary account ID of the creator.
     */
    readonly attrParentUid: ros.IResolvable | string;

    /**
     * Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    readonly attrPendingInstance: ros.IResolvable | string;

    /**
     * Attribute Reason: Service deployment failure reason.
     */
    readonly attrReason: ros.IResolvable | string;

    /**
     * Attribute Resource: The ID of the resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable | string;

    /**
     * Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    readonly attrResourceAlias: ros.IResolvable | string;

    /**
     * Attribute Role: Grouping Service Role.
     */
    readonly attrRole: ros.IResolvable | string;

    /**
     * Attribute RoleAttrs: Grouping Service Role Properties.
     */
    readonly attrRoleAttrs: ros.IResolvable | string;

    /**
     * Attribute RunningInstance: Number of instances in service running.
     */
    readonly attrRunningInstance: ros.IResolvable | string;

    /**
     * Attribute SafetyLock: Service Security Lock Status.
     */
    readonly attrSafetyLock: ros.IResolvable | string;

    /**
     * Attribute ServiceConfig: Service configuration information.
     */
    readonly attrServiceConfig: ros.IResolvable | string;

    /**
     * Attribute ServiceGroup: Group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable | string;

    /**
     * Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute ServiceUid: Unique Service ID.
     */
    readonly attrServiceUid: ros.IResolvable | string;

    /**
     * Attribute TotalInstance: Total number of instances required by the service.
     */
    readonly attrTotalInstance: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Service Last Updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute Weight: Packet Service Traffic Weight.
     */
    readonly attrWeight: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Service`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
export class Service extends ros.Resource implements IService {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessToken: Service Request authentication token.
     */
    public readonly attrAccessToken: ros.IResolvable | string;

    /**
     * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    public readonly attrCallerUid: ros.IResolvable | string;

    /**
     * Attribute Cpu: Number of service CPU cores.
     */
    public readonly attrCpu: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time of the service.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CurrentVersion: Current running version of the service.
     */
    public readonly attrCurrentVersion: ros.IResolvable | string;

    /**
     * Attribute ExtraData: Service Extra Information.
     */
    public readonly attrExtraData: ros.IResolvable | string;

    /**
     * Attribute Gpu: Number of service GPU cards.
     */
    public readonly attrGpu: ros.IResolvable | string;

    /**
     * Attribute Image: Service Deployment Mirroring.
     */
    public readonly attrImage: ros.IResolvable | string;

    /**
     * Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    public readonly attrInternetEndpoint: ros.IResolvable | string;

    /**
     * Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable | string;

    /**
     * Attribute Labels: Service Tag.
     */
    public readonly attrLabels: ros.IResolvable | string;

    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    public readonly attrLatestVersion: ros.IResolvable | string;

    /**
     * Attribute Memory: Memory of service (MB).
     */
    public readonly attrMemory: ros.IResolvable | string;

    /**
     * Attribute Message: Latest information on services.
     */
    public readonly attrMessage: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace to which the service belongs.
     */
    public readonly attrNamespace: ros.IResolvable | string;

    /**
     * Attribute ParentUid: Primary account ID of the creator.
     */
    public readonly attrParentUid: ros.IResolvable | string;

    /**
     * Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    public readonly attrPendingInstance: ros.IResolvable | string;

    /**
     * Attribute Reason: Service deployment failure reason.
     */
    public readonly attrReason: ros.IResolvable | string;

    /**
     * Attribute Resource: The ID of the resource group to which the service belongs.
     */
    public readonly attrResource: ros.IResolvable | string;

    /**
     * Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    public readonly attrResourceAlias: ros.IResolvable | string;

    /**
     * Attribute Role: Grouping Service Role.
     */
    public readonly attrRole: ros.IResolvable | string;

    /**
     * Attribute RoleAttrs: Grouping Service Role Properties.
     */
    public readonly attrRoleAttrs: ros.IResolvable | string;

    /**
     * Attribute RunningInstance: Number of instances in service running.
     */
    public readonly attrRunningInstance: ros.IResolvable | string;

    /**
     * Attribute SafetyLock: Service Security Lock Status.
     */
    public readonly attrSafetyLock: ros.IResolvable | string;

    /**
     * Attribute ServiceConfig: Service configuration information.
     */
    public readonly attrServiceConfig: ros.IResolvable | string;

    /**
     * Attribute ServiceGroup: Group to which the service belongs.
     */
    public readonly attrServiceGroup: ros.IResolvable | string;

    /**
     * Attribute ServiceName: Service Name.
     */
    public readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute ServiceUid: Unique Service ID.
     */
    public readonly attrServiceUid: ros.IResolvable | string;

    /**
     * Attribute TotalInstance: Total number of instances required by the service.
     */
    public readonly attrTotalInstance: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Service Last Updated.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute Weight: Packet Service Traffic Weight.
     */
    public readonly attrWeight: ros.IResolvable | string;

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
            develop: props.develop,
            serviceConfig: props.serviceConfig,
            labels: props.labels,
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
