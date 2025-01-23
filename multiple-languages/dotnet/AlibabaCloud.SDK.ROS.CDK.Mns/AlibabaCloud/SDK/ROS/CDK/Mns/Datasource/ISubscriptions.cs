using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Represents a `Subscriptions`.</summary>
    [JsiiInterface(nativeType: typeof(ISubscriptions), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.ISubscriptions")]
    public interface ISubscriptions : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute SubscriptionIds: The list of subscription names.</summary>
        [JsiiProperty(name: "attrSubscriptionIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptionIds
        {
            get;
        }

        /// <summary>Attribute Subscriptions: The list of subscriptions.</summary>
        [JsiiProperty(name: "attrSubscriptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptions
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.SubscriptionsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionsProps Props
        {
            get;
        }

        /// <summary>Represents a `Subscriptions`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISubscriptions), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.ISubscriptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute SubscriptionIds: The list of subscription names.</summary>
            [JsiiProperty(name: "attrSubscriptionIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Subscriptions: The list of subscriptions.</summary>
            [JsiiProperty(name: "attrSubscriptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptions
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.SubscriptionsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionsProps>()!;
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
