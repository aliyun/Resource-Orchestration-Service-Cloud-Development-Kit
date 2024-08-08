// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export interface RosInstancesProps {

    /**
     * @Property ensRegionIds: The list of ENS region IDs.
     */
    readonly ensRegionIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ensServiceId: The ID of ENS service.
     */
    readonly ensServiceId?: string | ros.IResolvable;

    /**
     * @Property imageId: The image ID of instance.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property instanceIds: The list of instance IDs.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property instanceResourceType: The resource type of instance. Valid values:
     * EnsPostPaidInstance: PostPaid instance.
     * EnsService: Edge service instance.
     * BuildMachine: Image building machine.
     */
    readonly instanceResourceType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('ensServiceId', ros.validateString)(properties.ensServiceId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    if(properties.ensRegionIds && (Array.isArray(properties.ensRegionIds) || (typeof properties.ensRegionIds) === 'string')) {
        errors.collect(ros.propertyValidator('ensRegionIds', ros.validateLength)({
            data: properties.ensRegionIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('ensRegionIds', ros.listValidator(ros.validateAny))(properties.ensRegionIds));
    errors.collect(ros.propertyValidator('instanceResourceType', ros.validateString)(properties.instanceResourceType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ENS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ENS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      EnsRegionIds: ros.listMapper(ros.objectToRosTemplate)(properties.ensRegionIds),
      EnsServiceId: ros.stringToRosTemplate(properties.ensServiceId),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceResourceType: ros.stringToRosTemplate(properties.instanceResourceType),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ENS::Instances`, which is used to query the details of Edge Node Service (ENS) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ENS::Instances";

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ensRegionIds: The list of ENS region IDs.
     */
    public ensRegionIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ensServiceId: The ID of ENS service.
     */
    public ensServiceId: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: The image ID of instance.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceIds: The list of instance IDs.
     */
    public instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The name of instance.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceResourceType: The resource type of instance. Valid values:
     * EnsPostPaidInstance: PostPaid instance.
     * EnsService: Edge service instance.
     * BuildMachine: Image building machine.
     */
    public instanceResourceType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of instance.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ensRegionIds = props.ensRegionIds;
        this.ensServiceId = props.ensServiceId;
        this.imageId = props.imageId;
        this.instanceIds = props.instanceIds;
        this.instanceName = props.instanceName;
        this.instanceResourceType = props.instanceResourceType;
        this.refreshOptions = props.refreshOptions;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ensRegionIds: this.ensRegionIds,
            ensServiceId: this.ensServiceId,
            imageId: this.imageId,
            instanceIds: this.instanceIds,
            instanceName: this.instanceName,
            instanceResourceType: this.instanceResourceType,
            refreshOptions: this.refreshOptions,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
