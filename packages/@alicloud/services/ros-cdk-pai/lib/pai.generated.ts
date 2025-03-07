// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCodeSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export interface RosCodeSourceProps {

    /**
     * @Property accessibility: Visibility of the code configuration, possible values:
     * - PRIVATE: In this workspace, it is only visible to you and the administrator.
     * - PUBLIC: In this workspace, it is visible to everyone.
     */
    readonly accessibility: string | ros.IResolvable;

    /**
     * @Property codeRepo: Code repository address.
     */
    readonly codeRepo: string | ros.IResolvable;

    /**
     * @Property displayName: Code source configuration name.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * @Property mountPath: The local Mount Directory of the code.
     */
    readonly mountPath: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property codeBranch: Code repository branch.
     */
    readonly codeBranch?: string | ros.IResolvable;

    /**
     * @Property codeCommit: The code CommitId.
     */
    readonly codeCommit?: string | ros.IResolvable;

    /**
     * @Property codeRepoAccessToken: The Token used to access the code repository.
     */
    readonly codeRepoAccessToken?: string | ros.IResolvable;

    /**
     * @Property codeRepoUserName: The user name of the code repository.
     */
    readonly codeRepoUserName?: string | ros.IResolvable;

    /**
     * @Property description: A detailed description of the code configuration.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCodeSourceProps`
 *
 * @param properties - the TypeScript properties of a `RosCodeSourceProps`
 *
 * @returns the result of the validation.
 */
function RosCodeSourcePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.requiredValidator)(properties.mountPath));
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('codeRepo', ros.requiredValidator)(properties.codeRepo));
    errors.collect(ros.propertyValidator('codeRepo', ros.validateString)(properties.codeRepo));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('codeRepoAccessToken', ros.validateString)(properties.codeRepoAccessToken));
    errors.collect(ros.propertyValidator('accessibility', ros.requiredValidator)(properties.accessibility));
    if(properties.accessibility && (typeof properties.accessibility) !== 'object') {
        errors.collect(ros.propertyValidator('accessibility', ros.validateAllowedValues)({
          data: properties.accessibility,
          allowedValues: ["PRIVATE","PUBLIC"],
        }));
    }
    errors.collect(ros.propertyValidator('accessibility', ros.validateString)(properties.accessibility));
    errors.collect(ros.propertyValidator('codeCommit', ros.validateString)(properties.codeCommit));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('codeBranch', ros.validateString)(properties.codeBranch));
    errors.collect(ros.propertyValidator('codeRepoUserName', ros.validateString)(properties.codeRepoUserName));
    return errors.wrap('supplied properties not correct for "RosCodeSourceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::CodeSource` resource
 *
 * @param properties - the TypeScript properties of a `RosCodeSourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::CodeSource` resource.
 */
// @ts-ignore TS6133
function rosCodeSourcePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCodeSourcePropsValidator(properties).assertSuccess();
    }
    return {
      'Accessibility': ros.stringToRosTemplate(properties.accessibility),
      'CodeRepo': ros.stringToRosTemplate(properties.codeRepo),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'MountPath': ros.stringToRosTemplate(properties.mountPath),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'CodeBranch': ros.stringToRosTemplate(properties.codeBranch),
      'CodeCommit': ros.stringToRosTemplate(properties.codeCommit),
      'CodeRepoAccessToken': ros.stringToRosTemplate(properties.codeRepoAccessToken),
      'CodeRepoUserName': ros.stringToRosTemplate(properties.codeRepoUserName),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::CodeSource`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CodeSource` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export class RosCodeSource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::CodeSource";

    /**
     * @Attribute Accessibility: Visibility of the code configuration.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * @Attribute CodeBranch: Code repository branch.
     */
    public readonly attrCodeBranch: ros.IResolvable;

    /**
     * @Attribute CodeCommit: The code CommitId.
     */
    public readonly attrCodeCommit: ros.IResolvable;

    /**
     * @Attribute CodeRepo: Code repository address.
     */
    public readonly attrCodeRepo: ros.IResolvable;

    /**
     * @Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    public readonly attrCodeRepoAccessToken: ros.IResolvable;

    /**
     * @Attribute CodeRepoUserName: The user name of the code repository.
     */
    public readonly attrCodeRepoUserName: ros.IResolvable;

    /**
     * @Attribute CodeSourcesId: The ID of the created code configuration.
     */
    public readonly attrCodeSourcesId: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the code.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: A detailed description of the code configuration.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DisplayName: Code source configuration name.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute GmtModifyTime: Code configuration modification time. The time format is iso8601.
     */
    public readonly attrGmtModifyTime: ros.IResolvable;

    /**
     * @Attribute MountPath: The local Mount Directory of the code.
     */
    public readonly attrMountPath: ros.IResolvable;

    /**
     * @Attribute UserId: The ID of the creator of the code configuration source.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The ID of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessibility: Visibility of the code configuration, possible values:
     * - PRIVATE: In this workspace, it is only visible to you and the administrator.
     * - PUBLIC: In this workspace, it is visible to everyone.
     */
    public accessibility: string | ros.IResolvable;

    /**
     * @Property codeRepo: Code repository address.
     */
    public codeRepo: string | ros.IResolvable;

    /**
     * @Property displayName: Code source configuration name.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property mountPath: The local Mount Directory of the code.
     */
    public mountPath: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property codeBranch: Code repository branch.
     */
    public codeBranch: string | ros.IResolvable | undefined;

    /**
     * @Property codeCommit: The code CommitId.
     */
    public codeCommit: string | ros.IResolvable | undefined;

    /**
     * @Property codeRepoAccessToken: The Token used to access the code repository.
     */
    public codeRepoAccessToken: string | ros.IResolvable | undefined;

    /**
     * @Property codeRepoUserName: The user name of the code repository.
     */
    public codeRepoUserName: string | ros.IResolvable | undefined;

    /**
     * @Property description: A detailed description of the code configuration.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCodeSourceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCodeSource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessibility = this.getAtt('Accessibility');
        this.attrCodeBranch = this.getAtt('CodeBranch');
        this.attrCodeCommit = this.getAtt('CodeCommit');
        this.attrCodeRepo = this.getAtt('CodeRepo');
        this.attrCodeRepoAccessToken = this.getAtt('CodeRepoAccessToken');
        this.attrCodeRepoUserName = this.getAtt('CodeRepoUserName');
        this.attrCodeSourcesId = this.getAtt('CodeSourcesId');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrGmtModifyTime = this.getAtt('GmtModifyTime');
        this.attrMountPath = this.getAtt('MountPath');
        this.attrUserId = this.getAtt('UserId');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessibility = props.accessibility;
        this.codeRepo = props.codeRepo;
        this.displayName = props.displayName;
        this.mountPath = props.mountPath;
        this.workspaceId = props.workspaceId;
        this.codeBranch = props.codeBranch;
        this.codeCommit = props.codeCommit;
        this.codeRepoAccessToken = props.codeRepoAccessToken;
        this.codeRepoUserName = props.codeRepoUserName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessibility: this.accessibility,
            codeRepo: this.codeRepo,
            displayName: this.displayName,
            mountPath: this.mountPath,
            workspaceId: this.workspaceId,
            codeBranch: this.codeBranch,
            codeCommit: this.codeCommit,
            codeRepoAccessToken: this.codeRepoAccessToken,
            codeRepoUserName: this.codeRepoUserName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCodeSourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
 */
export interface RosDatasetProps {

    /**
     * @Property datasetName: The name of the dataset. The naming rules are as follows:
     * - Start with a lowercase letter, uppercase letter, number, or Chinese.
     * - Can contain an underscore (_) or a dash (-).
     * - 1~127 characters in length.
     */
    readonly datasetName: string | ros.IResolvable;

    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     */
    readonly dataSourceType: string | ros.IResolvable;

    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    readonly property: string | ros.IResolvable;

    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
     * CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
     * CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    readonly uri: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property accessibility: Workspace visibility. The following values are supported:
     * - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
     * - PUBLIC: The workspace is visible to all users.
     */
    readonly accessibility?: string | ros.IResolvable;

    /**
     * @Property dataType: The dataset type. The default value is COMMON. The following values are supported:
     * - COMMON: COMMON.
     * - PIC: picture.
     * - TEXT: TEXT.
     * - VIDEO: VIDEO.
     * - AUDIO: AUDIO.
     */
    readonly dataType?: string | ros.IResolvable;

    /**
     * @Property description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;

    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    readonly sourceType?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.accessibility && (typeof properties.accessibility) !== 'object') {
        errors.collect(ros.propertyValidator('accessibility', ros.validateAllowedValues)({
          data: properties.accessibility,
          allowedValues: ["PRIVATE","PUBLIC"],
        }));
    }
    errors.collect(ros.propertyValidator('accessibility', ros.validateString)(properties.accessibility));
    errors.collect(ros.propertyValidator('datasetName', ros.requiredValidator)(properties.datasetName));
    errors.collect(ros.propertyValidator('datasetName', ros.validateString)(properties.datasetName));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["USER","ITAG","PAI-PUBLIC-DATASET"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('dataSourceType', ros.requiredValidator)(properties.dataSourceType));
    if(properties.dataSourceType && (typeof properties.dataSourceType) !== 'object') {
        errors.collect(ros.propertyValidator('dataSourceType', ros.validateAllowedValues)({
          data: properties.dataSourceType,
          allowedValues: ["OSS","NAS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataSourceType', ros.validateString)(properties.dataSourceType));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.dataType && (typeof properties.dataType) !== 'object') {
        errors.collect(ros.propertyValidator('dataType', ros.validateAllowedValues)({
          data: properties.dataType,
          allowedValues: ["COMMON","PIC","TEXT","VIDEO","AUDIO"],
        }));
    }
    errors.collect(ros.propertyValidator('dataType', ros.validateString)(properties.dataType));
    errors.collect(ros.propertyValidator('uri', ros.requiredValidator)(properties.uri));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    errors.collect(ros.propertyValidator('property', ros.requiredValidator)(properties.property));
    if(properties.property && (typeof properties.property) !== 'object') {
        errors.collect(ros.propertyValidator('property', ros.validateAllowedValues)({
          data: properties.property,
          allowedValues: ["FILE","DIRECTORY"],
        }));
    }
    errors.collect(ros.propertyValidator('property', ros.validateString)(properties.property));
    return errors.wrap('supplied properties not correct for "RosDatasetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Dataset` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Dataset` resource.
 */
// @ts-ignore TS6133
function rosDatasetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetPropsValidator(properties).assertSuccess();
    }
    return {
      'DatasetName': ros.stringToRosTemplate(properties.datasetName),
      'DataSourceType': ros.stringToRosTemplate(properties.dataSourceType),
      'Property': ros.stringToRosTemplate(properties.property),
      'Uri': ros.stringToRosTemplate(properties.uri),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'Accessibility': ros.stringToRosTemplate(properties.accessibility),
      'DataType': ros.stringToRosTemplate(properties.dataType),
      'Description': ros.stringToRosTemplate(properties.description),
      'Options': ros.stringToRosTemplate(properties.options),
      'SourceId': ros.stringToRosTemplate(properties.sourceId),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Dataset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
 */
export class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Dataset";

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
     * @Property datasetName: The name of the dataset. The naming rules are as follows:
     * - Start with a lowercase letter, uppercase letter, number, or Chinese.
     * - Can contain an underscore (_) or a dash (-).
     * - 1~127 characters in length.
     */
    public datasetName: string | ros.IResolvable;

    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     */
    public dataSourceType: string | ros.IResolvable;

    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    public property: string | ros.IResolvable;

    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
     * CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
     * CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    public uri: string | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property accessibility: Workspace visibility. The following values are supported:
     * - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
     * - PUBLIC: The workspace is visible to all users.
     */
    public accessibility: string | ros.IResolvable | undefined;

    /**
     * @Property dataType: The dataset type. The default value is COMMON. The following values are supported:
     * - COMMON: COMMON.
     * - PIC: picture.
     * - TEXT: TEXT.
     * - VIDEO: VIDEO.
     * - AUDIO: AUDIO.
     */
    public dataType: string | ros.IResolvable | undefined;

    /**
     * @Property description: Custom descriptions of datasets to distinguish between different datasets.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    public options: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    public sourceType: string | ros.IResolvable | undefined;

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
        this.datasetName = props.datasetName;
        this.dataSourceType = props.dataSourceType;
        this.property = props.property;
        this.uri = props.uri;
        this.workspaceId = props.workspaceId;
        this.accessibility = props.accessibility;
        this.dataType = props.dataType;
        this.description = props.description;
        this.options = props.options;
        this.sourceId = props.sourceId;
        this.sourceType = props.sourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasetName: this.datasetName,
            dataSourceType: this.dataSourceType,
            property: this.property,
            uri: this.uri,
            workspaceId: this.workspaceId,
            accessibility: this.accessibility,
            dataType: this.dataType,
            description: this.description,
            options: this.options,
            sourceId: this.sourceId,
            sourceType: this.sourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDatasetVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
 */
export interface RosDatasetVersionProps {

    /**
     * @Property datasetId: The ID of the dataset.
     */
    readonly datasetId: string | ros.IResolvable;

    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     * - CPFS
     */
    readonly dataSourceType: string | ros.IResolvable;

    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    readonly property: string | ros.IResolvable;

    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:\/\/bucket.endpoint\/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
     * CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
     * CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    readonly uri: string | ros.IResolvable;

    /**
     * @Property dataCount: The number of dataset files, in units of pieces.
     */
    readonly dataCount?: number | ros.IResolvable;

    /**
     * @Property dataSize: The size of the dataset file in bytes.
     */
    readonly dataSize?: number | ros.IResolvable;

    /**
     * @Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property labels: Dataset version tag list.
     */
    readonly labels?: Array<RosDatasetVersion.LabelsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;

    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    readonly sourceType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasetVersionProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetVersionProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetVersionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["USER","ITAG","PAI-PUBLIC-DATASET"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('dataSourceType', ros.requiredValidator)(properties.dataSourceType));
    if(properties.dataSourceType && (typeof properties.dataSourceType) !== 'object') {
        errors.collect(ros.propertyValidator('dataSourceType', ros.validateAllowedValues)({
          data: properties.dataSourceType,
          allowedValues: ["OSS","NAS","CPFS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataSourceType', ros.validateString)(properties.dataSourceType));
    errors.collect(ros.propertyValidator('dataSize', ros.validateNumber)(properties.dataSize));
    errors.collect(ros.propertyValidator('dataCount', ros.validateNumber)(properties.dataCount));
    if(properties.labels && (Array.isArray(properties.labels) || (typeof properties.labels) === 'string')) {
        errors.collect(ros.propertyValidator('labels', ros.validateLength)({
            data: properties.labels.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosDatasetVersion_LabelsPropertyValidator))(properties.labels));
    errors.collect(ros.propertyValidator('property', ros.requiredValidator)(properties.property));
    if(properties.property && (typeof properties.property) !== 'object') {
        errors.collect(ros.propertyValidator('property', ros.validateAllowedValues)({
          data: properties.property,
          allowedValues: ["FILE","DIRECTORY"],
        }));
    }
    errors.collect(ros.propertyValidator('property', ros.validateString)(properties.property));
    errors.collect(ros.propertyValidator('uri', ros.requiredValidator)(properties.uri));
    if(properties.uri && (typeof properties.uri) !== 'object') {
        errors.collect(ros.propertyValidator('uri', ros.validateAllowedPattern)({
          data: properties.uri,
          reg: /^(oss:\/\/|nas:\/\/).*/
        }));
    }
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    errors.collect(ros.propertyValidator('datasetId', ros.requiredValidator)(properties.datasetId));
    errors.collect(ros.propertyValidator('datasetId', ros.validateString)(properties.datasetId));
    return errors.wrap('supplied properties not correct for "RosDatasetVersionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::DatasetVersion` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetVersionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::DatasetVersion` resource.
 */
// @ts-ignore TS6133
function rosDatasetVersionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetVersionPropsValidator(properties).assertSuccess();
    }
    return {
      'DatasetId': ros.stringToRosTemplate(properties.datasetId),
      'DataSourceType': ros.stringToRosTemplate(properties.dataSourceType),
      'Property': ros.stringToRosTemplate(properties.property),
      'Uri': ros.stringToRosTemplate(properties.uri),
      'DataCount': ros.numberToRosTemplate(properties.dataCount),
      'DataSize': ros.numberToRosTemplate(properties.dataSize),
      'Description': ros.stringToRosTemplate(properties.description),
      'Labels': ros.listMapper(rosDatasetVersionLabelsPropertyToRosTemplate)(properties.labels),
      'Options': ros.stringToRosTemplate(properties.options),
      'SourceId': ros.stringToRosTemplate(properties.sourceId),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::DatasetVersion`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DatasetVersion` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
 */
export class RosDatasetVersion extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::DatasetVersion";

    /**
     * @Attribute VersionName: Dataset version name.
     */
    public readonly attrVersionName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property datasetId: The ID of the dataset.
     */
    public datasetId: string | ros.IResolvable;

    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     * - CPFS
     */
    public dataSourceType: string | ros.IResolvable;

    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    public property: string | ros.IResolvable;

    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:\/\/bucket.endpoint\/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
     * CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
     * CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    public uri: string | ros.IResolvable;

    /**
     * @Property dataCount: The number of dataset files, in units of pieces.
     */
    public dataCount: number | ros.IResolvable | undefined;

    /**
     * @Property dataSize: The size of the dataset file in bytes.
     */
    public dataSize: number | ros.IResolvable | undefined;

    /**
     * @Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property labels: Dataset version tag list.
     */
    public labels: Array<RosDatasetVersion.LabelsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    public options: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetVersionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatasetVersion.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVersionName = this.getAtt('VersionName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.datasetId = props.datasetId;
        this.dataSourceType = props.dataSourceType;
        this.property = props.property;
        this.uri = props.uri;
        this.dataCount = props.dataCount;
        this.dataSize = props.dataSize;
        this.description = props.description;
        this.labels = props.labels;
        this.options = props.options;
        this.sourceId = props.sourceId;
        this.sourceType = props.sourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            datasetId: this.datasetId,
            dataSourceType: this.dataSourceType,
            property: this.property,
            uri: this.uri,
            dataCount: this.dataCount,
            dataSize: this.dataSize,
            description: this.description,
            labels: this.labels,
            options: this.options,
            sourceId: this.sourceId,
            sourceType: this.sourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetVersionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDatasetVersion {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value: The value of the tag. Maximum 128 bytes, does not support equal signs (=) and half-width commas (,).
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the tag. Maximum 128 bytes, does not support equal signs (=) and half-width commas (,).
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosDatasetVersion_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::DatasetVersion.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::DatasetVersion.Labels` resource.
 */
// @ts-ignore TS6133
function rosDatasetVersionLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDatasetVersion_LabelsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosExperiment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
export interface RosExperimentProps {

    /**
     * @Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    readonly artifactUri: string | ros.IResolvable;

    /**
     * @Property experimentName: Name is the name of the experiment, unique in a namespace.
     */
    readonly experimentName: string | ros.IResolvable;

    /**
     * @Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property accessibility: Experimental Visibility.
     */
    readonly accessibility?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosExperimentProps`
 *
 * @param properties - the TypeScript properties of a `RosExperimentProps`
 *
 * @returns the result of the validation.
 */
function RosExperimentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.accessibility && (typeof properties.accessibility) !== 'object') {
        errors.collect(ros.propertyValidator('accessibility', ros.validateAllowedValues)({
          data: properties.accessibility,
          allowedValues: ["PRIVATE","PUBLIC"],
        }));
    }
    errors.collect(ros.propertyValidator('accessibility', ros.validateString)(properties.accessibility));
    errors.collect(ros.propertyValidator('artifactUri', ros.requiredValidator)(properties.artifactUri));
    errors.collect(ros.propertyValidator('artifactUri', ros.validateString)(properties.artifactUri));
    errors.collect(ros.propertyValidator('experimentName', ros.requiredValidator)(properties.experimentName));
    errors.collect(ros.propertyValidator('experimentName', ros.validateString)(properties.experimentName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    return errors.wrap('supplied properties not correct for "RosExperimentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Experiment` resource
 *
 * @param properties - the TypeScript properties of a `RosExperimentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Experiment` resource.
 */
// @ts-ignore TS6133
function rosExperimentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosExperimentPropsValidator(properties).assertSuccess();
    }
    return {
      'ArtifactUri': ros.stringToRosTemplate(properties.artifactUri),
      'ExperimentName': ros.stringToRosTemplate(properties.experimentName),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'Accessibility': ros.stringToRosTemplate(properties.accessibility),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Experiment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Experiment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
export class RosExperiment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Experiment";

    /**
     * @Attribute Accessibility: Experimental Visibility.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * @Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    public readonly attrArtifactUri: ros.IResolvable;

    /**
     * @Attribute CreateTime: GmtCreateTime is time when this entity is created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
     */
    public readonly attrExperimentId: ros.IResolvable;

    /**
     * @Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
     */
    public readonly attrExperimentName: ros.IResolvable;

    /**
     * @Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
     */
    public readonly attrGmtModifiedTime: ros.IResolvable;

    /**
     * @Attribute Labels: Labels are tags of the experiment.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * @Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * @Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
     */
    public readonly attrTensorboardLogUri: ros.IResolvable;

    /**
     * @Attribute UserId: UserId is the user account id which created this entity.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    public artifactUri: string | ros.IResolvable;

    /**
     * @Property experimentName: Name is the name of the experiment, unique in a namespace.
     */
    public experimentName: string | ros.IResolvable;

    /**
     * @Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property accessibility: Experimental Visibility.
     */
    public accessibility: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExperimentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosExperiment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessibility = this.getAtt('Accessibility');
        this.attrArtifactUri = this.getAtt('ArtifactUri');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrExperimentId = this.getAtt('ExperimentId');
        this.attrExperimentName = this.getAtt('ExperimentName');
        this.attrGmtModifiedTime = this.getAtt('GmtModifiedTime');
        this.attrLabels = this.getAtt('Labels');
        this.attrOwnerId = this.getAtt('OwnerId');
        this.attrTensorboardLogUri = this.getAtt('TensorboardLogUri');
        this.attrUserId = this.getAtt('UserId');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.artifactUri = props.artifactUri;
        this.experimentName = props.experimentName;
        this.workspaceId = props.workspaceId;
        this.accessibility = props.accessibility;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            artifactUri: this.artifactUri,
            experimentName: this.experimentName,
            workspaceId: this.workspaceId,
            accessibility: this.accessibility,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosExperimentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRun`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
export interface RosRunProps {

    /**
     * @Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    readonly experimentId: string | ros.IResolvable;

    /**
     * @Property runName: The name of the Run.
     */
    readonly runName?: string | ros.IResolvable;

    /**
     * @Property sourceId: Attribute Resource field representing the source task ID.
     */
    readonly sourceId?: string | ros.IResolvable;

    /**
     * @Property sourceType: Resource attribute fields representing the source type.
     */
    readonly sourceType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRunProps`
 *
 * @param properties - the TypeScript properties of a `RosRunProps`
 *
 * @returns the result of the validation.
 */
function RosRunPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('experimentId', ros.requiredValidator)(properties.experimentId));
    errors.collect(ros.propertyValidator('experimentId', ros.validateString)(properties.experimentId));
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('runName', ros.validateString)(properties.runName));
    return errors.wrap('supplied properties not correct for "RosRunProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Run` resource
 *
 * @param properties - the TypeScript properties of a `RosRunProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Run` resource.
 */
// @ts-ignore TS6133
function rosRunPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRunPropsValidator(properties).assertSuccess();
    }
    return {
      'ExperimentId': ros.stringToRosTemplate(properties.experimentId),
      'RunName': ros.stringToRosTemplate(properties.runName),
      'SourceId': ros.stringToRosTemplate(properties.sourceId),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Run`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Run` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
export class RosRun extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Run";

    /**
     * @Attribute Accessibility: Resource attribute fields representing visibility.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the Run.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    public readonly attrExperimentId: ros.IResolvable;

    /**
     * @Attribute GmtModifiedTime: Resource attribute fields representing edit time.
     */
    public readonly attrGmtModifiedTime: ros.IResolvable;

    /**
     * @Attribute Labels: Run attribute field representing the run tag.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * @Attribute Metrics: Resource attribute field representing the run metric.
     */
    public readonly attrMetrics: ros.IResolvable;

    /**
     * @Attribute OwnerId: Resource attribute field representing owner.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * @Attribute Params: Resource attribute field representing the run parameter.
     */
    public readonly attrParams: ros.IResolvable;

    /**
     * @Attribute RunId: The ID of the Run.
     */
    public readonly attrRunId: ros.IResolvable;

    /**
     * @Attribute RunName: The name of the Run.
     */
    public readonly attrRunName: ros.IResolvable;

    /**
     * @Attribute SourceId: Attribute Resource field representing the source task ID.
     */
    public readonly attrSourceId: ros.IResolvable;

    /**
     * @Attribute SourceType: Run attribute fields representing the source type.
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute UserId: Run attribute field representing creator ID.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    public experimentId: string | ros.IResolvable;

    /**
     * @Property runName: The name of the Run.
     */
    public runName: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: Attribute Resource field representing the source task ID.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: Resource attribute fields representing the source type.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRun.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessibility = this.getAtt('Accessibility');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrExperimentId = this.getAtt('ExperimentId');
        this.attrGmtModifiedTime = this.getAtt('GmtModifiedTime');
        this.attrLabels = this.getAtt('Labels');
        this.attrMetrics = this.getAtt('Metrics');
        this.attrOwnerId = this.getAtt('OwnerId');
        this.attrParams = this.getAtt('Params');
        this.attrRunId = this.getAtt('RunId');
        this.attrRunName = this.getAtt('RunName');
        this.attrSourceId = this.getAtt('SourceId');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrUserId = this.getAtt('UserId');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.experimentId = props.experimentId;
        this.runName = props.runName;
        this.sourceId = props.sourceId;
        this.sourceType = props.sourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            experimentId: this.experimentId,
            runName: this.runName,
            sourceId: this.sourceId,
            sourceType: this.sourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRunPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
export interface RosServiceProps {

    /**
     * @Property serviceConfig: Service configuration information.
     */
    readonly serviceConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property develop: Whether to enter the development mode.
     */
    readonly develop?: string | ros.IResolvable;

    /**
     * @Property labels: Service Tag.
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('develop', ros.validateString)(properties.develop));
    errors.collect(ros.propertyValidator('serviceConfig', ros.requiredValidator)(properties.serviceConfig));
    errors.collect(ros.propertyValidator('serviceConfig', ros.hashValidator(ros.validateAny))(properties.serviceConfig));
    errors.collect(ros.propertyValidator('labels', ros.hashValidator(ros.validateAny))(properties.labels));
    return errors.wrap('supplied properties not correct for "RosServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Service` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Service` resource.
 */
// @ts-ignore TS6133
function rosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
      'ServiceConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.serviceConfig),
      'Develop': ros.stringToRosTemplate(properties.develop),
      'Labels': ros.hashMapper(ros.objectToRosTemplate)(properties.labels),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Service`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
export class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Service";

    /**
     * @Attribute AccessToken: Service Request authentication token.
     */
    public readonly attrAccessToken: ros.IResolvable;

    /**
     * @Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    public readonly attrCallerUid: ros.IResolvable;

    /**
     * @Attribute Cpu: Number of service CPU cores.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time of the service.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CurrentVersion: Current running version of the service.
     */
    public readonly attrCurrentVersion: ros.IResolvable;

    /**
     * @Attribute ExtraData: Service Extra Information.
     */
    public readonly attrExtraData: ros.IResolvable;

    /**
     * @Attribute Gpu: Number of service GPU cards.
     */
    public readonly attrGpu: ros.IResolvable;

    /**
     * @Attribute Image: Service Deployment Mirroring.
     */
    public readonly attrImage: ros.IResolvable;

    /**
     * @Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * @Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * @Attribute Labels: Service Tag.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * @Attribute LatestVersion: The latest version of the service.
     */
    public readonly attrLatestVersion: ros.IResolvable;

    /**
     * @Attribute Memory: Memory of service (MB).
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * @Attribute Message: Latest information on services.
     */
    public readonly attrMessage: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace to which the service belongs.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute ParentUid: Primary account ID of the creator.
     */
    public readonly attrParentUid: ros.IResolvable;

    /**
     * @Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    public readonly attrPendingInstance: ros.IResolvable;

    /**
     * @Attribute Reason: Service deployment failure reason.
     */
    public readonly attrReason: ros.IResolvable;

    /**
     * @Attribute Resource: The ID of the resource group to which the service belongs.
     */
    public readonly attrResource: ros.IResolvable;

    /**
     * @Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    public readonly attrResourceAlias: ros.IResolvable;

    /**
     * @Attribute Role: Grouping Service Role.
     */
    public readonly attrRole: ros.IResolvable;

    /**
     * @Attribute RoleAttrs: Grouping Service Role Properties.
     */
    public readonly attrRoleAttrs: ros.IResolvable;

    /**
     * @Attribute RunningInstance: Number of instances in service running.
     */
    public readonly attrRunningInstance: ros.IResolvable;

    /**
     * @Attribute SafetyLock: Service Security Lock Status.
     */
    public readonly attrSafetyLock: ros.IResolvable;

    /**
     * @Attribute ServiceConfig: Service configuration information.
     */
    public readonly attrServiceConfig: ros.IResolvable;

    /**
     * @Attribute ServiceGroup: Group to which the service belongs.
     */
    public readonly attrServiceGroup: ros.IResolvable;

    /**
     * @Attribute ServiceName: Service Name.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * @Attribute ServiceUid: Unique Service ID.
     */
    public readonly attrServiceUid: ros.IResolvable;

    /**
     * @Attribute TotalInstance: Total number of instances required by the service.
     */
    public readonly attrTotalInstance: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Service Last Updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute Weight: Packet Service Traffic Weight.
     */
    public readonly attrWeight: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceConfig: Service configuration information.
     */
    public serviceConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property develop: Whether to enter the development mode.
     */
    public develop: string | ros.IResolvable | undefined;

    /**
     * @Property labels: Service Tag.
     */
    public labels: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

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
        this.serviceConfig = props.serviceConfig;
        this.develop = props.develop;
        this.labels = props.labels;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceConfig: this.serviceConfig,
            develop: this.develop,
            labels: this.labels,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
export interface RosWorkspaceProps {

    /**
     * @Property description: Workspace description, no more than 80 characters.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    readonly envTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName: string | ros.IResolvable;

    /**
     * @Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly displayName?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.displayName && (typeof properties.displayName) !== 'object') {
        errors.collect(ros.propertyValidator('displayName', ros.validateAllowedPattern)({
          data: properties.displayName,
          reg: /^[a-zA-Z][_a-zA-Z0-9]{2,22}$/
        }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('workspaceName', ros.requiredValidator)(properties.workspaceName));
    if(properties.workspaceName && (typeof properties.workspaceName) !== 'object') {
        errors.collect(ros.propertyValidator('workspaceName', ros.validateAllowedPattern)({
          data: properties.workspaceName,
          reg: /^[a-zA-Z][_a-zA-Z0-9]{2,22}$/
        }));
    }
    errors.collect(ros.propertyValidator('workspaceName', ros.validateString)(properties.workspaceName));
    errors.collect(ros.propertyValidator('envTypes', ros.requiredValidator)(properties.envTypes));
    errors.collect(ros.propertyValidator('envTypes', ros.listValidator(ros.validateString))(properties.envTypes));
    return errors.wrap('supplied properties not correct for "RosWorkspaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::Workspace` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::Workspace` resource.
 */
// @ts-ignore TS6133
function rosWorkspacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspacePropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'EnvTypes': ros.listMapper(ros.stringToRosTemplate)(properties.envTypes),
      'WorkspaceName': ros.stringToRosTemplate(properties.workspaceName),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Workspace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
export class RosWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Workspace";

    /**
     * @Attribute AdminNames: List of administrator account names.
     */
    public readonly attrAdminNames: ros.IResolvable;

    /**
     * @Attribute Creator: The user ID of the creator.
     */
    public readonly attrCreator: ros.IResolvable;

    /**
     * @Attribute Description: Workspace description, no more than 80 characters.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute EnvTypes: Environments contained in the workspace:.
     */
    public readonly attrEnvTypes: ros.IResolvable;

    /**
     * @Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    public readonly attrExtraInfos: ros.IResolvable;

    /**
     * @Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * @Attribute Users: List of users.
     */
    public readonly attrUsers: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The ID of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * @Attribute WorkspaceName: The workspace name.
     */
    public readonly attrWorkspaceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Workspace description, no more than 80 characters.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    public envTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    public workspaceName: string | ros.IResolvable;

    /**
     * @Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    public displayName: string | ros.IResolvable | undefined;

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
        this.attrOwner = this.getAtt('Owner');
        this.attrUsers = this.getAtt('Users');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');
        this.attrWorkspaceName = this.getAtt('WorkspaceName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.envTypes = props.envTypes;
        this.workspaceName = props.workspaceName;
        this.displayName = props.displayName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            envTypes: this.envTypes,
            workspaceName: this.workspaceName,
            displayName: this.displayName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkspaceResourceDlc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc
 */
export interface RosWorkspaceResourceDlcProps {

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceDlc.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.option && (typeof properties.option) !== 'object') {
        errors.collect(ros.propertyValidator('option', ros.validateAllowedValues)({
          data: properties.option,
          allowedValues: ["CreateAndAttach","Attach"],
        }));
    }
    errors.collect(ros.propertyValidator('option', ros.validateString)(properties.option));
    errors.collect(ros.propertyValidator('resources', ros.requiredValidator)(properties.resources));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosWorkspaceResourceDlc_ResourcesPropertyValidator))(properties.resources));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceDlcProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceDlc` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceDlcProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceDlc` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceDlcPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceDlcPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Resources': ros.listMapper(rosWorkspaceResourceDlcResourcesPropertyToRosTemplate)(properties.resources),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'IsDefault': ros.booleanToRosTemplate(properties.isDefault),
      'Option': ros.stringToRosTemplate(properties.option),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::WorkspaceResourceDlc`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc
 */
export class RosWorkspaceResourceDlc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::WorkspaceResourceDlc";

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
     * @Property resources: Resource List.
     */
    public resources: Array<RosWorkspaceResourceDlc.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    public option: string | ros.IResolvable | undefined;

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
        this.resources = props.resources;
        this.workspaceId = props.workspaceId;
        this.isDefault = props.isDefault;
        this.option = props.option;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            resources: this.resources,
            workspaceId: this.workspaceId,
            isDefault: this.isDefault,
            option: this.option,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceDlcPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosWorkspaceResourceDlc {
    /**
     * @stability external
     */
    export interface ResourcesProperty {
        /**
         * @Property workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
         */
        readonly workspaceResourceWorkspaceId: string | ros.IResolvable;
        /**
         * @Property workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
         */
        readonly workspaceResourceName: string | ros.IResolvable;
        /**
         * @Property spec: Resource Specifications.
         */
        readonly spec?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property envType: Environment, Support:
     * - dev: Development
     * - prod: Production.
         */
        readonly envType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceDlc_ResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceResourceWorkspaceId', ros.requiredValidator)(properties.workspaceResourceWorkspaceId));
    errors.collect(ros.propertyValidator('workspaceResourceWorkspaceId', ros.validateString)(properties.workspaceResourceWorkspaceId));
    errors.collect(ros.propertyValidator('workspaceResourceName', ros.requiredValidator)(properties.workspaceResourceName));
    errors.collect(ros.propertyValidator('workspaceResourceName', ros.validateString)(properties.workspaceResourceName));
    errors.collect(ros.propertyValidator('spec', ros.hashValidator(ros.validateAny))(properties.spec));
    errors.collect(ros.propertyValidator('envType', ros.requiredValidator)(properties.envType));
    if(properties.envType && (typeof properties.envType) !== 'object') {
        errors.collect(ros.propertyValidator('envType', ros.validateAllowedValues)({
          data: properties.envType,
          allowedValues: ["dev","prod"],
        }));
    }
    errors.collect(ros.propertyValidator('envType', ros.validateString)(properties.envType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceDlc.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceDlc.Resources` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceDlcResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWorkspaceResourceDlc_ResourcesPropertyValidator(properties).assertSuccess();
    return {
      'WorkspaceResourceWorkspaceId': ros.stringToRosTemplate(properties.workspaceResourceWorkspaceId),
      'WorkspaceResourceName': ros.stringToRosTemplate(properties.workspaceResourceName),
      'Spec': ros.hashMapper(ros.objectToRosTemplate)(properties.spec),
      'EnvType': ros.stringToRosTemplate(properties.envType),
    };
}

/**
 * Properties for defining a `RosWorkspaceResourceFlink`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export interface RosWorkspaceResourceFlinkProps {

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceFlink.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.option && (typeof properties.option) !== 'object') {
        errors.collect(ros.propertyValidator('option', ros.validateAllowedValues)({
          data: properties.option,
          allowedValues: ["CreateAndAttach","Attach"],
        }));
    }
    errors.collect(ros.propertyValidator('option', ros.validateString)(properties.option));
    errors.collect(ros.propertyValidator('resources', ros.requiredValidator)(properties.resources));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosWorkspaceResourceFlink_ResourcesPropertyValidator))(properties.resources));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceFlinkProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceFlink` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceFlinkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceFlink` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceFlinkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceFlinkPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Resources': ros.listMapper(rosWorkspaceResourceFlinkResourcesPropertyToRosTemplate)(properties.resources),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'IsDefault': ros.booleanToRosTemplate(properties.isDefault),
      'Option': ros.stringToRosTemplate(properties.option),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::WorkspaceResourceFlink`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlink` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export class RosWorkspaceResourceFlink extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::WorkspaceResourceFlink";

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
     * @Property resources: Resource List.
     */
    public resources: Array<RosWorkspaceResourceFlink.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    public option: string | ros.IResolvable | undefined;

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
        this.resources = props.resources;
        this.workspaceId = props.workspaceId;
        this.isDefault = props.isDefault;
        this.option = props.option;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            resources: this.resources,
            workspaceId: this.workspaceId,
            isDefault: this.isDefault,
            option: this.option,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceFlinkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosWorkspaceResourceFlink {
    /**
     * @stability external
     */
    export interface ResourcesProperty {
        /**
         * @Property workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
         */
        readonly workspaceResourceWorkspaceId: string | ros.IResolvable;
        /**
         * @Property workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
         */
        readonly workspaceResourceName: string | ros.IResolvable;
        /**
         * @Property spec: Resource Specifications.
         */
        readonly spec?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property envType: Environment, Support:
     * - dev: Development
     * - prod: Production.
         */
        readonly envType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceFlink_ResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceResourceWorkspaceId', ros.requiredValidator)(properties.workspaceResourceWorkspaceId));
    errors.collect(ros.propertyValidator('workspaceResourceWorkspaceId', ros.validateString)(properties.workspaceResourceWorkspaceId));
    errors.collect(ros.propertyValidator('workspaceResourceName', ros.requiredValidator)(properties.workspaceResourceName));
    errors.collect(ros.propertyValidator('workspaceResourceName', ros.validateString)(properties.workspaceResourceName));
    errors.collect(ros.propertyValidator('spec', ros.hashValidator(ros.validateAny))(properties.spec));
    errors.collect(ros.propertyValidator('envType', ros.requiredValidator)(properties.envType));
    if(properties.envType && (typeof properties.envType) !== 'object') {
        errors.collect(ros.propertyValidator('envType', ros.validateAllowedValues)({
          data: properties.envType,
          allowedValues: ["dev","prod"],
        }));
    }
    errors.collect(ros.propertyValidator('envType', ros.validateString)(properties.envType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceFlink.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceFlink.Resources` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceFlinkResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWorkspaceResourceFlink_ResourcesPropertyValidator(properties).assertSuccess();
    return {
      'WorkspaceResourceWorkspaceId': ros.stringToRosTemplate(properties.workspaceResourceWorkspaceId),
      'WorkspaceResourceName': ros.stringToRosTemplate(properties.workspaceResourceName),
      'Spec': ros.hashMapper(ros.objectToRosTemplate)(properties.spec),
      'EnvType': ros.stringToRosTemplate(properties.envType),
    };
}

/**
 * Properties for defining a `RosWorkspaceResourceMaxCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
export interface RosWorkspaceResourceMaxComputeProps {

    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceMaxCompute.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    if(properties.workspaceId && (Array.isArray(properties.workspaceId) || (typeof properties.workspaceId) === 'string')) {
        errors.collect(ros.propertyValidator('workspaceId', ros.validateLength)({
            data: properties.workspaceId.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.option && (typeof properties.option) !== 'object') {
        errors.collect(ros.propertyValidator('option', ros.validateAllowedValues)({
          data: properties.option,
          allowedValues: ["CreateAndAttach","Attach"],
        }));
    }
    errors.collect(ros.propertyValidator('option', ros.validateString)(properties.option));
    errors.collect(ros.propertyValidator('resources', ros.requiredValidator)(properties.resources));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosWorkspaceResourceMaxCompute_ResourcesPropertyValidator))(properties.resources));
    return errors.wrap('supplied properties not correct for "RosWorkspaceResourceMaxComputeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceMaxCompute` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspaceResourceMaxComputeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceMaxCompute` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceMaxComputePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspaceResourceMaxComputePropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Resources': ros.listMapper(rosWorkspaceResourceMaxComputeResourcesPropertyToRosTemplate)(properties.resources),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'IsDefault': ros.booleanToRosTemplate(properties.isDefault),
      'Option': ros.stringToRosTemplate(properties.option),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::WorkspaceResourceMaxCompute`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxCompute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
export class RosWorkspaceResourceMaxCompute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::WorkspaceResourceMaxCompute";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute GroupName: Resource group name.
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
     * @Property resources: Resource List.
     */
    public resources: Array<RosWorkspaceResourceMaxCompute.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    public option: string | ros.IResolvable | undefined;

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
        this.resources = props.resources;
        this.workspaceId = props.workspaceId;
        this.isDefault = props.isDefault;
        this.option = props.option;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            resources: this.resources,
            workspaceId: this.workspaceId,
            isDefault: this.isDefault,
            option: this.option,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspaceResourceMaxComputePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosWorkspaceResourceMaxCompute {
    /**
     * @stability external
     */
    export interface QuotasProperty {
        /**
         * @Property quotaId: The resource quota ID.
     * Obtain the ID of the Quota through ListQuotas.
         */
        readonly quotaId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QuotasProperty`
 *
 * @param properties - the TypeScript properties of a `QuotasProperty`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceMaxCompute_QuotasPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('quotaId', ros.requiredValidator)(properties.quotaId));
    errors.collect(ros.propertyValidator('quotaId', ros.validateString)(properties.quotaId));
    return errors.wrap('supplied properties not correct for "QuotasProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceMaxCompute.Quotas` resource
 *
 * @param properties - the TypeScript properties of a `QuotasProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceMaxCompute.Quotas` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceMaxComputeQuotasPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWorkspaceResourceMaxCompute_QuotasPropertyValidator(properties).assertSuccess();
    return {
      'QuotaId': ros.stringToRosTemplate(properties.quotaId),
    };
}

export namespace RosWorkspaceResourceMaxCompute {
    /**
     * @stability external
     */
    export interface ResourcesProperty {
        /**
         * @Property workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
         */
        readonly workspaceResourceWorkspaceId: string | ros.IResolvable;
        /**
         * @Property quotas: The list of resource quotas. Currently, only MaxCompute resources have resource quotas.
         */
        readonly quotas?: Array<RosWorkspaceResourceMaxCompute.QuotasProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
         */
        readonly workspaceResourceName: string | ros.IResolvable;
        /**
         * @Property spec: Resource Specifications.
         */
        readonly spec?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property envType: Environment, Support:
     * - dev: Development
     * - prod: Production.
         */
        readonly envType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosWorkspaceResourceMaxCompute_ResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceResourceWorkspaceId', ros.requiredValidator)(properties.workspaceResourceWorkspaceId));
    errors.collect(ros.propertyValidator('workspaceResourceWorkspaceId', ros.validateString)(properties.workspaceResourceWorkspaceId));
    if(properties.quotas && (Array.isArray(properties.quotas) || (typeof properties.quotas) === 'string')) {
        errors.collect(ros.propertyValidator('quotas', ros.validateLength)({
            data: properties.quotas.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('quotas', ros.listValidator(RosWorkspaceResourceMaxCompute_QuotasPropertyValidator))(properties.quotas));
    errors.collect(ros.propertyValidator('workspaceResourceName', ros.requiredValidator)(properties.workspaceResourceName));
    errors.collect(ros.propertyValidator('workspaceResourceName', ros.validateString)(properties.workspaceResourceName));
    errors.collect(ros.propertyValidator('spec', ros.hashValidator(ros.validateAny))(properties.spec));
    errors.collect(ros.propertyValidator('envType', ros.requiredValidator)(properties.envType));
    if(properties.envType && (typeof properties.envType) !== 'object') {
        errors.collect(ros.propertyValidator('envType', ros.validateAllowedValues)({
          data: properties.envType,
          allowedValues: ["dev","prod"],
        }));
    }
    errors.collect(ros.propertyValidator('envType', ros.validateString)(properties.envType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceMaxCompute.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAI::WorkspaceResourceMaxCompute.Resources` resource.
 */
// @ts-ignore TS6133
function rosWorkspaceResourceMaxComputeResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWorkspaceResourceMaxCompute_ResourcesPropertyValidator(properties).assertSuccess();
    return {
      'WorkspaceResourceWorkspaceId': ros.stringToRosTemplate(properties.workspaceResourceWorkspaceId),
      'Quotas': ros.listMapper(rosWorkspaceResourceMaxComputeQuotasPropertyToRosTemplate)(properties.quotas),
      'WorkspaceResourceName': ros.stringToRosTemplate(properties.workspaceResourceName),
      'Spec': ros.hashMapper(ros.objectToRosTemplate)(properties.spec),
      'EnvType': ros.stringToRosTemplate(properties.envType),
    };
}
