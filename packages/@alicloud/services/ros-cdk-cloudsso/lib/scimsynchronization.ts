import * as ros from '@alicloud/ros-cdk-core';
import { RosSCIMSynchronization } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSCIMSynchronization as SCIMSynchronizationProperty };

/**
 * Properties for defining a `SCIMSynchronization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export interface SCIMSynchronizationProps {

    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
     * - Enabled
     * - Disabled
     * The default value is Enabled.
     */
    readonly scimSynchronizationStatus?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSCIMSynchronization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export class SCIMSynchronization extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SCIMSynchronizationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SCIMSynchronizationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSCIMSynchronization = new RosSCIMSynchronization(this, id,  {
            directoryId: props.directoryId,
            scimSynchronizationStatus: props.scimSynchronizationStatus === undefined || props.scimSynchronizationStatus === null ? 'Enabled' : props.scimSynchronizationStatus,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSCIMSynchronization;
    }
}
