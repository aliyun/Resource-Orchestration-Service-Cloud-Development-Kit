"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosWorkspaces = exports.RosWorkspaceResourceMaxComputes = exports.RosWorkspaceResourceMaxCompute = exports.RosWorkspaceResourceFlinks = exports.RosWorkspaceResourceFlink = exports.RosWorkspaceResourceDlcs = exports.RosWorkspaceResourceDlc = exports.RosWorkspace = exports.RosServices = exports.RosService = exports.RosDatasets = exports.RosDataset = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosDatasetProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosDatasetPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDatasetPropsValidator(properties).assertSuccess();
    }
    return {
        DatasetId: ros.stringToRosTemplate(properties.datasetId),
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Dataset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
class RosDataset extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            datasetId: this.datasetId,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosDatasetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDataset = RosDataset;
/**
 * The resource type name for this resource class.
 */
RosDataset.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Dataset";
/**
 * Determine whether the given properties match those of a `RosDatasetsProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetsProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosDatasetsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDatasetsPropsValidator(properties).assertSuccess();
    }
    return {
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
        SourceId: ros.stringToRosTemplate(properties.sourceId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Datasets`, which is used to query the basic information about datasets.
 * @Note This class does not contain additional functions, so it is recommended to use the `Datasets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
class RosDatasets extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDatasets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatasetIds = this.getAtt('DatasetIds');
        this.attrDatasets = this.getAtt('Datasets');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.refreshOptions = props.refreshOptions;
        this.sourceId = props.sourceId;
    }
    get rosProperties() {
        return {
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
            sourceId: this.sourceId,
        };
    }
    renderProperties(props) {
        return rosDatasetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDatasets = RosDatasets;
/**
 * The resource type name for this resource class.
 */
RosDatasets.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Datasets";
/**
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosServicePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Service`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
class RosService extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            serviceName: this.serviceName,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosService = RosService;
/**
 * The resource type name for this resource class.
 */
RosService.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Service";
/**
 * Determine whether the given properties match those of a `RosServicesProps`
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the result of the validation.
 */
function RosServicesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('labels', ros.hashValidator(ros.validateAny))(properties.labels));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosServicesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosServicesPropsValidator(properties).assertSuccess();
    }
    return {
        Labels: ros.hashMapper(ros.objectToRosTemplate)(properties.labels),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Services`, which is used to query the information about Elastic Algorithm Service (EAS) services of Machine Learning Platform for AI (PAI).
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
class RosServices extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosServices.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceNames = this.getAtt('ServiceNames');
        this.attrServices = this.getAtt('Services');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.labels = props.labels;
        this.refreshOptions = props.refreshOptions;
        this.serviceName = props.serviceName;
    }
    get rosProperties() {
        return {
            labels: this.labels,
            refreshOptions: this.refreshOptions,
            serviceName: this.serviceName,
        };
    }
    renderProperties(props) {
        return rosServicesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosServices = RosServices;
/**
 * The resource type name for this resource class.
 */
RosServices.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Services";
/**
 * Determine whether the given properties match those of a `RosWorkspaceProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspacePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspacePropsValidator(properties).assertSuccess();
    }
    return {
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Workspace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
class RosWorkspace extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspace = RosWorkspace;
/**
 * The resource type name for this resource class.
 */
RosWorkspace.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspace";
/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceDlcProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceDlcPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspaceResourceDlcPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspaceResourceDlcPropsValidator(properties).assertSuccess();
    }
    return {
        GroupName: ros.stringToRosTemplate(properties.groupName),
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlc`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
class RosWorkspaceResourceDlc extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            groupName: this.groupName,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspaceResourceDlcPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaceResourceDlc = RosWorkspaceResourceDlc;
/**
 * The resource type name for this resource class.
 */
RosWorkspaceResourceDlc.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceDlc";
/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceDlcsProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcsProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceDlcsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspaceResourceDlcsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspaceResourceDlcsPropsValidator(properties).assertSuccess();
    }
    return {
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        GroupName: ros.stringToRosTemplate(properties.groupName),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlcs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlcs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
class RosWorkspaceResourceDlcs extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWorkspaceResourceDlcs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrWorkspaceResourceDlcs = this.getAtt('WorkspaceResourceDlcs');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.groupName = props.groupName;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            workspaceId: this.workspaceId,
            groupName: this.groupName,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspaceResourceDlcsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaceResourceDlcs = RosWorkspaceResourceDlcs;
/**
 * The resource type name for this resource class.
 */
RosWorkspaceResourceDlcs.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceDlcs";
/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceFlinkProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinkProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceFlinkPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspaceResourceFlinkPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspaceResourceFlinkPropsValidator(properties).assertSuccess();
    }
    return {
        GroupName: ros.stringToRosTemplate(properties.groupName),
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlink`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlink` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
 */
class RosWorkspaceResourceFlink extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            groupName: this.groupName,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspaceResourceFlinkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaceResourceFlink = RosWorkspaceResourceFlink;
/**
 * The resource type name for this resource class.
 */
RosWorkspaceResourceFlink.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceFlink";
/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceFlinksProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinksProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceFlinksPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspaceResourceFlinksPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspaceResourceFlinksPropsValidator(properties).assertSuccess();
    }
    return {
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        GroupName: ros.stringToRosTemplate(properties.groupName),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlinks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlinks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
class RosWorkspaceResourceFlinks extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWorkspaceResourceFlinks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrWorkspaceResourceFlinks = this.getAtt('WorkspaceResourceFlinks');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.groupName = props.groupName;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            workspaceId: this.workspaceId,
            groupName: this.groupName,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspaceResourceFlinksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaceResourceFlinks = RosWorkspaceResourceFlinks;
/**
 * The resource type name for this resource class.
 */
RosWorkspaceResourceFlinks.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceFlinks";
/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceMaxComputeProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputeProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceMaxComputePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspaceResourceMaxComputePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspaceResourceMaxComputePropsValidator(properties).assertSuccess();
    }
    return {
        GroupName: ros.stringToRosTemplate(properties.groupName),
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxCompute`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxCompute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
class RosWorkspaceResourceMaxCompute extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            groupName: this.groupName,
            workspaceId: this.workspaceId,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspaceResourceMaxComputePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaceResourceMaxCompute = RosWorkspaceResourceMaxCompute;
/**
 * The resource type name for this resource class.
 */
RosWorkspaceResourceMaxCompute.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceMaxCompute";
/**
 * Determine whether the given properties match those of a `RosWorkspaceResourceMaxComputesProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputesProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceMaxComputesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspaceResourceMaxComputesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspaceResourceMaxComputesPropsValidator(properties).assertSuccess();
    }
    return {
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        GroupName: ros.stringToRosTemplate(properties.groupName),
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxComputes`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxComputes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
class RosWorkspaceResourceMaxComputes extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWorkspaceResourceMaxComputes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrWorkspaceResourceMaxComputes = this.getAtt('WorkspaceResourceMaxComputes');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.groupName = props.groupName;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            workspaceId: this.workspaceId,
            groupName: this.groupName,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosWorkspaceResourceMaxComputesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaceResourceMaxComputes = RosWorkspaceResourceMaxComputes;
/**
 * The resource type name for this resource class.
 */
RosWorkspaceResourceMaxComputes.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceMaxComputes";
/**
 * Determine whether the given properties match those of a `RosWorkspacesProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceName', ros.validateString)(properties.workspaceName));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosWorkspacesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWorkspacesPropsValidator(properties).assertSuccess();
    }
    return {
        RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
        WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
        WorkspaceName: ros.stringToRosTemplate(properties.workspaceName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Workspaces`, which is used to query the basic information about workspaces.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
 */
class RosWorkspaces extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWorkspaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrWorkspaceIds = this.getAtt('WorkspaceIds');
        this.attrWorkspaces = this.getAtt('Workspaces');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.workspaceId = props.workspaceId;
        this.workspaceName = props.workspaceName;
    }
    get rosProperties() {
        return {
            refreshOptions: this.refreshOptions,
            workspaceId: this.workspaceId,
            workspaceName: this.workspaceName,
        };
    }
    renderProperties(props) {
        return rosWorkspacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWorkspaces = RosWorkspaces;
/**
 * The resource type name for this resource class.
 */
RosWorkspaces.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspaces";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhaS5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTRCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLElBQUcsVUFBVSxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNoRixJQUFJLEVBQUUsVUFBVSxDQUFDLGNBQWM7WUFDL0IsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQztTQUNsQyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUs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cEMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLCtCQUErQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN6RixDQUFDOztBQWxFTCxzQ0FtRUM7QUFsRUc7O0dBRUc7QUFDb0Isb0NBQXNCLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0RhdGFzZXRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS1kYXRhc2V0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRGF0YXNldFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhc2V0SWQ6IFRoZSBmaXJzdCBJRCBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YXNldElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlIHdoZXJlIHRoZSBkYXRhc2V0IGlzIGxvY2F0ZWQuIEZvciBkZXRhaWxzIGFib3V0IGhvdyB0byBvYnRhaW4gdGhlIHdvcmtzcGFjZSBJRCwgc2VlIFtMaXN0V29ya3NwYWNlc10uXG4gICAgICogSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IGNvbmZpZ3VyZWQsIHRoZSBkZWZhdWx0IHdvcmtzcGFjZSBpcyB1c2VkLiBJZiB0aGUgZGVmYXVsdCB3b3Jrc3BhY2UgZG9lcyBub3QgZXhpc3QsIGFuIGVycm9yIGlzIHJlcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGF0YXNldFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEYXRhc2V0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGF0YXNldFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dvcmtzcGFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGF0YXNldElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRhc2V0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGF0YXNldElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RhdGFzZXRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlBBSTo6RGF0YXNldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGF0YXNldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpEYXRhc2V0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RhdGFzZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RhdGFzZXRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEYXRhc2V0SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGF0YXNldElkKSxcbiAgICAgIFdvcmtzcGFjZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSxcbiAgICAgIFJlZnJlc2hPcHRpb25zOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6UEFJOjpEYXRhc2V0YC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRGF0YXNldGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS1kYXRhc2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEYXRhc2V0IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6UEFJOjpEYXRhc2V0XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFjY2Vzc2liaWxpdHk6IFdvcmtzcGFjZSB2aXNpYmlsaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzaWJpbGl0eTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERhdGFTb3VyY2VUeXBlOiBUaGUgZGF0YSBzb3VyY2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFTb3VyY2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERhdGFUeXBlOiBUaGUgZGF0YXNldCB0eXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBDT01NT04uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYXRhVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYXRhc2V0SWQ6IFRoZSBmaXJzdCBJRCBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYXRhc2V0SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGF0YXNldE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkYXRhc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YXNldE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVzY3JpcHRpb246IEN1c3RvbSBkZXNjcmlwdGlvbnMgb2YgZGF0YXNldHMgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgZGF0YXNldHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHbXRNb2RpZmllZFRpbWU6IFVwZGF0ZSB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR210TW9kaWZpZWRUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE9wdGlvbnM6IFRoZSBleHRlbmRlZCBmaWVsZCwgd2hpY2ggaXMgb2YgdGhlIEpzb25TdHJpbmcgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9wdGlvbnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgT3duZXJJZDogVGhlIElEIG9mIHRoZSBwcmltYXJ5IGFjY291bnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPd25lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByb3BlcnR5OiBUaGUgcHJvcGVydGllcyBvZiB0aGUgZGF0YXNldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb3BlcnR5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNvdXJjZUlkOiBUaGUgZGF0YSBzb3VyY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTb3VyY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTb3VyY2VUeXBlOiBUaGUgZGF0YSBzb3VyY2UgdHlwZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgVVNFUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXJpOiBUaGUgVXJpIGNvbmZpZ3VyYXRpb24gc2FtcGxlIGlzIGFzIGZvbGxvd3M6LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXJpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVGhlIElEIG9mIHRoZSB1c2VyIHRvIHdoaWNoIHRoZSBkYXRhc2V0IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgV29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlIHdoZXJlIHRoZSBkYXRhc2V0IGlzIGxvY2F0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3Jrc3BhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGF0YXNldElkOiBUaGUgZmlyc3QgSUQgb2YgdGhlIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhc2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VJZDogVGhlIElEIG9mIHRoZSB3b3Jrc3BhY2Ugd2hlcmUgdGhlIGRhdGFzZXQgaXMgbG9jYXRlZC4gRm9yIGRldGFpbHMgYWJvdXQgaG93IHRvIG9idGFpbiB0aGUgd29ya3NwYWNlIElELCBzZWUgW0xpc3RXb3Jrc3BhY2VzXS5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3QgY29uZmlndXJlZCwgdGhlIGRlZmF1bHQgd29ya3NwYWNlIGlzIHVzZWQuIElmIHRoZSBkZWZhdWx0IHdvcmtzcGFjZSBkb2VzIG5vdCBleGlzdCwgYW4gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGF0YXNldFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGF0YXNldC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWNjZXNzaWJpbGl0eSA9IHRoaXMuZ2V0QXR0KCdBY2Nlc3NpYmlsaXR5Jyk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnQ3JlYXRlVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJEYXRhU291cmNlVHlwZSA9IHRoaXMuZ2V0QXR0KCdEYXRhU291cmNlVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJEYXRhVHlwZSA9IHRoaXMuZ2V0QXR0KCdEYXRhVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJEYXRhc2V0SWQgPSB0aGlzLmdldEF0dCgnRGF0YXNldElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckRhdGFzZXROYW1lID0gdGhpcy5nZXRBdHQoJ0RhdGFzZXROYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gdGhpcy5nZXRBdHQoJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMuYXR0ckdtdE1vZGlmaWVkVGltZSA9IHRoaXMuZ2V0QXR0KCdHbXRNb2RpZmllZFRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyT3B0aW9ucyA9IHRoaXMuZ2V0QXR0KCdPcHRpb25zJyk7XG4gICAgICAgIHRoaXMuYXR0ck93bmVySWQgPSB0aGlzLmdldEF0dCgnT3duZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJQcm9wZXJ0eSA9IHRoaXMuZ2V0QXR0KCdQcm9wZXJ0eScpO1xuICAgICAgICB0aGlzLmF0dHJTb3VyY2VJZCA9IHRoaXMuZ2V0QXR0KCdTb3VyY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJTb3VyY2VUeXBlID0gdGhpcy5nZXRBdHQoJ1NvdXJjZVR5cGUnKTtcbiAgICAgICAgdGhpcy5hdHRyVXJpID0gdGhpcy5nZXRBdHQoJ1VyaScpO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSB0aGlzLmdldEF0dCgnVXNlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0cldvcmtzcGFjZUlkID0gdGhpcy5nZXRBdHQoJ1dvcmtzcGFjZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRhdGFzZXRJZCA9IHByb3BzLmRhdGFzZXRJZDtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VJZCA9IHByb3BzLndvcmtzcGFjZUlkO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YXNldElkOiB0aGlzLmRhdGFzZXRJZCxcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB0aGlzLndvcmtzcGFjZUlkLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RhdGFzZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEYXRhc2V0c2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcGFpLWRhdGFzZXRzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRGF0YXNldHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlIHdoZXJlIHRoZSBkYXRhc2V0IGlzIGxvY2F0ZWQuIEZvciBkZXRhaWxzIGFib3V0IGhvdyB0byBvYnRhaW4gdGhlIHdvcmtzcGFjZSBJRCwgc2VlIFtMaXN0V29ya3NwYWNlc10ofn4gNDQ5MTI0IH5+KS5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3QgY29uZmlndXJlZCwgdGhlIGRlZmF1bHQgd29ya3NwYWNlIGlzIHVzZWQuIElmIHRoZSBkZWZhdWx0IHdvcmtzcGFjZSBkb2VzIG5vdCBleGlzdCwgYW4gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VJZDogVGhlIGRhdGEgc291cmNlIElELlxuICAgICAqIC0gV2hlbiB0aGUgU291cmNlVHlwZSBpcyBVU0VSLCBTb3VyY2VJZCBjYW4gYmUgY3VzdG9taXplZC5cbiAgICAgKiAtIFdoZW4gU291cmNlVHlwZSBpcyBJVEFHLCB0aGF0IGlzLCB3aGVuIHRoZSBpVEFHIG1vZHVsZSBsYWJlbHMgdGhlIGRhdGEgc2V0IGdlbmVyYXRlZCBieSB0aGUgcmVzdWx0LCBTb3VyY2VJZCBpcyB0aGUgdGFzayBJRCBvZiBJVEFHLlxuICAgICAqIC0gV2hlbiBTb3VyY2VUeXBlIGlzIFBBSV9QVUJMSUNfREFUQVNFVCwgdGhhdCBpcywgYSBkYXRhc2V0IGNyZWF0ZWQgdXNpbmcgUEFJIHB1YmxpYyBkYXRhc2V0cywgU291cmNlSWQgaXMgZW1wdHkgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEYXRhc2V0c1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEYXRhc2V0c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RhdGFzZXRzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dvcmtzcGFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RhdGFzZXRzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OkRhdGFzZXRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEYXRhc2V0c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpEYXRhc2V0c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEYXRhc2V0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGF0YXNldHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBXb3Jrc3BhY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy53b3Jrc3BhY2VJZCksXG4gICAgICBSZWZyZXNoT3B0aW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgICBTb3VyY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBBSTo6RGF0YXNldHNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBkYXRhc2V0cy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRGF0YXNldHNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktZGF0YXNldHNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RhdGFzZXRzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6UEFJOjpEYXRhc2V0c1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYXRhc2V0SWRzOiBUaGUgbGlzdCBvZiBkYXRhc2V0IElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFzZXRJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGF0YXNldHM6IFRoZSBsaXN0IG9mIGRhdGFzZXRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YXNldHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB3aGVyZSB0aGUgZGF0YXNldCBpcyBsb2NhdGVkLiBGb3IgZGV0YWlscyBhYm91dCBob3cgdG8gb2J0YWluIHRoZSB3b3Jrc3BhY2UgSUQsIHNlZSBbTGlzdFdvcmtzcGFjZXNdKH5+IDQ0OTEyNCB+fikuXG4gICAgICogSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IGNvbmZpZ3VyZWQsIHRoZSBkZWZhdWx0IHdvcmtzcGFjZSBpcyB1c2VkLiBJZiB0aGUgZGVmYXVsdCB3b3Jrc3BhY2UgZG9lcyBub3QgZXhpc3QsIGFuIGVycm9yIGlzIHJlcG9ydGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB3b3Jrc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoT3B0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUlkOiBUaGUgZGF0YSBzb3VyY2UgSUQuXG4gICAgICogLSBXaGVuIHRoZSBTb3VyY2VUeXBlIGlzIFVTRVIsIFNvdXJjZUlkIGNhbiBiZSBjdXN0b21pemVkLlxuICAgICAqIC0gV2hlbiBTb3VyY2VUeXBlIGlzIElUQUcsIHRoYXQgaXMsIHdoZW4gdGhlIGlUQUcgbW9kdWxlIGxhYmVscyB0aGUgZGF0YSBzZXQgZ2VuZXJhdGVkIGJ5IHRoZSByZXN1bHQsIFNvdXJjZUlkIGlzIHRoZSB0YXNrIElEIG9mIElUQUcuXG4gICAgICogLSBXaGVuIFNvdXJjZVR5cGUgaXMgUEFJX1BVQkxJQ19EQVRBU0VULCB0aGF0IGlzLCBhIGRhdGFzZXQgY3JlYXRlZCB1c2luZyBQQUkgcHVibGljIGRhdGFzZXRzLCBTb3VyY2VJZCBpcyBlbXB0eSBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RhdGFzZXRzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEYXRhc2V0cy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGF0YXNldElkcyA9IHRoaXMuZ2V0QXR0KCdEYXRhc2V0SWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ckRhdGFzZXRzID0gdGhpcy5nZXRBdHQoJ0RhdGFzZXRzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLndvcmtzcGFjZUlkID0gcHJvcHMud29ya3NwYWNlSWQ7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5zb3VyY2VJZCA9IHByb3BzLnNvdXJjZUlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB0aGlzLndvcmtzcGFjZUlkLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgICBzb3VyY2VJZDogdGhpcy5zb3VyY2VJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGF0YXNldHNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTZXJ2aWNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NlcnZpY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2VydmljZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2VydmljZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlcnZpY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlBBSTo6U2VydmljZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2VydmljZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpTZXJ2aWNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBSZWZyZXNoT3B0aW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBBSTo6U2VydmljZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFNlcnZpY2VgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktc2VydmljZVxuICovXG5leHBvcnQgY2xhc3MgUm9zU2VydmljZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlBBSTo6U2VydmljZVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2Nlc3NUb2tlbjogVGhlIHJlcXVlc3QgdG9rZW4gb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2Nlc3NUb2tlbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDYWxsZXJVaWQ6IFRoZSB1c2VyIElEIG9mIHRoZSBhY2NvdW50IHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDYWxsZXJVaWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3B1OiBUaGUgQ1BVIHRoYXQgeW91IGFwcGxpZWQgZm9yIGVhY2ggaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcHU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogVGhlIHRpbWUgd2hlbiB0aGUgc2VydmljZSB3YXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3VycmVudFZlcnNpb246IFRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIG1vZGVsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3VycmVudFZlcnNpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRXh0cmFEYXRhOiBUaGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckV4dHJhRGF0YTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcHU6IFRoZSBHUFUgdGhhdCB5b3UgYXBwbGllZCBmb3IgZWFjaCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdwdTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbWFnZTogVGhlIGRhdGEgaW1hZ2Ugb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRlcm5ldEVuZHBvaW50OiBUaGUgcHVibGljIGVuZHBvaW50IG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRyYW5ldEVuZHBvaW50OiBUaGUgcHJpdmF0ZSBlbmRwb2ludCBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludHJhbmV0RW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTGFiZWxzOiBUaGUgdGFncyBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxhYmVsczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMYXRlc3RWZXJzaW9uOiBUaGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXRlc3RWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1lbW9yeTogVGhlIG1lbW9yeSB0aGF0IHlvdSBhcHBsaWVkIGZvciBlYWNoIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWVtb3J5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1lc3NhZ2U6IFRoZSBzdW1tYXJ5IG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWVzc2FnZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOYW1lc3BhY2U6IFRoZSBuYW1lc3BhY2Ugb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lc3BhY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUGFyZW50VWlkOiBUaGUgdXNlciBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYXJlbnRVaWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUGVuZGluZ0luc3RhbmNlOiBUaGUgbnVtYmVyIG9mIGluc3RhbmNlcyBmb3IgdGhlIHN1c3BlbmRlZCBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGVuZGluZ0luc3RhbmNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlYXNvbjogVGhlIHJlYXNvbiB3aHkgdGhlIHNlcnZpY2UgaXMgaW4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWFzb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2U6IFRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgc2VydmljZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VBbGlhczogVGhlIGFsaWFzIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgc2VydmljZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VBbGlhczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb2xlOiBUaGUgcm9sZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm9sZUF0dHJzOiBUaGUgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIG9mIHRoZSBzZXJ2aWNlIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb2xlQXR0cnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUnVubmluZ0luc3RhbmNlOiBUaGUgbnVtYmVyIG9mIGluc3RhbmNlcyBmb3IgdGhlIHJ1bm5pbmcgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJ1bm5pbmdJbnN0YW5jZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTYWZldHlMb2NrOiBUaGUgc2VjdXJpdHkgbG9jayBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhZmV0eUxvY2s6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2VydmljZUNvbmZpZzogVGhlIGNvbmZpZ3VyYXRpb25zIG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUNvbmZpZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlR3JvdXA6IFRoZSBncm91cCB0byB3aGljaCB0aGUgc2VydmljZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUdyb3VwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VVaWQ6IFRoZSBJRCBvZiB0aGUgc2VydmljZS4gVGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgdGhlIHNhbWUgYXMgdGhlIHZhbHVlIG9mIFNlcnZpY2VJZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VVaWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVG90YWxJbnN0YW5jZTogVGhlIHRvdGFsIG51bWJlciBvZiBpbnN0YW5jZXMgb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb3RhbEluc3RhbmNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVwZGF0ZVRpbWU6IFRoZSB0aW1lIHdoZW4gdGhlIHNlcnZpY2Ugd2FzIHVwZGF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcGRhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFdlaWdodDogVGhlIHdlaWdodCBvZiB0aGUgY2FuYXJ5IHJlbGVhc2UgZm9yIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV2VpZ2h0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2VydmljZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2VydmljZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWNjZXNzVG9rZW4gPSB0aGlzLmdldEF0dCgnQWNjZXNzVG9rZW4nKTtcbiAgICAgICAgdGhpcy5hdHRyQ2FsbGVyVWlkID0gdGhpcy5nZXRBdHQoJ0NhbGxlclVpZCcpO1xuICAgICAgICB0aGlzLmF0dHJDcHUgPSB0aGlzLmdldEF0dCgnQ3B1Jyk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnQ3JlYXRlVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJDdXJyZW50VmVyc2lvbiA9IHRoaXMuZ2V0QXR0KCdDdXJyZW50VmVyc2lvbicpO1xuICAgICAgICB0aGlzLmF0dHJFeHRyYURhdGEgPSB0aGlzLmdldEF0dCgnRXh0cmFEYXRhJyk7XG4gICAgICAgIHRoaXMuYXR0ckdwdSA9IHRoaXMuZ2V0QXR0KCdHcHUnKTtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2UgPSB0aGlzLmdldEF0dCgnSW1hZ2UnKTtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRFbmRwb2ludCA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5ldEVuZHBvaW50Jyk7XG4gICAgICAgIHRoaXMuYXR0ckludHJhbmV0RW5kcG9pbnQgPSB0aGlzLmdldEF0dCgnSW50cmFuZXRFbmRwb2ludCcpO1xuICAgICAgICB0aGlzLmF0dHJMYWJlbHMgPSB0aGlzLmdldEF0dCgnTGFiZWxzJyk7XG4gICAgICAgIHRoaXMuYXR0ckxhdGVzdFZlcnNpb24gPSB0aGlzLmdldEF0dCgnTGF0ZXN0VmVyc2lvbicpO1xuICAgICAgICB0aGlzLmF0dHJNZW1vcnkgPSB0aGlzLmdldEF0dCgnTWVtb3J5Jyk7XG4gICAgICAgIHRoaXMuYXR0ck1lc3NhZ2UgPSB0aGlzLmdldEF0dCgnTWVzc2FnZScpO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2UgPSB0aGlzLmdldEF0dCgnTmFtZXNwYWNlJyk7XG4gICAgICAgIHRoaXMuYXR0clBhcmVudFVpZCA9IHRoaXMuZ2V0QXR0KCdQYXJlbnRVaWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUGVuZGluZ0luc3RhbmNlID0gdGhpcy5nZXRBdHQoJ1BlbmRpbmdJbnN0YW5jZScpO1xuICAgICAgICB0aGlzLmF0dHJSZWFzb24gPSB0aGlzLmdldEF0dCgnUmVhc29uJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlQWxpYXMgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VBbGlhcycpO1xuICAgICAgICB0aGlzLmF0dHJSb2xlID0gdGhpcy5nZXRBdHQoJ1JvbGUnKTtcbiAgICAgICAgdGhpcy5hdHRyUm9sZUF0dHJzID0gdGhpcy5nZXRBdHQoJ1JvbGVBdHRycycpO1xuICAgICAgICB0aGlzLmF0dHJSdW5uaW5nSW5zdGFuY2UgPSB0aGlzLmdldEF0dCgnUnVubmluZ0luc3RhbmNlJyk7XG4gICAgICAgIHRoaXMuYXR0clNhZmV0eUxvY2sgPSB0aGlzLmdldEF0dCgnU2FmZXR5TG9jaycpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlQ29uZmlnID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VDb25maWcnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUdyb3VwID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VHcm91cCcpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlVWlkID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VVaWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVG90YWxJbnN0YW5jZSA9IHRoaXMuZ2V0QXR0KCdUb3RhbEluc3RhbmNlJyk7XG4gICAgICAgIHRoaXMuYXR0clVwZGF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnVXBkYXRlVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJXZWlnaHQgPSB0aGlzLmdldEF0dCgnV2VpZ2h0Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTZXJ2aWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU2VydmljZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS1zZXJ2aWNlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NlcnZpY2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxhYmVsczogU2VydmljZSBUYWcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGFiZWxzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIE5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2VydmljZXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2VydmljZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTZXJ2aWNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xhYmVscycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMubGFiZWxzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlcnZpY2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OlNlcnZpY2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTZXJ2aWNlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpTZXJ2aWNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTZXJ2aWNlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2VydmljZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBMYWJlbHM6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmxhYmVscyksXG4gICAgICBSZWZyZXNoT3B0aW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBBSTo6U2VydmljZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBpbmZvcm1hdGlvbiBhYm91dCBFbGFzdGljIEFsZ29yaXRobSBTZXJ2aWNlIChFQVMpIHNlcnZpY2VzIG9mIE1hY2hpbmUgTGVhcm5pbmcgUGxhdGZvcm0gZm9yIEFJIChQQUkpLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTZXJ2aWNlc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS1zZXJ2aWNlc1xuICovXG5leHBvcnQgY2xhc3MgUm9zU2VydmljZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQQUk6OlNlcnZpY2VzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNlcnZpY2VOYW1lczogVGhlIGxpc3Qgb2Ygc2VydmljZSBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlczogVGhlIGxpc3Qgb2Ygc2VydmljZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGFiZWxzOiBTZXJ2aWNlIFRhZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgTmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTZXJ2aWNlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2VydmljZXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lcyA9IHRoaXMuZ2V0QXR0KCdTZXJ2aWNlTmFtZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZXMgPSB0aGlzLmdldEF0dCgnU2VydmljZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubGFiZWxzID0gcHJvcHMubGFiZWxzO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbHM6IHRoaXMubGFiZWxzLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU2VydmljZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NXb3Jrc3BhY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXb3Jrc3BhY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV29ya3NwYWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dvcmtzcGFjZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dvcmtzcGFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1dvcmtzcGFjZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV29ya3NwYWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXb3Jrc3BhY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBXb3Jrc3BhY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy53b3Jrc3BhY2VJZCksXG4gICAgICBSZWZyZXNoT3B0aW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgV29ya3NwYWNlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcGFpLXdvcmtzcGFjZVxuICovXG5leHBvcnQgY2xhc3MgUm9zV29ya3NwYWNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWRtaW5OYW1lczogTGlzdCBvZiBhZG1pbmlzdHJhdG9yIGFjY291bnQgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBZG1pbk5hbWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0b3I6IFRoZSB1c2VyIElEIG9mIHRoZSBjcmVhdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRvcjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB3b3Jrc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEaXNwbGF5TmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgd29ya3NwYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlzcGxheU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW52VHlwZXM6IFRoZSBlbnZpcm9ubWVudHMgb2YgdGhlIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVudlR5cGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEV4dHJhSW5mb3M6IEFkZGl0aW9uYWwgaW5mb3JtYXRpb24sIGN1cnJlbnRseSBpbmNsdWRpbmcgVGVuYW50SWQgKHRlbmFudCBJRCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFeHRyYUluZm9zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElzRGVmYXVsdDogRGVmYXVsdCBXb3Jrc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJc0RlZmF1bHQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlcnM6IExpc3Qgb2YgdXNlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2Vyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXb3Jrc3BhY2VJZDogVGhlIGZpcnN0IElEIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldvcmtzcGFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFdvcmtzcGFjZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB3b3Jrc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3Jrc3BhY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VJZDogVGhlIElEIG9mIHRoZSB3b3Jrc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV29ya3NwYWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NXb3Jrc3BhY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFkbWluTmFtZXMgPSB0aGlzLmdldEF0dCgnQWRtaW5OYW1lcycpO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdG9yID0gdGhpcy5nZXRBdHQoJ0NyZWF0b3InKTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dCgnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5hdHRyRGlzcGxheU5hbWUgPSB0aGlzLmdldEF0dCgnRGlzcGxheU5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyRW52VHlwZXMgPSB0aGlzLmdldEF0dCgnRW52VHlwZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyRXh0cmFJbmZvcyA9IHRoaXMuZ2V0QXR0KCdFeHRyYUluZm9zJyk7XG4gICAgICAgIHRoaXMuYXR0cklzRGVmYXVsdCA9IHRoaXMuZ2V0QXR0KCdJc0RlZmF1bHQnKTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcnMgPSB0aGlzLmdldEF0dCgnVXNlcnMnKTtcbiAgICAgICAgdGhpcy5hdHRyV29ya3NwYWNlSWQgPSB0aGlzLmdldEF0dCgnV29ya3NwYWNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyV29ya3NwYWNlTmFtZSA9IHRoaXMuZ2V0QXR0KCdXb3Jrc3BhY2VOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLndvcmtzcGFjZUlkID0gcHJvcHMud29ya3NwYWNlSWQ7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3b3Jrc3BhY2VJZDogdGhpcy53b3Jrc3BhY2VJZCxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXb3Jrc3BhY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcGFpLXdvcmtzcGFjZXJlc291cmNlZGxjXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zV29ya3NwYWNlUmVzb3VyY2VEbGNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBSZXNvdXJjZSBncm91cCBuYW1lLiBJZiB5b3Ugd2FudCB0byBvYnRhaW4gYSByZXNvdXJjZSBncm91cCBuYW1lLCBzZWUgW0xpc3RSZXNvdXJjZXNdLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB0byB3aGljaCB0aGUgd29ya3NwYWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dvcmtzcGFjZVJlc291cmNlRGxjUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3b3Jrc3BhY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy53b3Jrc3BhY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV29ya3NwYWNlUmVzb3VyY2VEbGNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlUmVzb3VyY2VEbGNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlRGxjUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRGxjYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dvcmtzcGFjZVJlc291cmNlRGxjUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgV29ya3NwYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud29ya3NwYWNlSWQpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRGxjYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgV29ya3NwYWNlUmVzb3VyY2VEbGNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktd29ya3NwYWNlcmVzb3VyY2VkbGNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dvcmtzcGFjZVJlc291cmNlRGxjIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZURsY1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwTmFtZTogUmVzb3VyY2UgZ3JvdXAgbmFtZS4gSWYgeW91IHdhbnQgdG8gb2J0YWluIGEgcmVzb3VyY2UgZ3JvdXAgbmFtZSwgc2VlIFtMaXN0UmVzb3VyY2VzXS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJc0RlZmF1bHQ6IEluZGljYXRlcyB3aGV0aGVyIGl0IGlzIHRoZSBkZWZhdWx0IHJlc291cmNlLiBDdXJyZW50bHksIHRoaXMgcGFyYW1ldGVyIG9ubHkgc3VwcG9ydHMgdGhlIGlucHV0IG9mIHRydWUgYW5kIGRvZXMgbm90IHN1cHBvcnQgZmFsc2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJc0RlZmF1bHQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VzOiBSZXNvdXJjZSBMaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFJlc291cmNlIGdyb3VwIG5hbWUuIElmIHlvdSB3YW50IHRvIG9idGFpbiBhIHJlc291cmNlIGdyb3VwIG5hbWUsIHNlZSBbTGlzdFJlc291cmNlc10uXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB0byB3aGljaCB0aGUgd29ya3NwYWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV29ya3NwYWNlUmVzb3VyY2VEbGNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dvcmtzcGFjZVJlc291cmNlRGxjLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gdGhpcy5nZXRBdHQoJ0NyZWF0ZVRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBOYW1lID0gdGhpcy5nZXRBdHQoJ0dyb3VwTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJJc0RlZmF1bHQgPSB0aGlzLmdldEF0dCgnSXNEZWZhdWx0Jyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlcyA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcHJvcHMuZ3JvdXBOYW1lO1xuICAgICAgICB0aGlzLndvcmtzcGFjZUlkID0gcHJvcHMud29ya3NwYWNlSWQ7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgd29ya3NwYWNlSWQ6IHRoaXMud29ya3NwYWNlSWQsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zV29ya3NwYWNlUmVzb3VyY2VEbGNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VyZXNvdXJjZWRsY3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY3NQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlIHRvIHdoaWNoIHRoZSB3b3Jrc3BhY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3Jrc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogUmVzb3VyY2UgZ3JvdXAgbmFtZS4gSWYgeW91IHdhbnQgdG8gb2J0YWluIGEgcmVzb3VyY2UgZ3JvdXAgbmFtZSwgc2VlIFtMaXN0UmVzb3VyY2VzXS5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV29ya3NwYWNlUmVzb3VyY2VEbGNzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlRGxjc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dvcmtzcGFjZVJlc291cmNlRGxjc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dvcmtzcGFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1dvcmtzcGFjZVJlc291cmNlRGxjc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZURsY3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlRGxjc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZURsY3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV29ya3NwYWNlUmVzb3VyY2VEbGNzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBXb3Jrc3BhY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy53b3Jrc3BhY2VJZCksXG4gICAgICBHcm91cE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICAgIFJlZnJlc2hPcHRpb25zOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZURsY3NgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBXb3Jrc3BhY2VSZXNvdXJjZURsY3NgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktd29ya3NwYWNlcmVzb3VyY2VkbGNzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NXb3Jrc3BhY2VSZXNvdXJjZURsY3MgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRGxjc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cE5hbWVzOiBUaGUgbGlzdCBvZiBncm91cCBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwTmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgV29ya3NwYWNlUmVzb3VyY2VEbGNzOiBUaGUgbGlzdCBvZiB3b3Jrc3BhY2UgcmVzb3VyY2UgZGxjcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldvcmtzcGFjZVJlc291cmNlRGxjczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlIHRvIHdoaWNoIHRoZSB3b3Jrc3BhY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFJlc291cmNlIGdyb3VwIG5hbWUuIElmIHlvdSB3YW50IHRvIG9idGFpbiBhIHJlc291cmNlIGdyb3VwIG5hbWUsIHNlZSBbTGlzdFJlc291cmNlc10uXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoT3B0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1dvcmtzcGFjZVJlc291cmNlRGxjc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zV29ya3NwYWNlUmVzb3VyY2VEbGNzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJHcm91cE5hbWVzID0gdGhpcy5nZXRBdHQoJ0dyb3VwTmFtZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyV29ya3NwYWNlUmVzb3VyY2VEbGNzID0gdGhpcy5nZXRBdHQoJ1dvcmtzcGFjZVJlc291cmNlRGxjcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VJZCA9IHByb3BzLndvcmtzcGFjZUlkO1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB0aGlzLndvcmtzcGFjZUlkLFxuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXb3Jrc3BhY2VSZXNvdXJjZURsY3NQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktd29ya3NwYWNlcmVzb3VyY2VmbGlua1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBSZXNvdXJjZSBncm91cCBuYW1lLiBJZiB5b3Ugd2FudCB0byBvYnRhaW4gYSByZXNvdXJjZSBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB0byB3aGljaCB0aGUgd29ya3NwYWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3b3Jrc3BhY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy53b3Jrc3BhY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRmxpbmtgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgV29ya3NwYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud29ya3NwYWNlSWQpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRmxpbmtgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcGFpLXdvcmtzcGFjZXJlc291cmNlZmxpbmtcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmsgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRmxpbmtcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogVGhlIGNyZWF0aW9uIHRpbWUgb2YgdGhlIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cE5hbWU6IFJlc291cmNlIGdyb3VwIG5hbWUuIElmIHlvdSB3YW50IHRvIG9idGFpbiBhIHJlc291cmNlIGdyb3VwIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSXNEZWZhdWx0OiBJbmRpY2F0ZXMgd2hldGhlciBpdCBpcyB0aGUgZGVmYXVsdCByZXNvdXJjZS4gQ3VycmVudGx5LCB0aGlzIHBhcmFtZXRlciBvbmx5IHN1cHBvcnRzIHRoZSBpbnB1dCBvZiB0cnVlIGFuZCBkb2VzIG5vdCBzdXBwb3J0IGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXNEZWZhdWx0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlczogUmVzb3VyY2UgTGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBSZXNvdXJjZSBncm91cCBuYW1lLiBJZiB5b3Ugd2FudCB0byBvYnRhaW4gYSByZXNvdXJjZSBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VJZDogVGhlIElEIG9mIHRoZSB3b3Jrc3BhY2UgdG8gd2hpY2ggdGhlIHdvcmtzcGFjZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB3b3Jrc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoT3B0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmsuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnQ3JlYXRlVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJHcm91cE5hbWUgPSB0aGlzLmdldEF0dCgnR3JvdXBOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0cklzRGVmYXVsdCA9IHRoaXMuZ2V0QXR0KCdJc0RlZmF1bHQnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VzID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgICAgIHRoaXMud29ya3NwYWNlSWQgPSBwcm9wcy53b3Jrc3BhY2VJZDtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyb3VwTmFtZTogdGhpcy5ncm91cE5hbWUsXG4gICAgICAgICAgICB3b3Jrc3BhY2VJZDogdGhpcy53b3Jrc3BhY2VJZCxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VyZXNvdXJjZWZsaW5rc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB0byB3aGljaCB0aGUgd29ya3NwYWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFJlc291cmNlIGdyb3VwIG5hbWUuIElmIHlvdSB3YW50IHRvIG9idGFpbiBhIHJlc291cmNlIGdyb3VwIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dvcmtzcGFjZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3b3Jrc3BhY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy53b3Jrc3BhY2VJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFsd2F5c1wiLFwiTmV2ZXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3NQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlUmVzb3VyY2VGbGlua3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3NQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgV29ya3NwYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud29ya3NwYWNlSWQpLFxuICAgICAgR3JvdXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwTmFtZSksXG4gICAgICBSZWZyZXNoT3B0aW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlUmVzb3VyY2VGbGlua3NgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VyZXNvdXJjZWZsaW5rc1xuICovXG5leHBvcnQgY2xhc3MgUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3MgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlRmxpbmtzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwTmFtZXM6IFRoZSBsaXN0IG9mIGdyb3VwIG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rczogVGhlIGxpc3Qgb2Ygd29ya3NwYWNlIHJlc291cmNlIGZsaW5rcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldvcmtzcGFjZVJlc291cmNlRmxpbmtzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VJZDogVGhlIElEIG9mIHRoZSB3b3Jrc3BhY2UgdG8gd2hpY2ggdGhlIHdvcmtzcGFjZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB3b3Jrc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogUmVzb3VyY2UgZ3JvdXAgbmFtZS4gSWYgeW91IHdhbnQgdG8gb2J0YWluIGEgcmVzb3VyY2UgZ3JvdXAgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3NQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmtzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJHcm91cE5hbWVzID0gdGhpcy5nZXRBdHQoJ0dyb3VwTmFtZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyV29ya3NwYWNlUmVzb3VyY2VGbGlua3MgPSB0aGlzLmdldEF0dCgnV29ya3NwYWNlUmVzb3VyY2VGbGlua3MnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMud29ya3NwYWNlSWQgPSBwcm9wcy53b3Jrc3BhY2VJZDtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3b3Jrc3BhY2VJZDogdGhpcy53b3Jrc3BhY2VJZCxcbiAgICAgICAgICAgIGdyb3VwTmFtZTogdGhpcy5ncm91cE5hbWUsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zV29ya3NwYWNlUmVzb3VyY2VGbGlua3NQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VyZXNvdXJjZW1heGNvbXB1dGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBSZXNvdXJjZSBncm91cCBuYW1lLiBJZiB5b3Ugd2FudCB0byBvYnRhaW4gYSByZXNvdXJjZSBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB0byB3aGljaCB0aGUgd29ya3NwYWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3b3Jrc3BhY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy53b3Jrc3BhY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgV29ya3NwYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud29ya3NwYWNlSWQpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFdvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VyZXNvdXJjZW1heGNvbXB1dGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lOiBSZXNvdXJjZSBncm91cCBuYW1lLiBJZiB5b3Ugd2FudCB0byBvYnRhaW4gYSByZXNvdXJjZSBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElzRGVmYXVsdDogSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgdGhlIGRlZmF1bHQgcmVzb3VyY2UuIEN1cnJlbnRseSwgdGhpcyBwYXJhbWV0ZXIgb25seSBzdXBwb3J0cyB0aGUgaW5wdXQgb2YgdHJ1ZSBhbmQgZG9lcyBub3Qgc3VwcG9ydCBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzRGVmYXVsdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZXM6IFJlc291cmNlIExpc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogUmVzb3VyY2UgZ3JvdXAgbmFtZS4gSWYgeW91IHdhbnQgdG8gb2J0YWluIGEgcmVzb3VyY2UgZ3JvdXAgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd29ya3NwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlIHRvIHdoaWNoIHRoZSB3b3Jrc3BhY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE9wdGlvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRySXNEZWZhdWx0ID0gdGhpcy5nZXRBdHQoJ0lzRGVmYXVsdCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZXMgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VJZCA9IHByb3BzLndvcmtzcGFjZUlkO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB0aGlzLndvcmtzcGFjZUlkLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBhaS13b3Jrc3BhY2VyZXNvdXJjZW1heGNvbXB1dGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VJZDogVGhlIElEIG9mIHRoZSB3b3Jrc3BhY2UgdG8gd2hpY2ggdGhlIHdvcmtzcGFjZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBSZXNvdXJjZSBncm91cCBuYW1lLiBJZiB5b3Ugd2FudCB0byBvYnRhaW4gYSByZXNvdXJjZSBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3b3Jrc3BhY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy53b3Jrc3BhY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd29ya3NwYWNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMud29ya3NwYWNlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFdvcmtzcGFjZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSxcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgUmVmcmVzaE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcGFpLXdvcmtzcGFjZXJlc291cmNlbWF4Y29tcHV0ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lczogVGhlIGxpc3Qgb2YgZ3JvdXAgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cE5hbWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFdvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXM6IFRoZSBsaXN0IG9mIHdvcmtzcGFjZSByZXNvdXJjZSBtYXggY29tcHV0ZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VJZDogVGhlIElEIG9mIHRoZSB3b3Jrc3BhY2UgdG8gd2hpY2ggdGhlIHdvcmtzcGFjZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB3b3Jrc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogUmVzb3VyY2UgZ3JvdXAgbmFtZS4gSWYgeW91IHdhbnQgdG8gb2J0YWluIGEgcmVzb3VyY2UgZ3JvdXAgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBOYW1lcyA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWVzJyk7XG4gICAgICAgIHRoaXMuYXR0cldvcmtzcGFjZVJlc291cmNlTWF4Q29tcHV0ZXMgPSB0aGlzLmdldEF0dCgnV29ya3NwYWNlUmVzb3VyY2VNYXhDb21wdXRlcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VJZCA9IHByb3BzLndvcmtzcGFjZUlkO1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB0aGlzLndvcmtzcGFjZUlkLFxuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXb3Jrc3BhY2VSZXNvdXJjZU1heENvbXB1dGVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zV29ya3NwYWNlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcGFpLXdvcmtzcGFjZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXb3Jrc3BhY2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3Jrc3BhY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VOYW1lOiBUaGUgd29ya3NwYWNlIG5hbWUuIFRoZSBmb3JtYXQgaXMgYXMgZm9sbG93czpcbiAgICAgKiAtIDMgdG8gMjMgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGxldHRlcnMsIHVuZGVyc2NvcmVzLCBvciBudW1iZXJzLlxuICAgICAqIC0gTXVzdCBzdGFydCB3aXRoIGEgbGFyZ2Ugb3Igc21hbGwgbGV0dGVyLlxuICAgICAqIC0gVW5pcXVlIGluIHRoZSBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3Jrc3BhY2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1dvcmtzcGFjZXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV29ya3NwYWNlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dvcmtzcGFjZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dvcmtzcGFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3b3Jrc3BhY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndvcmtzcGFjZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV29ya3NwYWNlc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6UEFJOjpXb3Jrc3BhY2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXb3Jrc3BhY2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpQQUk6OldvcmtzcGFjZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV29ya3NwYWNlc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zV29ya3NwYWNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFJlZnJlc2hPcHRpb25zOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSxcbiAgICAgIFdvcmtzcGFjZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndvcmtzcGFjZUlkKSxcbiAgICAgIFdvcmtzcGFjZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud29ya3NwYWNlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IHdvcmtzcGFjZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFdvcmtzcGFjZXNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1wYWktd29ya3NwYWNlc1xuICovXG5leHBvcnQgY2xhc3MgUm9zV29ya3NwYWNlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OlBBSTo6V29ya3NwYWNlc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXb3Jrc3BhY2VJZHM6IFRoZSBsaXN0IG9mIHdvcmtzcGFjZSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3Jrc3BhY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgV29ya3NwYWNlczogVGhlIGxpc3Qgb2Ygd29ya3NwYWNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldvcmtzcGFjZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoT3B0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3b3Jrc3BhY2VOYW1lOiBUaGUgd29ya3NwYWNlIG5hbWUuIFRoZSBmb3JtYXQgaXMgYXMgZm9sbG93czpcbiAgICAgKiAtIDMgdG8gMjMgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGxldHRlcnMsIHVuZGVyc2NvcmVzLCBvciBudW1iZXJzLlxuICAgICAqIC0gTXVzdCBzdGFydCB3aXRoIGEgbGFyZ2Ugb3Igc21hbGwgbGV0dGVyLlxuICAgICAqIC0gVW5pcXVlIGluIHRoZSBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgd29ya3NwYWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1dvcmtzcGFjZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dvcmtzcGFjZXMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0cldvcmtzcGFjZUlkcyA9IHRoaXMuZ2V0QXR0KCdXb3Jrc3BhY2VJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyV29ya3NwYWNlcyA9IHRoaXMuZ2V0QXR0KCdXb3Jrc3BhY2VzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgICAgIHRoaXMud29ya3NwYWNlSWQgPSBwcm9wcy53b3Jrc3BhY2VJZDtcbiAgICAgICAgdGhpcy53b3Jrc3BhY2VOYW1lID0gcHJvcHMud29ya3NwYWNlTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB0aGlzLndvcmtzcGFjZUlkLFxuICAgICAgICAgICAgd29ya3NwYWNlTmFtZTogdGhpcy53b3Jrc3BhY2VOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXb3Jrc3BhY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=