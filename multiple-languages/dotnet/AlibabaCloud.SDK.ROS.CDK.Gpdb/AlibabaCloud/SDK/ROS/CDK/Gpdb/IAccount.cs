using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Represents a `Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccount), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IAccount")]
    public interface IAccount : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountName: The name of the account.</summary>
        [JsiiProperty(name: "attrAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountName
        {
            get;
        }

        /// <summary>Attribute DBInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.AccountProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.IAccountProps Props
        {
            get;
        }

        /// <summary>Represents a `Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccount), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IAccount")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IAccount
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountName: The name of the account.</summary>
            [JsiiProperty(name: "attrAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.AccountProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.IAccountProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.IAccountProps>()!;
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
