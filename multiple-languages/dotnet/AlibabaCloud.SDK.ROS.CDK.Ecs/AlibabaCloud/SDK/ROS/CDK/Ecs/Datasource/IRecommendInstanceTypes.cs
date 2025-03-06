using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `RecommendInstanceTypes`.</summary>
    [JsiiInterface(nativeType: typeof(IRecommendInstanceTypes), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IRecommendInstanceTypes")]
    public interface IRecommendInstanceTypes : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceTypeIds: The list of instance type ids.</summary>
        /// <remarks>
        /// Note that instance type ids are not unique.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceTypeIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceTypeIds
        {
            get;
        }

        /// <summary>Attribute InstanceTypes: The list of instance types, including information such as cores and memory.</summary>
        [JsiiProperty(name: "attrInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceTypes
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRecommendInstanceTypesProps Props
        {
            get;
        }

        /// <summary>Represents a `RecommendInstanceTypes`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRecommendInstanceTypes), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IRecommendInstanceTypes")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRecommendInstanceTypes
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceTypeIds: The list of instance type ids.</summary>
            /// <remarks>
            /// Note that instance type ids are not unique.
            /// </remarks>
            [JsiiProperty(name: "attrInstanceTypeIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceTypeIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceTypes: The list of instance types, including information such as cores and memory.</summary>
            [JsiiProperty(name: "attrInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRecommendInstanceTypesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRecommendInstanceTypesProps>()!;
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
