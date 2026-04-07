using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `WebLockConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IWebLockConfig), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IWebLockConfig")]
    public interface IWebLockConfig : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigId: The configuration ID of the protected directory.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute DefenceMode: The prevention mode.</summary>
        [JsiiProperty(name: "attrDefenceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefenceMode
        {
            get;
        }

        /// <summary>Attribute Dir: The directory for which you want to enable web tamper proofing.</summary>
        [JsiiProperty(name: "attrDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDir
        {
            get;
        }

        /// <summary>Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.</summary>
        [JsiiProperty(name: "attrExclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExclusiveDir
        {
            get;
        }

        /// <summary>Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.</summary>
        [JsiiProperty(name: "attrExclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExclusiveFile
        {
            get;
        }

        /// <summary>Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        /// Separate multiple types with semicolons (;).
        /// </remarks>
        [JsiiProperty(name: "attrExclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExclusiveFileType
        {
            get;
        }

        /// <summary>Attribute InclusiveFile: The file that has web tamper proofing enabled.</summary>
        [JsiiProperty(name: "attrInclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInclusiveFile
        {
            get;
        }

        /// <summary>Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.</summary>
        /// <remarks>
        /// Separate multiple types with semicolons (;).
        /// </remarks>
        [JsiiProperty(name: "attrInclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInclusiveFileType
        {
            get;
        }

        /// <summary>Attribute LocalBackupDir: The local path to the backup files of the protected directory.</summary>
        [JsiiProperty(name: "attrLocalBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLocalBackupDir
        {
            get;
        }

        /// <summary>Attribute Mode: The protection mode of web tamper proofing.</summary>
        [JsiiProperty(name: "attrMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMode
        {
            get;
        }

        /// <summary>Attribute Uuid: The UUID of the server for which you want to add a directory to protect.</summary>
        [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUuid
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.WebLockConfigProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps Props
        {
            get;
        }

        /// <summary>Represents a `WebLockConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWebLockConfig), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IWebLockConfig")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfig
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigId: The configuration ID of the protected directory.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefenceMode: The prevention mode.</summary>
            [JsiiProperty(name: "attrDefenceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefenceMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Dir: The directory for which you want to enable web tamper proofing.</summary>
            [JsiiProperty(name: "attrDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.</summary>
            [JsiiProperty(name: "attrExclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExclusiveDir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.</summary>
            [JsiiProperty(name: "attrExclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExclusiveFile
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.</summary>
            /// <remarks>
            /// Separate multiple types with semicolons (;).
            /// </remarks>
            [JsiiProperty(name: "attrExclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExclusiveFileType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InclusiveFile: The file that has web tamper proofing enabled.</summary>
            [JsiiProperty(name: "attrInclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInclusiveFile
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.</summary>
            /// <remarks>
            /// Separate multiple types with semicolons (;).
            /// </remarks>
            [JsiiProperty(name: "attrInclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInclusiveFileType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LocalBackupDir: The local path to the backup files of the protected directory.</summary>
            [JsiiProperty(name: "attrLocalBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLocalBackupDir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Mode: The protection mode of web tamper proofing.</summary>
            [JsiiProperty(name: "attrMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Uuid: The UUID of the server for which you want to add a directory to protect.</summary>
            [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.WebLockConfigProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
