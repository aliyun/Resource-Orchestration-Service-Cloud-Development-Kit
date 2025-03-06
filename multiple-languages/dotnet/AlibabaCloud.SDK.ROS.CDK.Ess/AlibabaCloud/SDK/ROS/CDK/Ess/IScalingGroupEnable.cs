using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Represents a `ScalingGroupEnable`.</summary>
    [JsiiInterface(nativeType: typeof(IScalingGroupEnable), fullyQualifiedName: "@alicloud/ros-cdk-ess.IScalingGroupEnable")]
    public interface IScalingGroupEnable : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute LifecycleState: The scaling group status.</summary>
        [JsiiProperty(name: "attrLifecycleState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLifecycleState
        {
            get;
        }

        /// <summary>Attribute ScalingGroupId: The scaling group id.</summary>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingGroupId
        {
            get;
        }

        /// <summary>Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.</summary>
        [JsiiProperty(name: "attrScalingInstanceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingInstanceDetails
        {
            get;
        }

        /// <summary>Attribute ScalingInstances: The auto created scaling instances.</summary>
        [JsiiProperty(name: "attrScalingInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingInstances
        {
            get;
        }

        /// <summary>Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteErrorInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleArisExecuteErrorInfo
        {
            get;
        }

        /// <summary>Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesAdded", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleArisExecuteResultInstancesAdded
        {
            get;
        }

        /// <summary>Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesRemoved", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleArisExecuteResultInstancesRemoved
        {
            get;
        }

        /// <summary>Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultNumberOfAddedInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleArisExecuteResultNumberOfAddedInstances
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.ScalingGroupEnableProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps Props
        {
            get;
        }

        /// <summary>Represents a `ScalingGroupEnable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScalingGroupEnable), fullyQualifiedName: "@alicloud/ros-cdk-ess.IScalingGroupEnable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute LifecycleState: The scaling group status.</summary>
            [JsiiProperty(name: "attrLifecycleState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLifecycleState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingGroupId: The scaling group id.</summary>
            [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.</summary>
            [JsiiProperty(name: "attrScalingInstanceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingInstanceDetails
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingInstances: The auto created scaling instances.</summary>
            [JsiiProperty(name: "attrScalingInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.</summary>
            [JsiiProperty(name: "attrScalingRuleArisExecuteErrorInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleArisExecuteErrorInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.</summary>
            [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesAdded", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleArisExecuteResultInstancesAdded
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.</summary>
            [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesRemoved", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleArisExecuteResultInstancesRemoved
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.</summary>
            [JsiiProperty(name: "attrScalingRuleArisExecuteResultNumberOfAddedInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleArisExecuteResultNumberOfAddedInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.ScalingGroupEnableProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps>()!;
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
