using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss.Datasource
{
    /// <summary>Represents a `Bucket`.</summary>
    [JsiiInterface(nativeType: typeof(IBucket), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.IBucket")]
    public interface IBucket : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the Bucket.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ExtranetEndpoint: The domain name of the Bucket.</summary>
        [JsiiProperty(name: "attrExtranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExtranetEndpoint
        {
            get;
        }

        /// <summary>Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.</summary>
        [JsiiProperty(name: "attrIntranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetEndpoint
        {
            get;
        }

        /// <summary>Attribute Location: The region where the Bucket is located.</summary>
        [JsiiProperty(name: "attrLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLocation
        {
            get;
        }

        /// <summary>Attribute Name: Bucket name.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        /// <summary>Attribute Owner: Container for storing Bucket owner information.</summary>
        [JsiiProperty(name: "attrOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOwner
        {
            get;
        }

        /// <summary>Attribute StorageClass: The storage type of the Bucket.</summary>
        [JsiiProperty(name: "attrStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageClass
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.datasource.BucketProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IBucketProps Props
        {
            get;
        }

        /// <summary>Represents a `Bucket`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBucket), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.IBucket")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IBucket
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the Bucket.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExtranetEndpoint: The domain name of the Bucket.</summary>
            [JsiiProperty(name: "attrExtranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExtranetEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.</summary>
            [JsiiProperty(name: "attrIntranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Location: The region where the Bucket is located.</summary>
            [JsiiProperty(name: "attrLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLocation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: Bucket name.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Owner: Container for storing Bucket owner information.</summary>
            [JsiiProperty(name: "attrOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOwner
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageClass: The storage type of the Bucket.</summary>
            [JsiiProperty(name: "attrStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageClass
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.datasource.BucketProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IBucketProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IBucketProps>()!;
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
