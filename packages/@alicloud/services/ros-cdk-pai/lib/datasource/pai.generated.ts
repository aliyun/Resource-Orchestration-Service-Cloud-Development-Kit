// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export interface RosDatasetProps {

    /**
     * @Property datasetId: The first ID of the resource.
     */
    readonly datasetId: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasetProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('datasetId', ros.requiredValidator)(properties.datasetId));
    errors.collect(ros.propertyValidator('datasetId', ros.validateString)(properties.datasetId));
    return errors.wrap('supplied properties not correct for "RosDatasetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Dataset` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Dataset` resource.
 */
// @ts-ignore TS6133
function rosDatasetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetPropsValidator(properties).assertSuccess();
    }
    return {
      'DatasetId': ros.stringToRosTemplate(properties.datasetId),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Dataset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Dataset";

    /**
     * @Attribute Accessibility: Workspace visibility.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DataSourceType: The data source type.
     */
    public readonly attrDataSourceType: ros.IResolvable;

    /**
     * @Attribute DataType: The dataset type. The default value is COMMON.
     */
    public readonly attrDataType: ros.IResolvable;

    /**
     * @Attribute DatasetId: The first ID of the resource.
     */
    public readonly attrDatasetId: ros.IResolvable;

    /**
     * @Attribute DatasetName: The name of the dataset.
     */
    public readonly attrDatasetName: ros.IResolvable;

    /**
     * @Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute GmtModifiedTime: Update time.
     */
    public readonly attrGmtModifiedTime: ros.IResolvable;

    /**
     * @Attribute Options: The extended field, which is of the JsonString type.
     */
    public readonly attrOptions: ros.IResolvable;

    /**
     * @Attribute OwnerId: The ID of the primary account.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * @Attribute Property: The properties of the dataset.
     */
    public readonly attrProperty: ros.IResolvable;

    /**
     * @Attribute SourceId: The data source ID.
     */
    public readonly attrSourceId: ros.IResolvable;

    /**
     * @Attribute SourceType: The data source type. The default value is USER.
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute Uri: The Uri configuration sample is as follows:.
     */
    public readonly attrUri: ros.IResolvable;

    /**
     * @Attribute UserId: The ID of the user to which the dataset belongs.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property datasetId: The first ID of the resource.
     */
    public datasetId: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDataset.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessibility = this.getAtt('Accessibility');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDataSourceType = this.getAtt('DataSourceType');
        this.attrDataType = this.getAtt('DataType');
        this.attrDatasetId = this.getAtt('DatasetId');
        this.attrDatasetName = this.getAtt('DatasetName');
        this.attrDescription = this.getAtt('Description');
        this.attrGmtModifiedTime = this.getAtt('GmtModifiedTime');
        this.attrOptions = this.getAtt('Options');
        this.attrOwnerId = this.getAtt('OwnerId');
        this.attrProperty = this.getAtt('Property');
        this.attrSourceId = this.getAtt('SourceId');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrUri = this.getAtt('Uri');
        this.attrUserId = this.getAtt('UserId');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasetId = props.datasetId;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasetId: this.datasetId,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDatasets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
export interface RosDatasetsProps {

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasetsProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetsProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDatasetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Datasets` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Datasets` resource.
 */
// @ts-ignore TS6133
function rosDatasetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetsPropsValidator(properties).assertSuccess();
    }
    return {
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'SourceId': ros.stringToRosTemplate(properties.sourceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Datasets`, which is used to query the basic information about datasets.
 * @Note This class does not contain additional functions, so it is recommended to use the `Datasets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
export class RosDatasets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Datasets";

    /**
     * @Attribute DatasetIds: The list of dataset IDs.
     */
    public readonly attrDatasetIds: ros.IResolvable;

    /**
     * @Attribute Datasets: The list of datasets.
     */
    public readonly attrDatasets: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatasets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatasetIds = this.getAtt('DatasetIds');
        this.attrDatasets = this.getAtt('Datasets');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
        this.sourceId = props.sourceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
            sourceId: this.sourceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export interface RosServiceProps {

    /**
     * @Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Service` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Service` resource.
 */
// @ts-ignore TS6133
function rosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
      'ServiceName': ros.stringToRosTemplate(properties.serviceName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Service`, which is used to query the information about a service in Elastic Algorithm Service (EAS).
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Service";

    /**
     * @Attribute AccessToken: The request token of the service.
     */
    public readonly attrAccessToken: ros.IResolvable;

    /**
     * @Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    public readonly attrCallerUid: ros.IResolvable;

    /**
     * @Attribute Cpu: The CPU that you applied for each instance.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the service was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CurrentVersion: The current version of the model.
     */
    public readonly attrCurrentVersion: ros.IResolvable;

    /**
     * @Attribute ExtraData: The additional information about the service.
     */
    public readonly attrExtraData: ros.IResolvable;

    /**
     * @Attribute Gpu: The GPU that you applied for each instance.
     */
    public readonly attrGpu: ros.IResolvable;

    /**
     * @Attribute Image: The data image of the service.
     */
    public readonly attrImage: ros.IResolvable;

    /**
     * @Attribute InternetEndpoint: The public endpoint of the service.
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * @Attribute IntranetEndpoint: The private endpoint of the service.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * @Attribute Labels: The tags of the service.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * @Attribute LatestVersion: The latest version of the service.
     */
    public readonly attrLatestVersion: ros.IResolvable;

    /**
     * @Attribute Memory: The memory that you applied for each instance.
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * @Attribute Message: The summary of the service.
     */
    public readonly attrMessage: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace of the service.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    public readonly attrParentUid: ros.IResolvable;

    /**
     * @Attribute PendingInstance: The number of instances for the suspended service.
     */
    public readonly attrPendingInstance: ros.IResolvable;

    /**
     * @Attribute Reason: The reason why the service is in the current state.
     */
    public readonly attrReason: ros.IResolvable;

    /**
     * @Attribute Resource: The resource group to which the service belongs.
     */
    public readonly attrResource: ros.IResolvable;

    /**
     * @Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    public readonly attrResourceAlias: ros.IResolvable;

    /**
     * @Attribute Role: The role of the service.
     */
    public readonly attrRole: ros.IResolvable;

    /**
     * @Attribute RoleAttrs: The additional attributes of the service role.
     */
    public readonly attrRoleAttrs: ros.IResolvable;

    /**
     * @Attribute RunningInstance: The number of instances for the running service.
     */
    public readonly attrRunningInstance: ros.IResolvable;

    /**
     * @Attribute SafetyLock: The security lock of the service.
     */
    public readonly attrSafetyLock: ros.IResolvable;

    /**
     * @Attribute ServiceConfig: The configurations of the service.
     */
    public readonly attrServiceConfig: ros.IResolvable;

    /**
     * @Attribute ServiceGroup: The group to which the service belongs.
     */
    public readonly attrServiceGroup: ros.IResolvable;

    /**
     * @Attribute ServiceName: The name of the service.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
     */
    public readonly attrServiceUid: ros.IResolvable;

    /**
     * @Attribute TotalInstance: The total number of instances of the service.
     */
    public readonly attrTotalInstance: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the service was updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute Weight: The weight of the canary release for the service.
     */
    public readonly attrWeight: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: The name of the service.
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessToken = this.getAtt('AccessToken');
        this.attrCallerUid = this.getAtt('CallerUid');
        this.attrCpu = this.getAtt('Cpu');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCurrentVersion = this.getAtt('CurrentVersion');
        this.attrExtraData = this.getAtt('ExtraData');
        this.attrGpu = this.getAtt('Gpu');
        this.attrImage = this.getAtt('Image');
        this.attrInternetEndpoint = this.getAtt('InternetEndpoint');
        this.attrIntranetEndpoint = this.getAtt('IntranetEndpoint');
        this.attrLabels = this.getAtt('Labels');
        this.attrLatestVersion = this.getAtt('LatestVersion');
        this.attrMemory = this.getAtt('Memory');
        this.attrMessage = this.getAtt('Message');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrParentUid = this.getAtt('ParentUid');
        this.attrPendingInstance = this.getAtt('PendingInstance');
        this.attrReason = this.getAtt('Reason');
        this.attrResource = this.getAtt('Resource');
        this.attrResourceAlias = this.getAtt('ResourceAlias');
        this.attrRole = this.getAtt('Role');
        this.attrRoleAttrs = this.getAtt('RoleAttrs');
        this.attrRunningInstance = this.getAtt('RunningInstance');
        this.attrSafetyLock = this.getAtt('SafetyLock');
        this.attrServiceConfig = this.getAtt('ServiceConfig');
        this.attrServiceGroup = this.getAtt('ServiceGroup');
        this.attrServiceName = this.getAtt('ServiceName');
        this.attrServiceUid = this.getAtt('ServiceUid');
        this.attrTotalInstance = this.getAtt('TotalInstance');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrWeight = this.getAtt('Weight');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosServices`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
export interface RosServicesProps {

    /**
     * @Property labels: Service Tag.
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property serviceName: Service Name.
     */
    readonly serviceName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServicesProps`
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the result of the validation.
 */
function RosServicesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('labels', ros.hashValidator(ros.validateAny))(properties.labels));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosServicesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Services` resource
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Services` resource.
 */
// @ts-ignore TS6133
function rosServicesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicesPropsValidator(properties).assertSuccess();
    }
    return {
      'Labels': ros.hashMapper(ros.objectToRosTemplate)(properties.labels),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ServiceName': ros.stringToRosTemplate(properties.serviceName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Services`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
export class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Services";

    /**
     * @Attribute ServiceNames: The list of service names.
     */
    public readonly attrServiceNames: ros.IResolvable;

    /**
     * @Attribute Services: The list of services.
     */
    public readonly attrServices: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property labels: Service Tag.
     */
    public labels: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property serviceName: Service Name.
     */
    public serviceName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServices.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceNames = this.getAtt('ServiceNames');
        this.attrServices = this.getAtt('Services');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.labels = props.labels;
        this.refreshOptions = props.refreshOptions;
        this.serviceName = props.serviceName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            labels: this.labels,
            refreshOptions: this.refreshOptions,
            serviceName: this.serviceName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export interface RosWorkspaceProps {

    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Workspace` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Workspace` resource.
 */
// @ts-ignore TS6133
function rosWorkspacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspacePropsValidator(properties).assertSuccess();
    }
    return {
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Workspace`, which is used to query the information about a Platform for AI (PAI) workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export class RosWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspace";

    /**
     * @Attribute AdminNames: List of administrator account names.
     */
    public readonly attrAdminNames: ros.IResolvable;

    /**
     * @Attribute Creator: The user ID of the creator.
     */
    public readonly attrCreator: ros.IResolvable;

    /**
     * @Attribute Description: The description of the workspace.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DisplayName: The display name of the workspace.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute EnvTypes: The environments of the workspace.
     */
    public readonly attrEnvTypes: ros.IResolvable;

    /**
     * @Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    public readonly attrExtraInfos: ros.IResolvable;

    /**
     * @Attribute IsDefault: Default Workspace.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute Users: List of users.
     */
    public readonly attrUsers: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The first ID of the resource.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * @Attribute WorkspaceName: The name of the workspace.
     */
    public readonly attrWorkspaceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAdminNames = this.getAtt('AdminNames');
        this.attrCreator = this.getAtt('Creator');
        this.attrDescription = this.getAtt('Description');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrEnvTypes = this.getAtt('EnvTypes');
        this.attrExtraInfos = this.getAtt('ExtraInfos');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrUsers = this.getAtt('Users');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');
        this.attrWorkspaceName = this.getAtt('WorkspaceName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceDlc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
export interface RosWorkspaceResourceDlcProps {

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceDlcProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceDlcPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceDlcProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceDlc` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceDlc` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceDlcPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceDlcPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlc`, which is used to query the information about a Deep Learning Containers (DLC) resource that is associated with a Platform for AI (PAI) workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
export class RosWorkspaceResourceDlc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceDlc";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute Resources: Resource List.
     */
    public readonly attrResources: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceDlcProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaceResourceDlc.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrResources = this.getAtt('Resources');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceDlcPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceDlcs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
export interface RosWorkspaceResourceDlcsProps {

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceDlcsProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcsProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceDlcsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceDlcsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceDlcs` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceDlcs` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceDlcsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceDlcsPropsValidator(properties).assertSuccess();
    }
    return {
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlcs`, which is used to query a list of Deep Learning Containers (DLC) resources that are associated with a Platform for AI (PAI) workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlcs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
export class RosWorkspaceResourceDlcs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceDlcs";

    /**
     * @Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * @Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.
     */
    public readonly attrWorkspaceResourceDlcs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceDlcsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaceResourceDlcs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrWorkspaceResourceDlcs = this.getAtt('WorkspaceResourceDlcs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.groupName = props.groupName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            groupName: this.groupName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceDlcsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceFlink`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
 */
export interface RosWorkspaceResourceFlinkProps {

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceFlinkProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinkProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceFlinkPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceFlinkProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceFlink` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceFlink` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceFlinkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceFlinkPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlink`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlink` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
 */
export class RosWorkspaceResourceFlink extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceFlink";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute GroupName: Resource group name. If you want to obtain a resource group name.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute Resources: Resource List.
     */
    public readonly attrResources: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceFlinkProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaceResourceFlink.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrResources = this.getAtt('Resources');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceFlinkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceFlinks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export interface RosWorkspaceResourceFlinksProps {

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceFlinksProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinksProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceFlinksPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceFlinksProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceFlinks` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceFlinks` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceFlinksPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceFlinksPropsValidator(properties).assertSuccess();
    }
    return {
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlinks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlinks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export class RosWorkspaceResourceFlinks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceFlinks";

    /**
     * @Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * @Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.
     */
    public readonly attrWorkspaceResourceFlinks: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceFlinksProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaceResourceFlinks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrWorkspaceResourceFlinks = this.getAtt('WorkspaceResourceFlinks');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.groupName = props.groupName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            groupName: this.groupName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceFlinksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceMaxCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
export interface RosWorkspaceResourceMaxComputeProps {

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceMaxComputeProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputeProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceMaxComputePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceMaxComputeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceMaxCompute` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceMaxCompute` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceMaxComputePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceMaxComputePropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxCompute`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxCompute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
export class RosWorkspaceResourceMaxCompute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceMaxCompute";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute GroupName: Resource group name. If you want to obtain a resource group name.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute Resources: Resource List.
     */
    public readonly attrResources: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceMaxComputeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaceResourceMaxCompute.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrResources = this.getAtt('Resources');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceMaxComputePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceMaxComputes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
export interface RosWorkspaceResourceMaxComputesProps {

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceMaxComputesProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputesProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceMaxComputesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceMaxComputesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceMaxComputes` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::WorkspaceResourceMaxComputes` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceMaxComputesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceMaxComputesPropsValidator(properties).assertSuccess();
    }
    return {
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxComputes`, which is used to query the MaxCompute resources that are associated with a workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxComputes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
export class RosWorkspaceResourceMaxComputes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceMaxComputes";

    /**
     * @Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * @Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.
     */
    public readonly attrWorkspaceResourceMaxComputes: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceMaxComputesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaceResourceMaxComputes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrWorkspaceResourceMaxComputes = this.getAtt('WorkspaceResourceMaxComputes');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.groupName = props.groupName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            groupName: this.groupName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceMaxComputesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
 */
export interface RosWorkspacesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspacesProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceName', ros.validateString)(properties.workspaceName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Workspaces` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Workspaces` resource.
 */
// @ts-ignore TS6133
function rosWorkspacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspacesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'WorkspaceName': ros.stringToRosTemplate(properties.workspaceName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Workspaces`, which is used to query the basic information about workspaces.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
 */
export class RosWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspaces";

    /**
     * @Attribute WorkspaceIds: The list of workspace IDs.
     */
    public readonly attrWorkspaceIds: ros.IResolvable;

    /**
     * @Attribute Workspaces: The list of workspaces.
     */
    public readonly attrWorkspaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property workspaceId: The ID of the workspace.
     */
    public workspaceId: string | ros.IResolvable | undefined;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    public workspaceName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrWorkspaceIds = this.getAtt('WorkspaceIds');
        this.attrWorkspaces = this.getAtt('Workspaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.workspaceId = props.workspaceId;
        this.workspaceName = props.workspaceName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            workspaceId: this.workspaceId,
            workspaceName: this.workspaceName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
