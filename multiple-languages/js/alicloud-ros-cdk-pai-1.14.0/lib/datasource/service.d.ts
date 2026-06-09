import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './pai.generated';
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
 * Represents a `Service`.
 */
export interface IService extends ros.IResource {
    readonly props: ServiceProps;
    /**
     * Attribute AccessToken: The request token of the service.
     */
    readonly attrAccessToken: ros.IResolvable | string;
    /**
     * Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    readonly attrCallerUid: ros.IResolvable | string;
    /**
     * Attribute Cpu: The CPU that you applied for each instance.
     */
    readonly attrCpu: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the service was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CurrentVersion: The current version of the model.
     */
    readonly attrCurrentVersion: ros.IResolvable | string;
    /**
     * Attribute ExtraData: The additional information about the service.
     */
    readonly attrExtraData: ros.IResolvable | string;
    /**
     * Attribute Gpu: The GPU that you applied for each instance.
     */
    readonly attrGpu: ros.IResolvable | string;
    /**
     * Attribute Image: The data image of the service.
     */
    readonly attrImage: ros.IResolvable | string;
    /**
     * Attribute InternetEndpoint: The public endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable | string;
    /**
     * Attribute IntranetEndpoint: The private endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute Labels: The tags of the service.
     */
    readonly attrLabels: ros.IResolvable | string;
    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable | string;
    /**
     * Attribute Memory: The memory that you applied for each instance.
     */
    readonly attrMemory: ros.IResolvable | string;
    /**
     * Attribute Message: The summary of the service.
     */
    readonly attrMessage: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace of the service.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    readonly attrParentUid: ros.IResolvable | string;
    /**
     * Attribute PendingInstance: The number of instances for the suspended service.
     */
    readonly attrPendingInstance: ros.IResolvable | string;
    /**
     * Attribute Reason: The reason why the service is in the current state.
     */
    readonly attrReason: ros.IResolvable | string;
    /**
     * Attribute Resource: The resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable | string;
    /**
     * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    readonly attrResourceAlias: ros.IResolvable | string;
    /**
     * Attribute Role: The role of the service.
     */
    readonly attrRole: ros.IResolvable | string;
    /**
     * Attribute RoleAttrs: The additional attributes of the service role.
     */
    readonly attrRoleAttrs: ros.IResolvable | string;
    /**
     * Attribute RunningInstance: The number of instances for the running service.
     */
    readonly attrRunningInstance: ros.IResolvable | string;
    /**
     * Attribute SafetyLock: The security lock of the service.
     */
    readonly attrSafetyLock: ros.IResolvable | string;
    /**
     * Attribute ServiceConfig: The configurations of the service.
     */
    readonly attrServiceConfig: ros.IResolvable | string;
    /**
     * Attribute ServiceGroup: The group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The name of the service.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
     */
    readonly attrServiceUid: ros.IResolvable | string;
    /**
     * Attribute TotalInstance: The total number of instances of the service.
     */
    readonly attrTotalInstance: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the service was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute Weight: The weight of the canary release for the service.
     */
    readonly attrWeight: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Service`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export declare class Service extends ros.Resource implements IService {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessToken: The request token of the service.
     */
    readonly attrAccessToken: ros.IResolvable | string;
    /**
     * Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    readonly attrCallerUid: ros.IResolvable | string;
    /**
     * Attribute Cpu: The CPU that you applied for each instance.
     */
    readonly attrCpu: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the service was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CurrentVersion: The current version of the model.
     */
    readonly attrCurrentVersion: ros.IResolvable | string;
    /**
     * Attribute ExtraData: The additional information about the service.
     */
    readonly attrExtraData: ros.IResolvable | string;
    /**
     * Attribute Gpu: The GPU that you applied for each instance.
     */
    readonly attrGpu: ros.IResolvable | string;
    /**
     * Attribute Image: The data image of the service.
     */
    readonly attrImage: ros.IResolvable | string;
    /**
     * Attribute InternetEndpoint: The public endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable | string;
    /**
     * Attribute IntranetEndpoint: The private endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute Labels: The tags of the service.
     */
    readonly attrLabels: ros.IResolvable | string;
    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable | string;
    /**
     * Attribute Memory: The memory that you applied for each instance.
     */
    readonly attrMemory: ros.IResolvable | string;
    /**
     * Attribute Message: The summary of the service.
     */
    readonly attrMessage: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace of the service.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    readonly attrParentUid: ros.IResolvable | string;
    /**
     * Attribute PendingInstance: The number of instances for the suspended service.
     */
    readonly attrPendingInstance: ros.IResolvable | string;
    /**
     * Attribute Reason: The reason why the service is in the current state.
     */
    readonly attrReason: ros.IResolvable | string;
    /**
     * Attribute Resource: The resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable | string;
    /**
     * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    readonly attrResourceAlias: ros.IResolvable | string;
    /**
     * Attribute Role: The role of the service.
     */
    readonly attrRole: ros.IResolvable | string;
    /**
     * Attribute RoleAttrs: The additional attributes of the service role.
     */
    readonly attrRoleAttrs: ros.IResolvable | string;
    /**
     * Attribute RunningInstance: The number of instances for the running service.
     */
    readonly attrRunningInstance: ros.IResolvable | string;
    /**
     * Attribute SafetyLock: The security lock of the service.
     */
    readonly attrSafetyLock: ros.IResolvable | string;
    /**
     * Attribute ServiceConfig: The configurations of the service.
     */
    readonly attrServiceConfig: ros.IResolvable | string;
    /**
     * Attribute ServiceGroup: The group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable | string;
    /**
     * Attribute ServiceName: The name of the service.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
     */
    readonly attrServiceUid: ros.IResolvable | string;
    /**
     * Attribute TotalInstance: The total number of instances of the service.
     */
    readonly attrTotalInstance: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the service was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Attribute Weight: The weight of the canary release for the service.
     */
    readonly attrWeight: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint?: boolean);
}
