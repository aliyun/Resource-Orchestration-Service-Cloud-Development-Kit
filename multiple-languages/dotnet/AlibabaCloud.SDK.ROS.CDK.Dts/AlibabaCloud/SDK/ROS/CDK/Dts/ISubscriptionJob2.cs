using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Represents a `SubscriptionJob2`.</summary>
    [JsiiInterface(nativeType: typeof(ISubscriptionJob2), fullyQualifiedName: "@alicloud/ros-cdk-dts.ISubscriptionJob2")]
    public interface ISubscriptionJob2 : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DtsInstanceId: The ID of the DTS instance.</summary>
        [JsiiProperty(name: "attrDtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsInstanceId
        {
            get;
        }

        /// <summary>Attribute DtsJobId: The ID of the task.</summary>
        [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsJobId
        {
            get;
        }

        /// <summary>Attribute DtsJobName: The name of the DTS job.</summary>
        [JsiiProperty(name: "attrDtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsJobName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.SubscriptionJob2Props\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionJob2Props Props
        {
            get;
        }

        /// <summary>Represents a `SubscriptionJob2`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISubscriptionJob2), fullyQualifiedName: "@alicloud/ros-cdk-dts.ISubscriptionJob2")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionJob2
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DtsInstanceId: The ID of the DTS instance.</summary>
            [JsiiProperty(name: "attrDtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DtsJobId: The ID of the task.</summary>
            [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DtsJobName: The name of the DTS job.</summary>
            [JsiiProperty(name: "attrDtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsJobName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.SubscriptionJob2Props\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionJob2Props Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionJob2Props>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
