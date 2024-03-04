import * as ros from '@alicloud/ros-cdk-core';
import { RosQosAssociation } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQosAssociation as QosAssociationProperty };

/**
 * Properties for defining a `QosAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
 */
export interface QosAssociationProps {

    /**
     * Property qosId: The instance ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;

    /**
     * Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::QosAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQosAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
 */
export class QosAssociation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: QosAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    public readonly attrQosId: ros.IResolvable;

    /**
     * Attribute SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosQosAssociation = new RosQosAssociation(this, id,  {
            qosId: props.qosId,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQosAssociation;
        this.attrQosId = rosQosAssociation.attrQosId;
        this.attrSmartAgId = rosQosAssociation.attrSmartAgId;
    }
}
