using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRestoreJobProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosRestoreJobProps")]
    public interface IRosRestoreJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: restoreType: Restore type
        /// </remarks>
        [JsiiProperty(name: "restoreType", typeJson: "{\"primitive\":\"string\"}")]
        string RestoreType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: Snapshot ID
        /// </remarks>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}")]
        string SnapshotId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"primitive\":\"string\"}")]
        string SourceClientId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string SourceInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Source type
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}")]
        string SourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"primitive\":\"string\"}")]
        string TargetClientId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string TargetInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPath: Target path. For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"primitive\":\"string\"}")]
        string TargetPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultId: Vault ID
        /// </remarks>
        [JsiiProperty(name: "vaultId", typeJson: "{\"primitive\":\"string\"}")]
        string VaultId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRestoreJobProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosRestoreJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosRestoreJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreType: Restore type
            /// </remarks>
            [JsiiProperty(name: "restoreType", typeJson: "{\"primitive\":\"string\"}")]
            public string RestoreType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: snapshotId: Snapshot ID
            /// </remarks>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}")]
            public string SnapshotId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
            /// </remarks>
            [JsiiProperty(name: "sourceClientId", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceClientId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
            /// </remarks>
            [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: Source type
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
            /// </remarks>
            [JsiiProperty(name: "targetClientId", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetClientId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
            /// </remarks>
            [JsiiProperty(name: "targetInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPath: Target path. For instance, "/".
            /// </remarks>
            [JsiiProperty(name: "targetPath", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetPath
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vaultId: Vault ID
            /// </remarks>
            [JsiiProperty(name: "vaultId", typeJson: "{\"primitive\":\"string\"}")]
            public string VaultId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
