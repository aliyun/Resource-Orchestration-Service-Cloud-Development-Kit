import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './pai.generated';
export { RosService as ServiceProperty };
/**
 * Properties for defining a `ALIYUN::PAI::Service`
 */
export interface ServiceProps {
    /**
     * Property serviceConfig: Service configuration information.
     */
    readonly serviceConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property develop: Whether to enter the development mode.
     */
    readonly develop?: string | ros.IResolvable;
    /**
     * Property labels: Service Tag.
     */
    readonly labels?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::PAI::Service`
 */
export declare class Service extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccessToken: Service Request authentication token.
     */
    readonly attrAccessToken: ros.IResolvable;
    /**
     * Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    readonly attrCallerUid: ros.IResolvable;
    /**
     * Attribute Cpu: Number of service CPU cores.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * Attribute CreateTime: Creation time of the service.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CurrentVersion: Current running version of the service.
     */
    readonly attrCurrentVersion: ros.IResolvable;
    /**
     * Attribute ExtraData: Service Extra Information.
     */
    readonly attrExtraData: ros.IResolvable;
    /**
     * Attribute Gpu: Number of service GPU cards.
     */
    readonly attrGpu: ros.IResolvable;
    /**
     * Attribute Image: Service Deployment Mirroring.
     */
    readonly attrImage: ros.IResolvable;
    /**
     * Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * Attribute Labels: Service Tag.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable;
    /**
     * Attribute Memory: Memory of service (MB).
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * Attribute Message: Latest information on services.
     */
    readonly attrMessage: ros.IResolvable;
    /**
     * Attribute Namespace: The namespace to which the service belongs.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * Attribute ParentUid: Primary account ID of the creator.
     */
    readonly attrParentUid: ros.IResolvable;
    /**
     * Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    readonly attrPendingInstance: ros.IResolvable;
    /**
     * Attribute Reason: Service deployment failure reason.
     */
    readonly attrReason: ros.IResolvable;
    /**
     * Attribute Resource: The ID of the resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable;
    /**
     * Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    readonly attrResourceAlias: ros.IResolvable;
    /**
     * Attribute Role: Grouping Service Role.
     */
    readonly attrRole: ros.IResolvable;
    /**
     * Attribute RoleAttrs: Grouping Service Role Properties.
     */
    readonly attrRoleAttrs: ros.IResolvable;
    /**
     * Attribute RunningInstance: Number of instances in service running.
     */
    readonly attrRunningInstance: ros.IResolvable;
    /**
     * Attribute SafetyLock: Service Security Lock Status.
     */
    readonly attrSafetyLock: ros.IResolvable;
    /**
     * Attribute ServiceConfig: Service configuration information.
     */
    readonly attrServiceConfig: ros.IResolvable;
    /**
     * Attribute ServiceGroup: Group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable;
    /**
     * Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute ServiceUid: Unique Service ID.
     */
    readonly attrServiceUid: ros.IResolvable;
    /**
     * Attribute TotalInstance: Total number of instances required by the service.
     */
    readonly attrTotalInstance: ros.IResolvable;
    /**
     * Attribute UpdateTime: Service Last Updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Attribute Weight: Packet Service Traffic Weight.
     */
    readonly attrWeight: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PAI::Service`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint?: boolean);
}
