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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Service`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export declare class Service extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessToken: The request token of the service.
     */
    readonly attrAccessToken: ros.IResolvable;
    /**
     * Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    readonly attrCallerUid: ros.IResolvable;
    /**
     * Attribute Cpu: The CPU that you applied for each instance.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the service was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CurrentVersion: The current version of the model.
     */
    readonly attrCurrentVersion: ros.IResolvable;
    /**
     * Attribute ExtraData: The additional information about the service.
     */
    readonly attrExtraData: ros.IResolvable;
    /**
     * Attribute Gpu: The GPU that you applied for each instance.
     */
    readonly attrGpu: ros.IResolvable;
    /**
     * Attribute Image: The data image of the service.
     */
    readonly attrImage: ros.IResolvable;
    /**
     * Attribute InternetEndpoint: The public endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * Attribute IntranetEndpoint: The private endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * Attribute Labels: The tags of the service.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable;
    /**
     * Attribute Memory: The memory that you applied for each instance.
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * Attribute Message: The summary of the service.
     */
    readonly attrMessage: ros.IResolvable;
    /**
     * Attribute Namespace: The namespace of the service.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    readonly attrParentUid: ros.IResolvable;
    /**
     * Attribute PendingInstance: The number of instances for the suspended service.
     */
    readonly attrPendingInstance: ros.IResolvable;
    /**
     * Attribute Reason: The reason why the service is in the current state.
     */
    readonly attrReason: ros.IResolvable;
    /**
     * Attribute Resource: The resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable;
    /**
     * Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    readonly attrResourceAlias: ros.IResolvable;
    /**
     * Attribute Role: The role of the service.
     */
    readonly attrRole: ros.IResolvable;
    /**
     * Attribute RoleAttrs: The additional attributes of the service role.
     */
    readonly attrRoleAttrs: ros.IResolvable;
    /**
     * Attribute RunningInstance: The number of instances for the running service.
     */
    readonly attrRunningInstance: ros.IResolvable;
    /**
     * Attribute SafetyLock: The security lock of the service.
     */
    readonly attrSafetyLock: ros.IResolvable;
    /**
     * Attribute ServiceConfig: The configurations of the service.
     */
    readonly attrServiceConfig: ros.IResolvable;
    /**
     * Attribute ServiceGroup: The group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable;
    /**
     * Attribute ServiceName: The name of the service.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
     */
    readonly attrServiceUid: ros.IResolvable;
    /**
     * Attribute TotalInstance: The total number of instances of the service.
     */
    readonly attrTotalInstance: ros.IResolvable;
    /**
     * Attribute UpdateTime: The time when the service was updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Attribute Weight: The weight of the canary release for the service.
     */
    readonly attrWeight: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint?: boolean);
}
