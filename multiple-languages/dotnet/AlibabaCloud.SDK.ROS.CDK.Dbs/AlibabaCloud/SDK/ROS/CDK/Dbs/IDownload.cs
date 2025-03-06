using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>Represents a `Download`.</summary>
    [JsiiInterface(nativeType: typeof(IDownload), fullyQualifiedName: "@alicloud/ros-cdk-dbs.IDownload")]
    public interface IDownload : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BakSetId: The ID of the backup set.</summary>
        [JsiiProperty(name: "attrBakSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBakSetId
        {
            get;
        }

        /// <summary>Attribute DownloadAddressInfo: The download address information.</summary>
        [JsiiProperty(name: "attrDownloadAddressInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDownloadAddressInfo
        {
            get;
        }

        /// <summary>Attribute InstanceName: The ID of the instance.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute TaskId: The ID of the download task.</summary>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.DownloadProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dbs.IDownloadProps Props
        {
            get;
        }

        /// <summary>Represents a `Download`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDownload), fullyQualifiedName: "@alicloud/ros-cdk-dbs.IDownload")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.IDownload
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BakSetId: The ID of the backup set.</summary>
            [JsiiProperty(name: "attrBakSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBakSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DownloadAddressInfo: The download address information.</summary>
            [JsiiProperty(name: "attrDownloadAddressInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDownloadAddressInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The ID of the instance.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskId: The ID of the download task.</summary>
            [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dbs.DownloadProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dbs.IDownloadProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dbs.IDownloadProps>()!;
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
