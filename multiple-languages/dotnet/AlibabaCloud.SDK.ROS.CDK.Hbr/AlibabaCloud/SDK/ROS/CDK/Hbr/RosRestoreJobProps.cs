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
        [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RestoreType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: Snapshot ID
        /// </remarks>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SnapshotId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceClientId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Source type
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetClientId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPath: Target path. For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TargetPath
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultId: Vault ID
        /// </remarks>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VaultId
        {
            get;
            set;
        }
    }
}
