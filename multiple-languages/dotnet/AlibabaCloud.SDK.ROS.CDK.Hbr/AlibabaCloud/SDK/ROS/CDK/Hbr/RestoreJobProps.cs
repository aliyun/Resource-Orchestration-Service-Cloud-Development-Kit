using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.RestoreJobProps")]
    public class RestoreJobProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IRestoreJobProps
    {
        /// <summary>Property restoreType: Restore type.</summary>
        [JsiiProperty(name: "restoreType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RestoreType
        {
            get;
            set;
        }

        /// <summary>Property snapshotId: Snapshot ID.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SnapshotId
        {
            get;
            set;
        }

        /// <summary>Property sourceClientId: Source client ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceClientId
        {
            get;
            set;
        }

        /// <summary>Property sourceInstanceId: Source instance ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceInstanceId
        {
            get;
            set;
        }

        /// <summary>Property sourceType: Source type.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SourceType
        {
            get;
            set;
        }

        /// <summary>Property targetClientId: Target client ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TargetClientId
        {
            get;
            set;
        }

        /// <summary>Property targetInstanceId: Target instance ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TargetInstanceId
        {
            get;
            set;
        }

        /// <summary>Property targetPath: Target path.</summary>
        /// <remarks>
        /// For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TargetPath
        {
            get;
            set;
        }

        /// <summary>Property vaultId: Vault ID.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VaultId
        {
            get;
            set;
        }
    }
}
