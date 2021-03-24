using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
    [JsiiInterface(nativeType: typeof(IRestoreJobProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RestoreJobProps")]
    public interface IRestoreJobProps
    {
        /// <summary>Property restoreType: Restore type.</summary>
        [JsiiProperty(name: "restoreType", typeJson: "{\"primitive\":\"string\"}")]
        string RestoreType
        {
            get;
        }

        /// <summary>Property snapshotId: Snapshot ID.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}")]
        string SnapshotId
        {
            get;
        }

        /// <summary>Property sourceClientId: Source client ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"primitive\":\"string\"}")]
        string SourceClientId
        {
            get;
        }

        /// <summary>Property sourceInstanceId: Source instance ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string SourceInstanceId
        {
            get;
        }

        /// <summary>Property sourceType: Source type.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}")]
        string SourceType
        {
            get;
        }

        /// <summary>Property targetClientId: Target client ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"primitive\":\"string\"}")]
        string TargetClientId
        {
            get;
        }

        /// <summary>Property targetInstanceId: Target instance ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string TargetInstanceId
        {
            get;
        }

        /// <summary>Property targetPath: Target path.</summary>
        /// <remarks>
        /// For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"primitive\":\"string\"}")]
        string TargetPath
        {
            get;
        }

        /// <summary>Property vaultId: Vault ID.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"primitive\":\"string\"}")]
        string VaultId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRestoreJobProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RestoreJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRestoreJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property restoreType: Restore type.</summary>
            [JsiiProperty(name: "restoreType", typeJson: "{\"primitive\":\"string\"}")]
            public string RestoreType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property snapshotId: Snapshot ID.</summary>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}")]
            public string SnapshotId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sourceClientId: Source client ID.</summary>
            /// <remarks>
            /// It should be provided when SourceType=FILE.
            /// </remarks>
            [JsiiProperty(name: "sourceClientId", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceClientId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sourceInstanceId: Source instance ID.</summary>
            /// <remarks>
            /// It should be provided when SourceType=ECS_FILE.
            /// </remarks>
            [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sourceType: Source type.</summary>
            [JsiiProperty(name: "sourceType", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property targetClientId: Target client ID.</summary>
            /// <remarks>
            /// It should be provided when RestoreType=FILE.
            /// </remarks>
            [JsiiProperty(name: "targetClientId", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetClientId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property targetInstanceId: Target instance ID.</summary>
            /// <remarks>
            /// It should be provided when RestoreType=ECS_FILE.
            /// </remarks>
            [JsiiProperty(name: "targetInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property targetPath: Target path.</summary>
            /// <remarks>
            /// For instance, "/".
            /// </remarks>
            [JsiiProperty(name: "targetPath", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetPath
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vaultId: Vault ID.</summary>
            [JsiiProperty(name: "vaultId", typeJson: "{\"primitive\":\"string\"}")]
            public string VaultId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
