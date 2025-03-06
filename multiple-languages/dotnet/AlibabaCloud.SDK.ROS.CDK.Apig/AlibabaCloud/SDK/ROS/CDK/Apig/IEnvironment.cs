using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Represents a `Environment`.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-apig.IEnvironment")]
    public interface IEnvironment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: Description of the environment.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EnvironmentId: The ID of the environment.</summary>
        [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentId
        {
            get;
        }

        /// <summary>Attribute EnvironmentName: The name of the resource.</summary>
        [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentName
        {
            get;
        }

        /// <summary>Attribute GatewayId: The ID of the Gateway.</summary>
        [JsiiProperty(name: "attrGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.EnvironmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.IEnvironmentProps Props
        {
            get;
        }

        /// <summary>Represents a `Environment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-apig.IEnvironment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IEnvironment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: Description of the environment.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentId: The ID of the environment.</summary>
            [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentName: The name of the resource.</summary>
            [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GatewayId: The ID of the Gateway.</summary>
            [JsiiProperty(name: "attrGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.EnvironmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.IEnvironmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.IEnvironmentProps>()!;
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
