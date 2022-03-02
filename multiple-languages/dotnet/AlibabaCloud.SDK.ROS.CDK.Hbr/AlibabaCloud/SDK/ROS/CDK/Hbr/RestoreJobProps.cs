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
        [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RestoreType
        {
            get;
            set;
        }

        /// <summary>Property snapshotId: Snapshot ID.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SnapshotId
        {
            get;
            set;
        }

        /// <summary>Property sourceClientId: Source client ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceClientId
        {
            get;
            set;
        }

        /// <summary>Property sourceInstanceId: Source instance ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceInstanceId
        {
            get;
            set;
        }

        /// <summary>Property sourceType: Source type.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceType
        {
            get;
            set;
        }

        /// <summary>Property targetClientId: Target client ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetClientId
        {
            get;
            set;
        }

        /// <summary>Property targetInstanceId: Target instance ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetInstanceId
        {
            get;
            set;
        }

        /// <summary>Property targetPath: Target path.</summary>
        /// <remarks>
        /// For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetPath
        {
            get;
            set;
        }

        /// <summary>Property vaultId: Vault ID.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VaultId
        {
            get;
            set;
        }
    }
}
