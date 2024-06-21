import * as ros from '@alicloud/ros-cdk-core';
import { RosOssExport } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOssExport as OssExportProperty };

/**
 * Properties for defining a `OssExport`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
 */
export interface OssExportProps {

    /**
     * Property configuration: The configuration of the export job.
     */
    readonly configuration: RosOssExport.ConfigurationProperty | ros.IResolvable;

    /**
     * Property displayName: The display name of the export job. It must be 4 to 100 characters in length.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
     */
    readonly exportName: string | ros.IResolvable;

    /**
     * Property projectName: The project name of SLS.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property description: The description of the export job. It could be 0 to 256 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::OssExport`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOssExport`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
 */
export class OssExport extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: OssExportProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ExportName: The name of the export job.
     */
    public readonly attrExportName: ros.IResolvable;

    /**
     * Attribute ProjectName: The project name of SLS.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OssExportProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOssExport = new RosOssExport(this, id,  {
            description: props.description,
            configuration: props.configuration,
            projectName: props.projectName,
            displayName: props.displayName,
            exportName: props.exportName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOssExport;
        this.attrExportName = rosOssExport.attrExportName;
        this.attrProjectName = rosOssExport.attrProjectName;
    }
}
