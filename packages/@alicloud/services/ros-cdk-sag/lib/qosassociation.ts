import * as ros from '@alicloud/ros-cdk-core';
import { RosQosAssociation } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQosAssociation as QosAssociationProperty };

/**
 * Properties for defining a `ALIYUN::SAG::QosAssociation`
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
 * A ROS resource type:  `ALIYUN::SAG::QosAssociation`
 */
export class QosAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    public readonly attrQosId: ros.IResolvable;

    /**
     * Attribute SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SAG::QosAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosQosAssociation = new RosQosAssociation(this, id,  {
            qosId: props.qosId,
            smartAgId: props.smartAgId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQosAssociation;
        this.attrQosId = rosQosAssociation.attrQosId;
        this.attrSmartAgId = rosQosAssociation.attrSmartAgId;
    }
}
