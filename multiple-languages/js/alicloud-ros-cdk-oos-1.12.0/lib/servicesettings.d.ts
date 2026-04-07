import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceSettings } from './oos.generated';
export { RosServiceSettings as ServiceSettingsProperty };
/**
 * Properties for defining a `ServiceSettings`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
 */
export interface ServiceSettingsProps {
    /**
     * Property deliveryOssBucketName: OSS bucket name.
     */
    readonly deliveryOssBucketName?: string | ros.IResolvable;
    /**
     * Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature. Defaults to false.
     */
    readonly deliveryOssEnabled?: boolean | ros.IResolvable;
    /**
     * Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos\/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".
     */
    readonly deliveryOssKeyPrefix?: string | ros.IResolvable;
    /**
     * Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature. Defaults to false.
     */
    readonly deliverySlsEnabled?: boolean | ros.IResolvable;
    /**
     * Property deliverySlsProjectName: SLS project name.
     */
    readonly deliverySlsProjectName?: string | ros.IResolvable;
    /**
     * Property rdcEnterpriseId: Enterprise ID.
     */
    readonly rdcEnterpriseId?: string | ros.IResolvable;
}
/**
 * Represents a `ServiceSettings`.
 */
export interface IServiceSettings extends ros.IResource {
    readonly props: ServiceSettingsProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::ServiceSettings`, which is used to configure service settings.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceSettings`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
 */
export declare class ServiceSettings extends ros.Resource implements IServiceSettings {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceSettingsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ServiceSettingsProps, enableResourcePropertyConstraint?: boolean);
}
