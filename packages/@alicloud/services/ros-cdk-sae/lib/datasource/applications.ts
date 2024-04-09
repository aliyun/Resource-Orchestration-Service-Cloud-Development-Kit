import * as ros from '@alicloud/ros-cdk-core';
import { RosApplications } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplications as ApplicationsProperty };

/**
 * Properties for defining a `Applications`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
export interface ApplicationsProps {

    /**
     * Property appName: The name of application.
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * Property fieldType: Set the dimension of the filter application. Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    readonly fieldType?: string | ros.IResolvable;

    /**
     * Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    readonly fieldValue?: string | ros.IResolvable;

    /**
     * Property namespaceId: The ID of namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SAE::Applications`, which is used to query applications.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplications`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
export class Applications extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApplicationsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApplicationIds: The list of application IDs.
     */
    public readonly attrApplicationIds: ros.IResolvable;

    /**
     * Attribute Applications: The list of applications.
     */
    public readonly attrApplications: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApplications = new RosApplications(this, id,  {
            namespaceId: props.namespaceId,
            fieldValue: props.fieldValue,
            appName: props.appName,
            fieldType: props.fieldType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplications;
        this.attrApplicationIds = rosApplications.attrApplicationIds;
        this.attrApplications = rosApplications.attrApplications;
    }
}
