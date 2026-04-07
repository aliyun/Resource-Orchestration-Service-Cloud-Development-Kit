using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Represents a `BucketCnameToken`.</summary>
    [JsiiInterface(nativeType: typeof(IBucketCnameToken), fullyQualifiedName: "@alicloud/ros-cdk-oss.IBucketCnameToken")]
    public interface IBucketCnameToken : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Bucket: The name of the bucket.</summary>
        [JsiiProperty(name: "attrBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBucket
        {
            get;
        }

        /// <summary>Attribute Domain: The custom domain.</summary>
        [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomain
        {
            get;
        }

        /// <summary>Attribute ExpireTime: Token Expiration Time.</summary>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireTime
        {
            get;
        }

        /// <summary>Attribute Token: Token used to verify domain ownership.</summary>
        [JsiiProperty(name: "attrToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrToken
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketCnameTokenProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oss.IBucketCnameTokenProps Props
        {
            get;
        }

        /// <summary>Represents a `BucketCnameToken`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBucketCnameToken), fullyQualifiedName: "@alicloud/ros-cdk-oss.IBucketCnameToken")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketCnameToken
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Bucket: The name of the bucket.</summary>
            [JsiiProperty(name: "attrBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Domain: The custom domain.</summary>
            [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireTime: Token Expiration Time.</summary>
            [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Token: Token used to verify domain ownership.</summary>
            [JsiiProperty(name: "attrToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrToken
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketCnameTokenProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oss.IBucketCnameTokenProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oss.IBucketCnameTokenProps>()!;
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
