// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: The first ID of the resource.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CR::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CR::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CR::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Instance";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: InstanceName.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceSpecification: InstanceSpecification.
     */
    public readonly attrInstanceSpecification: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: Last modification time.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The first ID of the resource.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceSpecification = this.getAtt('InstanceSpecification');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instances
 */
export interface RosInstancesProps {

    /**
     * @Property instanceName: InstanceName.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CR::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CR::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CR::Instances`, which is used to query Container Registry instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Instances";

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
     * @Property instanceName: InstanceName.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

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
        this.instanceName = props.instanceName;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNamespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
 */
export interface RosNamespacesProps {

    /**
     * @Property status: The status of namespace.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespacesProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    return errors.wrap('supplied properties not correct for "RosNamespacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CR::Namespaces` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CR::Namespaces` resource.
 */
// @ts-ignore TS6133
function rosNamespacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacesPropsValidator(properties).assertSuccess();
    }
    return {
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CR::Namespaces`, which is used to query namespaces.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
 */
export class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Namespaces";

    /**
     * @Attribute NamespaceNames: The list of namespace names.
     */
    public readonly attrNamespaceNames: ros.IResolvable;

    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property status: The status of namespace.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceNames = this.getAtt('NamespaceNames');
        this.attrNamespaces = this.getAtt('Namespaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRepositories`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
 */
export interface RosRepositoriesProps {

    /**
     * @Property repoNamespace: The namespace of repository.
     */
    readonly repoNamespace?: string | ros.IResolvable;

    /**
     * @Property status: The status of repository.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRepositoriesProps`
 *
 * @param properties - the TypeScript properties of a `RosRepositoriesProps`
 *
 * @returns the result of the validation.
 */
function RosRepositoriesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('repoNamespace', ros.validateString)(properties.repoNamespace));
    return errors.wrap('supplied properties not correct for "RosRepositoriesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CR::Repositories` resource
 *
 * @param properties - the TypeScript properties of a `RosRepositoriesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CR::Repositories` resource.
 */
// @ts-ignore TS6133
function rosRepositoriesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRepositoriesPropsValidator(properties).assertSuccess();
    }
    return {
      RepoNamespace: ros.stringToRosTemplate(properties.repoNamespace),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CR::Repositories`, which is used to query the details of repositories.
 * @Note This class does not contain additional functions, so it is recommended to use the `Repositories` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
 */
export class RosRepositories extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Repositories";

    /**
     * @Attribute RepoNames: The list of repository names.
     */
    public readonly attrRepoNames: ros.IResolvable;

    /**
     * @Attribute Repos: The list of repositories.
     */
    public readonly attrRepos: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property repoNamespace: The namespace of repository.
     */
    public repoNamespace: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of repository.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepositoriesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRepositories.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRepoNames = this.getAtt('RepoNames');
        this.attrRepos = this.getAtt('Repos');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.repoNamespace = props.repoNamespace;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            repoNamespace: this.repoNamespace,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRepositoriesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
