using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Represents a `OssExternalStore`.</summary>
    [JsiiInterface(nativeType: typeof(IOssExternalStore), fullyQualifiedName: "@alicloud/ros-cdk-sls.IOssExternalStore")]
    public interface IOssExternalStore : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ExternalStoreName: The name of the external store.</summary>
        [JsiiProperty(name: "attrExternalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExternalStoreName
        {
            get;
        }

        /// <summary>Attribute Project: The name of the project to which the external store belongs.</summary>
        [JsiiProperty(name: "attrProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProject
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sls.OssExternalStoreProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Sls.IOssExternalStoreProps Props
        {
            get;
        }

        /// <summary>Represents a `OssExternalStore`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOssExternalStore), fullyQualifiedName: "@alicloud/ros-cdk-sls.IOssExternalStore")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IOssExternalStore
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ExternalStoreName: The name of the external store.</summary>
            [JsiiProperty(name: "attrExternalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExternalStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Project: The name of the project to which the external store belongs.</summary>
            [JsiiProperty(name: "attrProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProject
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sls.OssExternalStoreProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Sls.IOssExternalStoreProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sls.IOssExternalStoreProps>()!;
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
