import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceSettings } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::ServiceSettings`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceSettings`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
 */
export class ServiceSettings extends ros.Resource implements IServiceSettings {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceSettingsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceSettingsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServiceSettings = new RosServiceSettings(this, id,  {
            deliverySlsEnabled: props.deliverySlsEnabled,
            deliveryOssKeyPrefix: props.deliveryOssKeyPrefix,
            deliveryOssBucketName: props.deliveryOssBucketName,
            deliveryOssEnabled: props.deliveryOssEnabled,
            rdcEnterpriseId: props.rdcEnterpriseId,
            deliverySlsProjectName: props.deliverySlsProjectName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceSettings;
    }
}
