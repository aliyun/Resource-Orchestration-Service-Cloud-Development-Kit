using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>Represents a `Quota`.</summary>
    [JsiiInterface(nativeType: typeof(IQuota), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.IQuota")]
    public interface IQuota : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.</summary>
        [JsiiProperty(name: "attrDefaultSubQuotaNickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultSubQuotaNickname
        {
            get;
        }

        /// <summary>Attribute Nickname: The nickname of the odps quota instance.</summary>
        [JsiiProperty(name: "attrNickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNickname
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-maxcompute.QuotaProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Maxcompute.IQuotaProps Props
        {
            get;
        }

        /// <summary>Represents a `Quota`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IQuota), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.IQuota")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IQuota
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.</summary>
            [JsiiProperty(name: "attrDefaultSubQuotaNickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultSubQuotaNickname
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Nickname: The nickname of the odps quota instance.</summary>
            [JsiiProperty(name: "attrNickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNickname
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-maxcompute.QuotaProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Maxcompute.IQuotaProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Maxcompute.IQuotaProps>()!;
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
