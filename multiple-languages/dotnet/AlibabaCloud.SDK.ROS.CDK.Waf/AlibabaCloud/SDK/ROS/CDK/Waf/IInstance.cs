using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-waf.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EndDate: Due date of the instance.</summary>
        [JsiiProperty(name: "attrEndDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndDate
        {
            get;
        }

        /// <summary>Attribute InDebt: Instance is overdue.</summary>
        [JsiiProperty(name: "attrInDebt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInDebt
        {
            get;
        }

        /// <summary>Attribute InstanceId: Instance ID.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute RemainDay: Number of available days for WAF Trial version.</summary>
        [JsiiProperty(name: "attrRemainDay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemainDay
        {
            get;
        }

        /// <summary>Attribute SubscriptionType: Subscription type of the instance.</summary>
        [JsiiProperty(name: "attrSubscriptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptionType
        {
            get;
        }

        /// <summary>Attribute Trial: Trial version.</summary>
        [JsiiProperty(name: "attrTrial", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrial
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-waf.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-waf.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EndDate: Due date of the instance.</summary>
            [JsiiProperty(name: "attrEndDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InDebt: Instance is overdue.</summary>
            [JsiiProperty(name: "attrInDebt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInDebt
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: Instance ID.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemainDay: Number of available days for WAF Trial version.</summary>
            [JsiiProperty(name: "attrRemainDay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemainDay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SubscriptionType: Subscription type of the instance.</summary>
            [JsiiProperty(name: "attrSubscriptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Trial: Trial version.</summary>
            [JsiiProperty(name: "attrTrial", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrial
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-waf.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps>()!;
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
