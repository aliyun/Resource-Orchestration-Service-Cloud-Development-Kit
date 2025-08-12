import * as ros from '@alicloud/ros-cdk-core';
import { RosEtlV2 } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEtlV2 as EtlV2Property };

/**
 * Properties for defining a `EtlV2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etlv2
 */
export interface EtlV2Props {

    /**
     * Property configuration: The configuration of the etl job.
     */
    readonly configuration: RosEtlV2.ConfigurationProperty | ros.IResolvable;

    /**
     * Property displayName: The display name of the etl job.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property name: The name of the etl job.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property project: The name of the project.
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property description: The description of the etl job.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `EtlV2`.
 */
export interface IEtlV2 extends ros.IResource {
    readonly props: EtlV2Props;

    /**
     * Attribute Name: ETL name.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::EtlV2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEtlV2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etlv2
 */
export class EtlV2 extends ros.Resource implements IEtlV2 {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EtlV2Props;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: ETL name.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EtlV2Props, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEtlV2 = new RosEtlV2(this, id,  {
            project: props.project,
            description: props.description,
            configuration: props.configuration,
            displayName: props.displayName,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEtlV2;
        this.attrName = rosEtlV2.attrName;
    }
}
