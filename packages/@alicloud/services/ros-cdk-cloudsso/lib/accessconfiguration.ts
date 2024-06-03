import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessConfiguration } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessConfiguration as AccessConfigurationProperty };

/**
 * Properties for defining a `AccessConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
export interface AccessConfigurationProps {

    /**
     * Property accessConfigurationName: The name of the access configuration.
     * The name can contain letters, digits, and hyphens (-).
     * The name can be up to 32 characters in length.
     */
    readonly accessConfigurationName: string | ros.IResolvable;

    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * Property description: The description of the access configuration.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
     */
    readonly relayState?: string | ros.IResolvable;

    /**
     * Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * Unit: seconds.
     * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
     * Default value: 3600. The value indicates 1 hour.
     */
    readonly sessionDuration?: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::AccessConfiguration`, which is used to create an access configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
export class AccessConfiguration extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessConfigurationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessConfigurationId: The ID of the access configuration.
     */
    public readonly attrAccessConfigurationId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccessConfiguration = new RosAccessConfiguration(this, id,  {
            sessionDuration: props.sessionDuration,
            accessConfigurationName: props.accessConfigurationName,
            directoryId: props.directoryId,
            relayState: props.relayState,
            description: props.description,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessConfiguration;
        this.attrAccessConfigurationId = rosAccessConfiguration.attrAccessConfigurationId;
    }
}
