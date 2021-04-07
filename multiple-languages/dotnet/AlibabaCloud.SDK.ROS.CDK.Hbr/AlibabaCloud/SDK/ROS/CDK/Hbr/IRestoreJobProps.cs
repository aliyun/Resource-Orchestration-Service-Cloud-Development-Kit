using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::RestoreJob`.</summary>
    [JsiiInterface(nativeType: typeof(IRestoreJobProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RestoreJobProps")]
    public interface IRestoreJobProps
    {
        /// <summary>Property restoreType: Restore type.</summary>
        [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RestoreType
        {
            get;
        }

        /// <summary>Property snapshotId: Snapshot ID.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnapshotId
        {
            get;
        }

        /// <summary>Property sourceClientId: Source client ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceClientId
        {
            get;
        }

        /// <summary>Property sourceInstanceId: Source instance ID.</summary>
        /// <remarks>
        /// It should be provided when SourceType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceInstanceId
        {
            get;
        }

        /// <summary>Property sourceType: Source type.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <summary>Property targetClientId: Target client ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=FILE.
        /// </remarks>
        [JsiiProperty(name: "targetClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetClientId
        {
            get;
        }

        /// <summary>Property targetInstanceId: Target instance ID.</summary>
        /// <remarks>
        /// It should be provided when RestoreType=ECS_FILE.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetInstanceId
        {
            get;
        }

        /// <summary>Property targetPath: Target path.</summary>
        /// <remarks>
        /// For instance, "/".
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetPath
        {
            get;
        }

        /// <summary>Property vaultId: Vault ID.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultId
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
            [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RestoreType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property snapshotId: Snapshot ID.</summary>
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceClientId: Source client ID.</summary>
            /// <remarks>
            /// It should be provided when SourceType=FILE.
            /// </remarks>
            [JsiiProperty(name: "sourceClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceClientId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceInstanceId: Source instance ID.</summary>
            /// <remarks>
            /// It should be provided when SourceType=ECS_FILE.
            /// </remarks>
            [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceType: Source type.</summary>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetClientId: Target client ID.</summary>
            /// <remarks>
            /// It should be provided when RestoreType=FILE.
            /// </remarks>
            [JsiiProperty(name: "targetClientId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetClientId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetInstanceId: Target instance ID.</summary>
            /// <remarks>
            /// It should be provided when RestoreType=ECS_FILE.
            /// </remarks>
            [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetPath: Target path.</summary>
            /// <remarks>
            /// For instance, "/".
            /// </remarks>
            [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultId: Vault ID.</summary>
            [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
