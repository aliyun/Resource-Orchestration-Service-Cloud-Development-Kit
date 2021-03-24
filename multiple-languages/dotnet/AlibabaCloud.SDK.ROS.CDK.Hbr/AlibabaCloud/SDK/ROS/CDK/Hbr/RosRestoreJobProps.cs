using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.RosRestoreJobProps")]
    public class RosRestoreJobProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IRosRestoreJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: restoreType: Restore type
        /// </remarks>
        [JsiiProperty(name: "restoreType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RestoreType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: Snapshot ID
        /// </remarks>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SnapshotId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceClientId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Source type
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TargetClientId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TargetInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPath: Target path. For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TargetPath
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultId: Vault ID
        /// </remarks>
        [JsiiProperty(name: "vaultId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VaultId
        {
            get;
            set;
        }
    }
}
