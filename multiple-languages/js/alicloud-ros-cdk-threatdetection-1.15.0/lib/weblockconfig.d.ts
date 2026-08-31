import * as ros from '@alicloud/ros-cdk-core';
import { RosWebLockConfig } from './threatdetection.generated';
export { RosWebLockConfig as WebLockConfigProperty };
/**
 * Properties for defining a `WebLockConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
export interface WebLockConfigProps {
    /**
     * Property defenceMode: The prevention mode. Valid values:
     * *   **block**: Interception Mode
     * *   **audit**: Alert Mode.
     */
    readonly defenceMode: string | ros.IResolvable;
    /**
     * Property dir: The directory for which you want to enable web tamper proofing.
     */
    readonly dir: string | ros.IResolvable;
    /**
     * Property localBackupDir: The local path to the backup files of the protected directory.\
     * The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
     * *   Linux server: \/usr\/local\/aegis\/bak
     * *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
     */
    readonly localBackupDir: string | ros.IResolvable;
    /**
     * Property uuid: The UUID of the server for which you want to add a directory to protect.
     * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
     */
    readonly uuid: string | ros.IResolvable;
    /**
     * Property exclusiveDir: The directory for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveDir?: string | ros.IResolvable;
    /**
     * Property exclusiveFile: The file for which you want to disable web tamper proofing.
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveFile?: string | ros.IResolvable;
    /**
     * Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **blacklist**, you must specify this parameter.
     */
    readonly exclusiveFileType?: string | ros.IResolvable;
    /**
     * Property inclusiveFile: The file that has web tamper proofing enabled.
     * > If the value of **Mode** is **whitelist**, this parameter is returned.
     */
    readonly inclusiveFile?: string | ros.IResolvable;
    /**
     * Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
     * *   php
     * *   jsp
     * *   asp
     * *   aspx
     * *   js
     * *   cgi
     * *   html
     * *   htm
     * *   xml
     * *   shtml
     * *   shtm
     * *   jpg
     * *   gif
     * *   png
     * > If you set **Mode** to **whitelist**, you must specify this parameter.
     */
    readonly inclusiveFileType?: string | ros.IResolvable;
    /**
     * Property mode: The protection mode of web tamper proofing. Valid values:
     * *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
     * *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
     */
    readonly mode?: string | ros.IResolvable;
}
/**
 * Represents a `WebLockConfig`.
 */
export interface IWebLockConfig extends ros.IResource {
    readonly props: WebLockConfigProps;
    /**
     * Attribute ConfigId: The configuration ID of the protected directory.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute DefenceMode: The prevention mode.
     */
    readonly attrDefenceMode: ros.IResolvable | string;
    /**
     * Attribute Dir: The directory for which you want to enable web tamper proofing.
     */
    readonly attrDir: ros.IResolvable | string;
    /**
     * Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
     */
    readonly attrExclusiveDir: ros.IResolvable | string;
    /**
     * Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
     */
    readonly attrExclusiveFile: ros.IResolvable | string;
    /**
     * Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;).
     */
    readonly attrExclusiveFileType: ros.IResolvable | string;
    /**
     * Attribute InclusiveFile: The file that has web tamper proofing enabled.
     */
    readonly attrInclusiveFile: ros.IResolvable | string;
    /**
     * Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;).
     */
    readonly attrInclusiveFileType: ros.IResolvable | string;
    /**
     * Attribute LocalBackupDir: The local path to the backup files of the protected directory.
     */
    readonly attrLocalBackupDir: ros.IResolvable | string;
    /**
     * Attribute Mode: The protection mode of web tamper proofing.
     */
    readonly attrMode: ros.IResolvable | string;
    /**
     * Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
     */
    readonly attrUuid: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::WebLockConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWebLockConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
export declare class WebLockConfig extends ros.Resource implements IWebLockConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WebLockConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigId: The configuration ID of the protected directory.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute DefenceMode: The prevention mode.
     */
    readonly attrDefenceMode: ros.IResolvable | string;
    /**
     * Attribute Dir: The directory for which you want to enable web tamper proofing.
     */
    readonly attrDir: ros.IResolvable | string;
    /**
     * Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
     */
    readonly attrExclusiveDir: ros.IResolvable | string;
    /**
     * Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
     */
    readonly attrExclusiveFile: ros.IResolvable | string;
    /**
     * Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;).
     */
    readonly attrExclusiveFileType: ros.IResolvable | string;
    /**
     * Attribute InclusiveFile: The file that has web tamper proofing enabled.
     */
    readonly attrInclusiveFile: ros.IResolvable | string;
    /**
     * Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;).
     */
    readonly attrInclusiveFileType: ros.IResolvable | string;
    /**
     * Attribute LocalBackupDir: The local path to the backup files of the protected directory.
     */
    readonly attrLocalBackupDir: ros.IResolvable | string;
    /**
     * Attribute Mode: The protection mode of web tamper proofing.
     */
    readonly attrMode: ros.IResolvable | string;
    /**
     * Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
     */
    readonly attrUuid: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WebLockConfigProps, enableResourcePropertyConstraint?: boolean);
}
