using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `BaselineStrategy`.</summary>
    [JsiiInterface(nativeType: typeof(IBaselineStrategy), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IBaselineStrategy")]
    public interface IBaselineStrategy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BaselineStrategyId: The ID of the baseline check policy.</summary>
        [JsiiProperty(name: "attrBaselineStrategyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBaselineStrategyId
        {
            get;
        }

        /// <summary>Attribute BaselineStrategyName: The new name of the baseline check policy.</summary>
        [JsiiProperty(name: "attrBaselineStrategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBaselineStrategyName
        {
            get;
        }

        /// <summary>Attribute CustomType: The type of the baseline check policy.</summary>
        [JsiiProperty(name: "attrCustomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomType
        {
            get;
        }

        /// <summary>Attribute CycleDays: The new interval of the baseline check.</summary>
        [JsiiProperty(name: "attrCycleDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCycleDays
        {
            get;
        }

        /// <summary>Attribute EndTime: The time when the baseline check based on the baseline check policy ends.</summary>
        /// <remarks>
        /// Specify the time in the hh:mm:ss format.
        /// </remarks>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTime
        {
            get;
        }

        /// <summary>Attribute RiskSubTypeName: The subtype of the baselines.</summary>
        [JsiiProperty(name: "attrRiskSubTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRiskSubTypeName
        {
            get;
        }

        /// <summary>Attribute StartTime: The time when the baseline check based on the baseline check policy starts.</summary>
        /// <remarks>
        /// Specify the time in the hh:mm:ss format.
        /// </remarks>
        [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStartTime
        {
            get;
        }

        /// <summary>Attribute TargetType: The method that is used to apply the baseline check policy.</summary>
        [JsiiProperty(name: "attrTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.BaselineStrategyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IBaselineStrategyProps Props
        {
            get;
        }

        /// <summary>Represents a `BaselineStrategy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBaselineStrategy), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IBaselineStrategy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IBaselineStrategy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BaselineStrategyId: The ID of the baseline check policy.</summary>
            [JsiiProperty(name: "attrBaselineStrategyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBaselineStrategyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BaselineStrategyName: The new name of the baseline check policy.</summary>
            [JsiiProperty(name: "attrBaselineStrategyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBaselineStrategyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CustomType: The type of the baseline check policy.</summary>
            [JsiiProperty(name: "attrCustomType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CycleDays: The new interval of the baseline check.</summary>
            [JsiiProperty(name: "attrCycleDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCycleDays
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndTime: The time when the baseline check based on the baseline check policy ends.</summary>
            /// <remarks>
            /// Specify the time in the hh:mm:ss format.
            /// </remarks>
            [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RiskSubTypeName: The subtype of the baselines.</summary>
            [JsiiProperty(name: "attrRiskSubTypeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRiskSubTypeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StartTime: The time when the baseline check based on the baseline check policy starts.</summary>
            /// <remarks>
            /// Specify the time in the hh:mm:ss format.
            /// </remarks>
            [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetType: The method that is used to apply the baseline check policy.</summary>
            [JsiiProperty(name: "attrTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.BaselineStrategyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IBaselineStrategyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IBaselineStrategyProps>()!;
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
